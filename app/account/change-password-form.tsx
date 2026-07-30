"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ChangePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (password.length < 8) {
      setMessage({ type: "error", text: "Şifre en az 8 karakter olmalı." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Şifreler birbiriyle eşleşmiyor." });
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setMessage({ type: "error", text: error.message });
      return;
    }

    setPassword("");
    setConfirmPassword("");
    setMessage({ type: "success", text: "Şifren güncellendi." });
  }

  return (
    <form onSubmit={handleSubmit}>
      {message ? (
        <p
          style={{
            marginBottom: 16,
            padding: "10px 12px",
            borderRadius: 10,
            fontSize: 13,
            color: message.type === "success" ? "#237a5a" : "#b64545",
            background: message.type === "success" ? "#e3f3ec" : "#fbe8e6",
          }}
        >
          {message.text}
        </p>
      ) : null}
      <label style={{ display: "block", marginBottom: 14 }}>
        <span style={{ display: "block", marginBottom: 6, fontSize: 12, fontWeight: 600 }}>
          Yeni şifre
        </span>
        <input
          className="control"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label style={{ display: "block", marginBottom: 16 }}>
        <span style={{ display: "block", marginBottom: 6, fontSize: 12, fontWeight: 600 }}>
          Yeni şifre (tekrar)
        </span>
        <input
          className="control"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </label>
      <button className="button button-primary" type="submit" disabled={loading}>
        {loading ? "Güncelleniyor…" : "Şifreyi güncelle"}
      </button>
    </form>
  );
}
