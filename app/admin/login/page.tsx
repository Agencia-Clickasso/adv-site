import Link from "next/link"
import { getAdminSession } from "@/lib/admin-auth"
import { redirect } from "next/navigation"
import { requestMagicLinkAction } from "@/app/admin/actions"
import { isTursoConfigured } from "@/lib/turso"

export const dynamic = "force-dynamic"

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const session = await getAdminSession()
  if (session) {
    redirect("/admin/posts")
  }

  const params = (await searchParams) || {}
  const error = getParam(params.error)
  const success = getParam(params.success)

  return (
    <div className="min-h-screen bg-custom-bg-primary text-custom-text-secondary flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-custom-bg-secondary/60 border border-custom-text-primary/20 rounded-2xl p-6 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2">Acesso ao Painel do Blog</h1>
        <p className="text-custom-text-primary/80 mb-6">
          Entre com seu e-mail para receber um link de acesso.
        </p>

        {!isTursoConfigured() && (
          <div className="mb-4 rounded-xl border border-amber-400/40 bg-amber-500/10 p-3 text-sm text-amber-200">
            Turso ainda não está configurado neste ambiente. Configure as variáveis de ambiente antes de usar o painel.
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-xl border border-green-400/40 bg-green-500/10 p-3 text-sm text-green-200">
            {success}
          </div>
        )}

        <form action={requestMagicLinkAction} className="space-y-4">
          <label className="block text-sm">
            <span className="mb-2 block text-custom-text-primary">E-mail</span>
            <input
              type="email"
              name="email"
              required
              placeholder="seuemail@dominio.com"
              className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-4 py-3 text-custom-text-secondary placeholder:text-custom-text-primary/50 focus:outline-none focus:ring-2 focus:ring-custom-text-primary/30"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-custom-text-primary px-4 py-3 font-semibold text-custom-bg-secondary hover:opacity-90 transition"
          >
            Enviar link de acesso
          </button>
        </form>

        <div className="mt-6 text-sm text-custom-text-primary/70">
          <Link href="/" className="hover:text-custom-text-secondary">
            Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  )
}
