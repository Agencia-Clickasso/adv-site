import type { Metadata } from "next"
import { Briefcase, FileText, Shield, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("consultoria-juridica")

export default function ConsultoriaJuridicaPage() {
  return (
    <AreaPage
      icon={Briefcase}
      title="Consultoria jurídica para decidir antes que o problema vire passivo"
      badge="Área complementar"
      intro="Consultoria preventiva para empresas e profissionais que precisam revisar documentos, processos e decisões com clareza. O eixo prioritário continua sendo tributário, com esta frente apoiando análise contratual e compliance."
      highlights={[
        { title: "Onde ganha valor", description: "Na prevenção, na revisão de documentos e na organização de decisões que ainda podem ser corrigidas a tempo." },
        { title: "Quando escalar", description: "Quando o tema envolve tributos, obrigações acessórias, contrato com reflexo fiscal ou reorganização empresarial." },
        { title: "Papel da consultoria", description: "Funcionar como porta de entrada para um diagnóstico mais completo e estratégico." },
      ]}
      services={[
        {
          icon: FileText,
          title: "Pareceres jurídicos",
          description: "Análises técnicas sobre pontos específicos para orientar decisão com fundamento.",
          features: ["Análise de contratos", "Interpretação de leis", "Orientação sobre procedimentos", "Pareceres técnicos"],
        },
        {
          icon: Shield,
          title: "Consultoria preventiva",
          description: "Organização documental e conformidade para reduzir retrabalho e risco.",
          features: ["Revisão de documentos", "Políticas internas", "Compliance legal", "Auditorias preventivas"],
        },
        {
          icon: Briefcase,
          title: "Due diligence",
          description: "Leitura completa de empresa ou ativo para mapear risco e oportunidade.",
          features: ["Análise societária", "Verificação de contratos", "Análise de riscos", "Relatórios detalhados"],
        },
        {
          icon: Users,
          title: "Treinamentos e capacitação",
          description: "Programas internos para equipes em temas jurídicos sensíveis ao negócio.",
          features: ["Treinamentos in company", "Workshops especializados", "Material didático", "Acompanhamento"],
        },
      ]}
      bridgeTitle="A consultoria ganha valor quando inclui leitura tributária"
      bridgeText="Revisão preventiva perde eficácia quando deixa de fora impacto fiscal, obrigações acessórias e risco de autuação. Por isso, a consultoria aqui funciona como entrada para uma análise mais completa."
      bridgeCta={{ label: "Ver diagnóstico tributário", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Solicitar consultoria", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa decidir antes que o problema vire passivo?"
      finalText="Uma boa consulta preventiva reduz retrabalho, exposição e custo de correção. Se a decisão envolver tributos, a análise segue integrada com a frente principal do escritório."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar com tributário", href: "/areas/direito-tributario" }}
    />
  )
}
