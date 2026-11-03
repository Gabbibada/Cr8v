# 0001 — Foundations (M0)

Date: 2026-11-03 · Status: accepted

## Decisions

- **Next.js 16 with Cache Components on** (the default for new apps). Public marketing, category and
  profile pages prerender into a static shell, which matters for SEO; session-dependent UI streams in
  behind `<Suspense>`.
- **Supabase** for Postgres, Auth and RLS, using `@supabase/ssr` cookie sessions and `getClaims()`
  for verification. Session refresh happens in `proxy.ts` (Next 16's renamed middleware).
- **New Supabase API keys** (publishable + secret) instead of the legacy anon/service-role keys.
- **Node 24 LTS** pinned in `.nvmrc`; current Vite/Vitest/shadcn tooling no longer supports Node 20.
- **AI calls** go through one wrapper with structured outputs (Zod), per-user hourly limits and a
  usage log (`ai_requests`). Fast tier: Claude Haiku 5.5; standard tier: Claude Sonnet 5.5 with
  server-side refusal fallback. Costs are stored in micro-dollars because model pricing is in USD.
- **Profiles** are created by a database trigger on sign-up, so OAuth and email sign-ups behave the
  same. `is_admin` can't be changed by users (column-level grants).
