import { randomUUID } from "crypto"
import { getTursoClient } from "@/lib/turso"

export type DbBlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  contentMdx: string
  category: string
  authorName: string
  status: "draft" | "published"
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

type BlogPostInput = {
  slug: string
  title: string
  excerpt: string
  contentMdx: string
  category: string
  authorName: string
}

function mapRow(row: Record<string, unknown>): DbBlogPost {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    contentMdx: String(row.content_mdx),
    category: String(row.category),
    authorName: String(row.author_name ?? "Dra. Lucimeire Xavier"),
    status: String(row.status) as DbBlogPost["status"],
    publishedAt: row.published_at ? String(row.published_at) : null,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  }
}

export async function listPublishedDbPosts(): Promise<DbBlogPost[]> {
  const client = getTursoClient()
  if (!client) return []

  try {
    const result = await client.execute({
      sql: `SELECT * FROM blog_posts WHERE status = 'published' ORDER BY COALESCE(published_at, updated_at) DESC`,
    })
    return result.rows.map((row) => mapRow(row as unknown as Record<string, unknown>))
  } catch {
    return []
  }
}

export async function listAdminDbPosts(): Promise<DbBlogPost[]> {
  const client = getTursoClient()
  if (!client) return []

  const result = await client.execute({
    sql: `SELECT * FROM blog_posts ORDER BY updated_at DESC`,
  })
  return result.rows.map((row) => mapRow(row as unknown as Record<string, unknown>))
}

export async function getDbPostBySlug(slug: string): Promise<DbBlogPost | null> {
  const client = getTursoClient()
  if (!client) return null

  try {
    const result = await client.execute({
      sql: `SELECT * FROM blog_posts WHERE slug = ? LIMIT 1`,
      args: [slug],
    })
    if (result.rows.length === 0) return null
    return mapRow(result.rows[0] as unknown as Record<string, unknown>)
  } catch {
    return null
  }
}

export async function getDbPostById(id: string): Promise<DbBlogPost | null> {
  const client = getTursoClient()
  if (!client) return null
  const result = await client.execute({
    sql: `SELECT * FROM blog_posts WHERE id = ? LIMIT 1`,
    args: [id],
  })
  if (result.rows.length === 0) return null
  return mapRow(result.rows[0] as unknown as Record<string, unknown>)
}

export async function createDbDraftPost(input: BlogPostInput): Promise<string> {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  const id = randomUUID()
  const now = new Date().toISOString()

  await client.execute({
    sql: `INSERT INTO blog_posts (
      id, slug, title, excerpt, content_mdx, category, author_name, status, published_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, 'draft', NULL, ?, ?)`,
    args: [
      id,
      input.slug,
      input.title,
      input.excerpt,
      input.contentMdx,
      input.category,
      input.authorName,
      now,
      now,
    ],
  })

  return id
}

export async function updateDbPost(id: string, input: BlogPostInput) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  await client.execute({
    sql: `UPDATE blog_posts
          SET slug = ?, title = ?, excerpt = ?, content_mdx = ?, category = ?, author_name = ?, updated_at = ?
          WHERE id = ?`,
    args: [
      input.slug,
      input.title,
      input.excerpt,
      input.contentMdx,
      input.category,
      input.authorName,
      new Date().toISOString(),
      id,
    ],
  })
}

export async function publishDbPost(id: string) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  const now = new Date().toISOString()
  await client.execute({
    sql: `UPDATE blog_posts
          SET status = 'published',
              published_at = COALESCE(published_at, ?),
              updated_at = ?
          WHERE id = ?`,
    args: [now, now, id],
  })
}

export async function unpublishDbPost(id: string) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  await client.execute({
    sql: `UPDATE blog_posts SET status = 'draft', updated_at = ? WHERE id = ?`,
    args: [new Date().toISOString(), id],
  })
}

export async function slugExistsInDb(slug: string, excludingId?: string) {
  const client = getTursoClient()
  if (!client) return false

  const result = excludingId
    ? await client.execute({
        sql: `SELECT id FROM blog_posts WHERE slug = ? AND id != ? LIMIT 1`,
        args: [slug, excludingId],
      })
    : await client.execute({
        sql: `SELECT id FROM blog_posts WHERE slug = ? LIMIT 1`,
        args: [slug],
      })

  return result.rows.length > 0
}
