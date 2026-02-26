import Link from "next/link"
import { listAdminDbPosts } from "@/lib/blog-repo"
import { runTursoMigrations, isTursoConfigured } from "@/lib/turso"

export const dynamic = "force-dynamic"

type PostsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function AdminPostsPage({ searchParams }: PostsPageProps) {
  const params = (await searchParams) || {}
  const error = getParam(params.error)
  const success = getParam(params.success)

  let posts = [] as Awaited<ReturnType<typeof listAdminDbPosts>>
  if (isTursoConfigured()) {
    await runTursoMigrations()
    posts = await listAdminDbPosts()
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>
      )}
      {success && (
        <div className="rounded-xl border border-green-400/40 bg-green-500/10 p-3 text-sm text-green-200">{success}</div>
      )}

      {!isTursoConfigured() ? (
        <div className="rounded-xl border border-amber-400/40 bg-amber-500/10 p-4 text-amber-200">
          Configure `TURSO_DATABASE_URL` e `TURSO_AUTH_TOKEN` para usar o painel.
        </div>
      ) : posts.length === 0 ? (
        <div className="rounded-xl border border-custom-text-primary/10 bg-custom-bg-secondary/40 p-6">
          <p className="text-custom-text-primary/80 mb-4">Nenhum artigo no Turso ainda.</p>
          <Link
            href="/admin/posts/new"
            className="inline-flex rounded-lg bg-custom-text-primary px-4 py-2 text-sm font-semibold text-custom-bg-secondary"
          >
            Criar primeiro artigo
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-custom-text-primary/10 bg-custom-bg-secondary/40">
          <table className="min-w-full text-sm">
            <thead className="border-b border-custom-text-primary/10 text-custom-text-primary/80">
              <tr>
                <th className="px-4 py-3 text-left">Título</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Categoria</th>
                <th className="px-4 py-3 text-left">Atualizado</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-custom-text-primary/5">
                  <td className="px-4 py-3">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-xs text-custom-text-primary/60">/{post.slug}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        post.status === "published"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-amber-500/20 text-amber-300"
                      }`}
                    >
                      {post.status === "published" ? "Publicado" : "Rascunho"}
                    </span>
                  </td>
                  <td className="px-4 py-3">{post.category}</td>
                  <td className="px-4 py-3">
                    {new Date(post.updatedAt).toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="rounded-lg border border-custom-text-primary/20 px-3 py-1.5 hover:bg-custom-text-primary/10"
                      >
                        Editar
                      </Link>
                      {post.status === "published" && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="rounded-lg border border-custom-text-primary/20 px-3 py-1.5 hover:bg-custom-text-primary/10"
                        >
                          Ver
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
