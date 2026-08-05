import { describe, expect, it } from "vitest"
import {
  CLINICS_FAQ_ITEMS,
  CLINICS_RELATED_ARTICLES,
  CLINICS_SERVICES,
  CLINICS_WHATSAPP_HREF,
} from "@/components/clinics/clinics-landing-content"

describe("clinics landing content", () => {
  it("expõe quatro serviços e artigos do cluster", () => {
    expect(CLINICS_SERVICES).toHaveLength(4)
    expect(CLINICS_RELATED_ARTICLES).toHaveLength(4)
    expect(CLINICS_RELATED_ARTICLES.every((item) => item.href.startsWith("/blog/"))).toBe(true)
  })

  it("mantém FAQ sem promessa de valor recuperado", () => {
    const recoveryFaq = CLINICS_FAQ_ITEMS.find((item) =>
      item.question.toLowerCase().includes("valor recuperado")
    )
    expect(recoveryFaq?.answer.toLowerCase()).toContain("não")
  })

  it("monta WhatsApp com telefone e mensagem de clínica", () => {
    expect(CLINICS_WHATSAPP_HREF).toContain("5511967586911")
    expect(decodeURIComponent(CLINICS_WHATSAPP_HREF)).toMatch(/clínica/i)
  })
})
