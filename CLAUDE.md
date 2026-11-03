# Project guide

UK services marketplace (trades, home services, hair & beauty, van hire, creative & digital work).
The product plan is `docs/BLUEPRINT.md`; decisions are in `docs/decisions/`. The product name is a
placeholder — it lives only in `lib/config/brand.ts`.

@AGENTS.md

## Commands

Node 24 (`nvm use`). Docker must be running for the local database.

- `npm run db:start` — start local Supabase (API :54321, Studio :54323, Mailpit :54324)
- `npm run db:reset` — rebuild the local database from `supabase/migrations`
- `npm run db:test` — run pgTAP database tests (RLS) in `supabase/tests`
- `npm run db:types` — regenerate `lib/supabase/database.types.ts` after any migration
- `npm run dev` — app on http://localhost:3000
- `npm run lint && npm run typecheck && npm test && npm run build` — what CI runs

## Architecture rules

- **Cache Components is on.** Anything that reads cookies/session (`getCurrentUser`, the server
  Supabase client) must render inside `<Suspense>`, or the build fails. Keep session reads out of
  layout top levels.
- **Code by domain** in `features/<domain>/`: `schemas.ts` (Zod), `actions.ts` (Server Actions),
  `queries.ts`, `components/`. Route files in `app/` stay thin.
- **Auth:** `lib/auth.ts#getCurrentUser` is the only way to get the signed-in user. Every Server
  Action and Route Handler re-checks the user itself; `proxy.ts` is only an optimistic redirect.
- **Database:** schema changes only via new files in `supabase/migrations/` (never edit an applied
  one). Every table has RLS enabled with explicit policies. Money in integer pence.
- **Supabase clients:** `lib/supabase/server.ts` (user, respects RLS), `client.ts` (browser),
  `admin.ts` (secret key, bypasses RLS — trusted server code only).
- **AI:** all model calls go through `features/ai/run.ts#runStructured`. Register a per-user limit in
  `features/ai/limits.ts`, version prompts, and always keep a manual fallback when AI is unavailable.
  Model choices live in `features/ai/models.ts`.
- **Money never moves from the client** (Stripe arrives in M4: server-only, webhook-driven, ledgered).

## Conventions

- UI from `components/ui` (shadcn/ui, Radix). Add components with `npx shadcn@latest add <name>`.
- UK English in all user-facing copy. Accessible forms: labels, `aria-invalid`, error text.
- Tests: Vitest, colocated as `*.test.ts`. Pure logic gets unit tests.
- Commit on short-lived branches; CI must pass before merging to `main`.
