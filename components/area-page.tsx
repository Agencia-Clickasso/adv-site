import Link from "next/link"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
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
                    <Link href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
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
                <Link href={bridgeCta.href} className="mt-6 inline-flex">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                  >
                    {bridgeCta.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="home-paper rounded-[2rem] px-6 py-10 text-center text-slate-900 sm:px-10">
                <h2 className={`${blogSerif.className} text-4xl leading-tight sm:text-5xl`}>{finalTitle}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700">{finalText}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" className="rounded-full bg-[#1b2028] px-8 text-[#f8f0df] hover:bg-[#0f1319]">
                    <Link href={finalPrimaryCta.href}>{finalPrimaryCta.label}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-full border-[#b99066] bg-transparent px-8 text-[#7f5b39] hover:bg-[#1b2028] hover:text-[#f8f0df]"
                  >
                    <Link href={finalSecondaryCta.href}>{finalSecondaryCta.label}</Link>
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
