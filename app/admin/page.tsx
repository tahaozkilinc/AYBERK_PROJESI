import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import ReportStyles from "../report-styles";
import SiteHeader from "../site-header";
import SignOutButton from "../sign-out-button";
import Link from "next/link";
import AdminPanel, { type AdminUserRow } from "./admin-panel";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: myProfile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user!.id)
    .maybeSingle();

  if (myProfile?.role !== "admin") {
    redirect("/");
  }

  const admin = createAdminClient();
  const { data: profiles } = await admin
    .from("profiles")
    .select("id, email, role, created_at")
    .order("created_at", { ascending: true });

  const rows: AdminUserRow[] = (profiles ?? []).map((profile) => ({
    id: profile.id,
    email: profile.email,
    role: profile.role as "admin" | "user",
    createdAt: profile.created_at,
  }));

  return (
    <>
      <ReportStyles />
      <SiteHeader active="admin" isAdmin>
        <Link className="button" href="/account">
          Hesabım
        </Link>
        <SignOutButton />
      </SiteHeader>
      <main className="shell">
        <AdminPanel initialUsers={rows} currentUserId={user!.id} />
      </main>
    </>
  );
}
