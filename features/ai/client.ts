import "server-only";
import Anthropic from "@anthropic-ai/sdk";
import { serverEnv } from "@/lib/env.server";

let client: Anthropic | null = null;

export function isAiConfigured(): boolean {
  return Boolean(serverEnv.ANTHROPIC_API_KEY);
}

export function getAnthropic(): Anthropic {
  if (!serverEnv.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }
  client ??= new Anthropic({ apiKey: serverEnv.ANTHROPIC_API_KEY, timeout: 60_000 });
  return client;
}
