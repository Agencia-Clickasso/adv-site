import { describe, expect, it } from "vitest"
import { SEO } from "@/lib/seo"
import { WHATSAPP_PHONE, buildTeseWhatsAppUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

describe("WHATSAPP_PHONE", () => {
  it("usa apenas dígitos, com DDI e DDD", () => {
    expect(WHATSAPP_PHONE).toBe("5511967586911")
    expect(WHATSAPP_PHONE).toBe(SEO.phoneIntl.replace(/\D/g, ""))
  })
})

describe("buildWhatsAppUrl", () => {
  it("monta a URL base quando não há mensagem", () => {
    expect(buildWhatsAppUrl()).toBe(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`)
  })

  it("codifica a mensagem no parâmetro text", () => {
    const url = buildWhatsAppUrl("Olá, vim pelo site")
    expect(url).toBe(
      `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=Ol%C3%A1%2C%20vim%20pelo%20site`
    )
    expect(url).not.toContain(" ")
  })
})

describe("buildTeseWhatsAppUrl", () => {
  it("cita a tese escolhida na mensagem", () => {
    const url = buildTeseWhatsAppUrl("Recuperação de INSS acima do teto")
    const mensagem = new URL(url).searchParams.get("text")

    expect(mensagem).toBe(
      "Olá, vim pelo site e quero analisar a tese: Recuperação de INSS acima do teto."
    )
  })
})
