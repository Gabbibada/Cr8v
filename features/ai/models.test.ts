import { describe, expect, it } from "vitest";
import { isOverLimit } from "./limits";
import { costUsdMicros } from "./models";

describe("costUsdMicros", () => {
  it("prices standard-tier tokens in micro-dollars", () => {
    // 1,000 input at $2/M + 500 output at $10/M = $0.002 + $0.005
    expect(costUsdMicros("standard", { input_tokens: 1000, output_tokens: 500 })).toBe(7000);
  });

  it("applies cache write and read multipliers", () => {
    const cost = costUsdMicros("standard", {
      input_tokens: 0,
      output_tokens: 0,
      cache_creation_input_tokens: 1000,
      cache_read_input_tokens: 1000,
    });
    expect(cost).toBe(2500 + 200);
  });
});

describe("isOverLimit", () => {
  it("blocks once the hourly limit is reached", () => {
    expect(isOverLimit("jobs.assistant", 19)).toBe(false);
    expect(isOverLimit("jobs.assistant", 20)).toBe(true);
  });
});
