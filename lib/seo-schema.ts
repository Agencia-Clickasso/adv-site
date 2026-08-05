import { SEO, canonicalUrl } from "@/lib/seo-site"

export function buildLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SEO.siteUrl}/#legalservice`,
    name: SEO.siteName,
    url: SEO.siteUrl,
    image: [`${SEO.siteUrl}${SEO.ogImagePath}`, `${SEO.siteUrl}/images/logo.png`],
    telephone: SEO.phoneIntl,
    email: SEO.email,
    areaServed: ["São Bernardo do Campo", "ABC Paulista", "São Paulo", "Brasil"],
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
    areaServed: ["São Bernardo do Campo", "ABC Paulista", "São Paulo", "Brasil"],
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
    areaServed: ["São Bernardo do Campo", "ABC Paulista", "São Paulo", "Brasil"],
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

export function buildLocalOfficeSchema(input: {
  path: string
  serviceName: string
  description: string
}) {
  const url = canonicalUrl(input.path)

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${url}#local-office`,
    name: SEO.siteName,
    url,
    image: `${SEO.siteUrl}/images/logo.png`,
    telephone: SEO.phoneIntl,
    email: SEO.email,
    areaServed: ["São Bernardo do Campo", "ABC Paulista", "São Paulo", "Brasil"],
    address: {
      "@type": "PostalAddress",
      ...SEO.address,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: input.serviceName,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: input.serviceName,
            description: input.description,
          },
        },
      ],
    },
    sameAs: SEO.sameAs,
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
