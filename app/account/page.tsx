import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ReportStyles from "../report-styles";
import SiteHeader from "../site-header";
import SignOutButton from "../sign-out-button";
import Link from "next/link";
import ChangePasswordForm from "./change-password-form";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, role")
    .eq("id", user!.id)
    .maybeSingle();

  if (!profile) {
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <>
      <ReportStyles />
      <SiteHeader active="account" isAdmin={profile?.role === "admin"}>
        {profile?.role === "admin" ? (
          <Link className="button" href="/admin">
            Kullanıcılar
          </Link>
        ) : null}
        <SignOutButton />
      </SiteHeader>
      <main className="shell">
        <section className="panel" style={{ maxWidth: 480 }}>
          <div className="panel-head">
            <div>
              <h2>Hesabım</h2>
              <p className="panel-subtitle">{profile?.email}</p>
            </div>
          </div>
          <ChangePasswordForm />
        </section>
      </main>
    </>
  );
}
