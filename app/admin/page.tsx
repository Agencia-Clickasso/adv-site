import { getAdminSession } from "@/lib/admin-auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function AdminRootPage() {
  const session = await getAdminSession()
  redirect(session ? "/admin/posts" : "/admin/login")
}
