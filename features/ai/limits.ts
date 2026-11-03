// Per-user hourly limits for each AI feature. Features added in later
// milestones register their limit here.
export const AI_FEATURE_LIMITS = {
  "system.health-check": 5,
  "profile.writing-help": 20,
  "search.parse-query": 60,
  "jobs.assistant": 20,
  "quotes.drafting": 20,
  "moderation.screen": 500,
} as const satisfies Record<string, number>;

export type AiFeature = keyof typeof AI_FEATURE_LIMITS;

export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

export function isOverLimit(feature: AiFeature, requestsInWindow: number): boolean {
  return requestsInWindow >= AI_FEATURE_LIMITS[feature];
}
