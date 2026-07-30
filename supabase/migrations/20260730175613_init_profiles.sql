-- Giriş izni verilen kullanıcıların listesi.
-- Bu tabloya satır eklemek (yeni kullanıcıya erişim izni vermek) yalnızca
-- service_role ile mümkündür; genel kayıt (sign-up) burada otomatik satır
-- oluşturmaz, dolayısıyla auth.users içinde hesabı olan ama burada karşılığı
-- olmayan kimse uygulamaya giremez.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);
