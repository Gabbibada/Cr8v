-- M0 foundations: user profiles and AI usage logging.

create extension if not exists postgis with schema extensions;

-- ---------------------------------------------------------------------------
-- Shared helpers
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Profiles: one row per auth user. A user can be a customer, a provider, or both.
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 80),
  avatar_url text,
  is_provider boolean not null default false,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Public-facing account details for every user.';

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Admin check used by RLS policies. SECURITY DEFINER so it can read profiles
-- without recursing through the profiles policies.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(
    (select is_admin from public.profiles where id = (select auth.uid())),
    false
  );
$$;

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
on public.profiles for select
to authenticated
using (id = (select auth.uid()) or (select public.is_admin()));

create policy "Users can update their own profile"
on public.profiles for update
to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));

-- Users may only change these columns; is_admin is set by trusted code only.
revoke update on public.profiles from authenticated, anon;
grant update (display_name, avatar_url, is_provider) on public.profiles to authenticated;

-- Create a profile whenever someone signs up (email or OAuth).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  name text;
begin
  name := coalesce(
    nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'name'), ''),
    split_part(new.email, '@', 1)
  );

  insert into public.profiles (id, display_name, avatar_url)
  values (new.id, left(name, 80), new.raw_user_meta_data ->> 'avatar_url');

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- ---------------------------------------------------------------------------
-- AI usage log: every model call, for cost tracking, rate limits and quality review.
-- Written only by server code with the secret key.
-- ---------------------------------------------------------------------------

create table public.ai_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles (id) on delete set null,
  feature text not null,
  model text not null,
  prompt_version text not null,
  status text not null check (status in ('success', 'error')),
  error text,
  input_tokens integer not null default 0,
  output_tokens integer not null default 0,
  -- Cost in millionths of a US dollar (model pricing is in USD).
  cost_usd_micros bigint not null default 0,
  latency_ms integer not null default 0,
  outcome text check (outcome in ('accepted', 'edited', 'discarded')),
  created_at timestamptz not null default now()
);

create index ai_requests_user_feature_created_idx
on public.ai_requests (user_id, feature, created_at desc);

alter table public.ai_requests enable row level security;

create policy "Admins can read AI requests"
on public.ai_requests for select
to authenticated
using ((select public.is_admin()));
