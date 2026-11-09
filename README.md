# Marketplace (working name)

A UK marketplace for hiring tradespeople, creatives and local pros. See [docs/BLUEPRINT.md](docs/BLUEPRINT.md)
for the product and technical plan.

**Stack:** Next.js 16 (App Router, Cache Components) · Supabase (Postgres, Auth, RLS) · Tailwind CSS 4 +
shadcn/ui · Claude API · Vitest.

## Getting started

Requirements: Node 24 (`nvm use`), Docker Desktop running.

```bash
npm install
npm run db:start          # first run downloads the Supabase containers
cp .env.example .env.local
npx supabase status       # copy the publishable and secret keys into .env.local
npm run dev
```

Open http://localhost:3000. Emails sent locally (e.g. confirmation links) appear in Mailpit at
http://127.0.0.1:54324, and the database UI (Studio) is at http://127.0.0.1:54323.

## Scripts

| Script                                          | What it does                                |
| ----------------------------------------------- | ------------------------------------------- |
| `npm run dev`                                   | Start the app                               |
| `npm run db:reset`                              | Rebuild the local database from migrations  |
| `npm run db:types`                              | Regenerate database types after a migration |
| `npm run lint` / `typecheck` / `test` / `build` | Checks run by CI                            |

## Optional setup

- **AI features:** set `ANTHROPIC_API_KEY` in `.env.local`.
- **Google sign-in:** create OAuth credentials in Google Cloud, add them to `supabase/.env` (see
  `supabase/.env.example`), set `enabled = true` under `[auth.external.google]` in
  `supabase/config.toml`, restart Supabase, and set `NEXT_PUBLIC_AUTH_GOOGLE_ENABLED=true`.

## Hosting

- **Site:** Vercel project `cr8v` (team Cr8v), functions in Dublin (`vercel.json`). Pushes to `main`
  deploy production; every other branch gets its own preview URL.
- **Database:** Supabase project `Cr8v` (`ahhavxefacsiczjvxpxh`, eu-west-1). Apply new migrations with
  `npx supabase db push --remote` after they merge to `main`.
- **Environment variables** live in Vercel (Supabase URL, publishable and secret keys). The site URL is
  derived from the Vercel deployment, so it isn't set there.
