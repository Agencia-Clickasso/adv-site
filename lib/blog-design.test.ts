import { beforeAll, describe, expect, it, vi } from "vitest"

vi.mock("next/font/google", () => ({
  Cormorant_Garamond: () => ({ className: "mock-serif" }),
  Manrope: () => ({ className: "mock-sans" }),
}))

describe("formatBlogDate", () => {
  let formatBlogDate: (date: string) => string

  beforeAll(async () => {
    ;({ formatBlogDate } = await import("@/lib/blog-design"))
  })

  it("formata data em pt-BR", () => {
    const formatted = formatBlogDate("2026-08-05T15:00:00.000Z")
    expect(formatted).toMatch(/2026/)
    expect(formatted.length).toBeGreaterThan(8)
  })
})
