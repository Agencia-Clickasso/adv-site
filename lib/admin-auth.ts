import { createHash, randomBytes, randomUUID, timingSafeEqual } from "crypto"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { getTursoClient } from "@/lib/turso"
import { sendMagicLinkEmail } from "@/lib/admin-mail"
import { SEO } from "@/lib/seo"

const SESSION_COOKIE = "blog_admin_session"
const MAGIC_LINK_TTL_MINUTES = 15
const SESSION_TTL_DAYS = 14

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex")
}

function safeEq(a: string, b: string) {
  const aBuf = Buffer.from(a)
  const bBuf = Buffer.from(b)
  if (aBuf.length !== bBuf.length) return false
  return timingSafeEqual(aBuf, bBuf)
}

function allowedEmails() {
  const raw = process.env.BLOG_ADMIN_ALLOWED_EMAILS ?? ""
  return raw
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export function isEmailAllowed(email: string) {
  const list = allowedEmails()
  if (list.length === 0) return false
  return list.includes(email.trim().toLowerCase())
}

function getBaseUrl() {
  return process.env.NEXTAUTH_URL || SEO.siteUrl
}

export async function sendAdminMagicLink(email: string) {
  const normalized = email.trim().toLowerCase()
  if (!isEmailAllowed(normalized)) {
    return
  }

  const client = getTursoClient()
  if (!client) {
    throw new Error("Turso não configurado")
  }

  const token = randomBytes(32).toString("hex")
  const tokenHash = hashToken(token)
  const now = new Date()
  const expiresAt = new Date(now.getTime() + MAGIC_LINK_TTL_MINUTES * 60 * 1000).toISOString()

  await client.execute({
    sql: `INSERT INTO admin_magic_tokens (id, email, token_hash, expires_at, created_at)
          VALUES (?, ?, ?, ?, ?)`,
    args: [randomUUID(), normalized, tokenHash, expiresAt, now.toISOString()],
  })

  const loginUrl = `${getBaseUrl()}/admin/magic?token=${token}`
  await sendMagicLinkEmail({ email: normalized, loginUrl })
}

export async function consumeMagicToken(token: string) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  const tokenHash = hashToken(token)
  const res = await client.execute({
    sql: `SELECT id, email, token_hash, expires_at, used_at FROM admin_magic_tokens WHERE token_hash = ? LIMIT 1`,
    args: [tokenHash],
  })

  if (res.rows.length === 0) return null
  const row = res.rows[0] as unknown as Record<string, unknown>
  const expiresAt = String(row.expires_at)
  const usedAt = row.used_at ? String(row.used_at) : null
  const rowHash = String(row.token_hash)
  if (!safeEq(rowHash, tokenHash)) return null
  if (usedAt) return null
  if (new Date(expiresAt).getTime() < Date.now()) return null

  const nowIso = new Date().toISOString()
  await client.execute({
    sql: `UPDATE admin_magic_tokens SET used_at = ? WHERE id = ?`,
    args: [nowIso, String(row.id)],
  })

  return { email: String(row.email).toLowerCase() }
}

export async function createAdminSession(email: string) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  const rawSession = randomBytes(32).toString("hex")
  const sessionHash = hashToken(rawSession)
  const now = new Date()
  const expiresAt = new Date(now.getTime() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000)

  await client.execute({
    sql: `INSERT INTO admin_sessions (id, email, session_hash, expires_at, created_at)
          VALUES (?, ?, ?, ?, ?)`,
    args: [randomUUID(), email.toLowerCase(), sessionHash, expiresAt.toISOString(), now.toISOString()],
  })

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, rawSession, {
    ...adminSessionCookieOptions(expiresAt),
  })
}

export function adminSessionCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true as const,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
    expires: expiresAt,
  }
}

export async function issueAdminSession(email: string) {
  const client = getTursoClient()
  if (!client) throw new Error("Turso não configurado")

  const rawSession = randomBytes(32).toString("hex")
  const sessionHash = hashToken(rawSession)
  const now = new Date()
  const expiresAt = new Date(now.getTime() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000)

  await client.execute({
    sql: `INSERT INTO admin_sessions (id, email, session_hash, expires_at, created_at)
          VALUES (?, ?, ?, ?, ?)`,
    args: [randomUUID(), email.toLowerCase(), sessionHash, expiresAt.toISOString(), now.toISOString()],
  })

  return { rawSession, expiresAt }
}

export function getAdminSessionCookieName() {
  return SESSION_COOKIE
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(SESSION_COOKIE)?.value
  if (raw) {
    const client = getTursoClient()
    if (client) {
      await client.execute({
        sql: `DELETE FROM admin_sessions WHERE session_hash = ?`,
        args: [hashToken(raw)],
      })
    }
  }
  cookieStore.delete(SESSION_COOKIE)
}

export async function getAdminSession() {
  const client = getTursoClient()
  if (!client) return null
  const cookieStore = await cookies()
  const raw = cookieStore.get(SESSION_COOKIE)?.value
  if (!raw) return null

  const result = await client.execute({
    sql: `SELECT email, expires_at FROM admin_sessions WHERE session_hash = ? LIMIT 1`,
    args: [hashToken(raw)],
  })

  if (result.rows.length === 0) return null
  const row = result.rows[0] as unknown as Record<string, unknown>
  const expiresAt = String(row.expires_at)
  if (new Date(expiresAt).getTime() < Date.now()) {
    cookieStore.delete(SESSION_COOKIE)
    return null
  }

  return {
    email: String(row.email),
    expiresAt,
  }
}

export async function requireAdminSession() {
  const session = await getAdminSession()
  if (!session) {
    redirect("/admin/login")
  }
  return session
}

export async function getRequestOrigin() {
  const h = await headers()
  const host = h.get("x-forwarded-host") || h.get("host")
  const proto = h.get("x-forwarded-proto") || "https"
  if (!host) return getBaseUrl()
  return `${proto}://${host}`
}
