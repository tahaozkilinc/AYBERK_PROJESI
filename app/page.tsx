import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";

const contentDir = path.join(process.cwd(), "content");
const reportCss = fs.readFileSync(path.join(contentDir, "report.css"), "utf8");
const reportBody = fs.readFileSync(path.join(contentDir, "report-body.html"), "utf8");
const reportScript = fs.readFileSync(path.join(contentDir, "report-script.js"), "utf8");

export default async function ReportPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user!.id)
    .maybeSingle();

  if (!profile) {
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: reportCss }} />
      <LogoutButton />
      <div dangerouslySetInnerHTML={{ __html: reportBody }} />
      <Script
        id="report-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: reportScript }}
      />
    </>
  );
}
