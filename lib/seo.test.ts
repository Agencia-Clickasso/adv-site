import { describe, expect, it } from "vitest"
import { SEO, buildFaqSchema, canonicalUrl, createPageMetadata } from "@/lib/seo"

describe("canonicalUrl", () => {
  it("monta URL absoluta com o domínio canônico", () => {
    expect(canonicalUrl("/blog")).toBe(`${SEO.siteUrl}/blog`)
    expect(canonicalUrl("/para/clinicas-medicas-e-odontologicas")).toBe(
      `${SEO.siteUrl}/para/clinicas-medicas-e-odontologicas`
    )
  })
})

describe("createPageMetadata", () => {
  it("gera metadata com title, description e open graph", () => {
    const meta = createPageMetadata({
      title: "Teste",
      description: "Descrição de teste",
      path: "/blog",
      keywords: ["tributário"],
    })

    expect(meta.title).toBe("Teste")
    expect(meta.description).toBe("Descrição de teste")
    expect(meta.keywords).toEqual(["tributário"])
    expect(meta.alternates?.canonical).toBe("/blog")
    expect(meta.openGraph?.url).toBe(`${SEO.siteUrl}/blog`)
  })
})

describe("buildFaqSchema", () => {
  it("gera schema FAQPage válido", () => {
    const schema = buildFaqSchema([{ question: "Pergunta?", answer: "Resposta." }])

    expect(schema["@type"]).toBe("FAQPage")
    expect(schema.mainEntity).toHaveLength(1)
    expect(schema.mainEntity[0]).toMatchObject({
      "@type": "Question",
      name: "Pergunta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Resposta.",
      },
    })
  })
})
