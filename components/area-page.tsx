import Link from "next/link"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowLeft, ArrowRight, MapPin, Phone } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

type AreaService = {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

type AreaHighlight = {
  title: string
  description: string
}

type AreaCta = {
  label: string
  href: string
}

type AreaFaq = {
  question: string
  answer: string
}

type AreaRelatedLink = {
  label: string
  href: string
}

type AreaLocalDetail = {
  title: string
  value: string
}

interface AreaPageProps {
  icon: LucideIcon
  title: string
  intro: string
  badge: string
  highlights: AreaHighlight[]
  services: AreaService[]
  bridgeTitle: string
  bridgeText: string
  bridgeCta: AreaCta
  primaryCta: AreaCta
  secondaryCta: AreaCta
  finalTitle: string
  finalText: string
  finalPrimaryCta: AreaCta
  finalSecondaryCta: AreaCta
  faqs?: AreaFaq[]
  relatedLinks?: AreaRelatedLink[]
  localDetails?: AreaLocalDetail[]
  children?: ReactNode
}

export default function AreaPage({
  icon: Icon,
  title,
  intro,
  badge,
  highlights,
  services,
  bridgeTitle,
  bridgeText,
  bridgeCta,
  primaryCta,
  secondaryCta,
  finalTitle,
  finalText,
  finalPrimaryCta,
  finalSecondaryCta,
  faqs,
  relatedLinks,
  localDetails,
  children,
}: AreaPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-65">
        <div className="home-grid-pattern absolute inset-0" />
        <div className="home-orb absolute left-[-8rem] top-20 h-[22rem] w-[22rem]" />
        <div className="home-orb absolute right-[-8rem] top-[28rem] h-[18rem] w-[18rem]" />
      </div>

      <div className="relative">
        {children}

        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <Link href="/" className="inline-flex">
            <Button
              variant="ghost"
              className="rounded-full border border-custom-text-primary/20 bg-white/5 px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao início
            </Button>
          </Link>
        </div>

        <section className="pb-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-7 rounded-[2rem] border border-custom-text-primary/14 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-7 shadow-[0_28px_100px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-10">
                <div className="section-kicker">{badge}</div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-custom-text-primary/16 text-custom-text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h1 className={`${blogSerif.className} max-w-4xl text-5xl leading-[0.95] text-custom-text-secondary sm:text-6xl`}>
                    {title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-custom-text-primary/84 sm:text-xl">{intro}</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-custom-text-primary px-8 text-custom-bg-primary hover:bg-custom-text-secondary">
                    <TrackedLink
                      href={primaryCta.href}
                      ctaLabel={primaryCta.label}
                      ctaLocation="area_page_primary_cta"
                      trafficContext={primaryCta.href.includes("#contact") ? "lead_capture" : "commercial_page"}
                    >
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </TrackedLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                  >
                    <TrackedLink
                      href={secondaryCta.href}
                      ctaLabel={secondaryCta.label}
                      ctaLocation="area_page_secondary_cta"
                      trafficContext={secondaryCta.href.includes("#contact") ? "lead_capture" : "commercial_page"}
                    >
                      {secondaryCta.label}
                    </TrackedLink>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {highlights.map((item) => (
                  <div key={item.title} className="home-panel rounded-[1.6rem] p-5">
                    <p className={`${blogSerif.className} text-2xl text-custom-text-secondary`}>{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-custom-text-primary/76">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-10">
                <h2 className={`${blogSerif.className} text-4xl leading-tight sm:text-5xl`}>Como essa área entra na decisão</h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
                  A proposta aqui não é listar serviço genérico. É mostrar onde essa frente ajuda a reduzir risco,
                  organizar resposta jurídica e proteger a operação ou o patrimônio do cliente.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {services.map((service) => (
                    <article key={service.title} className="rounded-[1.6rem] border border-[#dcc3a4] bg-white/70 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecd5ba] text-[#7f5b39]">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className={`${blogSerif.className} mt-5 text-3xl leading-tight text-slate-950`}>{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{service.description}</p>
                      <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-[#9c744a]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-[1.9rem] border border-custom-text-primary/12 bg-black/12 px-6 py-8 text-center">
                <h2 className={`${blogSerif.className} text-4xl leading-tight text-custom-text-secondary`}>{bridgeTitle}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-custom-text-primary/78">{bridgeText}</p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-6 rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  <TrackedLink
                    href={bridgeCta.href}
                    ctaLabel={bridgeCta.label}
                    ctaLocation="area_page_bridge_cta"
                    trafficContext={bridgeCta.href.includes("#contact") ? "lead_capture" : "commercial_page"}
                  >
                    {bridgeCta.label}
                  </TrackedLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {faqs && faqs.length > 0 ? (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="home-panel rounded-[2rem] p-7 sm:p-10">
                  <h2 className={`${blogSerif.className} text-4xl leading-tight text-custom-text-secondary sm:text-5xl`}>
                    Perguntas frequentes sobre {title.toLowerCase()}
                  </h2>
                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {faqs.map((item) => (
                      <article key={item.question} className="rounded-[1.6rem] border border-custom-text-primary/12 bg-black/10 p-6">
                        <h3 className={`${blogSerif.className} text-2xl leading-tight text-custom-text-secondary`}>
                          {item.question}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">{item.answer}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {localDetails && localDetails.length > 0 ? (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="rounded-[2rem] border border-custom-text-primary/12 bg-[#f6eddc] p-7 text-slate-900 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                    <MapPin className="h-4 w-4" />
                    Presença local
                  </div>
                  <h2 className={`${blogSerif.className} mt-4 text-4xl leading-tight sm:text-5xl`}>
                    Atendimento tributário com base em São Bernardo do Campo e foco em empresas do ABC.
                  </h2>
                  <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {localDetails.map((item) => (
                      <article key={item.title} className="rounded-[1.4rem] border border-[#dcc3a4] bg-white/70 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7f5b39]">{item.title}</p>
                        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">{item.value}</p>
                      </article>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <TrackedLink
                      href="/#contact"
                      ctaLabel="Solicitar atendimento tributário"
                      ctaLocation="tax_page_local_block"
                      trafficContext="lead_capture"
                      className="inline-flex items-center justify-center rounded-full bg-[#1b2028] px-6 py-3 text-sm text-[#f8f0df] transition hover:bg-[#0f1319]"
                    >
                      Solicitar atendimento tributário
                    </TrackedLink>
                    <TrackedLink
                      href="tel:+5511967586911"
                      ctaLabel="Telefone da página tributária"
                      ctaLocation="tax_page_local_phone"
                      trafficContext="lead_capture"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b99066] px-6 py-3 text-sm text-[#7f5b39] transition hover:bg-[#1b2028] hover:text-[#f8f0df]"
                    >
                      <Phone className="h-4 w-4" />
                      Falar pelo telefone
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {relatedLinks && relatedLinks.length > 0 ? (
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="rounded-[1.8rem] border border-custom-text-primary/12 bg-white/5 p-7">
                  <h2 className={`${blogSerif.className} text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}>
                    Leitura relacionada
                  </h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {relatedLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-[1.4rem] border border-custom-text-primary/10 bg-black/10 p-5 text-sm leading-7 text-custom-text-primary/78 transition hover:border-custom-text-primary/26 hover:text-custom-text-secondary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-12 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="home-paper rounded-[2rem] px-6 py-10 text-center text-slate-900 sm:px-10">
                <h2 className={`${blogSerif.className} text-4xl leading-tight sm:text-5xl`}>{finalTitle}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">{finalText}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="rounded-full bg-[#1b2028] px-8 text-[#f8f0df] hover:bg-[#0f1319]">
                    <TrackedLink
                      href={finalPrimaryCta.href}
                      ctaLabel={finalPrimaryCta.label}
                      ctaLocation="area_page_final_primary_cta"
                      trafficContext={finalPrimaryCta.href.includes("#contact") ? "lead_capture" : "commercial_page"}
                    >
                      {finalPrimaryCta.label}
                    </TrackedLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-[#b99066] bg-transparent px-8 text-[#7f5b39] hover:bg-[#1b2028] hover:text-[#f8f0df]"
                  >
                    <TrackedLink
                      href={finalSecondaryCta.href}
                      ctaLabel={finalSecondaryCta.label}
                      ctaLocation="area_page_final_secondary_cta"
                      trafficContext={finalSecondaryCta.href.includes("#contact") ? "lead_capture" : "commercial_page"}
                    >
                      {finalSecondaryCta.label}
                    </TrackedLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
