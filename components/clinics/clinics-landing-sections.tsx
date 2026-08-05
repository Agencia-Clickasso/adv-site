import Link from "next/link"
import { ArrowRight, Building2, Sparkles, Stethoscope } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import {
  CLINICS_AUDIENCES,
  CLINICS_DIFFERENTIATORS,
  CLINICS_FAQ_ITEMS,
  CLINICS_HERO_CHIPS,
  CLINICS_RELATED_ARTICLES,
  CLINICS_SERVICES,
  CLINICS_WHATSAPP_HREF,
} from "@/components/clinics/clinics-landing-content"
import { blogSerif } from "@/lib/blog-design"
import { SEO } from "@/lib/seo"

/** Primary CTA — same tokens as home hero. */
const btnPrimary =
  "rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8"

/** Outline CTA — same tokens as home hero. */
const btnOutline =
  "rounded-full border-custom-text-primary/30 bg-transparent px-6 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary sm:px-8"

export function ClinicsHeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 text-custom-text-secondary sm:pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            {/* Left — mirrors home hero glass card */}
            <div className="space-y-7 rounded-[1.8rem] border border-custom-text-primary/14 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 shadow-[0_28px_100px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:space-y-8 sm:rounded-[2rem] sm:p-10 lg:p-12">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Setor da saúde
              </div>

              <div className="space-y-5">
                <h1
                  className={`${blogSerif.className} max-w-5xl text-[2.75rem] leading-[0.97] tracking-[-0.035em] sm:text-6xl lg:text-7xl`}
                >
                  Soluções tributárias estratégicas para clínicas médicas e odontológicas
                </h1>
                <p className="max-w-2xl text-base leading-7 text-custom-text-primary/88 sm:text-lg sm:leading-8">
                  Diagnóstico, planejamento, créditos e consultoria preventiva — com base jurídica e
                  atendimento direto da advogada.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {CLINICS_HERO_CHIPS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-full border border-custom-text-primary/14 bg-black/15 px-4 py-2.5"
                  >
                    <span className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/62">
                      {item.label}
                    </span>
                    <span className="mx-2 text-custom-text-primary/30">·</span>
                    <span className="text-sm text-custom-text-secondary">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className={btnPrimary}>
                  <TrackedLink
                    href="#contact"
                    ctaLabel="Solicitar análise tributária"
                    ctaLocation="clinics_hero_primary"
                    trafficContext="lead_capture"
                  >
                    Solicitar análise
                    <ArrowRight className="h-5 w-5" />
                  </TrackedLink>
                </Button>
                <Button asChild variant="outline" size="lg" className={btnOutline}>
                  <TrackedLink
                    href={CLINICS_WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    ctaLabel="Falar no WhatsApp — clínicas"
                    ctaLocation="clinics_hero_whatsapp"
                    trafficContext="lead_capture"
                  >
                    Falar no WhatsApp
                  </TrackedLink>
                </Button>
              </div>
            </div>

            {/* Right — paper card like home “como a atuação entra” */}
            <div className="grid gap-5 lg:h-full lg:grid-rows-[auto_1fr]">
              <div className="home-paper rounded-[1.8rem] p-6 text-slate-900 sm:rounded-[2rem] sm:p-8">
                <p className="text-xs uppercase tracking-[0.26em] text-custom-text-primary">
                  Como a atuação entra
                </p>
                <h2
                  className={`${blogSerif.className} mt-4 text-[2.1rem] leading-[1.05] sm:text-4xl`}
                >
                  Diagnóstico técnico antes que o risco fiscal vire custo permanente.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                  Análise da estrutura, do regime e das rotinas da clínica — sem promessa de
                  resultado e com foco em segurança jurídica.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {CLINICS_SERVICES.slice(0, 4).map((service) => (
                  <div key={service.title} className="home-panel rounded-[1.6rem] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3
                      className={`${blogSerif.className} mt-4 text-xl text-custom-text-secondary sm:text-2xl`}
                    >
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsServicesSection() {
  return (
    <section id="servicos" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="section-kicker">
                <Stethoscope className="h-3.5 w-3.5" />
                Como podemos ajudar
              </div>
              <h2
                className={`${blogSerif.className} max-w-3xl text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl lg:text-6xl`}
              >
                Soluções jurídico-tributárias para o setor da saúde
              </h2>
              <p className="max-w-2xl text-base leading-8 text-custom-text-primary/84 sm:text-lg">
                Cada serviço é personalizado, com foco na segurança jurídica e na eficiência fiscal
                da clínica.
              </p>
            </div>

            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary">
                Quatro frentes
              </p>
              <ul className="mt-5 space-y-3">
                {CLINICS_SERVICES.map((service) => (
                  <li
                    key={service.title}
                    className="rounded-2xl border border-[#dcc3a4] bg-white/70 px-4 py-3"
                  >
                    <p className={`${blogSerif.className} text-xl text-slate-950`}>
                      {service.title}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{service.description}</p>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-7 rounded-full bg-custom-bg-primary px-6 text-custom-text-secondary hover:bg-custom-bg-secondary"
              >
                <TrackedLink
                  href="#contact"
                  ctaLabel="Solicitar análise — serviços clínicas"
                  ctaLocation="clinics_services_cta"
                  trafficContext="lead_capture"
                >
                  Solicitar análise
                  <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsDifferentiatorsSection() {
  return (
    <section id="diferenciais" className="relative pb-20 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-custom-text-primary/12 bg-black/12 p-6 sm:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">
                Nossos diferenciais
              </p>
              <h2
                className={`${blogSerif.className} mt-4 text-4xl leading-tight text-custom-text-secondary sm:text-5xl`}
              >
                Parceria estratégica para a saúde tributária da sua clínica
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CLINICS_DIFFERENTIATORS.map((item) => (
                <div key={item.title} className="home-panel rounded-[1.5rem] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className={`${blogSerif.className} mt-4 text-2xl text-custom-text-secondary`}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsAudiencesSection() {
  return (
    <section id="quem-atendemos" className="relative pb-20 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 border-b border-custom-text-primary/12 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="section-kicker">
                <Building2 className="h-3.5 w-3.5" />
                Quem atendemos
              </div>
              <h2
                className={`${blogSerif.className} text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl`}
              >
                Clínicas e centros de saúde que buscam clareza fiscal
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-custom-text-primary/76 sm:text-base">
              Do pequeno e médio porte a centros e grupos com operação mais complexa.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CLINICS_AUDIENCES.map((item) => (
              <article
                key={item.title}
                className="home-panel rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-custom-text-primary/28"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className={`${blogSerif.className} mt-4 text-2xl text-custom-text-secondary`}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-custom-text-primary/76">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsCtaSection() {
  return (
    <section className="relative pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="home-paper rounded-[2rem] px-6 py-10 text-center text-slate-900 sm:px-10 sm:py-12">
            <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary">
              Vamos conversar?
            </p>
            <h2 className={`${blogSerif.className} mt-4 text-4xl leading-tight sm:text-5xl`}>
              Uma análise tributária especializada pode revelar oportunidades para a sua clínica
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              Do planejamento à recuperação de créditos, quando houver fundamento legal. Decisão com
              embasamento jurídico — menos risco, mais clareza.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-custom-bg-primary px-6 text-custom-text-secondary hover:bg-custom-bg-secondary sm:w-auto sm:px-8"
              >
                <TrackedLink
                  href="#contact"
                  ctaLabel="Solicitar análise tributária"
                  ctaLocation="clinics_mid_cta"
                  trafficContext="lead_capture"
                >
                  Solicitar análise
                  <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-full border-custom-text-primary/50 bg-transparent px-6 text-custom-text-primary hover:bg-custom-bg-primary hover:text-custom-text-secondary sm:w-auto sm:px-8"
              >
                <TrackedLink
                  href={CLINICS_WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  ctaLabel="WhatsApp clínicas mid"
                  ctaLocation="clinics_mid_whatsapp"
                  trafficContext="lead_capture"
                >
                  Falar no WhatsApp
                </TrackedLink>
              </Button>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              OAB/SP 508.937 · {SEO.phoneDisplay} · {SEO.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsRelatedArticlesSection() {
  return (
    <section className="relative pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[1.8rem] border border-custom-text-primary/12 bg-black/12 p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">
              Leitura relacionada
            </p>
            <h2
              className={`${blogSerif.className} mt-3 text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}
            >
              Conteúdo para clínicas que querem decidir com mais clareza
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {CLINICS_RELATED_ARTICLES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="home-panel group rounded-[1.4rem] p-5 text-sm leading-7 text-custom-text-primary/78 transition hover:border-custom-text-primary/28 hover:text-custom-text-secondary"
                >
                  {item.title}
                  <span className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-custom-text-primary/55 group-hover:text-custom-text-primary">
                    Ler artigo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ClinicsFaqSection() {
  return (
    <section className="relative pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="home-panel rounded-[2rem] p-7 sm:p-10">
            <h2
              className={`${blogSerif.className} text-4xl leading-tight text-custom-text-secondary sm:text-5xl`}
            >
              Perguntas frequentes
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {CLINICS_FAQ_ITEMS.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.6rem] border border-custom-text-primary/12 bg-black/10 p-6"
                >
                  <h3
                    className={`${blogSerif.className} text-2xl leading-tight text-custom-text-secondary`}
                  >
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
