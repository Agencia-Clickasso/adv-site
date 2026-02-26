import { NextRequest, NextResponse } from "next/server"
import {
  adminSessionCookieOptions,
  consumeMagicToken,
  getAdminSessionCookieName,
  issueAdminSession,
} from "@/lib/admin-auth"
import { runTursoMigrations } from "@/lib/turso"

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login?error=Link inválido", request.url))
  }

  try {
    await runTursoMigrations()
    const payload = await consumeMagicToken(token)
    if (!payload) {
      return NextResponse.redirect(new URL("/admin/login?error=Link expirado ou inválido", request.url))
    }

    const issued = await issueAdminSession(payload.email)
    const response = NextResponse.redirect(new URL("/admin/posts?success=Login realizado", request.url))
    response.cookies.set(
      getAdminSessionCookieName(),
      issued.rawSession,
      adminSessionCookieOptions(issued.expiresAt),
    )
    return response
  } catch {
    return NextResponse.redirect(new URL("/admin/login?error=Não foi possível validar o link", request.url))
  }
}
