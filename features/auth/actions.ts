"use server";

import { redirect } from "next/navigation";
import { publicEnv } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";
import { safeNextPath, signInSchema, signUpSchema } from "./schemas";

export type AuthFormState = {
  error?: string;
  fieldErrors?: Partial<Record<"displayName" | "email" | "password", string>>;
  message?: string;
  // Echoed back so the form keeps what was typed. Never includes the password.
  values?: { displayName?: string; email?: string };
};

function keptValues(formData: FormData): AuthFormState["values"] {
  return {
    displayName: String(formData.get("displayName") ?? ""),
    email: String(formData.get("email") ?? ""),
  };
}

function firstErrors(issues: { path: PropertyKey[]; message: string }[]) {
  const fieldErrors: AuthFormState["fieldErrors"] = {};
  for (const issue of issues) {
    const key = issue.path[0] as keyof NonNullable<AuthFormState["fieldErrors"]>;
    fieldErrors[key] ??= issue.message;
  }
  return fieldErrors;
}

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const values = keptValues(formData);
  const parsed = signInSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { fieldErrors: firstErrors(parsed.error.issues), values };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) {
    return { error: "That email and password don't match. Check them and try again.", values };
  }

  redirect(safeNextPath(formData.get("next")));
}

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const values = keptValues(formData);
  const parsed = signUpSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { fieldErrors: firstErrors(parsed.error.issues), values };

  const { displayName, email, password } = parsed.data;
  const next = safeNextPath(formData.get("next"));
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: displayName },
      emailRedirectTo: `${publicEnv.NEXT_PUBLIC_SITE_URL}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error) {
    return {
      error: error.code === "user_already_exists" ? "An account with this email already exists." : error.message,
      values,
    };
  }

  // With email confirmation on, there's no session until the link is clicked.
  if (!data.session) {
    return { message: `We've sent a link to ${email}. Click it to finish setting up your account.` };
  }

  redirect(next);
}

export async function signInWithGoogle(formData: FormData) {
  const next = safeNextPath(formData.get("next"));
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${publicEnv.NEXT_PUBLIC_SITE_URL}/auth/callback?next=${encodeURIComponent(next)}` },
  });

  if (error || !data.url) redirect("/sign-in?error=oauth");
  redirect(data.url);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
