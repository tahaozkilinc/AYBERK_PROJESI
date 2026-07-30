"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user!.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/");
  }

  return user!;
}

function generatePassword() {
  return randomBytes(12).toString("base64url");
}

export async function createUserAction(formData: FormData) {
  await requireAdmin();

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const role = formData.get("role") === "admin" ? "admin" : "user";
  const providedPassword = String(formData.get("password") ?? "").trim();

  if (!email) {
    return { error: "E-posta gerekli." };
  }

  const password = providedPassword || generatePassword();
  const admin = createAdminClient();

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (createError || !created.user) {
    return { error: createError?.message ?? "Kullanıcı oluşturulamadı." };
  }

  const { error: profileError } = await admin.from("profiles").insert({
    id: created.user.id,
    email,
    role,
  });

  if (profileError) {
    return { error: profileError.message };
  }

  revalidatePath("/admin");
  return {
    success: true,
    email,
    generatedPassword: providedPassword ? null : password,
  };
}

export async function setRoleAction(userId: string, role: "admin" | "user") {
  const currentUser = await requireAdmin();
  const admin = createAdminClient();

  if (currentUser.id === userId && role !== "admin") {
    const { count } = await admin
      .from("profiles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");

    if ((count ?? 0) <= 1) {
      return { error: "Son admin hesabının yetkisini kaldıramazsın." };
    }
  }

  const { error } = await admin.from("profiles").update({ role }).eq("id", userId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}

export async function revokeAccessAction(userId: string) {
  const currentUser = await requireAdmin();

  if (currentUser.id === userId) {
    return { error: "Kendi hesabının erişimini kaldıramazsın." };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("profiles").delete().eq("id", userId);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/admin");
  return { success: true };
}

export async function resetPasswordAction(userId: string) {
  await requireAdmin();

  const admin = createAdminClient();
  const password = generatePassword();

  const { error } = await admin.auth.admin.updateUserById(userId, { password });

  if (error) {
    return { error: error.message };
  }

  return { success: true, generatedPassword: password };
}
