import { describe, expect, it } from "vitest"
import {
  AREA_SERVED,
  SEO,
  buildFaqSchema,
  buildItemListSchema,
  buildServiceSchema,
  canonicalUrl,
  createAreaMetadata,
  createBlogPostMetadata,
  createPageMetadata,
} from "@/lib/seo"
import { ALL_TESES } from "@/lib/teses"

describe("canonicalUrl", () => {
  it("monta URL absoluta com o domínio canônico", () => {
    expect(canonicalUrl("/blog")).toBe(`${SEO.siteUrl}/blog`)
    expect(canonicalUrl("/teses-e-oportunidades-tributarias")).toBe(
      `${SEO.siteUrl}/teses-e-oportunidades-tributarias`
    )
  })
})

describe("AREA_SERVED", () => {
  it("cobre a base, o ABC, a capital e a Grande São Paulo", () => {
    expect(AREA_SERVED).toEqual(
      expect.arrayContaining([
        "São Bernardo do Campo",
        "ABC Paulista",
        "São Paulo",
        "Grande São Paulo",
        "Interior de São Paulo",
      ])
    )
  })
})

describe("endereço e mapa", () => {
  it("monta o endereço completo em uma linha", () => {
    expect(SEO.fullAddress).toContain(SEO.address.streetAddress)
    expect(SEO.fullAddress).toContain(SEO.address.addressLocality)
    expect(SEO.fullAddress).toContain(SEO.address.postalCode)
  })

  it("gera URL de busca do Google Maps com o endereço codificado", () => {
    expect(SEO.mapsUrl.startsWith("https://www.google.com/maps/search/?api=1&query=")).toBe(true)
    expect(SEO.mapsUrl).not.toContain(" ")
    expect(decodeURIComponent(SEO.mapsUrl)).toContain(SEO.address.addressLocality)
  })
})

describe("createPageMetadata", () => {
  it("gera metadata com title, description, canonical e open graph", () => {
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

  it("publica a imagem de preview em open graph e twitter", () => {
    const meta = createPageMetadata({ title: "Teste", description: "Descrição", path: "/" })

    expect(meta.openGraph?.images).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: SEO.ogImagePath, width: 1200, height: 630 }),
      ])
    )
    expect(meta.twitter?.images).toEqual([SEO.ogImagePath])
  })
})

describe("createBlogPostMetadata", () => {
  it("usa open graph do tipo article e mantém a imagem de preview", () => {
    const meta = createBlogPostMetadata({
      title: "Post",
      description: "Descrição",
      path: "/blog/post",
    })

    expect(meta.openGraph).toMatchObject({ type: "article" })
    expect(meta.twitter?.images).toEqual([SEO.ogImagePath])
  })
})

describe("createAreaMetadata", () => {
  it("resolve as áreas novas pelo slug", () => {
    expect(createAreaMetadata("direito-previdenciario").alternates?.canonical).toBe(
      "/areas/direito-previdenciario"
    )
    expect(createAreaMetadata("inventario").alternates?.canonical).toBe("/areas/inventario")
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

describe("buildServiceSchema", () => {
  it("aponta o @id e a oferta para o path informado", () => {
    const schema = buildServiceSchema({
      path: "/advogada-tributarista-sao-paulo",
      serviceType: "Direito Tributário",
      name: "Advocacia tributária",
      description: "Descrição",
    })

    expect(schema["@id"]).toBe(`${SEO.siteUrl}/advogada-tributarista-sao-paulo#service`)
    expect(schema.offers.url).toBe(`${SEO.siteUrl}/advogada-tributarista-sao-paulo`)
    expect(schema.areaServed).toBe(AREA_SERVED)
  })
})

describe("buildItemListSchema", () => {
  it("numera as teses a partir de 1 e informa o total", () => {
    const schema = buildItemListSchema({
      path: "/teses-e-oportunidades-tributarias",
      name: "Teses",
      description: "Descrição",
      items: ALL_TESES.map((tese) => ({ name: tese.title })),
    })

    expect(schema.numberOfItems).toBe(ALL_TESES.length)
    expect(schema.itemListElement[0]).toEqual({
      "@type": "ListItem",
      position: 1,
      name: ALL_TESES[0].title,
    })
    expect(schema.itemListElement.at(-1)?.position).toBe(ALL_TESES.length)
  })
})
