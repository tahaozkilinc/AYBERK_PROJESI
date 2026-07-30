"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      style={{
        position: "fixed",
        top: 12,
        right: 16,
        zIndex: 1000,
        padding: "7px 14px",
        border: "1px solid #c4d2d5",
        borderRadius: 999,
        background: "#ffffff",
        color: "#15313d",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 6px 16px rgba(9, 45, 59, 0.12)",
      }}
    >
      Çıkış yap
    </button>
  );
}
