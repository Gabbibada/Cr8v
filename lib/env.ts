import { z } from "zod";

// Public values are inlined into the browser bundle by Next.js, so they must be
// read with literal `process.env.NEXT_PUBLIC_*` accesses.
const publicSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

// On Vercel the site URL comes from the deployment itself: branch previews use their branch URL
// and production uses the production domain, so auth emails link back to the right site.
const vercelHost =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
    : process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : undefined),
});
