create table if not exists public.posts (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  content text not null,
  image_url text,
  author text not null,
  category text,
  read_time text,
  published boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "public can read published posts" on public.posts;

create policy "public can read published posts"
on public.posts
for select
to anon
using (published = true);
