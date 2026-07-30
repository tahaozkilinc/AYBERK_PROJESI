"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.querySelector<HTMLElement>(".topbar-actions"));
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  const button = (
    <button
      type="button"
      className="button"
      onClick={handleLogout}
      aria-label="Çıkış yap"
    >
      Çıkış yap
    </button>
  );

  if (!container) {
    return null;
  }

  return createPortal(button, container);
}
