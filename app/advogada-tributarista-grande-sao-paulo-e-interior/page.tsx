import type { Metadata } from "next"
import { Building2, FileSearch, Landmark, MapPinned, TrendingUp } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import {
  SEO,
  buildFaqSchema,
  buildLocalOfficeSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo"

const PATH = "/advogada-tributarista-grande-sao-paulo-e-interior"

const faqs = [
  {
    question: "O atendimento fora do ABC é só online?",
    answer:
      "Sim, o padrão é online — reuniões por videochamada e troca de documentos por meio digital. Isso permite atender empresas da Grande São Paulo e do interior com o mesmo acompanhamento dado aos clientes locais.",
  },
  {
    question: "Empresas do interior têm alguma limitação de atendimento?",
    answer:
      "Não. A análise é documental e jurídica. Quando existe particularidade estadual ou municipal — como ICMS, ISS ou tributos municipais — essa competência é considerada no trabalho, conforme o caso.",
  },
  {
    question: "Como são tratadas questões de ICMS de outros estados?",
    answer:
      "Operações interestaduais, DIFAL e transferências entre estabelecimentos são analisadas conforme a legislação aplicável ao estado envolvido e às operações efetivamente realizadas pela empresa.",
  },
  {
    question: "Qual o primeiro passo para empresas de outra cidade?",
    answer:
      "Enviar o contexto da demanda e a documentação básica — regime, declarações e o documento que gerou a dúvida. A partir disso o escritório avalia o caminho cabível.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Advogada Tributarista na Grande São Paulo e no Interior",
  description:
    "Advogada tributarista para empresas da Grande São Paulo e do interior paulista, com atendimento online. Planejamento tributário, defesa fiscal, ICMS interestadual, DIFAL e recuperação de créditos.",
  path: PATH,
  keywords: [
    "advogada tributarista grande são paulo",
    "advogado tributário interior de são paulo",
    "assessoria tributária grande são paulo",
    "planejamento tributário interior sp",
    "advogada tributarista online",
    "icms interestadual difal",
    "recuperação de créditos tributários interior",
  ],
})

export const revalidate = 3600

export default function AdvogadaTributaristaGrandeSaoPauloPage() {
  return (
    <AreaPage
      icon={MapPinned}
      title="Advogada tributarista para empresas da Grande São Paulo e do interior"
      badge="Atendimento online"
      intro="Assessoria tributária para empresas da Grande São Paulo e do interior paulista, com atendimento online e acompanhamento por etapa. O trabalho é documental e jurídico: começa pela operação, passa pela legislação aplicável e termina em decisão técnica."
      highlights={[
        {
          title: "Como funciona",
          description:
            "Reuniões online e troca de documentos digital, com acompanhamento por etapa.",
        },
        { title: "Onde o escritório está", description: "São Bernardo do Campo, no ABC paulista." },
        {
          title: "Quando faz sentido",
          description:
            "Operações interestaduais, tributos municipais e decisões fiscais fora do eixo da capital.",
        },
      ]}
      services={[
        {
          icon: TrendingUp,
          title: "Planejamento e regime",
          description:
            "Análise de regime tributário e estrutura conforme a realidade da operação regional.",
          features: [
            "Comparativo de regimes",
            "Estrutura societária",
            "Planejamento de expansão",
            "Revisão de carga",
          ],
        },
        {
          icon: Landmark,
          title: "ICMS e operações interestaduais",
          description:
            "Questões de ICMS que aparecem quando a empresa vende ou transfere para outros estados.",
          features: [
            "DIFAL em vendas a consumidor final",
            "DIFAL no Simples Nacional",
            "Transferência entre estabelecimentos",
            "ICMS em energia solar",
          ],
        },
        {
          icon: FileSearch,
          title: "Defesa fiscal",
          description:
            "Resposta a autuações e cobranças, inclusive em execuções fiscais e dívida ativa.",
          features: [
            "Auto de infração",
            "Execução fiscal",
            "PARR e responsabilidade tributária",
            "Transação tributária",
          ],
        },
        {
          icon: Building2,
          title: "Setores específicos",
          description:
            "Leitura tributária por setor, com atenção às particularidades de cada operação.",
          features: [
            "Clínicas e saúde",
            "Agronegócio (FUNRURAL, SENAR, ITR)",
            "Comércio e serviços",
            "Indústria e insumos",
          ],
        },
      ]}
      bridgeTitle="Operação fora da capital tem particularidade fiscal"
      bridgeText="Regras municipais, ICMS estadual e operações interestaduais mudam o cálculo conforme a cidade e o destino da venda. O diagnóstico considera essas variáveis em vez de aplicar uma fórmula única."
      bridgeCta={{ label: "Ver teses e oportunidades", href: "/teses-e-oportunidades-tributarias" }}
      primaryCta={{ label: "Agendar diagnóstico", href: "/#contact" }}
      secondaryCta={{
        label: "Ver atuação em Direito Tributário",
        href: "/areas/direito-tributario",
      }}
      finalTitle="Sua empresa fica na Grande São Paulo ou no interior?"
      finalText="O atendimento é online e começa pelo diagnóstico da operação e do histórico fiscal. A partir da documentação apresentada, o escritório indica o que pode ser planejado, defendido ou revisado."
      finalPrimaryCta={{ label: "Solicitar atendimento", href: "/#contact" }}
      finalSecondaryCta={{
        label: "Falar no WhatsApp",
        href: "https://api.whatsapp.com/send?phone=5511967586911",
      }}
      localDetails={[
        {
          title: "Endereço",
          value: `${SEO.address.streetAddress}\nCentro - ${SEO.address.addressLocality} - ${SEO.address.addressRegion}`,
        },
        { title: "Telefone", value: SEO.phoneDisplay },
        { title: "Atendimento", value: "Online para Grande São Paulo e interior" },
        { title: "Base do escritório", value: "São Bernardo do Campo - SP" },
      ]}
      relatedLinks={[
        {
          label: "Advogada tributarista em São Paulo (capital)",
          href: "/advogada-tributarista-sao-paulo",
        },
        {
          label: "Advogada tributarista em São Bernardo do Campo e no ABC",
          href: "/advogada-tributarista-sao-bernardo-do-campo",
        },
        { label: "Teses e oportunidades tributárias", href: "/teses-e-oportunidades-tributarias" },
      ]}
      faqs={faqs}
    >
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Advocacia tributária para a Grande São Paulo e o interior",
          description:
            "Planejamento tributário, ICMS interestadual, defesa fiscal e recuperação de créditos para empresas da Grande São Paulo e do interior paulista, com atendimento online.",
        })}
      />
      <JsonLd
        data={buildServiceSchema({
          path: PATH,
          serviceType: "Direito Tributário",
          name: "Advocacia tributária para a Grande São Paulo e o interior paulista",
          description:
            "Assessoria tributária online para empresas da Grande São Paulo e do interior, com foco em operações interestaduais, defesa fiscal e planejamento tributário.",
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
    </AreaPage>
  )
}
