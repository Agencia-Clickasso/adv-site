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

const taxLines = [
  "Diagnóstico e estrutura",
  "Defesa em cobrança e execução",
  "Planejamento e regime",
  "Consultoria preventiva",
]

/**
 * Serviços — tributário no centro, áreas só com título.
 * Sem destaque de nicho na home (página geral para qualquer cliente).
 */
export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-2xl space-y-4">
            <div className="section-kicker">
              <Star className="h-3.5 w-3.5" />
              Atuação
            </div>
            <h2
              className={`${blogSerif.className} text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl`}
            >
              Direito tributário no centro.
            </h2>
          </div>

          <div className="home-paper rounded-[1.8rem] p-7 text-slate-900 sm:p-9">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-custom-bg-primary text-custom-text-primary">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className={`${blogSerif.className} mt-4 text-3xl leading-tight sm:text-4xl`}>
                  Direito Tributário
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Para empresas, profissionais e organizações que precisam de clareza fiscal.
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full bg-custom-bg-primary text-custom-text-secondary hover:bg-custom-bg-secondary"
                >
                  <TrackedLink
                    href="/areas/direito-tributario"
                    ctaLabel="Ver direito tributário"
                    ctaLocation="services_primary_card"
                    trafficContext="commercial_page"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </TrackedLink>
                </Button>
              </div>

              <ul className="grid flex-1 gap-3 sm:grid-cols-2">
                {taxLines.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 rounded-xl border border-custom-text-primary/20 bg-white/60 px-4 py-3 text-sm text-slate-800"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-custom-text-primary" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-custom-text-primary/60">
              Também atuamos em
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group home-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-3.5 transition hover:border-custom-text-primary/30"
                >
                  <area.icon className="h-4 w-4 shrink-0 text-custom-text-primary" />
                  <span
                    className={`${blogSerif.className} flex-1 text-lg text-custom-text-secondary`}
                  >
                    {area.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-custom-text-primary/40 group-hover:text-custom-text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
