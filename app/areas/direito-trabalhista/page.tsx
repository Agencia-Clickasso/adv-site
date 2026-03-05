import type { Metadata } from "next"
import { FileText, Scale, Shield, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-trabalhista")

export default function DireitoTrabalhistaPage() {
  return (
    <AreaPage
      icon={FileText}
      title="Direito trabalhista para reduzir passivo e organizar rotina empresarial"
      badge="Área complementar"
      intro="Orientação trabalhista para reduzir passivo, revisar rotinas e responder a disputas com mais segurança. Para empresas, essa frente ganha valor quando alinhada à organização tributária e ao custo real da operação."
      highlights={[
        { title: "Onde entra", description: "Na prevenção de litígio, revisão documental e organização de relações de trabalho." },
        { title: "Quando cruza com tributário", description: "Quando o passivo trabalhista afeta caixa, encargos e estrutura financeira da empresa." },
        { title: "Leitura prática", description: "Corrigir cedo quase sempre custa menos do que reagir depois." },
      ]}
      services={[
        {
          icon: FileText,
          title: "Rescisões contratuais",
          description: "Assessoria em processos de demissão, cálculos rescisórios e acordos.",
          features: ["Cálculo de verbas rescisórias", "Acordos trabalhistas", "Demissões por justa causa", "Demissões sem justa causa"],
        },
        {
          icon: Shield,
          title: "Ações trabalhistas",
          description: "Defesa dos direitos e interesses em todas as instâncias da Justiça do Trabalho.",
          features: ["Reclamações trabalhistas", "Recursos trabalhistas", "Execuções trabalhistas", "Defesas em processos"],
        },
        {
          icon: Users,
          title: "Consultoria preventiva",
          description: "Orientações para reduzir risco trabalhista e manter conformidade nas rotinas internas.",
          features: ["Revisão de contratos", "Políticas internas", "Treinamentos", "Auditorias trabalhistas"],
        },
        {
          icon: Scale,
          title: "Direitos coletivos",
          description: "Assessoria em negociações, acordos e convenções coletivas.",
          features: ["Negociações coletivas", "Acordos coletivos", "Convenções coletivas", "Sindicatos"],
        },
      ]}
      bridgeTitle="Passivo trabalhista também afeta caixa e planejamento fiscal"
      bridgeText="Empresas que acumulam risco trabalhista normalmente convivem com impacto financeiro e reflexos tributários na operação. Por isso, a análise pode evoluir para um diagnóstico mais amplo da estrutura."
      bridgeCta={{ label: "Ver diagnóstico tributário", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Avaliar risco trabalhista", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa reduzir risco trabalhista antes que vire passivo?"
      finalText="Revisar rotina, contratos e contingências antes do litígio costuma custar menos do que corrigir depois. Quando o caso tocar estrutura fiscal, a frente tributária entra no mesmo fluxo."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar com tributário", href: "/areas/direito-tributario" }}
    />
  )
}
