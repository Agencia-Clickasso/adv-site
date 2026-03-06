import type { Metadata } from "next"
import { FileText, Gavel, Scale, Shield } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { buildAreaServiceSchema, buildFaqSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-processual")

export default function DireitoProcessualPage() {
  return (
    <AreaPage
      icon={Gavel}
      title="Direito processual para disputas que exigem estratégia e leitura de risco"
      badge="Área complementar"
      intro="Atuação processual para defesa técnica em litígios judiciais e administrativos. Nesta frente, o foco é sustentar disputas estratégicas, inclusive quando envolvem cobrança, execução fiscal e contencioso ligado à operação empresarial."
      highlights={[
        { title: "Onde essa frente entra", description: "Na definição da estratégia de ação, defesa, recurso e execução com menos improviso." },
        { title: "Quando cruza com tributário", description: "Quando a disputa envolve cobrança fiscal, defesa administrativa, garantia ou tese tributária." },
        { title: "Ponto central", description: "Processo é meio de resposta, não solução isolada do problema econômico." },
      ]}
      services={[
        {
          icon: Gavel,
          title: "Ações judiciais",
          description: "Representação em processos judiciais com condução técnica em todas as instâncias.",
          features: ["Petições iniciais", "Contestação", "Recursos", "Execuções"],
        },
        {
          icon: FileText,
          title: "Recursos",
          description: "Formulação recursal para manter ou reverter posicionamento estratégico do caso.",
          features: ["Recursos ordinários", "Recursos especiais", "Recursos extraordinários", "Embargos"],
        },
        {
          icon: Shield,
          title: "Execuções",
          description: "Atuação em execuções judiciais, inclusive quando há necessidade de reação rápida.",
          features: ["Execuções judiciais", "Execuções fiscais", "Execuções trabalhistas", "Embargos à execução"],
        },
        {
          icon: Scale,
          title: "Processos administrativos",
          description: "Representação perante órgãos públicos e autarquias em contencioso administrativo.",
          features: ["Defesas administrativas", "Recursos administrativos", "Mandados de segurança", "Ações populares"],
        },
      ]}
      bridgeTitle="Execução fiscal não é apenas processo"
      bridgeText="Quando a disputa envolve cobrança tributária, garantia, parcelamento ou defesa administrativa, a estratégia processual precisa caminhar junto com a tese fiscal. É nesse ponto que o tributário assume protagonismo."
      bridgeCta={{ label: "Conhecer a atuação tributária", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Avaliar estratégia processual", href: "/#contact" }}
      secondaryCta={{ label: "Ver contencioso tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa definir a melhor estratégia para um processo?"
      finalText="A resposta errada aumenta custo, demora e exposição. Em demandas com componente fiscal, a condução considera desde o início o impacto tributário do caso."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Ir para Direito Tributário", href: "/areas/direito-tributario" }}
      relatedLinks={[
        { label: "Execução fiscal para empresas: o que fazer nos primeiros dias", href: "/blog/defesa-em-execucao-fiscal-estrategias-para-empresas" },
        { label: "Como suspender execução fiscal da empresa: medidas possíveis e o que avaliar", href: "/blog/como-suspender-execucao-fiscal-para-empresa" },
        { label: "Direito tributário para empresas e profissionais", href: "/areas/direito-tributario" },
      ]}
      faqs={[
        {
          question: "Quando procurar apoio em direito processual?",
          answer: "Quando já existe disputa judicial ou administrativa, ou quando a resposta processual precisa ser definida com rapidez para evitar perda de prazo e aumento de exposição.",
        },
        {
          question: "Processo com cobrança fiscal exige análise tributária junto?",
          answer: "Sim. Quando o litígio envolve cobrança tributária, execução fiscal ou tese fiscal, a estratégia processual precisa caminhar junto com o tributário.",
        },
      ]}
    >
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "direito-processual",
          serviceType: "Direito Processual",
          name: "Estratégia Processual em São Bernardo do Campo",
          description:
            "Representação em processos judiciais e administrativos, com foco em estratégia processual, recursos, execuções e disputas com impacto tributário.",
        })}
      />
      <JsonLd
        data={buildFaqSchema([
          {
            question: "Quando procurar apoio em direito processual?",
            answer:
              "Quando já existe disputa judicial ou administrativa, ou quando a resposta processual precisa ser definida com rapidez para evitar perda de prazo e aumento de exposição.",
          },
          {
            question: "Processo com cobrança fiscal exige análise tributária junto?",
            answer:
              "Sim. Quando o litígio envolve cobrança tributária, execução fiscal ou tese fiscal, a estratégia processual precisa caminhar junto com o tributário.",
          },
        ])}
      />
    </AreaPage>
  )
}
