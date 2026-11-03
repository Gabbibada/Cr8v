"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn, signInWithGoogle, signUp, type AuthFormState } from "../actions";

const ERROR_MESSAGES: Record<string, string> = {
  link: "That sign-in link is invalid or has expired. Please try again.",
  oauth: "We couldn't sign you in with Google. Please try again.",
};

const googleEnabled = process.env.NEXT_PUBLIC_AUTH_GOOGLE_ENABLED === "true";

function Field({
  id,
  label,
  error,
  ...props
}: { id: string; label: string; error?: string } & React.ComponentProps<typeof Input>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-destructive text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";
  const linkError = ERROR_MESSAGES[searchParams.get("error") ?? ""];
  const [state, formAction, pending] = useActionState<AuthFormState, FormData>(
    mode === "sign-in" ? signIn : signUp,
    {},
  );

  const isSignUp = mode === "sign-up";
  const otherHref = `${isSignUp ? "/sign-in" : "/sign-up"}${next !== "/dashboard" ? `?next=${encodeURIComponent(next)}` : ""}`;

  if (state.message) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>{state.message}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{isSignUp ? "Create your account" : "Welcome back"}</CardTitle>
        <CardDescription>
          {isSignUp ? "Hire pros or offer your services — one account does both." : "Sign in to continue."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {googleEnabled && (
          <>
            <form action={signInWithGoogle}>
              <input type="hidden" name="next" value={next} />
              <Button type="submit" variant="outline" className="w-full">
                Continue with Google
              </Button>
            </form>
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <Separator className="flex-1" /> or <Separator className="flex-1" />
            </div>
          </>
        )}
        <form action={formAction} className="grid gap-4" noValidate>
          <input type="hidden" name="next" value={next} />
          {isSignUp && (
            <Field
              id="displayName"
              label="Your name"
              autoComplete="name"
              defaultValue={state.values?.displayName}
              error={state.fieldErrors?.displayName}
              required
            />
          )}
          <Field
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            defaultValue={state.values?.email}
            error={state.fieldErrors?.email}
            required
          />
          <Field
            id="password"
            label="Password"
            type="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            error={state.fieldErrors?.password}
            required
          />
          {(state.error ?? linkError) && (
            <p role="alert" className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
              {state.error ?? linkError}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Please wait…" : isSignUp ? "Create account" : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-muted-foreground justify-center text-sm">
        {isSignUp ? "Already have an account?" : "New here?"}&nbsp;
        <Link href={otherHref} className="text-foreground font-medium underline-offset-4 hover:underline">
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </CardFooter>
    </Card>
  );
}
