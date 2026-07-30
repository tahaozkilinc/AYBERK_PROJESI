"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import SignOutButton from "./sign-out-button";

export default function TopbarActions({ isAdmin }: { isAdmin: boolean }) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.querySelector<HTMLElement>(".topbar-actions"));
  }, []);

  const content = (
    <>
      {isAdmin ? (
        <Link className="button" href="/admin">
          Kullanıcılar
        </Link>
      ) : null}
      <Link className="button" href="/account">
        Hesabım
      </Link>
      <SignOutButton />
    </>
  );

  if (!container) {
    return null;
  }

  return createPortal(content, container);
}
