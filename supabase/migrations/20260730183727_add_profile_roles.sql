-- Kullanıcı rolleri: 'admin' panel üzerinden yeni kullanıcı ekleyip
-- erişim verebilir/kaldırabilir, 'user' sadece rapora giriş yapabilir.

alter table public.profiles
  add column if not exists role text not null default 'user';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'profiles_role_check'
  ) then
    alter table public.profiles
      add constraint profiles_role_check check (role in ('admin', 'user'));
  end if;
end $$;

-- İlk admin hesabı. Farklı bir e-posta ile admin atamak istersen bu satırı
-- kendi e-postanla tekrar çalıştırabilirsin.
update public.profiles
set role = 'admin'
where email = 'taha.ozkilinc@sunaryatirim.com.tr';
