import type { Metadata } from "next"
import { Calculator, FileText, Scale, Shield } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { SEO, buildAreaServiceSchema, buildFaqSchema, buildLocalOfficeSchema, buildTaxServiceSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-tributario")

export default function DireitoTributarioPage() {
  return (
    <AreaPage
      icon={Calculator}
      title="Advogada tributarista em São Bernardo do Campo para empresas e profissionais do ABC"
      badge="Caderno tributário"
      intro="Atuação em planejamento tributário, execuções fiscais, consultoria preventiva e contencioso para reduzir risco, proteger patrimônio e organizar resposta jurídica com mais estratégia para empresas e profissionais em São Bernardo do Campo e no ABC."
      highlights={[
        { title: "Quando procurar ajuda", description: "Quando há aumento de carga, cobrança inesperada, execução fiscal, dúvida sobre regime ou necessidade de rever operação e crédito tributário em São Bernardo do Campo ou no ABC." },
        { title: "O que entra na análise", description: "Passivo fiscal, obrigações acessórias, autuações, enquadramento tributário, oportunidades de prevenção e medidas administrativas ou judiciais cabíveis." },
        { title: "Objetivo da atuação", description: "Reduzir exposição fiscal e estruturar soluções sustentáveis para caixa, operação e patrimônio com leitura local e visão de negócio." },
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
      bridgeTitle="Perguntas frequentes sobre consultoria tributária para empresas no ABC"
      bridgeText="Execução fiscal nem sempre exige a mesma resposta, planejamento não é só para empresa grande e revisão de tributo pago indevidamente depende do histórico concreto da operação. A decisão correta nasce do contexto fiscal real da empresa, com leitura jurídica local e estratégia tributária consistente."
      bridgeCta={{ label: "Ver conteúdos do blog tributário", href: "/blog" }}
      primaryCta={{ label: "Solicitar atendimento tributário", href: "/#contact" }}
      secondaryCta={{ label: "Ver consultoria tributária para empresas", href: "/blog" }}
      finalTitle="Precisa revisar sua situação fiscal com mais clareza em São Bernardo do Campo?"
      finalText="A análise certa reduz improviso, protege patrimônio e organiza os próximos passos com base no risco real da empresa, com atendimento em São Bernardo do Campo e suporte para operações de toda a região do ABC."
      finalPrimaryCta={{ label: "Agendar análise tributária", href: "/#contact" }}
      finalSecondaryCta={{ label: "Voltar ao início", href: "/" }}
      localDetails={[
        { title: "Endereço", value: `${SEO.address.streetAddress}\nCentro - ${SEO.address.addressLocality} - ${SEO.address.addressRegion}` },
        { title: "Telefone", value: SEO.phoneDisplay },
        { title: "Cidade-base", value: "São Bernardo do Campo com atendimento tributário para empresas do ABC." },
        { title: "Atendimento", value: "Segunda a Sexta, das 8h às 18h. Sábado, das 8h às 12h." },
      ]}
      relatedLinks={[
        { label: "Planejamento tributário para empresas: quando revisar e como reduzir riscos", href: "/blog/planejamento-tributario-para-empresas-como-reduzir-riscos" },
        { label: "Execução fiscal para empresas: o que fazer nos primeiros dias", href: "/blog/defesa-em-execucao-fiscal-estrategias-para-empresas" },
        { label: "Consultoria fiscal para empresas: quando contratar antes da autuação", href: "/blog/consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita" },
      ]}
      faqs={[
        {
          question: "Quando vale procurar uma advogada tributarista?",
          answer: "Quando a empresa enfrenta cobrança tributária, dúvida sobre regime, execução fiscal, autuação ou necessidade de revisar a estrutura tributária com mais segurança em São Bernardo do Campo ou no ABC.",
        },
        {
          question: "Planejamento tributário serve apenas para empresas grandes?",
          answer: "Não. Empresas de diferentes portes podem revisar regime, operação e obrigações para reduzir risco e evitar pagamento indevido dentro da legalidade.",
        },
        {
          question: "Execução fiscal sempre exige processo longo?",
          answer: "Não necessariamente. A estratégia depende da fase da cobrança, dos documentos, da existência de garantia e das alternativas administrativas ou judiciais disponíveis.",
        },
        {
          question: "Vocês atendem apenas São Bernardo do Campo?",
          answer: "A base do escritório está em São Bernardo do Campo, com atendimento tributário para empresas e profissionais do ABC e suporte estratégico conforme a necessidade do caso.",
        },
      ]}
    >
      <JsonLd data={buildTaxServiceSchema()} />
      <JsonLd
        data={buildLocalOfficeSchema({
          path: "/areas/direito-tributario",
          serviceName: "Consultoria tributária para empresas",
          description:
            "Assessoria tributária em São Bernardo do Campo para planejamento tributário, consultoria fiscal preventiva, execução fiscal e contencioso tributário.",
        })}
      />
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "direito-tributario",
          serviceType: "Direito Tributário",
          name: "Advogada Tributarista em São Bernardo do Campo",
          description:
            "Assessoria em Direito Tributário para empresas e profissionais em São Bernardo do Campo e no ABC, com foco em planejamento tributário, consultoria fiscal, execução fiscal e contencioso tributário.",
        })}
      />
      <JsonLd
        data={buildFaqSchema([
          {
            question: "Quando vale procurar uma advogada tributarista?",
            answer:
              "Quando a empresa enfrenta cobrança tributária, dúvida sobre regime, execução fiscal, autuação ou necessidade de revisar a estrutura tributária com mais segurança em São Bernardo do Campo ou no ABC.",
          },
          {
            question: "Planejamento tributário serve apenas para empresas grandes?",
            answer:
              "Não. Empresas de diferentes portes podem revisar regime, operação e obrigações para reduzir risco e evitar pagamento indevido dentro da legalidade.",
          },
          {
            question: "Execução fiscal sempre exige processo longo?",
            answer:
              "Não necessariamente. A estratégia depende da fase da cobrança, dos documentos, da existência de garantia e das alternativas administrativas ou judiciais disponíveis.",
          },
          {
            question: "Vocês atendem apenas São Bernardo do Campo?",
            answer:
              "A base do escritório está em São Bernardo do Campo, com atendimento tributário para empresas e profissionais do ABC e suporte estratégico conforme a necessidade do caso.",
          },
        ])}
      />
    </AreaPage>
  )
}
