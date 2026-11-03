import { describe, expect, it } from "vitest";
import { safeNextPath, signUpSchema } from "./schemas";

describe("safeNextPath", () => {
  it("keeps same-site paths", () => {
    expect(safeNextPath("/dashboard/jobs?tab=open")).toBe("/dashboard/jobs?tab=open");
  });

  it.each(["https://evil.example", "//evil.example", "/\\evil.example", "dashboard", null, 42])(
    "rejects %s",
    (value) => {
      expect(safeNextPath(value)).toBe("/dashboard");
    },
  );
});

describe("signUpSchema", () => {
  const valid = { displayName: "Sam Taylor", email: "sam@example.com", password: "hammer2026" };

  it("accepts a valid sign-up", () => {
    expect(signUpSchema.safeParse(valid).success).toBe(true);
  });

  it("requires letters and digits in the password", () => {
    expect(signUpSchema.safeParse({ ...valid, password: "abcdefgh" }).success).toBe(false);
    expect(signUpSchema.safeParse({ ...valid, password: "12345678" }).success).toBe(false);
  });

  it("trims and requires a name", () => {
    expect(signUpSchema.safeParse({ ...valid, displayName: "   " }).success).toBe(false);
  });
});
