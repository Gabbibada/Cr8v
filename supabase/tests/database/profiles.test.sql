-- Row Level Security tests for profiles. Run with `npm run db:test`.
begin;
create extension if not exists pgtap with schema extensions;
select plan(7);

-- Two users; the trigger creates their profiles.
insert into auth.users (id, email, raw_user_meta_data)
values
  ('11111111-1111-1111-1111-111111111111', 'alice@example.com', '{"display_name": "Alice Smith"}'),
  ('22222222-2222-2222-2222-222222222222', 'bob@example.com', '{}');

select is(
  (select display_name from public.profiles where id = '11111111-1111-1111-1111-111111111111'),
  'Alice Smith',
  'sign-up trigger uses the display name from metadata'
);
select is(
  (select display_name from public.profiles where id = '22222222-2222-2222-2222-222222222222'),
  'bob',
  'sign-up trigger falls back to the email name'
);

-- Act as Alice.
set local role authenticated;
select set_config('request.jwt.claims', '{"sub": "11111111-1111-1111-1111-111111111111", "role": "authenticated"}', true);

select is((select count(*)::int from public.profiles), 1, 'a user sees only their own profile');

select lives_ok(
  $$ update public.profiles set display_name = 'Alice S.' where id = '11111111-1111-1111-1111-111111111111' $$,
  'a user can rename themselves'
);

select throws_ok(
  $$ update public.profiles set is_admin = true where id = '11111111-1111-1111-1111-111111111111' $$,
  '42501',
  null,
  'a user cannot make themselves an admin'
);

update public.profiles set display_name = 'Hacked' where id = '22222222-2222-2222-2222-222222222222';
reset role;
select is(
  (select display_name from public.profiles where id = '22222222-2222-2222-2222-222222222222'),
  'bob',
  'a user cannot change someone else''s profile'
);

set local role authenticated;
select is((select count(*)::int from public.ai_requests), 0, 'non-admins cannot read the AI usage log');

select * from finish();
rollback;
