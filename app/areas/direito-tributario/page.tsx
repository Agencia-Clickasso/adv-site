import type { Metadata } from "next"
import { Calculator, FileText, Scale, Shield } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { buildTaxServiceSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-tributario")

export default function DireitoTributarioPage() {
  return (
    <AreaPage
      icon={Calculator}
      title="Advogada tributarista para empresas e profissionais"
      badge="Caderno tributário"
      intro="Atuação em planejamento tributário, execuções fiscais, consultoria preventiva e contencioso para reduzir risco, proteger patrimônio e organizar resposta jurídica com mais estratégia."
      highlights={[
        { title: "Quando procurar ajuda", description: "Quando há aumento de carga, cobrança inesperada, execução fiscal, dúvida sobre regime ou necessidade de rever operação e crédito tributário." },
        { title: "O que entra na análise", description: "Passivo fiscal, obrigações acessórias, autuações, enquadramento tributário, oportunidades de prevenção e medidas administrativas ou judiciais cabíveis." },
        { title: "Objetivo da atuação", description: "Reduzir exposição fiscal e estruturar soluções sustentáveis para caixa, operação e patrimônio." },
      ]}
      services={[
        {
          icon: Calculator,
          title: "Planejamento tributário",
          description: "Estratégias para revisar carga fiscal e decidir com mais segurança dentro da legalidade.",
          features: ["Estruturação societária", "Otimização fiscal", "Análise de regimes tributários", "Consultoria preventiva"],
        },
        {
          icon: Shield,
          title: "Defesa em execuções fiscais",
          description: "Resposta técnica para cobranças e execuções, buscando a melhor saída jurídica para o caso.",
          features: ["Defesas em execuções", "Acordos fiscais", "Suspensões de execução", "Recursos administrativos"],
        },
        {
          icon: FileText,
          title: "Consultoria fiscal",
          description: "Orientação especializada para evitar problema recorrente e organizar conformidade tributária.",
          features: ["Análise de obrigações", "Compliance tributário", "Auditorias fiscais", "Treinamentos"],
        },
        {
          icon: Scale,
          title: "Contencioso tributário",
          description: "Representação em processos administrativos e judiciais ligados a tributos.",
          features: ["Mandados de segurança", "Ações anulatórias", "Compensações tributárias", "Restituições"],
        },
      ]}
      bridgeTitle="Perguntas frequentes sobre assessoria tributária"
      bridgeText="Execução fiscal nem sempre exige a mesma resposta, planejamento não é só para empresa grande e revisão de tributo pago indevidamente depende do histórico concreto da operação. A decisão correta nasce do contexto fiscal real, não de fórmula pronta."
      bridgeCta={{ label: "Ver conteúdos do blog tributário", href: "/blog" }}
      primaryCta={{ label: "Falar sobre meu caso", href: "/#contact" }}
      secondaryCta={{ label: "Ver conteúdos tributários", href: "/blog" }}
      finalTitle="Precisa revisar sua situação fiscal com mais clareza?"
      finalText="A análise certa reduz improviso, protege patrimônio e organiza os próximos passos com base no risco real da empresa."
      finalPrimaryCta={{ label: "Solicitar atendimento", href: "/#contact" }}
      finalSecondaryCta={{ label: "Voltar ao início", href: "/" }}
    >
      <JsonLd data={buildTaxServiceSchema()} />
    </AreaPage>
  )
}
