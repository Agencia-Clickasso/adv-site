"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { clearAdminSession, requireAdminSession, sendAdminMagicLink } from "@/lib/admin-auth"
import { createDraft, publishPost, unpublishPost, updateDraft } from "@/lib/blog-admin"
import { getDbPostById } from "@/lib/blog-repo"
import { isTursoConfigured, runTursoMigrations } from "@/lib/turso"
import { slugify } from "@/lib/slug"

const loginSchema = z.object({
  email: z.string().trim().email("E-mail inválido"),
})

function redirectWithMessage(path: string, params: Record<string, string>) {
  const usp = new URLSearchParams(params)
  redirect(`${path}?${usp.toString()}`)
}

function parsePostForm(formData: FormData) {
  const title = String(formData.get("title") || "").trim()
  return {
    title,
    slug: slugify(String(formData.get("slug") || "").trim() || title),
    excerpt: String(formData.get("excerpt") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    authorName: String(formData.get("authorName") || "Dra. Lucimeire Xavier").trim(),
    contentMdx: String(formData.get("contentMdx") || "").trim(),
  }
}

export async function requestMagicLinkAction(formData: FormData) {
  if (!isTursoConfigured()) {
    redirectWithMessage("/admin/login", {
      error: "Turso não está configurado neste ambiente.",
    })
  }

  await runTursoMigrations()

  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
  })

  if (!parsed.success) {
    redirectWithMessage("/admin/login", {
      error: parsed.error.issues[0]?.message || "Dados inválidos",
    })
  }

  try {
    await sendAdminMagicLink(parsed.data.email)
  } catch {
    redirectWithMessage("/admin/login", {
      error: "Não foi possível enviar o link. Tente novamente.",
    })
  }

  redirectWithMessage("/admin/login", {
    success: "Se o e-mail estiver autorizado, enviamos um link de acesso.",
  })
}

export async function logoutAction() {
  await clearAdminSession()
  redirect("/admin/login?success=Sessão encerrada")
}

export async function createDraftPostAction(formData: FormData) {
  await requireAdminSession()
  await runTursoMigrations()

  try {
    const id = await createDraft(parsePostForm(formData))
    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath("/sitemap.xml")
    redirect(`/admin/posts/${id}/edit?success=Rascunho criado com sucesso`)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao criar rascunho"
    redirectWithMessage("/admin/posts/new", { error: message })
  }
}

export async function updatePostAction(formData: FormData) {
  await requireAdminSession()
  await runTursoMigrations()

  const id = String(formData.get("id") || "")
  if (!id) {
    redirectWithMessage("/admin/posts", { error: "Post inválido" })
  }

  try {
    await updateDraft(id, parsePostForm(formData))
    const dbPost = await getDbPostById(id)
    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath("/sitemap.xml")
    if (dbPost?.slug) revalidatePath(`/blog/${dbPost.slug}`)
    redirect(`/admin/posts/${id}/edit?success=Artigo salvo`)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao salvar"
    redirectWithMessage(`/admin/posts/${id}/edit`, { error: message })
  }
}

export async function publishPostAction(formData: FormData) {
  await requireAdminSession()
  await runTursoMigrations()

  const id = String(formData.get("id") || "")
  if (!id) redirectWithMessage("/admin/posts", { error: "Post inválido" })

  try {
    await publishPost(id)
    const dbPost = await getDbPostById(id)
    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath("/sitemap.xml")
    if (dbPost?.slug) revalidatePath(`/blog/${dbPost.slug}`)
    redirect(`/admin/posts/${id}/edit?success=Artigo publicado`)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao publicar"
    redirectWithMessage(`/admin/posts/${id}/edit`, { error: message })
  }
}

export async function unpublishPostAction(formData: FormData) {
  await requireAdminSession()
  await runTursoMigrations()

  const id = String(formData.get("id") || "")
  if (!id) redirectWithMessage("/admin/posts", { error: "Post inválido" })

  try {
    const before = await getDbPostById(id)
    await unpublishPost(id)
    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath("/sitemap.xml")
    if (before?.slug) revalidatePath(`/blog/${before.slug}`)
    redirect(`/admin/posts/${id}/edit?success=Artigo movido para rascunho`)
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao despublicar"
    redirectWithMessage(`/admin/posts/${id}/edit`, { error: message })
  }
}
