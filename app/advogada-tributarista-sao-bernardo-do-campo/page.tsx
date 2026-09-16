import type { Metadata } from "next"
import { Building2, FileSearch, Landmark, MapPin, TrendingUp } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import {
  SEO,
  buildFaqSchema,
  buildLocalOfficeSchema,
  buildServiceSchema,
  createPageMetadata,
} from "@/lib/seo"

const PATH = "/advogada-tributarista-sao-bernardo-do-campo"

const faqs = [
  {
    question: "O escritório atende presencialmente em São Bernardo do Campo?",
    answer:
      "Sim. A base do escritório fica no Centro de São Bernardo do Campo, na Rua José Versolato, com atendimento presencial mediante agendamento e atendimento online para toda a região do ABC.",
  },
  {
    question: "Empresas de Diadema, Santo André e São Caetano são atendidas?",
    answer:
      "Sim. Todo o ABC é atendido, com reuniões online ou presenciais conforme a necessidade do caso e a rotina da empresa.",
  },
  {
    question: "Quais empresas do ABC costumam procurar o escritório?",
    answer:
      "Indústrias, comércios, prestadores de serviços e profissionais da saúde que precisam revisar regime tributário, responder a cobranças fiscais ou organizar a rotina fiscal da operação.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "O primeiro passo é um diagnóstico: entender a operação, o histórico fiscal e o problema concreto para indicar o caminho cabível, sem promessa de resultado.",
  },
]

export const metadata: Metadata = createPageMetadata({
  title: "Advogada Tributarista em São Bernardo do Campo e no ABC",
  description:
    "Advogada tributarista com base no Centro de São Bernardo do Campo e atendimento em todo o ABC. Planejamento tributário, execução fiscal, consultoria fiscal preventiva e recuperação de créditos para empresas e profissionais.",
  path: PATH,
  keywords: [
    "advogada tributarista são bernardo do campo",
    "advogado tributário são bernardo do campo",
    "advogada tributarista abc",
    "consultoria tributária abc",
    "planejamento tributário são bernardo do campo",
    "execução fiscal abc",
    "recuperação de créditos tributários abc",
  ],
})

export const revalidate = 3600

export default function AdvogadaTributaristaSaoBernardoPage() {
  return (
    <AreaPage
      icon={Landmark}
      title="Advogada tributarista em São Bernardo do Campo para empresas do ABC"
      badge="Atendimento local"
      intro="Assessoria tributária com base no Centro de São Bernardo do Campo para empresas e profissionais do ABC. A atuação começa pela leitura da operação — regime, rotina fiscal e exposição — antes de indicar planejamento, defesa ou revisão de créditos."
      highlights={[
        {
          title: "Base do escritório",
          description: "Centro de São Bernardo do Campo, com reunião presencial por agendamento.",
        },
        {
          title: "Região atendida",
          description:
            "São Bernardo do Campo, Santo André, São Caetano, Diadema, Mauá e demais cidades do ABC.",
        },
        {
          title: "Perfil de cliente",
          description:
            "Indústria, comércio, serviços e profissionais da saúde com decisão tributária em jogo.",
        },
      ]}
      services={[
        {
          icon: TrendingUp,
          title: "Planejamento tributário",
          description:
            "Avaliação de regime, estrutura e rotina fiscal para reduzir improviso e ganhar previsibilidade.",
          features: [
            "Revisão de regime tributário",
            "Estrutura societária",
            "Rotina fiscal",
            "Decisões com impacto no caixa",
          ],
        },
        {
          icon: FileSearch,
          title: "Defesa fiscal",
          description:
            "Resposta técnica a cobrança, autuação e execução fiscal com leitura do impacto operacional.",
          features: [
            "Defesa em auto de infração",
            "Execução fiscal",
            "Cobrança administrativa",
            "Parcelamento e transação",
          ],
        },
        {
          icon: Building2,
          title: "Consultoria preventiva",
          description:
            "Revisão de decisões e documentos antes que o risco fiscal vire custo permanente.",
          features: [
            "Análise de contratos",
            "Revisão de rotinas",
            "Diagnóstico de risco",
            "Acompanhamento periódico",
          ],
        },
        {
          icon: MapPin,
          title: "Recuperação de créditos do ABC",
          description:
            "Verificação de créditos e oportunidades tributárias aplicáveis à operação da empresa.",
          features: [
            "Exclusão do ICMS da base do PIS/COFINS",
            "Créditos de insumo",
            "Contribuições previdenciárias",
            "Análise de passivo",
          ],
        },
      ]}
      bridgeTitle="Empresa do ABC com decisão tributária travando a operação"
      bridgeText="Cobrança fiscal, regime mal avaliado ou crédito não aproveitado aparecem no caixa antes de aparecer no papel. O diagnóstico organiza o que precisa ser decidido primeiro e o que pode esperar."
      bridgeCta={{ label: "Ver teses e oportunidades", href: "/teses-e-oportunidades-tributarias" }}
      primaryCta={{ label: "Agendar diagnóstico", href: "/#contact" }}
      secondaryCta={{
        label: "Ver atuação em Direito Tributário",
        href: "/areas/direito-tributario",
      }}
      finalTitle="Precisa de uma leitura tributária da sua operação no ABC?"
      finalText="O atendimento começa pelo diagnóstico da operação e do histórico fiscal. A partir dele, o escritório indica o caminho cabível — planejamento, defesa ou revisão — com base na documentação apresentada."
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
        { title: "Atendimento", value: "Presencial com agendamento\nOnline em todo o ABC" },
        { title: "Cidade-base", value: "São Bernardo do Campo" },
      ]}
      relatedLinks={[
        {
          label: "Advogada tributarista em São Paulo (capital)",
          href: "/advogada-tributarista-sao-paulo",
        },
        { label: "Teses e oportunidades tributárias", href: "/teses-e-oportunidades-tributarias" },
        {
          label: "Direito tributário para empresas e profissionais",
          href: "/areas/direito-tributario",
        },
      ]}
      faqs={faqs}
    >
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Advocacia tributária em São Bernardo do Campo e no ABC",
          description:
            "Planejamento tributário, defesa fiscal, consultoria preventiva e recuperação de créditos para empresas e profissionais de São Bernardo do Campo e do ABC.",
        })}
      />
      <JsonLd
        data={buildServiceSchema({
          path: PATH,
          serviceType: "Direito Tributário",
          name: "Advocacia tributária em São Bernardo do Campo e no ABC",
          description:
            "Assessoria tributária para empresas e profissionais de São Bernardo do Campo e do ABC, com planejamento tributário, defesa em execução fiscal e consultoria fiscal preventiva.",
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
    </AreaPage>
  )
}
