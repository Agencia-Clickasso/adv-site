import Link from "next/link"
import {
  ArrowRight,
  Briefcase,
  Building,
  Calculator,
  FileText,
  Gavel,
  Home,
  Landmark,
  ScrollText,
  Star,
  Users,
} from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

type SupportArea = {
  icon: typeof Building
  title: string
  href: string
}

const TESES_PATH = "/teses-e-oportunidades-tributarias"

export default function Services() {
  const primaryService = {
    icon: Calculator,
    title: "Direito Tributário",
    description:
      "Planejamento tributário, revisão de carga fiscal, consultoria preventiva, defesa administrativa e execução fiscal com prioridade estratégica dentro do escritório.",
    features: [
      {
        label: "Diagnóstico de risco e estrutura tributária",
        href: `${TESES_PATH}#planejamento-tributario`,
      },
      {
        label: "Defesa em cobrança, autuação e execução fiscal",
        href: `${TESES_PATH}#defesa-e-regularizacao-tributaria`,
      },
      {
        label: "Análise de passivo e oportunidades de revisão",
        href: `${TESES_PATH}#teses-e-oportunidades-tributarias`,
      },
      {
        label: "Consultoria para decisões empresariais com impacto fiscal",
        href: `${TESES_PATH}#imposto-de-renda`,
      },
    ],
    href: "/areas/direito-tributario",
  }

  const supportAreas: SupportArea[] = [
    { icon: Building, title: "Direito Empresarial", href: "/areas/direito-empresarial" },
    { icon: Gavel, title: "Direito Processual", href: "/areas/direito-processual" },
    { icon: Briefcase, title: "Consultoria Jurídica", href: "/areas/consultoria-juridica" },
    { icon: Users, title: "Direito Civil", href: "/areas/direito-civil" },
    { icon: Home, title: "Direito Imobiliário", href: "/areas/direito-imobiliario" },
    { icon: FileText, title: "Direito Trabalhista", href: "/areas/direito-trabalhista" },
    { icon: Landmark, title: "Direito Previdenciário", href: "/areas/direito-previdenciario" },
    { icon: ScrollText, title: "Inventário", href: "/areas/inventario" },
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
                <h2
                  className={`${blogSerif.className} max-w-4xl text-5xl leading-[0.96] text-custom-text-secondary sm:text-6xl`}
                >
                  Direito tributário como núcleo da atuação, com apoio jurídico complementar para a
                  operação.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-custom-text-primary/84">
                  O escritório concentra sua proposta em planejamento tributário, execução fiscal e
                  consultoria fiscal. As demais áreas entram quando ajudam a resolver o caso com
                  mais contexto e menor risco.
                </p>
              </div>
            </div>

            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7cfb3] text-[#7f5b39]">
                <primaryService.icon className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                Foco principal
              </p>
              <h3 className={`${blogSerif.className} mt-3 text-4xl leading-tight`}>
                {primaryService.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {primaryService.description}
              </p>
              <div className="mt-6 space-y-3">
                {primaryService.features.map((feature) => (
                  <TrackedLink
                    key={feature.label}
                    href={feature.href}
                    ctaLabel={feature.label}
                    ctaLocation="services_primary_card_tese"
                    trafficContext="commercial_page"
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#dcc3a4] bg-white/70 px-4 py-3 text-sm text-slate-700 transition hover:border-[#b99066] hover:bg-white"
                  >
                    {feature.label}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </TrackedLink>
                ))}
              </div>
              <Button
                asChild
                className="mt-7 w-full rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319] sm:w-auto"
              >
                <TrackedLink
                  href={TESES_PATH}
                  ctaLabel="Ver as 39 teses e oportunidades tributárias"
                  ctaLocation="services_primary_card_cta"
                  trafficContext="commercial_page"
                >
                  Ver as 39 teses e oportunidades
                  <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </Button>
              <TrackedLink
                href={primaryService.href}
                ctaLabel="Ver atuação em Direito Tributário"
                ctaLocation="services_primary_card_area"
                trafficContext="commercial_page"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[#7f5b39] transition hover:text-[#1b2028]"
              >
                Ver atuação em Direito Tributário
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {supportAreas.map((service) => (
              <TrackedLink
                key={service.title}
                href={service.href}
                ctaLabel={service.title}
                ctaLocation="services_support_area"
                trafficContext="commercial_page"
                className="home-panel flex h-full items-center justify-between gap-4 rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-custom-text-primary/28"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`${blogSerif.className} text-xl leading-tight text-custom-text-secondary sm:text-2xl`}
                  >
                    {service.title}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-custom-text-primary" />
              </TrackedLink>
            ))}
          </div>

          <div className="mt-12 rounded-[1.8rem] border border-custom-text-primary/12 bg-black/12 px-6 py-7">
            <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">
              Leitura da casa
            </p>
            <p
              className={`${blogSerif.className} mt-3 max-w-5xl text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}
            >
              Se a demanda mistura cobrança fiscal, contrato, societário ou passivo trabalhista, a
              análise começa pelo tributário e integra o restante do caso no mesmo fluxo.
            </p>
            <TrackedLink
              href="/areas/direito-tributario"
              ctaLabel="Planejamento tributário para empresas"
              ctaLocation="services_bottom_banner"
              trafficContext="commercial_page"
              className="mt-5 inline-flex items-center gap-2 text-sm text-custom-text-primary transition hover:text-custom-text-secondary"
            >
              Planejamento tributário para empresas
              <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  )
}
