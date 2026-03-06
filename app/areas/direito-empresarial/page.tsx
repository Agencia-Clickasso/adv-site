import type { Metadata } from "next"
import { Building, FileText, Shield, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { buildAreaServiceSchema, buildFaqSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-empresarial")

export default function DireitoEmpresarialPage() {
  return (
    <AreaPage
      icon={Building}
      title="Direito empresarial com leitura jurídica conectada à operação"
      badge="Área complementar"
      intro="Estruturação societária, contratos, governança e compliance para decisões empresariais com mais previsibilidade jurídica e conexão com o núcleo tributário do escritório."
      highlights={[
        { title: "Onde essa frente ajuda", description: "Constituição societária, revisão contratual, governança e adequação de operação com menor ruído jurídico." },
        { title: "Quando cruza com tributário", description: "Mudança societária, expansão, due diligence e contratos que alteram estrutura de risco e caixa." },
        { title: "Como a atuação entra", description: "Como apoio estratégico ao negócio, sem competir com o protagonismo tributário do escritório." },
      ]}
      services={[
        {
          icon: Building,
          title: "Constituição de empresas",
          description: "Estruturação societária adequada ao estágio e ao risco do negócio.",
          features: ["Constituição de LTDA", "Constituição de EIRELI", "Contratos sociais", "Registro na Junta Comercial"],
        },
        {
          icon: FileText,
          title: "Contratos comerciais",
          description: "Elaboração e revisão contratual para proteger relação comercial e operação.",
          features: ["Contratos de fornecimento", "Contratos de distribuição", "Contratos de franquia", "Acordos de confidencialidade"],
        },
        {
          icon: Shield,
          title: "Compliance empresarial",
          description: "Políticas e fluxos para reduzir risco regulatório e organizacional.",
          features: ["Políticas de compliance", "Gestão de riscos", "Treinamentos", "Auditorias internas"],
        },
        {
          icon: Users,
          title: "Fusões e aquisições",
          description: "Assessoria em operações de M&A do diagnóstico ao fechamento.",
          features: ["Due diligence", "Estruturação de operações", "Negociações", "Integração pós-fusão"],
        },
      ]}
      bridgeTitle="Empresarial com impacto tributário exige leitura conjunta"
      bridgeText="Constituição societária, contratos, reorganização e due diligence podem gerar efeito fiscal relevante. Quando isso acontece, a frente empresarial precisa caminhar junto com a estratégia tributária desde o início."
      bridgeCta={{ label: "Conhecer a frente tributária", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Agendar consulta empresarial", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa estruturar uma decisão empresarial com mais segurança?"
      finalText="Revisamos contratos, estrutura e risco da operação. Quando houver reflexo fiscal, o encaminhamento para o tributário já entra no mesmo fluxo."
      finalPrimaryCta={{ label: "Agendar consulta", href: "/#contact" }}
      finalSecondaryCta={{ label: "Ir para Direito Tributário", href: "/areas/direito-tributario" }}
      relatedLinks={[
        { label: "Direito tributário para empresas e profissionais", href: "/areas/direito-tributario" },
        { label: "Consultoria jurídica preventiva em São Bernardo do Campo", href: "/areas/consultoria-juridica" },
        { label: "Planejamento tributário para empresas: quando revisar e como reduzir riscos", href: "/blog/planejamento-tributario-para-empresas-como-reduzir-riscos" },
      ]}
      faqs={[
        {
          question: "Quando procurar apoio em direito empresarial?",
          answer: "Quando a empresa precisa revisar contratos, estrutura societária, compliance ou tomar decisão que pode afetar risco operacional e financeiro.",
        },
        {
          question: "Direito empresarial também pode ter impacto tributário?",
          answer: "Sim. Mudanças societárias, contratos e reorganizações podem alterar exposição fiscal e precisam de leitura conjunta com o tributário.",
        },
      ]}
    >
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "direito-empresarial",
          serviceType: "Direito Empresarial",
          name: "Consultoria em Direito Empresarial em São Bernardo do Campo",
          description:
            "Consultoria em Direito Empresarial para empresas, com apoio em contratos comerciais, compliance, estrutura societária e decisões com reflexo tributário.",
        })}
      />
      <JsonLd
        data={buildFaqSchema([
          {
            question: "Quando procurar apoio em direito empresarial?",
            answer:
              "Quando a empresa precisa revisar contratos, estrutura societária, compliance ou tomar decisão que pode afetar risco operacional e financeiro.",
          },
          {
            question: "Direito empresarial também pode ter impacto tributário?",
            answer:
              "Sim. Mudanças societárias, contratos e reorganizações podem alterar exposição fiscal e precisam de leitura conjunta com o tributário.",
          },
        ])}
      />
    </AreaPage>
  )
}
