// Model tiers used across the product (see docs/BLUEPRINT.md §7).
// "fast" is for classification, search parsing and screening; "standard" for
// the job assistant and writing help. Swap models here, nowhere else.
export const AI_MODELS = {
  fast: {
    id: "claude-haiku-5-5",
    effort: "low",
    // USD per million tokens (prompts under 100K tokens).
    pricing: { input: 0.1, output: 0.5 },
    serverFallback: false,
  },
  standard: {
    id: "claude-sonnet-5-5",
    effort: "medium",
    pricing: { input: 2, output: 10 },
    serverFallback: true,
  },
} as const;

export type AiTier = keyof typeof AI_MODELS;

export type TokenUsage = {
  input_tokens: number;
  output_tokens: number;
  cache_creation_input_tokens?: number | null;
  cache_read_input_tokens?: number | null;
};

// Cost in millionths of a dollar. Price per million tokens equals micro-dollars
// per token, so no scaling is needed. Cache writes bill at 1.25x, reads at 0.1x.
export function costUsdMicros(tier: AiTier, usage: TokenUsage): number {
  const { input, output } = AI_MODELS[tier].pricing;
  const cacheWrite = usage.cache_creation_input_tokens ?? 0;
  const cacheRead = usage.cache_read_input_tokens ?? 0;
  return Math.round(
    usage.input_tokens * input + cacheWrite * input * 1.25 + cacheRead * input * 0.1 + usage.output_tokens * output,
  );
}
