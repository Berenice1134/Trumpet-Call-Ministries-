create table if not exists public.help_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  message text not null,
  source text not null default 'website_help_request_form',
  language text not null default 'es',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.help_requests enable row level security;

drop policy if exists "Allow public website inserts" on public.help_requests;
drop policy if exists "Enable website help request inserts" on public.help_requests;

create policy "Enable website help request inserts"
on public.help_requests
for insert
to public
with check (true);

create index if not exists help_requests_created_at_idx
on public.help_requests (created_at desc);
