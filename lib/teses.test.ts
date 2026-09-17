import { describe, expect, it } from "vitest"
import { ALL_TESES, TESE_CATEGORIES, TESE_DISCLAIMER } from "@/lib/teses"

describe("catálogo de teses", () => {
  it("mantém as 39 teses distribuídas em 9 categorias", () => {
    expect(TESE_CATEGORIES).toHaveLength(9)
    expect(ALL_TESES).toHaveLength(39)
  })

  it("usa ids únicos em formato de slug", () => {
    const ids = ALL_TESES.map((tese) => tese.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true)
  })

  it("usa ids de categoria únicos, que servem de âncora na página", () => {
    const ids = TESE_CATEGORIES.map((categoria) => categoria.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids.every((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true)
  })

  it("preenche todos os campos de cada tese", () => {
    for (const tese of ALL_TESES) {
      expect(tese.title.trim().length).toBeGreaterThan(0)
      expect(tese.oportunidade.trim().length).toBeGreaterThan(0)
      expect(tese.paraQuem.trim().length).toBeGreaterThan(0)
      expect(tese.analise.trim().length).toBeGreaterThan(0)
      expect(tese.ctaLabel.trim().length).toBeGreaterThan(0)
    }
  })

  it("mantém o aviso obrigatório de análise individual", () => {
    expect(TESE_DISCLAIMER.text).toContain("não significa reconhecimento automático de direito")
    expect(TESE_DISCLAIMER.note).toContain("análise é personalizada")
  })
})
