import { createClient, type Client } from "@libsql/client"

let cachedClient: Client | null = null

export function getTursoClient(): Client | null {
  const url = process.env.TURSO_DATABASE_URL
  const authToken = process.env.TURSO_AUTH_TOKEN

  if (!url || !authToken) {
    return null
  }

  if (!cachedClient) {
    cachedClient = createClient({
      url,
      authToken,
    })
  }

  return cachedClient
}

export function isTursoConfigured() {
  return Boolean(process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN)
}

export async function runTursoMigrations() {
  const client = getTursoClient()
  if (!client) {
    throw new Error("Turso não configurado")
  }

  const statements = [
    `CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content_mdx TEXT NOT NULL,
      category TEXT NOT NULL,
      author_name TEXT NOT NULL DEFAULT 'Dra. Lucimeire Xavier',
      status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
      published_at TEXT,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );`,
    `CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);`,
    `CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);`,
    `CREATE TABLE IF NOT EXISTS admin_magic_tokens (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      token_hash TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      used_at TEXT,
      created_at TEXT NOT NULL
    );`,
    `CREATE INDEX IF NOT EXISTS idx_admin_magic_tokens_email ON admin_magic_tokens(email);`,
    `CREATE TABLE IF NOT EXISTS admin_sessions (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      session_hash TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL
    );`,
    `CREATE INDEX IF NOT EXISTS idx_admin_sessions_email ON admin_sessions(email);`,
  ]

  for (const sql of statements) {
    await client.execute(sql)
  }
}
