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
  Stethoscope,
  Users,
} from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { blogSerif } from "@/lib/blog-design"

const supportAreas = [
  { icon: Building, title: "Direito Empresarial", href: "/areas/direito-empresarial" },
  { icon: Gavel, title: "Direito Processual", href: "/areas/direito-processual" },
  { icon: Briefcase, title: "Consultoria Jurídica", href: "/areas/consultoria-juridica" },
  { icon: Users, title: "Direito Civil", href: "/areas/direito-civil" },
  { icon: Home, title: "Direito Imobiliário", href: "/areas/direito-imobiliario" },
  { icon: FileText, title: "Direito Trabalhista", href: "/areas/direito-trabalhista" },
]

const taxFeatures = [
  "Diagnóstico e estrutura tributária",
  "Defesa em cobrança e execução fiscal",
  "Planejamento e revisão de regime",
  "Consultoria preventiva",
]

/** Services — cream primary + dark niche banner (redesign). */
export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="section-kicker">
                <Star className="h-3.5 w-3.5" />
                Foco de atuação
              </div>
              <h2
                className={`${blogSerif.className} text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl lg:text-6xl`}
              >
                Tributário no centro.
                <br />
                <span className="text-custom-text-primary">O resto entra se o caso pedir.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-custom-text-primary/80 sm:text-base">
              Planejamento, execução fiscal e consultoria. Áreas complementares só no detalhe.
            </p>
          </div>

          {/* Bento: big tax + clinics */}
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="home-paper flex flex-col rounded-[1.8rem] p-7 text-slate-900 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-custom-bg-primary text-custom-text-primary">
                <Calculator className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-custom-text-primary">
                Foco principal
              </p>
              <h3 className={`${blogSerif.className} mt-2 text-4xl leading-tight`}>
                Direito Tributário
              </h3>
              <ul className="mt-6 flex-1 space-y-3">
                {taxFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-custom-text-primary/20 bg-white/60 px-4 py-3 text-sm text-slate-800"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-custom-text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full rounded-full bg-custom-bg-primary text-custom-text-secondary hover:bg-custom-bg-secondary sm:w-auto"
              >
                <TrackedLink
                  href="/areas/direito-tributario"
                  ctaLabel="Ver direito tributário"
                  ctaLocation="services_primary_card"
                  trafficContext="commercial_page"
                >
                  Ver direito tributário
                  <ArrowRight className="h-4 w-4" />
                </TrackedLink>
              </Button>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-[1.8rem] border border-custom-text-primary/30 bg-gradient-to-br from-custom-text-primary/20 via-custom-bg-secondary to-custom-bg-primary p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-custom-text-primary text-custom-bg-primary">
                  <Stethoscope className="h-7 w-7" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-custom-text-primary">
                  Nicho prioritário
                </p>
                <h3
                  className={`${blogSerif.className} mt-2 text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}
                >
                  Clínicas médicas e odontológicas
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-custom-text-primary/90">
                  Diagnóstico, planejamento, créditos e consultoria com foco no setor da saúde.
                </p>
                <Button
                  asChild
                  className="mt-6 w-full rounded-full bg-custom-text-primary text-custom-bg-primary hover:bg-custom-text-secondary sm:w-auto"
                >
                  <TrackedLink
                    href="/para/clinicas-medicas-e-odontologicas"
                    ctaLabel="Abrir landing de clínicas"
                    ctaLocation="services_clinics_banner"
                    trafficContext="commercial_page"
                  >
                    Ver soluções para clínicas
                    <ArrowRight className="h-4 w-4" />
                  </TrackedLink>
                </Button>
              </div>

              <div className="home-panel rounded-[1.5rem] px-6 py-5">
                <p className="text-xs uppercase tracking-[0.2em] text-custom-text-primary/60">
                  Também atendemos
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {supportAreas.map((area) => (
                    <Link
                      key={area.title}
                      href={area.href}
                      className="inline-flex items-center gap-2 rounded-full border border-custom-text-primary/20 bg-black/20 px-3 py-1.5 text-sm text-custom-text-secondary transition hover:border-custom-text-primary/45 hover:bg-custom-text-primary/10"
                    >
                      <area.icon className="h-3.5 w-3.5 text-custom-text-primary" />
                      {area.title.replace("Direito ", "")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
