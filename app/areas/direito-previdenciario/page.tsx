import type { Metadata } from "next"
import { Building2, FileSearch, Landmark, Shield, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import {
  SEO,
  buildAreaServiceSchema,
  buildFaqSchema,
  buildLocalOfficeSchema,
  createAreaMetadata,
} from "@/lib/seo"

const PATH = "/areas/direito-previdenciario"

const faqs = [
  {
    question: "Quando faz sentido revisar as contribuições previdenciárias?",
    answer:
      "Sempre que houver dúvida sobre o enquadramento da empresa, sobre o grau de risco utilizado no cálculo ou sobre contribuições recolhidas acima do teto previdenciário. A verificação é feita a partir dos recolhimentos e da documentação do período.",
  },
  {
    question: "Recuperar INSS significa que o valor será devolvido automaticamente?",
    answer:
      "Não. A recuperação depende de análise individual do caso concreto, da documentação apresentada e dos requisitos legais aplicáveis. Não há reconhecimento automático de direito nem garantia de resultado.",
  },
  {
    question: "A análise serve para pessoa física ou só para empresas?",
    answer:
      "Nos dois casos. Profissionais com mais de um vínculo, aposentados e servidores podem ter contribuições acima do teto, enquanto empresas discutem enquadramento, GILRAT/RAT, FAP e contribuições sobre mão de obra.",
  },
  {
    question: "O atendimento é presencial em São Bernardo do Campo?",
    answer:
      "A base do escritório é em São Bernardo do Campo, com atendimento online para clientes de São Paulo, Grande São Paulo, interior e outras regiões do Brasil.",
  },
]

export const metadata: Metadata = createAreaMetadata("direito-previdenciario")

export default function DireitoPrevidenciarioPage() {
  return (
    <AreaPage
      icon={Landmark}
      title="Direito previdenciário para revisar contribuições, enquadramento e benefícios"
      badge="Área complementar"
      intro="Análise de contribuições previdenciárias, enquadramento da empresa e benefícios, com atenção ao que foi recolhido acima do necessário. A frente previdenciária dialoga diretamente com a leitura tributária do caixa e da folha de pagamento."
      highlights={[
        {
          title: "Onde entra",
          description:
            "Na revisão de recolhimentos, enquadramento de risco e benefício previdenciário.",
        },
        {
          title: "Quando cruza com tributário",
          description: "Quando o recolhimento previdenciário pesa na carga da empresa ou na folha.",
        },
        {
          title: "Leitura prática",
          description: "A verificação parte dos documentos e do histórico de contribuições.",
        },
      ]}
      services={[
        {
          icon: Users,
          title: "Contribuições acima do teto",
          description:
            "Verificação de recolhimentos do INSS acima do teto previdenciário para profissionais com mais de um vínculo.",
          features: [
            "Profissionais com múltiplos vínculos",
            "Médicos, enfermeiros e professores",
            "Análise de vínculos e contribuições",
            "Identificação de valor passível de recuperação",
          ],
        },
        {
          icon: Building2,
          title: "Enquadramento da empresa",
          description:
            "Revisão do grau de risco utilizado no cálculo da contribuição previdenciária.",
          features: ["GILRAT/RAT", "Revisão do FAP", "Folha de pagamento", "Indústria e serviços"],
        },
        {
          icon: FileSearch,
          title: "Contribuições sobre mão de obra",
          description:
            "Análise de contribuições relacionadas à cessão e tomada de mão de obra, inclusive a Lei nº 9.711/98.",
          features: [
            "Cessão de mão de obra",
            "Lei nº 9.711/98",
            "Documentação de recolhimento",
            "Recuperação tributária",
          ],
        },
        {
          icon: Shield,
          title: "Benefícios e servidores públicos",
          description:
            "Avaliação de situações envolvendo prefeituras, servidores municipais e benefícios previdenciários.",
          features: [
            "Prefeituras e servidores",
            "Análise individual do caso",
            "Documentação previdenciária",
            "Medidas cabíveis",
          ],
        },
      ]}
      bridgeTitle="A folha e a contribuição previdenciária pesam no resultado"
      bridgeText="Recolhimento previdenciário mal enquadrado ou acima do necessário reduz margem e distorce a leitura tributária da operação. Por isso, a revisão previdenciária costuma caminhar junto com o diagnóstico fiscal."
      bridgeCta={{ label: "Ver diagnóstico tributário", href: "/areas/direito-tributario" }}
      primaryCta={{ label: "Analisar minha contribuição", href: "/#contact" }}
      secondaryCta={{
        label: "Ver teses e oportunidades",
        href: "/teses-e-oportunidades-tributarias",
      }}
      finalTitle="Precisa saber se houve recolhimento previdenciário acima do necessário?"
      finalText="A análise parte dos vínculos, dos recolhimentos e dos documentos do período. Quando existir fundamento, o caso avança para a medida cabível — sem promessa de resultado."
      finalPrimaryCta={{ label: "Solicitar análise", href: "/#contact" }}
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
        {
          title: "Atendimento",
          value: "São Bernardo do Campo, São Paulo, ABC, Grande São Paulo e interior",
        },
      ]}
      relatedLinks={[
        { label: "Teses e oportunidades tributárias", href: "/teses-e-oportunidades-tributarias" },
        {
          label: "Direito tributário para empresas e profissionais",
          href: "/areas/direito-tributario",
        },
        {
          label: "Recuperação de créditos tributários: quem pode recuperar e cuidados",
          href: "/blog/recuperacao-de-creditos-tributarios-quem-pode-recuperar-e-cuidados",
        },
      ]}
      faqs={faqs}
    >
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "direito-previdenciario",
          serviceType: "Direito Previdenciário",
          name: "Assessoria em Direito Previdenciário para empresas, profissionais e servidores",
          description:
            "Análise de contribuições previdenciárias, enquadramento de risco (GILRAT/RAT e FAP), contribuições sobre mão de obra e benefícios, com verificação individual da documentação.",
        })}
      />
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Direito Previdenciário",
          description:
            "Revisão de contribuições previdenciárias, enquadramento de risco e benefícios, com atendimento em São Bernardo do Campo, São Paulo e Grande São Paulo.",
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
    </AreaPage>
  )
}
