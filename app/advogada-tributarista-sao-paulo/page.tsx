import type { Metadata } from "next"
import { Building2, FileSearch, Landmark, TrendingUp, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { SEO, buildFaqSchema, buildLocalOfficeSchema, buildServiceSchema, createPageMetadata } from "@/lib/seo"

const PATH = "/advogada-tributarista-sao-paulo"

const faqs = [
  {
    question: "O escritório atende empresas da capital paulista?",
    answer:
      "Sim. O atendimento a clientes de São Paulo é feito de forma online, com reuniões agendadas e troca de documentos por meio digital. Quando o caso exige reunião presencial, o encontro é agendado no escritório em São Bernardo do Campo.",
  },
  {
    question: "Qual o tipo de demanda mais comum vinda da capital?",
    answer:
      "Revisão de regime tributário, cobranças e execuções fiscais, autuações, análise de créditos e decisões societárias com reflexo fiscal, especialmente em empresas de serviços, comércio e profissionais da saúde.",
  },
  {
    question: "Como funciona a análise de uma oportunidade tributária?",
    answer:
      "A análise parte da documentação da operação — regime, declarações, recolhimentos e histórico — para verificar se existe fundamento legal. Não há reconhecimento automático de direito nem garantia de resultado.",
  },
  {
    question: "É possível unir tributário e outras frentes no mesmo caso?",
    answer:
      "Sim. Quando a demanda envolve contratos, societário, trabalhista ou sucessão, a leitura tributária é integrada às demais áreas no mesmo fluxo de trabalho.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Advogada Tributarista em São Paulo para Empresas e Profissionais",
  description:
    "Advogada tributarista atendendo empresas e profissionais da capital paulista. Planejamento tributário, execução fiscal, contencioso administrativo, consultoria preventiva e recuperação de créditos, com atendimento online e base no ABC.",
  path: PATH,
  keywords: [
    "advogada tributarista são paulo",
    "advogado tributário são paulo capital",
    "assessoria tributária são paulo",
    "planejamento tributário são paulo",
    "execução fiscal são paulo",
    "recuperação de créditos tributários são paulo",
    "consultoria fiscal são paulo",
  ],
})

export const revalidate = 3600

export default function AdvogadaTributaristaSaoPauloPage() {
  return (
    <AreaPage
      icon={Building2}
      title="Advogada tributarista para empresas e profissionais de São Paulo"
      badge="Atendimento na capital"
      intro="Assessoria tributária para empresas e profissionais da capital paulista, com atendimento online e reuniões agendadas. O trabalho parte da operação real do cliente — regime, rotina fiscal, passivo e decisões em aberto — para definir o que precisa ser enfrentado primeiro."
      highlights={[
        { title: "Como funciona", description: "Atendimento online, com documentos por meio digital e reuniões agendadas." },
        { title: "Base do escritório", description: "São Bernardo do Campo, no ABC — a cerca de 30 minutos da capital." },
        { title: "Perfil de cliente", description: "Empresas de serviços, comércio, indústria e profissionais liberais com decisão fiscal em jogo." },
      ]}
      services={[
        {
          icon: TrendingUp,
          title: "Planejamento tributário",
          description: "Revisão de regime e estrutura para reduzir carga e eliminar improviso na rotina fiscal.",
          features: ["Comparativo de regimes", "Reorganização societária", "Holding e sucessão", "Decisões de caixa e investimento"],
        },
        {
          icon: FileSearch,
          title: "Contencioso e defesa",
          description: "Atuação em autuações, cobranças e execuções fiscais, com leitura do impacto operacional.",
          features: ["Defesa em auto de infração", "Execução fiscal", "Responsabilidade tributária", "Transação e parcelamento"],
        },
        {
          icon: Users,
          title: "Pessoa física e alta renda",
          description: "Planejamento e revisão de tributação para pessoa física com patrimônio relevante.",
          features: ["Ganho de capital", "Aluguéis e investimentos", "Isenções de IR", "Planejamento sucessório"],
        },
        {
          icon: Landmark,
          title: "Recuperação de créditos",
          description: "Verificação de créditos e oportunidades tributárias aplicáveis ao histórico da empresa.",
          features: ["Exclusão do ICMS da base do PIS/COFINS", "Créditos de insumo", "PIS/COFINS monofásico", "Revisão de contribuições"],
        },
      ]}
      bridgeTitle="Decisão tributária na capital costuma ter prazo curto"
      bridgeText="Notificação, autuação e cobrança têm prazo, e reagir depois costuma custar mais. O diagnóstico técnico organiza prioridades e define o que precisa de resposta imediata e o que pode ser planejado."
      bridgeCta={{ label: "Ver teses e oportunidades", href: "/teses-e-oportunidades-tributarias" }}
      primaryCta={{ label: "Agendar diagnóstico", href: "/#contact" }}
      secondaryCta={{ label: "Ver atuação em Direito Tributário", href: "/areas/direito-tributario" }}
      finalTitle="Precisa resolver uma questão tributária na capital?"
      finalText="O primeiro passo é entender a operação, o histórico fiscal e o prazo envolvido. A partir daí o escritório indica o caminho cabível, sempre com análise individual da documentação."
      finalPrimaryCta={{ label: "Solicitar atendimento", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar no WhatsApp", href: "https://api.whatsapp.com/send?phone=5511967586911" }}
      localDetails={[
        {
          title: "Endereço",
          value: `${SEO.address.streetAddress}\nCentro - ${SEO.address.addressLocality} - ${SEO.address.addressRegion}`,
        },
        { title: "Telefone", value: SEO.phoneDisplay },
        { title: "Atendimento", value: "Online para a capital\nPresencial com agendamento" },
        { title: "Região", value: "São Paulo (capital)" },
      ]}
      relatedLinks={[
        { label: "Advogada tributarista em São Bernardo do Campo e no ABC", href: "/advogada-tributarista-sao-bernardo-do-campo" },
        { label: "Teses e oportunidades tributárias", href: "/teses-e-oportunidades-tributarias" },
        { label: "Direito tributário para empresas e profissionais", href: "/areas/direito-tributario" },
      ]}
      faqs={faqs}
    >
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Advocacia tributária para empresas de São Paulo",
          description:
            "Planejamento tributário, defesa em execução fiscal, consultoria preventiva e recuperação de créditos para empresas, profissionais e pessoas físicas de São Paulo (capital).",
        })}
      />
      <JsonLd
        data={buildServiceSchema({
          path: PATH,
          serviceType: "Direito Tributário",
          name: "Advocacia tributária em São Paulo (capital)",
          description:
            "Assessoria tributária para empresas e profissionais de São Paulo, com planejamento tributário, contencioso administrativo, execução fiscal e recuperação de créditos.",
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
    </AreaPage>
  )
}
