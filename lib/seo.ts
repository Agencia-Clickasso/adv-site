import type { Metadata } from "next"

export const SEO = {
  siteName: "Lucimeire Xavier Advocacia",
  siteUrl: "https://www.lucimeirexavieradvocacia.adv.br",
  locale: "pt_BR",
  defaultTitle: "Advogada Tributarista em São Bernardo do Campo",
  defaultDescription:
    "Assessoria em Direito Tributário para empresas e profissionais em São Bernardo do Campo, com foco em planejamento tributário, execução fiscal, consultoria fiscal e prevenção de riscos tributários.",
  phoneDisplay: "(11) 96758-6911",
  phoneIntl: "+55-11-96758-6911",
  email: "contato@lucimeirexavieradvocacia.adv.br",
  address: {
    streetAddress: "Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101",
    addressLocality: "São Bernardo do Campo",
    addressRegion: "SP",
    postalCode: "09750-730",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/dra.lucimeirexavier",
    "https://www.facebook.com/share/1AuufW4tkE/",
    "https://www.linkedin.com/in/lucimeire-xavier/",
    "https://www.youtube.com/@lucimeirexavier4203",
    "https://www.tiktok.com/@lucimeirexavier",
  ],
} as const

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function canonicalUrl(path: string) {
  return new URL(path, SEO.siteUrl).toString()
}

export function createPageMetadata(input: PageMetadataInput): Metadata {
  const url = canonicalUrl(input.path)
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: input.path },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      siteName: SEO.siteName,
      title: input.title,
      description: input.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  }
}

export function createBlogPostMetadata(input: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = canonicalUrl(input.path)

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      type: "article",
      locale: SEO.locale,
      siteName: SEO.siteName,
      title: input.title,
      description: input.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  }
}

const areaPages: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "direito-tributario": {
    title: "Advogada Tributarista em São Bernardo do Campo",
    description:
      "Advogada tributarista em São Bernardo do Campo para empresas e profissionais. Atuação em planejamento tributário, consultoria fiscal, execução fiscal e contencioso tributário.",
    keywords: [
      "direito tributário",
      "advogada tributarista",
      "advogada tributarista são bernardo do campo",
      "advogado tributário são bernardo do campo",
      "planejamento tributário",
      "execução fiscal",
      "consultoria fiscal",
      "São Bernardo do Campo",
    ],
  },
  "direito-empresarial": {
    title: "Direito Empresarial em São Bernardo do Campo",
    description:
      "Consultoria em Direito Empresarial para empresas em São Bernardo do Campo, com apoio em contratos comerciais, compliance, estrutura societária e decisões com reflexo tributário.",
    keywords: ["direito empresarial", "advogado empresarial são bernardo do campo", "contratos comerciais", "compliance empresarial"],
  },
  "direito-civil": {
    title: "Direito Civil e Contratos em São Bernardo do Campo",
    description:
      "Atuação em Direito Civil com suporte em contratos, responsabilidade civil e proteção patrimonial, com atendimento em São Bernardo do Campo.",
    keywords: ["direito civil", "advogado civil são bernardo do campo", "contratos civis", "responsabilidade civil"],
  },
  "direito-imobiliario": {
    title: "Direito Imobiliário em São Bernardo do Campo",
    description:
      "Assessoria em Direito Imobiliário para compra e venda, locações e regularização de imóveis em São Bernardo do Campo, com atenção a risco patrimonial e impacto tributário.",
    keywords: ["direito imobiliário", "advogado imobiliário são bernardo do campo", "compra e venda de imóveis", "locação", "regularização"],
  },
  "direito-trabalhista": {
    title: "Direito Trabalhista em São Bernardo do Campo",
    description:
      "Atendimento em Direito Trabalhista para rescisões, ações trabalhistas e consultoria preventiva em São Bernardo do Campo, com foco em redução de passivo e organização da operação.",
    keywords: ["direito trabalhista", "advogado trabalhista são bernardo do campo", "ações trabalhistas", "consultoria trabalhista"],
  },
  "direito-processual": {
    title: "Direito Processual e Estratégia Processual",
    description:
      "Representação em processos judiciais e administrativos, com foco em estratégia processual, recursos, execuções e disputas com impacto tributário em São Bernardo do Campo.",
    keywords: ["direito processual", "advogado processual são bernardo do campo", "ações judiciais", "recursos", "execuções"],
  },
  "consultoria-juridica": {
    title: "Consultoria Jurídica Preventiva em São Bernardo do Campo",
    description:
      "Consultoria jurídica preventiva para empresas e profissionais, com pareceres, due diligence e suporte estratégico em São Bernardo do Campo.",
    keywords: ["consultoria jurídica", "consultoria jurídica empresarial", "parecer jurídico", "due diligence"],
  },
}

export function createAreaMetadata(slug: keyof typeof areaPages): Metadata {
  const data = areaPages[slug]
  return createPageMetadata({
    title: data.title,
    description: data.description,
    path: `/areas/${slug}`,
    keywords: data.keywords,
  })
}

export function buildLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SEO.siteUrl}/#legalservice`,
    name: SEO.siteName,
    url: SEO.siteUrl,
    image: `${SEO.siteUrl}/images/logo.png`,
    telephone: SEO.phoneIntl,
    email: SEO.email,
    areaServed: ["São Bernardo do Campo", "São Paulo", "Brasil"],
    serviceType: [
      "Direito Tributário",
      "Planejamento Tributário",
      "Consultoria Fiscal",
      "Contencioso Tributário",
    ],
    address: {
      "@type": "PostalAddress",
      ...SEO.address,
    },
    sameAs: SEO.sameAs,
  }
}

export function buildTaxServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SEO.siteUrl}/areas/direito-tributario#service`,
    serviceType: "Direito Tributário",
    name: "Assessoria em Direito Tributário",
    provider: {
      "@type": "LegalService",
      name: SEO.siteName,
      url: SEO.siteUrl,
    },
    areaServed: ["São Bernardo do Campo", "São Paulo", "Brasil"],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SEO.siteUrl}/areas/direito-tributario`,
    },
    description:
      "Assessoria tributária para planejamento tributário, execuções fiscais, consultoria fiscal e contencioso tributário para empresas e profissionais.",
  }
}

export function buildAreaServiceSchema(input: {
  slug: string
  serviceType: string
  name: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SEO.siteUrl}/areas/${input.slug}#service`,
    serviceType: input.serviceType,
    name: input.name,
    provider: {
      "@type": "LegalService",
      name: SEO.siteName,
      url: SEO.siteUrl,
    },
    areaServed: ["São Bernardo do Campo", "São Paulo", "Brasil"],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SEO.siteUrl}/areas/${input.slug}`,
    },
    description: input.description,
  }
}

export function buildBlogPostingSchema(input: {
  title: string
  description: string
  slug: string
  datePublished: string
  author?: string
  category?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: "pt-BR",
    articleSection: input.category,
    author: {
      "@type": "Person",
      name: input.author || "Dra. Lucimeire Xavier",
    },
    publisher: {
      "@type": "Organization",
      name: SEO.siteName,
      url: SEO.siteUrl,
    },
    mainEntityOfPage: canonicalUrl(`/blog/${input.slug}`),
    url: canonicalUrl(`/blog/${input.slug}`),
  }
}

export function buildFaqSchema(
  questions: Array<{
    question: string
    answer: string
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
