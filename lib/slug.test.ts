import { describe, expect, it } from "vitest"
import { isValidSlug, slugify } from "@/lib/slug"

describe("slugify", () => {
  it("converte texto com acentos para slug", () => {
    expect(slugify("Clínicas Médicas e Odontológicas")).toBe("clinicas-medicas-e-odontologicas")
  })

  it("remove caracteres especiais e normaliza hifens", () => {
    expect(slugify("  Lucro  Presumido -- 2026!! ")).toBe("lucro-presumido-2026")
  })

  it("mantém números e letras minúsculas", () => {
    expect(slugify("IRPF 2026")).toBe("irpf-2026")
  })
})

describe("isValidSlug", () => {
  it("aceita slugs válidos", () => {
    expect(isValidSlug("planejamento-tributario")).toBe(true)
    expect(isValidSlug("irpf-2026")).toBe(true)
  })

  it("rejeita espaços, maiúsculas e hifens extras", () => {
    expect(isValidSlug("Planejamento Tributario")).toBe(false)
    expect(isValidSlug("-inicio")).toBe(false)
    expect(isValidSlug("fim-")).toBe(false)
    expect(isValidSlug("")).toBe(false)
  })
})
