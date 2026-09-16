import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import JsonLd from "@/components/seo/json-ld"
import TeseCard from "@/components/teses/tese-card"
import TesesCategoryNav from "@/components/teses/teses-category-nav"
import TrackedLink from "@/components/tracked-link"
import { blogSerif } from "@/lib/blog-design"
import { ALL_TESES, TESE_CATEGORIES, TESE_DISCLAIMER } from "@/lib/teses"
import { buildItemListSchema, createPageMetadata } from "@/lib/seo"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

const PATH = "/teses-e-oportunidades-tributarias"

export const metadata: Metadata = createPageMetadata({
  title: "Teses e Oportunidades Tributárias para Empresas e Pessoas Físicas",
  description:
    "Lista de teses e oportunidades tributárias analisadas pelo escritório: recuperação de INSS, IR, PIS/COFINS, ICMS, ITBI, ITCMD, planejamento tributário, agronegócio e defesa fiscal. Análise sempre individual, sem promessa de resultado.",
  path: PATH,
  keywords: [
    "teses tributárias",
    "oportunidades tributárias",
    "recuperação de créditos tributários",
    "teses tributárias para empresas",
    "recuperação de inss",
    "exclusão do icms da base do pis e cofins",
    "isenção de imposto de renda",
    "planejamento tributário",
    "defesa em execução fiscal",
  ],
})

export const revalidate = 3600

export default function TesesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="home-grid-pattern absolute inset-0" />
        <div className="home-orb absolute left-[-10rem] top-12 h-80 w-80" />
        <div className="home-orb absolute right-[-6rem] top-[38rem] h-72 w-72 opacity-70" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <JsonLd
            data={buildItemListSchema({
              path: PATH,
              name: "Teses e oportunidades tributárias",
              description:
                "Lista de teses e oportunidades tributárias analisadas pelo escritório, organizadas por área do direito tributário.",
              items: ALL_TESES.map((tese) => ({ name: tese.title })),
            })}
          />

          <Link href="/#services">
            <Button
              variant="ghost"
              className="mb-8 rounded-full border border-custom-text-primary/20 bg-white/5 px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o site
            </Button>
          </Link>

          <section className="rounded-[2rem] border border-custom-text-primary/15 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-6 shadow-[0_32px_120px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="section-kicker">
              <Sparkles className="h-3.5 w-3.5" />
              Teses e oportunidades tributárias
            </div>

            <h1
              className={`${blogSerif.className} mt-6 max-w-4xl text-[2.6rem] leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-6xl`}
            >
              Oportunidades tributárias que podem ser analisadas no seu caso.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-custom-text-primary/88 sm:text-lg">
              Reunimos as frentes de análise que o escritório acompanha com mais frequência — de
              contribuições previdenciárias e imposto de renda a PIS/COFINS, ICMS, tributos
              patrimoniais, planejamento tributário e defesa fiscal. Cada oportunidade depende de
              análise individual da documentação e do caso concreto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>
                  {ALL_TESES.length}
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">
                  Teses e oportunidades
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>
                  {TESE_CATEGORIES.length}
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">
                  Frentes tributárias
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>
                  1 a 1
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">
                  Análise individual do caso
                </p>
              </div>
            </div>

            <div className="mt-8">
              <TesesCategoryNav />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8"
              >
                <TrackedLink
                  href={buildWhatsAppUrl(
                    "Olá, vim pelo site e quero entender qual oportunidade tributária se aplica ao meu caso."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  ctaLabel="Falar sobre meu caso"
                  ctaLocation="teses_page_hero"
                  trafficContext="lead_capture"
                >
                  Falar sobre meu caso
                  <ArrowRight className="h-5 w-5" />
                </TrackedLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
              >
                <Link href="/#contact">Enviar os documentos pelo formulário</Link>
              </Button>
            </div>
          </section>

          <div className="mt-16 space-y-14">
            {TESE_CATEGORIES.map((categoria) => (
              <section key={categoria.id} id={categoria.id} className="scroll-mt-24">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-custom-text-primary/12 pb-5">
                  <h2
                    className={`${blogSerif.className} text-3xl text-custom-text-secondary sm:text-4xl`}
                  >
                    {categoria.title}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/55">
                    {categoria.teses.length}{" "}
                    {categoria.teses.length === 1 ? "oportunidade" : "oportunidades"}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {categoria.teses.map((tese) => (
                    <TeseCard key={tese.id} tese={tese} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 rounded-[2rem] border border-custom-text-primary/20 bg-black/20 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-custom-text-primary/16 text-custom-text-primary">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <h2
                  className={`${blogSerif.className} text-2xl text-custom-text-secondary sm:text-3xl`}
                >
                  {TESE_DISCLAIMER.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-custom-text-primary/80 sm:text-base sm:leading-8">
                  {TESE_DISCLAIMER.text}
                </p>
                <p className="mt-3 text-sm leading-7 text-custom-text-primary/80 sm:text-base sm:leading-8">
                  {TESE_DISCLAIMER.note}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-custom-text-primary/15 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-6 text-center shadow-[0_32px_120px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-10">
            <h2
              className={`${blogSerif.className} text-3xl text-custom-text-secondary sm:text-4xl`}
            >
              Não sabe qual tese se aplica ao seu caso?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-custom-text-primary/85">
              O primeiro passo é um diagnóstico técnico. A partir da operação, dos documentos e do
              histórico fiscal, o escritório indica o que faz sentido analisar — sem promessa de
              resultado.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary sm:px-8"
              >
                <TrackedLink
                  href={buildWhatsAppUrl(
                    "Olá, vim pelo site e quero um diagnóstico sobre as oportunidades tributárias do meu caso."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  ctaLabel="Solicitar diagnóstico tributário"
                  ctaLocation="teses_page_final"
                  trafficContext="lead_capture"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="h-5 w-5" />
                </TrackedLink>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-custom-text-primary/30 bg-transparent px-8 text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
              >
                <Link href="/areas/direito-tributario">Ver atuação em Direito Tributário</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
