import { createDraftPostAction } from "@/app/admin/actions"

export const dynamic = "force-dynamic"

type NewPostPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function AdminNewPostPage({ searchParams }: NewPostPageProps) {
  const params = (await searchParams) || {}
  const error = getParam(params.error)

  return (
    <div className="max-w-4xl space-y-4">
      <h2 className="text-2xl font-bold">Novo artigo</h2>
      <p className="text-sm text-custom-text-primary/80">
        Crie um rascunho em Markdown/MDX. Você poderá publicar depois.
      </p>

      {error && (
        <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>
      )}

      <form action={createDraftPostAction} className="space-y-4 rounded-2xl border border-custom-text-primary/10 bg-custom-bg-secondary/40 p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-2 block">Título</span>
            <input name="title" required className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="mb-2 block">Slug (opcional)</span>
            <input name="slug" placeholder="gerado a partir do título" className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-2 block">Resumo (excerpt)</span>
          <textarea name="excerpt" required rows={3} className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-2 block">Categoria</span>
            <input name="category" defaultValue="Direito Tributário" required className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
          <label className="text-sm">
            <span className="mb-2 block">Autor</span>
            <input name="authorName" defaultValue="Dra. Lucimeire Xavier" required className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2" />
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-2 block">Conteúdo (Markdown/MDX)</span>
          <textarea
            name="contentMdx"
            required
            rows={18}
            placeholder="# Título do artigo"
            className="w-full rounded-xl border border-custom-text-primary/20 bg-custom-bg-primary/60 px-3 py-2 font-mono text-sm"
          />
        </label>

        <div className="flex justify-end">
          <button type="submit" className="rounded-xl bg-custom-text-primary px-4 py-2 font-semibold text-custom-bg-secondary">
            Salvar rascunho
          </button>
        </div>
      </form>
    </div>
  )
}
