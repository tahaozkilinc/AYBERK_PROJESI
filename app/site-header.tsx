import Link from "next/link";

export default function SiteHeader({
  active,
  isAdmin,
  children,
}: {
  active: "admin" | "account";
  isAdmin: boolean;
  children: React.ReactNode;
}) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" href="/" aria-label="İthal Emtia Kontrol Merkezi ana görünümü">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M4 20.5h24l-3.2 5.2H9.2L4 20.5Z" fill="currentColor"></path>
              <path
                d="M10 11h13v9.5H10zM13 7h7v4h-7z"
                stroke="currentColor"
                strokeWidth="2"
              ></path>
              <path
                d="M3 28c3 1.5 5 1.5 8 0 3 1.5 5 1.5 8 0 3 1.5 5 1.5 8 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
          <span>
            İthal Emtia<small>Kontrol Merkezi</small>
          </span>
        </Link>
        <nav className="topnav" aria-label="Sayfalar">
          <Link href="/">Rapor</Link>
          {isAdmin ? (
            active === "admin" ? (
              <span aria-current="page">Kullanıcılar</span>
            ) : (
              <Link href="/admin">Kullanıcılar</Link>
            )
          ) : null}
          {active === "account" ? (
            <span aria-current="page">Hesabım</span>
          ) : (
            <Link href="/account">Hesabım</Link>
          )}
        </nav>
        <div className="topbar-actions">{children}</div>
      </div>
    </header>
  );
}
