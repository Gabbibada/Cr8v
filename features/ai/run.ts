import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import type { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAnthropic, isAiConfigured } from "./client";
import { AI_FEATURE_LIMITS, RATE_LIMIT_WINDOW_MS, isOverLimit, type AiFeature } from "./limits";
import { AI_MODELS, costUsdMicros, type AiTier } from "./models";

export type AiFailureReason = "not_configured" | "rate_limited" | "refused" | "invalid_output" | "error";

export type AiResult<T> = { ok: true; data: T; requestId: string } | { ok: false; reason: AiFailureReason };

type RunStructuredOptions<Schema extends z.ZodType> = {
  feature: AiFeature;
  // Bump when the prompt changes, so logged outcomes can be compared per version.
  promptVersion: string;
  tier: AiTier;
  userId: string | null;
  system: string;
  prompt: string;
  schema: Schema;
  maxTokens?: number;
};

// Runs one structured-output call: checks the rate limit, calls the model,
// validates the JSON against the schema and logs usage. Never throws — callers
// get a failure reason and fall back to the manual flow.
export async function runStructured<Schema extends z.ZodType>(
  options: RunStructuredOptions<Schema>,
): Promise<AiResult<z.infer<Schema>>> {
  if (!isAiConfigured()) return { ok: false, reason: "not_configured" };

  const db = createAdminClient();

  if (options.userId) {
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    const { count } = await db
      .from("ai_requests")
      .select("id", { count: "exact", head: true })
      .eq("user_id", options.userId)
      .eq("feature", options.feature)
      .gte("created_at", since);
    if (isOverLimit(options.feature, count ?? AI_FEATURE_LIMITS[options.feature])) {
      return { ok: false, reason: "rate_limited" };
    }
  }

  const model = AI_MODELS[options.tier];
  const startedAt = Date.now();

  const log = async (fields: { status: "success" | "error"; error?: string; usage?: Anthropic.Beta.BetaUsage }) => {
    const { data } = await db
      .from("ai_requests")
      .insert({
        user_id: options.userId,
        feature: options.feature,
        model: model.id,
        prompt_version: options.promptVersion,
        status: fields.status,
        error: fields.error ?? null,
        input_tokens: fields.usage?.input_tokens ?? 0,
        output_tokens: fields.usage?.output_tokens ?? 0,
        cost_usd_micros: fields.usage ? costUsdMicros(options.tier, fields.usage) : 0,
        latency_ms: Date.now() - startedAt,
      })
      .select("id")
      .single();
    return data?.id ?? "";
  };

  try {
    const response = await getAnthropic().beta.messages.parse({
      model: model.id,
      max_tokens: options.maxTokens ?? 4096,
      system: options.system,
      messages: [{ role: "user", content: options.prompt }],
      output_config: { effort: model.effort, format: betaZodOutputFormat(options.schema) },
      // On a policy decline, let the API retry on a suitable fallback model.
      ...(model.serverFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });

    if (response.stop_reason === "refusal") {
      await log({ status: "error", error: "refusal", usage: response.usage });
      return { ok: false, reason: "refused" };
    }

    if (response.parsed_output == null) {
      await log({ status: "error", error: `invalid_output (${response.stop_reason})`, usage: response.usage });
      return { ok: false, reason: "invalid_output" };
    }

    const requestId = await log({ status: "success", usage: response.usage });
    return { ok: true, data: response.parsed_output as z.infer<Schema>, requestId };
  } catch (error) {
    let message = "unknown error";
    if (error instanceof Anthropic.RateLimitError) message = "anthropic rate limit";
    else if (error instanceof Anthropic.APIError) message = `api error ${error.status}: ${error.message}`;
    else if (error instanceof Error) message = error.message;

    console.error(`[ai:${options.feature}]`, message);
    await log({ status: "error", error: message.slice(0, 500) });
    return { ok: false, reason: "error" };
  }
}
