"use client";

import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import styles from "./admin.module.css";
import {
  createUserAction,
  resetPasswordAction,
  revokeAccessAction,
  setRoleAction,
} from "./actions";

export type AdminUserRow = {
  id: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
};

type Banner =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

export default function AdminPanel({
  initialUsers,
  currentUserId,
}: {
  initialUsers: AdminUserRow[];
  currentUserId: string;
}) {
  const [users, setUsers] = useState(initialUsers);
  const [banner, setBanner] = useState<Banner>(null);
  const [isPending, startTransition] = useTransition();
  const [rowPending, setRowPending] = useState<string | null>(null);

  function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await createUserAction(formData);
      if (result?.error) {
        setBanner({ type: "error", message: result.error });
        return;
      }
      if (result?.success) {
        form.reset();
        setBanner({
          type: "success",
          message: result.generatedPassword
            ? `${result.email} eklendi. Geçici şifre: ${result.generatedPassword} — bu şifreyi kullanıcıya ilet, bir daha gösterilmeyecek.`
            : `${result.email} eklendi.`,
        });
        setUsers((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            email: result.email!,
            role: (formData.get("role") === "admin" ? "admin" : "user") as
              | "admin"
              | "user",
            createdAt: new Date().toISOString(),
          },
        ]);
      }
    });
  }

  function handleRoleChange(userId: string, role: "admin" | "user") {
    setRowPending(userId);
    startTransition(async () => {
      const result = await setRoleAction(userId, role);
      setRowPending(null);
      if (result?.error) {
        setBanner({ type: "error", message: result.error });
        return;
      }
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role } : u)),
      );
    });
  }

  function handleRevoke(userId: string, email: string) {
    if (!confirm(`${email} adlı hesabın erişimini kaldırmak istediğine emin misin?`)) {
      return;
    }
    setRowPending(userId);
    startTransition(async () => {
      const result = await revokeAccessAction(userId);
      setRowPending(null);
      if (result?.error) {
        setBanner({ type: "error", message: result.error });
        return;
      }
      setUsers((prev) => prev.filter((u) => u.id !== userId));
      setBanner({ type: "success", message: `${email} erişimi kaldırıldı.` });
    });
  }

  function handleResetPassword(userId: string, email: string) {
    setRowPending(userId);
    startTransition(async () => {
      const result = await resetPasswordAction(userId);
      setRowPending(null);
      if (result?.error) {
        setBanner({ type: "error", message: result.error });
        return;
      }
      setBanner({
        type: "success",
        message: `${email} için yeni şifre: ${result.generatedPassword} — bu şifreyi kullanıcıya ilet, bir daha gösterilmeyecek.`,
      });
    });
  }

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>İthal Emtia</p>
            <h1 className={styles.title}>Kullanıcı Yönetimi</h1>
          </div>
          <Link className={styles.backLink} href="/">
            ← Rapora dön
          </Link>
        </div>

        {banner ? (
          <div
            className={`${styles.banner} ${
              banner.type === "success" ? styles.bannerSuccess : styles.bannerError
            }`}
          >
            {banner.message}
          </div>
        ) : null}

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Yeni kullanıcı ekle</h2>
          <form className={styles.form} onSubmit={handleCreate}>
            <label className={styles.field}>
              <span className={styles.label}>E-posta</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                required
                placeholder="ornek@sirket.com"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Şifre (boş bırakılırsa otomatik üretilir)</span>
              <input className={styles.input} type="text" name="password" />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Rol</span>
              <select className={styles.select} name="role" defaultValue="user">
                <option value="user">Kullanıcı</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <button className={styles.submit} type="submit" disabled={isPending}>
              {isPending ? "Ekleniyor…" : "Kullanıcı ekle"}
            </button>
          </form>
          <p className={styles.hint}>
            Buradan eklenen hesaplar dışında hiç kimse rapora giriş yapamaz.
          </p>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Erişimi olan kullanıcılar ({users.length})</h2>
          <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>E-posta</th>
                <th>Rol</th>
                <th>Eklenme</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>
                    {u.email}
                    {u.id === currentUserId ? <span className={styles.you}>Sen</span> : null}
                  </td>
                  <td>
                    <select
                      className={styles.select}
                      value={u.role}
                      disabled={rowPending === u.id}
                      onChange={(event) =>
                        handleRoleChange(u.id, event.target.value as "admin" | "user")
                      }
                    >
                      <option value="user">Kullanıcı</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>{new Date(u.createdAt).toLocaleDateString("tr-TR")}</td>
                  <td>
                    <div className={styles.rowActions}>
                      <button
                        className={styles.smallButton}
                        type="button"
                        disabled={rowPending === u.id}
                        onClick={() => handleResetPassword(u.id, u.email)}
                      >
                        Şifre sıfırla
                      </button>
                      {u.id !== currentUserId ? (
                        <button
                          className={styles.dangerButton}
                          type="button"
                          disabled={rowPending === u.id}
                          onClick={() => handleRevoke(u.id, u.email)}
                        >
                          Erişimi kaldır
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </section>
      </div>
    </main>
  );
}
