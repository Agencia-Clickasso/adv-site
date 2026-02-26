import Link from "next/link"
import { publishPostAction, unpublishPostAction, updatePostAction } from "@/app/admin/actions"
import { getDbPostById } from "@/lib/blog-repo"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

type EditPageProps = {
  params: Promise<{ id: string }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function AdminEditPostPage({ params, searchParams }: EditPageProps) {
  const { id } = await params
  const post = await getDbPostById(id)
  if (!post) notFound()

  const q = (await searchParams) || {}
  const error = getParam(q.error)
  const success = getParam(q.success)

  return (
    <div className="max-w-4xl space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Editar artigo</h2>
          <p className="text-sm text-custom-text-primary/80">ID: {post.id}</p>
        </div>
        <div className="flex gap-2">
          {post.status === "published" && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="rounded-lg border border-custom-text-primary/20 px-3 py-2 text-sm hover:bg-custom-text-primary/10"
            >
              Ver no site
            </Link>
          )}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>
      )}
      {success && (
        <div className="rounded-xl border border-green-400/40 bg-green-500/10 p-3 text-sm text-green-200">{success}</div>
      )}

      <form action={updatePostAction} className="space-y-4 rounded-2xl border border-custom-text-primary/10 bg-custom-bg-secondary/40 p-5">
        <input type="hidden" name="id" value={post.id} />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-2 block">Título</span>
            <input name="title" required defaultValue={post.title} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="mb-2 block">Slug</span>
            <input name="slug" required defaultValue={post.slug} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-2 block">Resumo (excerpt)</span>
          <textarea name="excerpt" required rows={3} defaultValue={post.excerpt} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-2 block">Categoria</span>
            <input name="category" required defaultValue={post.category} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="mb-2 block">Autor</span>
            <input name="authorName" required defaultValue={post.authorName} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-2 block">Conteúdo (Markdown/MDX)</span>
          <textarea
            name="contentMdx"
            required
            rows={20}
            defaultValue={post.contentMdx}
            className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2 font-mono text-sm"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-custom-text-primary/70">
            Status atual: <strong className="text-custom-text-secondary">{post.status === "published" ? "Publicado" : "Rascunho"}</strong>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="submit" className="rounded-xl border border-custom-text-primary/20 px-4 py-2 text-sm hover:bg-custom-text-primary/10">
              Salvar alterações
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        <form action={publishPostAction}>
          <input type="hidden" name="id" value={post.id} />
          <button
            type="submit"
            className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Publicar
          </button>
        </form>

        <form action={unpublishPostAction}>
          <input type="hidden" name="id" value={post.id} />
          <button
            type="submit"
            className="rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Mover para rascunho
          </button>
        </form>
      </div>
    </div>
  )
}
