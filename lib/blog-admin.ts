import { z } from "zod"
import {
  createDbDraftPost,
  getDbPostById,
  publishDbPost,
  slugExistsInDb,
  unpublishDbPost,
  updateDbPost,
} from "@/lib/blog-repo"
import { isValidSlug, slugify } from "@/lib/slug"

export const blogPostFormSchema = z.object({
  title: z.string().trim().min(3, "Título é obrigatório"),
  slug: z.string().trim().min(3, "Slug é obrigatório"),
  excerpt: z.string().trim().min(10, "Resumo é obrigatório"),
  category: z.string().trim().min(2, "Categoria é obrigatória"),
  authorName: z.string().trim().min(2, "Autor é obrigatório"),
  contentMdx: z.string().trim().min(20, "Conteúdo é obrigatório"),
})

export type BlogPostFormValues = z.infer<typeof blogPostFormSchema>

export async function validateAndNormalizeBlogPost(
  raw: BlogPostFormValues,
  options?: { existingId?: string },
) {
  const parsed = blogPostFormSchema.parse(raw)
  const normalizedSlug = slugify(parsed.slug || parsed.title)

  if (!isValidSlug(normalizedSlug)) {
    throw new Error("Slug inválido")
  }

  const slugTaken = await slugExistsInDb(normalizedSlug, options?.existingId)
  if (slugTaken) {
    throw new Error("Já existe um artigo com esse slug no banco")
  }

  return {
    ...parsed,
    slug: normalizedSlug,
  }
}

export async function createDraft(values: BlogPostFormValues) {
  const input = await validateAndNormalizeBlogPost(values)
  return createDbDraftPost(input)
}

export async function updateDraft(id: string, values: BlogPostFormValues) {
  const existing = await getDbPostById(id)
  if (!existing) throw new Error("Post não encontrado")
  const input = await validateAndNormalizeBlogPost(values, { existingId: id })
  await updateDbPost(id, input)
}

export async function publishPost(id: string) {
  const existing = await getDbPostById(id)
  if (!existing) throw new Error("Post não encontrado")
  if (!existing.title || !existing.slug || !existing.excerpt || !existing.contentMdx || !existing.category) {
    throw new Error("Campos obrigatórios ausentes para publicação")
  }
  await publishDbPost(id)
}

export async function unpublishPost(id: string) {
  const existing = await getDbPostById(id)
  if (!existing) throw new Error("Post não encontrado")
  await unpublishDbPost(id)
}
