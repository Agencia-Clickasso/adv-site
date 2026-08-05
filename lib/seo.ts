import type { Metadata } from "next"
import { SEO, canonicalUrl, defaultOgImages } from "@/lib/seo-site"

export { SEO, canonicalUrl, defaultOgImages } from "@/lib/seo-site"

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
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
      images: [...defaultOgImages],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [SEO.ogImagePath],
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
      images: [...defaultOgImages],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [SEO.ogImagePath],
    },
  }
}

const areaPages: Record<string, { title: string; description: string; keywords: string[] }> = {
  "direito-tributario": {
    title: "Advogada Tributarista em São Bernardo do Campo",
    description:
      "Advogada tributarista em São Bernardo do Campo e no ABC para empresas e profissionais. Atuação em planejamento tributário, consultoria fiscal, execução fiscal e contencioso tributário.",
    keywords: [
      "direito tributário",
      "advogada tributarista",
      "advogada tributarista são bernardo do campo",
      "advogado tributário são bernardo do campo",
      "advogada tributarista abc",
      "consultoria tributária abc",
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
    keywords: [
      "direito empresarial",
      "advogado empresarial são bernardo do campo",
      "contratos comerciais",
      "compliance empresarial",
    ],
  },
  "direito-civil": {
    title: "Direito Civil e Contratos em São Bernardo do Campo",
    description:
      "Atuação em Direito Civil com suporte em contratos, responsabilidade civil e proteção patrimonial, com atendimento em São Bernardo do Campo.",
    keywords: [
      "direito civil",
      "advogado civil são bernardo do campo",
      "contratos civis",
      "responsabilidade civil",
    ],
  },
  "direito-imobiliario": {
    title: "Direito Imobiliário em São Bernardo do Campo",
    description:
      "Assessoria em Direito Imobiliário para compra e venda, locações e regularização de imóveis em São Bernardo do Campo, com atenção a risco patrimonial e impacto tributário.",
    keywords: [
      "direito imobiliário",
      "advogado imobiliário são bernardo do campo",
      "compra e venda de imóveis",
      "locação",
      "regularização",
    ],
  },
  "direito-trabalhista": {
    title: "Direito Trabalhista em São Bernardo do Campo",
    description:
      "Atendimento em Direito Trabalhista para rescisões, ações trabalhistas e consultoria preventiva em São Bernardo do Campo, com foco em redução de passivo e organização da operação.",
    keywords: [
      "direito trabalhista",
      "advogado trabalhista são bernardo do campo",
      "ações trabalhistas",
      "consultoria trabalhista",
    ],
  },
  "direito-processual": {
    title: "Direito Processual e Estratégia Processual",
    description:
      "Representação em processos judiciais e administrativos, com foco em estratégia processual, recursos, execuções e disputas com impacto tributário em São Bernardo do Campo.",
    keywords: [
      "direito processual",
      "advogado processual são bernardo do campo",
      "ações judiciais",
      "recursos",
      "execuções",
    ],
  },
  "consultoria-juridica": {
    title: "Consultoria Jurídica Preventiva em São Bernardo do Campo",
    description:
      "Consultoria jurídica preventiva para empresas e profissionais, com pareceres, due diligence e suporte estratégico em São Bernardo do Campo.",
    keywords: [
      "consultoria jurídica",
      "consultoria jurídica empresarial",
      "parecer jurídico",
      "due diligence",
    ],
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

// JSON-LD builders live in seo-schema (keep this file under agent size budget).
export {
  buildLegalServiceSchema,
  buildTaxServiceSchema,
  buildAreaServiceSchema,
  buildBlogPostingSchema,
  buildLocalOfficeSchema,
  buildFaqSchema,
} from "@/lib/seo-schema"
