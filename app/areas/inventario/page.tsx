import type { Metadata } from "next"
import { FileSignature, Home, ScrollText, ShieldCheck, Users } from "lucide-react"
import AreaPage from "@/components/area-page"
import JsonLd from "@/components/seo/json-ld"
import { SEO, buildAreaServiceSchema, buildFaqSchema, buildLocalOfficeSchema, createAreaMetadata } from "@/lib/seo"

const PATH = "/areas/inventario"

const faqs = [
  {
    question: "Qual a diferença entre inventário judicial e extrajudicial?",
    answer:
      "O extrajudicial é feito em cartório quando há consenso entre os herdeiros, todos maiores e capazes e não existe testamento. Quando há conflito, testamento ou herdeiro menor, o caminho costuma ser o judicial. A escolha depende do caso concreto.",
  },
  {
    question: "Inventário tem impacto tributário?",
    answer:
      "Sim. O ITCMD incide sobre a transmissão, e a base de cálculo, as avaliações e a forma de partilha influenciam o custo final. Há também reflexos de ganho de capital em determinadas operações.",
  },
  {
    question: "O que é preciso para iniciar o inventário?",
    answer:
      "Certidão de óbito, documentos dos herdeiros, títulos dos bens, certidões negativas e a documentação do inventariante. A partir disso é possível definir a via e o plano de partilha.",
  },
  {
    question: "Planejamento sucessório evita o inventário?",
    answer:
      "Pode reduzir custo, tempo e conflito, especialmente com holding familiar, doação com reserva de usufruto ou organização patrimonial prévia. Depende dos objetivos e do patrimônio envolvido.",
  },
]

export const metadata: Metadata = createAreaMetadata("inventario")

export default function InventarioPage() {
  return (
    <AreaPage
      icon={ScrollText}
      title="Inventário e planejamento sucessório com leitura tributária do patrimônio"
      badge="Área complementar"
      intro="Condução de inventário judicial e extrajudicial, partilha e organização sucessória, com atenção ao custo tributário da transmissão. O objetivo é resolver a sucessão com previsibilidade e evitar que a família descubra o impacto fiscal no fim do processo."
      highlights={[
        { title: "Onde entra", description: "Na abertura do inventário, na partilha e na organização patrimonial preventiva." },
        { title: "Quando cruza com tributário", description: "No ITCMD, nas avaliações, no ganho de capital e na estrutura societária familiar." },
        { title: "Leitura prática", description: "Decidir a estrutura antes reduz custo, prazo e conflito entre herdeiros." },
      ]}
      services={[
        {
          icon: FileSignature,
          title: "Inventário extrajudicial",
          description: "Condução em cartório quando há consenso, herdeiros capazes e ausência de testamento.",
          features: [
            "Herdeiros em consenso",
            "Escritura e partilha",
            "Documentação e certidões",
            "Acompanhamento até o registro",
          ],
        },
        {
          icon: Users,
          title: "Inventário judicial",
          description: "Atuação em casos com conflito, testamento, herdeiro menor ou incapaz.",
          features: ["Arrolamento e partilha", "Conflitos entre herdeiros", "Testamento", "Herdeiros menores ou incapazes"],
        },
        {
          icon: Home,
          title: "Partilha e imóveis",
          description: "Organização da partilha com atenção às avaliações e ao reflexo tributário dos bens.",
          features: ["Avaliação dos bens", "Partilha de imóveis", "Doação e usufruto", "ITCMD e ganho de capital"],
        },
        {
          icon: ShieldCheck,
          title: "Planejamento sucessório",
          description: "Estrutura familiar e patrimonial preparada antes da sucessão.",
          features: ["Holding familiar", "Doação com reserva de usufruto", "Organização patrimonial", "Redução de conflito e custo"],
        },
      ]}
      bridgeTitle="A sucessão também é uma decisão tributária"
      bridgeText="A forma de partilhar, avaliar e transmitir o patrimônio altera o custo final do ITCMD e a exposição a ganho de capital. Quando há empresa na família, a leitura sucessória precisa conversar com a estrutura societária e o planejamento fiscal."
      bridgeCta={{ label: "Ver planejamento tributário", href: "/teses-e-oportunidades-tributarias#planejamento-tributario" }}
      primaryCta={{ label: "Falar sobre inventário", href: "/#contact" }}
      secondaryCta={{ label: "Ver teses e oportunidades", href: "/teses-e-oportunidades-tributarias" }}
      finalTitle="Precisa abrir ou organizar um inventário?"
      finalText="O primeiro passo é mapear herdeiros, bens e documentação para definir a via mais adequada — judicial ou extrajudicial — e antecipar o custo tributário da transmissão."
      finalPrimaryCta={{ label: "Solicitar análise", href: "/#contact" }}
      finalSecondaryCta={{ label: "Falar no WhatsApp", href: "https://api.whatsapp.com/send?phone=5511967586911" }}
      localDetails={[
        {
          title: "Endereço",
          value: `${SEO.address.streetAddress}\nCentro - ${SEO.address.addressLocality} - ${SEO.address.addressRegion}`,
        },
        { title: "Telefone", value: SEO.phoneDisplay },
        { title: "Atendimento", value: "São Bernardo do Campo, São Paulo, ABC, Grande São Paulo e interior" },
      ]}
      relatedLinks={[
        { label: "Revisão das bases de cálculo de ITCMD, ITBI e ITR", href: "/teses-e-oportunidades-tributarias#iptu-itbi-itcmd-e-itr" },
        { label: "Direito civil e proteção patrimonial", href: "/areas/direito-civil" },
        { label: "Direito imobiliário para negócios e regularizações", href: "/areas/direito-imobiliario" },
      ]}
      faqs={faqs}
    >
      <JsonLd
        data={buildAreaServiceSchema({
          slug: "inventario",
          serviceType: "Inventário e Planejamento Sucessório",
          name: "Assessoria em Inventário e Planejamento Sucessório",
          description:
            "Condução de inventário judicial e extrajudicial, partilha de bens, holding familiar e planejamento sucessório, com análise do impacto do ITCMD e do ganho de capital.",
        })}
      />
      <JsonLd
        data={buildLocalOfficeSchema({
          path: PATH,
          serviceName: "Inventário e Planejamento Sucessório",
          description:
            "Inventário judicial e extrajudicial, partilha e planejamento sucessório, com atendimento em São Bernardo do Campo, São Paulo e Grande São Paulo.",
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
    </AreaPage>
  )
}
