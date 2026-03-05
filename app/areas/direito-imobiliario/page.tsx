import type { Metadata } from "next"
import { FileText, Home, Scale, Shield } from "lucide-react"
import AreaPage from "@/components/area-page"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-imobiliario")

export default function DireitoImobiliarioPage() {
  return (
    <AreaPage
      icon={Home}
      title="Direito imobiliário para operações com proteção documental e patrimonial"
      badge="Área complementar"
      intro="Apoio jurídico para compra, locação, regularização e proteção patrimonial em operações imobiliárias. Esta atuação complementa o tributário especialmente quando há reflexo fiscal ou patrimonial relevante."
      highlights={[
        { title: "Onde a área ajuda", description: "Na compra, venda, locação e regularização com menos risco documental e contratual." },
        { title: "Quando cruza com tributário", description: "Quando a operação mexe com ITBI, ganho de capital, holdings ou organização patrimonial." },
        { title: "Leitura de risco", description: "Evitar olhar parcial sobre uma operação imobiliária que também tem efeito fiscal." },
      ]}
      services={[
        {
          icon: Home,
          title: "Compra e venda",
          description: "Assessoria em transações imobiliárias da negociação à escrituração.",
          features: ["Análise de documentos", "Negociações", "Elaboração de contratos", "Escrituração"],
        },
        {
          icon: FileText,
          title: "Locações",
          description: "Contratos, renovações e conflitos locatícios com maior previsibilidade jurídica.",
          features: ["Contratos de locação", "Renovações", "Despejos", "Revisões de aluguel"],
        },
        {
          icon: Shield,
          title: "Regularização fundiária",
          description: "Processos de regularização de imóveis e organização de documentação dominial.",
          features: ["Usucapião", "Desapropriação", "Regularização de terras", "Certidões"],
        },
        {
          icon: Scale,
          title: "Direito condominial",
          description: "Assessoria em convenções, administração e conflitos condominiais.",
          features: ["Convenções condominiais", "Administração", "Contenciosos", "Assembleias"],
        },
      ]}
      bridgeTitle="Imóveis também pedem leitura tributária"
      bridgeText="Compra e venda, holdings, locação e regularização podem afetar ITBI, ganho de capital e organização patrimonial. O encaminhamento para a área tributária evita leitura incompleta da operação."
      bridgeCta={{ label: "Entender o impacto tributário", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Analisar operação imobiliária", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Vai comprar, vender ou regularizar um imóvel?"
      finalText="Revisar a operação antes da assinatura reduz risco contratual e custo de correção. Se houver efeito fiscal, a análise segue integrada com a frente tributária."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar com tributário", href: "/areas/direito-tributario" }}
    />
  )
}
