import type { Metadata } from "next"
import { FileText, Scale, Shield, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { buildAreaServiceSchema, buildFaqSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-civil")

export default function DireitoCivilPage() {
  return (
    <AreaPage
      icon={Users}
      title="Direito civil para contratos, responsabilidade e proteção patrimonial"
      badge="Área complementar"
      intro="Atuação civil voltada para contratos, responsabilidade e prevenção de litígios. Esta frente complementa o trabalho com empresas e decisões estratégicas que também impactam patrimônio e operação."
      highlights={[
        { title: "Onde essa área entra", description: "Na revisão contratual, em disputas patrimoniais e em conflitos que exigem previsibilidade jurídica." },
        { title: "Quando cruza com tributário", description: "Quando a estrutura contratual ou o conflito patrimonial traz consequência fiscal para sócios ou empresa." },
        { title: "Objetivo prático", description: "Reduzir desgaste, custo e improviso antes que o conflito se agrave." },
      ]}
      services={[
        {
          icon: FileText,
          title: "Contratos civis",
          description: "Elaboração, revisão e análise de contratos para proteger interesses e reduzir ruído futuro.",
          features: ["Contratos de compra e venda", "Contratos de prestação de serviços", "Contratos de locação", "Contratos de doação"],
        },
        {
          icon: Shield,
          title: "Responsabilidade civil",
          description: "Atuação em danos morais, materiais e outras hipóteses de reparação.",
          features: ["Danos morais", "Danos materiais", "Responsabilidade civil objetiva", "Indenizações"],
        },
        {
          icon: Users,
          title: "Direitos da personalidade",
          description: "Proteção jurídica de honra, imagem, privacidade e identidade.",
          features: ["Direito à honra", "Direito à imagem", "Direito à privacidade", "Direito ao nome"],
        },
        {
          icon: Scale,
          title: "Direito de família",
          description: "Assessoria em questões familiares com atenção a patrimônio e organização da decisão.",
          features: ["Divórcios", "Guarda de filhos", "Inventários", "Alimentos"],
        },
      ]}
      bridgeTitle="Quando Direito Civil e Tributário se cruzam"
      bridgeText="Estruturação contratual, passivos entre sócios, cobranças e disputas patrimoniais podem exigir leitura conjunta do risco civil e fiscal. Nesses casos, a orientação tributária precisa entrar cedo."
      bridgeCta={{ label: "Conhecer a área tributária", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Falar sobre o caso", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa revisar um contrato ou conflito civil?"
      finalText="A análise certa no início reduz desgaste, custo e exposição. Se houver impacto patrimonial ou empresarial, a frente tributária entra junto na leitura do caso."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar com tributário", href: "/areas/direito-tributario" }}
      relatedLinks={[
        { label: "Direito empresarial em São Bernardo do Campo", href: "/areas/direito-empresarial" },
        { label: "Direito tributário para empresas e profissionais", href: "/areas/direito-tributario" },
        { label: "Blog de Direito Tributário para Empresas", href: "/blog" },
      ]}
      faqs={[
        {
          question: "Quando buscar apoio em direito civil?",
          answer: "Quando há necessidade de revisar contratos, lidar com responsabilidade civil, proteger patrimônio ou organizar um conflito antes que ele escale.",
        },
        {
          question: "Direito civil pode se conectar com tributário?",
          answer: "Sim. Em contratos, disputas patrimoniais e relações entre sócios, o reflexo fiscal pode ser relevante e precisa entrar cedo na análise.",
        },
      ]}
    >
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "direito-civil",
          serviceType: "Direito Civil",
          name: "Atuação em Direito Civil em São Bernardo do Campo",
          description:
            "Atuação em Direito Civil com suporte em contratos, responsabilidade civil e proteção patrimonial.",
        })}
      />
      <JsonLd
        data={buildFaqSchema([
          {
            question: "Quando buscar apoio em direito civil?",
            answer:
              "Quando há necessidade de revisar contratos, lidar com responsabilidade civil, proteger patrimônio ou organizar um conflito antes que ele escale.",
          },
          {
            question: "Direito civil pode se conectar com tributário?",
            answer:
              "Sim. Em contratos, disputas patrimoniais e relações entre sócios, o reflexo fiscal pode ser relevante e precisa entrar cedo na análise.",
          },
        ])}
      />
    </AreaPage>
  )
}
