import { ArrowRight, Scale, ShieldCheck, Sparkles } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

/**
 * Home hero — geral, pouca explicação, desperta curiosidade.
 * Página principal atende qualquer cliente; nichos ficam em páginas próprias.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 text-custom-text-secondary sm:pt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="rounded-[2rem] border border-custom-text-primary/20 bg-gradient-to-b from-custom-bg-secondary via-custom-bg-primary to-custom-bg-primary px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="flex flex-wrap items-center gap-3">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Advocacia tributária
              </div>
              <span className="rounded-full border border-custom-text-primary/25 bg-custom-text-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-custom-text-primary">
                São Bernardo · ABC · Brasil
              </span>
            </div>

            <h1
              className={`${blogSerif.className} mt-8 max-w-4xl text-[2.6rem] leading-[0.95] tracking-[-0.04em] text-custom-text-secondary sm:text-6xl lg:text-[4rem]`}
            >
              Clareza tributária para quem precisa decidir sem improviso.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-custom-text-primary/90 sm:text-lg">
              Planejamento, defesa fiscal e consultoria — com leitura jurídica ligada ao risco real.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-custom-text-primary px-8 text-base font-semibold text-custom-bg-primary hover:bg-custom-text-secondary"
              >
                <TrackedLink
                  href="#contact"
                  ctaLabel="Solicitar atendimento"
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
                className="h-14 rounded-full border-2 border-custom-text-primary/50 bg-transparent px-8 text-base text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
              >
                <TrackedLink
                  href="/areas/direito-tributario"
                  ctaLabel="Conhecer a atuação tributária"
                  ctaLocation="home_hero_secondary"
                  trafficContext="commercial_page"
                >
                  Conhecer a atuação
                </TrackedLink>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Scale,
                title: "Planejamento",
                text: "Estrutura e regime com previsibilidade.",
              },
              { icon: ShieldCheck, title: "Defesa fiscal", text: "Cobrança, autuação e execução." },
              { icon: Sparkles, title: "Prevenção", text: "Consultoria antes do litígio." },
            ].map((item) => (
              <div
                key={item.title}
                className="home-panel flex flex-col rounded-[1.5rem] p-6 transition hover:border-custom-text-primary/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-text-primary text-custom-bg-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className={`${blogSerif.className} mt-5 text-3xl text-custom-text-secondary`}>
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-custom-text-primary/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
