import "server-only";
import { connection } from "next/server";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export type CurrentUser = {
  id: string;
  email: string | null;
  displayName: string;
  avatarUrl: string | null;
  isProvider: boolean;
  isAdmin: boolean;
};

// Data Access Layer entry point: the one place that turns the session cookie
// into a verified user. Reads cookies, so render callers inside <Suspense>.
// Deduplicated per request with React cache().
export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  // Token verification reads the clock, so this must never run during prerendering.
  await connection();
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const claims = claimsData?.claims;
  if (!claims?.sub) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name, avatar_url, is_provider, is_admin")
    .eq("id", claims.sub)
    .single();
  if (!profile) return null;

  return {
    id: claims.sub,
    email: typeof claims.email === "string" ? claims.email : null,
    displayName: profile.display_name,
    avatarUrl: profile.avatar_url,
    isProvider: profile.is_provider,
    isAdmin: profile.is_admin,
  };
});
