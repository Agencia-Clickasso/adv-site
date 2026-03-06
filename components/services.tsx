import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building,
  Calculator,
  FileText,
  Gavel,
  Home,
  Star,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

type SupportArea = {
  icon: typeof Building
  title: string
  description: string
  features: string[]
  href: string
  bridge: string
}

export default function Services() {
  const primaryService = {
    icon: Calculator,
    title: "Direito Tributário",
    description:
      "Planejamento tributário, revisão de carga fiscal, consultoria preventiva, defesa administrativa e execução fiscal com prioridade estratégica dentro do escritório.",
    features: [
      "Diagnóstico de risco e estrutura tributária",
      "Defesa em cobrança, autuação e execução fiscal",
      "Análise de passivo e oportunidades de revisão",
      "Consultoria para decisões empresariais com impacto fiscal",
    ],
    href: "/areas/direito-tributario",
  }

  const supportAreas: SupportArea[] = [
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Contratos, governança e estrutura societária com interface tributária frequente.",
      features: ["Constituição de empresas", "Contratos comerciais", "Compliance empresarial"],
      href: "/areas/direito-empresarial",
      bridge: "Complementa decisões que pedem leitura fiscal conjunta.",
    },
    {
      icon: Gavel,
      title: "Direito Processual",
      description: "Estratégia processual para litígios judiciais e administrativos ligados à operação.",
      features: ["Ações judiciais", "Recursos", "Execuções"],
      href: "/areas/direito-processual",
      bridge: "Importante quando o contencioso tributário sai do plano preventivo.",
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description: "Revisão preventiva de decisões, documentos e rotinas antes que virem passivo.",
      features: ["Pareceres jurídicos", "Consultoria preventiva", "Due diligence"],
      href: "/areas/consultoria-juridica",
      bridge: "Serve como porta de entrada para diagnóstico mais amplo.",
    },
    {
      icon: Users,
      title: "Direito Civil",
      description: "Contratos e disputas patrimoniais com necessidade de previsibilidade jurídica.",
      features: ["Contratos civis", "Responsabilidade civil", "Direitos da personalidade"],
      href: "/areas/direito-civil",
      bridge: "Apoia operações com efeito patrimonial sensível.",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Negócios imobiliários e regularizações que podem carregar impacto fiscal relevante.",
      features: ["Compra e venda", "Locações", "Regularização fundiária"],
      href: "/areas/direito-imobiliario",
      bridge: "Entra quando o patrimônio imobiliário influencia a operação.",
    },
    {
      icon: FileText,
      title: "Direito Trabalhista",
      description: "Contingências trabalhistas com reflexo direto no custo e no risco da empresa.",
      features: ["Rescisões", "Ações trabalhistas", "Consultoria preventiva"],
      href: "/areas/direito-trabalhista",
      bridge: "Complementa a leitura de passivo e exposição do negócio.",
    },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-8">
              <div className="section-kicker">
                <Star className="h-3.5 w-3.5" />
                Foco de atuação
              </div>
              <div>
                <h2 className={`${blogSerif.className} max-w-4xl text-5xl leading-[0.96] text-custom-text-secondary sm:text-6xl`}>
                  Direito tributário como núcleo da atuação, com apoio jurídico complementar para a operação.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-custom-text-primary/84">
                  O escritório concentra sua proposta em planejamento tributário, execução fiscal e consultoria fiscal.
                  As demais áreas entram quando ajudam a resolver o caso com mais contexto e menor risco.
                </p>
              </div>
            </div>

            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7cfb3] text-[#7f5b39]">
                <primaryService.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#7f5b39]">Foco principal</p>
              <h3 className={`${blogSerif.className} mt-3 text-4xl leading-tight`}>{primaryService.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-700">{primaryService.description}</p>
              <div className="mt-6 space-y-3">
                {primaryService.features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-[#dcc3a4] bg-white/70 px-4 py-3 text-sm text-slate-700">
                    {feature}
                  </div>
                ))}
              </div>
              <Button asChild className="mt-7 rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319]">
                <Link href={primaryService.href}>
                  Ver página principal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportAreas.map((service) => (
              <article
                key={service.title}
                className="home-panel rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-custom-text-primary/28"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className={`${blogSerif.className} mt-5 text-3xl text-custom-text-secondary`}>{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-custom-text-primary/74">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-custom-text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t home-soft-line pt-5 text-sm leading-7 text-custom-text-primary/62">{service.bridge}</p>
                <Link href={service.href} className="mt-5 inline-flex items-center gap-2 text-sm text-custom-text-primary transition hover:text-custom-text-secondary">
                  Ver área complementar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[1.8rem] border border-custom-text-primary/12 bg-black/12 px-6 py-7">
            <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">Leitura da casa</p>
            <p className={`${blogSerif.className} mt-3 max-w-5xl text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}>
              Se a demanda mistura cobrança fiscal, contrato, societário ou passivo trabalhista, a análise começa pelo
              tributário e integra o restante do caso no mesmo fluxo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
