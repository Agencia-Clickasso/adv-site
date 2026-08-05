import { ArrowRight, ChartNoAxesColumn, Scale, ShieldCheck, Sparkles } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 text-custom-text-secondary sm:pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <div className="space-y-7 rounded-[1.8rem] border border-custom-text-primary/14 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 shadow-[0_28px_100px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:space-y-8 sm:rounded-[2rem] sm:p-10 lg:p-12">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Advocacia tributária estratégica
              </div>

              <div className="space-y-5">
                <h1
                  className={`${blogSerif.className} max-w-5xl text-[2.75rem] leading-[0.97] tracking-[-0.035em] sm:text-6xl lg:text-7xl`}
                >
                  Advogada tributarista em São Bernardo do Campo para empresas e clínicas que precisam decidir com clareza.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-custom-text-primary/88 sm:text-lg sm:leading-8">
                  Planejamento tributário, execução fiscal e consultoria preventiva — com base no ABC e atendimento em
                  todo o Brasil.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Tributário", value: "Núcleo da atuação" },
                  { label: "Clínicas", value: "Nicho prioritário" },
                  { label: "Base", value: "São Bernardo · ABC" },
                ].map((item) => (
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
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8"
                >
                  <TrackedLink
                    href="#contact"
                    ctaLabel="Solicitar atendimento tributário"
                    ctaLocation="home_hero_primary"
                    trafficContext="lead_capture"
                  >
                    Solicitar atendimento
                    <ArrowRight className="h-5 w-5" />
                  </TrackedLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  <TrackedLink
                    href="/para/clinicas-medicas-e-odontologicas"
                    ctaLabel="Assessoria para clínicas de saúde"
                    ctaLocation="home_hero_secondary"
                    trafficContext="commercial_page"
                  >
                    Análise para clínicas
                  </TrackedLink>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 lg:h-full lg:grid-rows-[auto_1fr]">
              <div className="home-paper rounded-[1.8rem] p-6 text-slate-900 sm:rounded-[2rem] sm:p-8">
                <p className="text-xs uppercase tracking-[0.26em] text-[#7f5b39]">Como a atuação entra</p>
                <h2 className={`${blogSerif.className} mt-4 text-[2.1rem] leading-[1.05] sm:text-4xl`}>
                  Diagnóstico técnico antes que o problema vire custo permanente.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Scale, title: "Planejamento tributário" },
                  { icon: ShieldCheck, title: "Defesa fiscal" },
                  { icon: ChartNoAxesColumn, title: "Leitura de impacto" },
                  { icon: Sparkles, title: "Consultoria preventiva" },
                ].map((item) => (
                  <div key={item.title} className="home-panel rounded-[1.6rem] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className={`${blogSerif.className} mt-4 text-xl text-custom-text-secondary sm:text-2xl`}>
                      {item.title}
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
