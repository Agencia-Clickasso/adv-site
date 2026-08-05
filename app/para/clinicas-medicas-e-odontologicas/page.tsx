import type { Metadata } from "next"
import ClinicsLanding from "@/components/clinics-landing"
import JsonLd from "@/components/seo/json-ld"
import {
  SEO,
  buildFaqSchema,
  buildLocalOfficeSchema,
  createPageMetadata,
} from "@/lib/seo"

const PATH = "/para/clinicas-medicas-e-odontologicas"

const faqs = [
  {
    question: "Para quais clínicas a assessoria tributária faz sentido?",
    answer:
      "Clínicas médicas, odontológicas, centros de diagnóstico e operações multidisciplinares que precisam revisar regime, estrutura, carga tributária ou oportunidades de crédito com base jurídica.",
  },
  {
    question: "O que acontece na primeira análise?",
    answer:
      "A análise parte da operação real da clínica: regime tributário, estrutura societária, obrigações e documentos fiscais relevantes, para identificar riscos e caminhos de planejamento ou contencioso quando cabíveis.",
  },
  {
    question: "Vocês prometem valor de crédito recuperado?",
    answer:
      "Não. A recuperação de créditos só é avaliada quando existem fundamentos legais e documentação adequada. O trabalho começa com diagnóstico técnico, sem promessa de resultado.",
  },
  {
    question: "O atendimento é só em São Bernardo do Campo?",
    answer:
      "A base do escritório está em São Bernardo do Campo, com atendimento a clínicas do ABC, de São Paulo e de outras regiões do Brasil, conforme a necessidade do caso.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Assessoria Tributária para Clínicas Médicas e Odontológicas",
  description:
    "Diagnóstico, planejamento tributário, recuperação de créditos e consultoria preventiva para clínicas médicas e odontológicas. Advogada tributarista OAB/SP com atendimento direto.",
  path: PATH,
  keywords: [
    "planejamento tributário clínicas médicas",
    "advogada tributária clínicas odontológicas",
    "recuperação créditos tributários clínica médica",
    "consultoria tributária setor saúde",
    "regime tributário clínica lucro presumido",
    "assessoria tributária clínicas",
    "direito tributário clínicas médicas",
  ],
})

export default function ClinicasMedicasOdontologicasPage() {
  return (
    <>
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Assessoria tributária para clínicas médicas e odontológicas",
          description:
            "Diagnóstico jurídico tributário, planejamento tributário, recuperação de créditos e consultoria preventiva para clínicas de saúde.",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SEO.siteUrl}${PATH}#service`,
          serviceType: "Assessoria Tributária para Clínicas",
          name: "Soluções tributárias estratégicas para clínicas médicas e odontológicas",
          description:
            "Análise da estrutura tributária, planejamento, créditos e consultoria preventiva para clínicas médicas e odontológicas.",
          provider: {
            "@type": "LegalService",
            name: SEO.siteName,
            url: SEO.siteUrl,
            telephone: SEO.phoneIntl,
            email: SEO.email,
          },
          areaServed: ["São Bernardo do Campo", "ABC Paulista", "São Paulo", "Brasil"],
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Clínicas médicas e odontológicas",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: `${SEO.siteUrl}${PATH}`,
          },
        }}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
      <ClinicsLanding />
    </>
  )
}
