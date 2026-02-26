import Link from "next/link"
import { ReactNode } from "react"
import { logoutAction } from "@/app/admin/actions"
import { requireAdminSession } from "@/lib/admin-auth"

export const dynamic = "force-dynamic"

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const session = await requireAdminSession()

  return (
    <div className="min-h-screen bg-custom-bg-primary text-custom-text-secondary">
      <header className="border-b border-custom-text-primary/10 bg-custom-bg-secondary/70">
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-custom-text-primary/80">Painel do Blog</p>
            <h1 className="text-xl font-semibold">Lucimeire Xavier Advocacia</h1>
            <p className="text-xs text-custom-text-primary/60 mt-1">{session.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/posts"
              className="rounded-lg border border-custom-text-primary/20 px-3 py-2 text-sm hover:bg-custom-text-primary/10"
            >
              Artigos
            </Link>
            <Link
              href="/admin/posts/new"
              className="rounded-lg bg-custom-text-primary px-3 py-2 text-sm font-semibold text-custom-bg-secondary hover:opacity-90"
            >
              Novo artigo
            </Link>
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg border border-custom-text-primary/20 px-3 py-2 text-sm hover:bg-custom-text-primary/10"
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  )
}
