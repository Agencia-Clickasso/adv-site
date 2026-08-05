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

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="section-kicker">
                <Star className="h-3.5 w-3.5" />
                Foco de atuação
              </div>
              <h2
                className={`${blogSerif.className} max-w-3xl text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl lg:text-6xl`}
              >
                Direito tributário no centro. O resto entra quando o caso pede.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-custom-text-primary/84 sm:text-lg">
                Planejamento, execução fiscal e consultoria. Áreas complementares só quando ajudam a
                fechar a solução.
              </p>
            </div>

            <div className="home-paper rounded-[2rem] p-7 text-slate-900 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7cfb3] text-[#7f5b39]">
                <Calculator className="h-7 w-7" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                Foco principal
              </p>
              <h3 className={`${blogSerif.className} mt-3 text-4xl leading-tight`}>
                Direito Tributário
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm leading-7 text-slate-700">
                {[
                  "Diagnóstico e estrutura tributária",
                  "Defesa em cobrança e execução fiscal",
                  "Planejamento e revisão de regime",
                  "Consultoria preventiva",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9c744a]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-7 rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319]"
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
          </div>

          {/* Nicho clínicas */}
          <div className="mt-10 home-paper rounded-[1.8rem] p-6 text-slate-900 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                Nicho prioritário
              </p>
              <h3 className={`${blogSerif.className} mt-3 text-3xl leading-tight sm:text-4xl`}>
                Clínicas médicas e odontológicas
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Diagnóstico, planejamento, créditos e consultoria com foco no setor da saúde.
              </p>
            </div>
            <Button
              asChild
              className="mt-5 shrink-0 rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319] sm:mt-0"
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

          {/* Áreas complementares — só título (feedback Lucimeire) */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/60">
              Áreas complementares
            </p>
            <p
              className={`${blogSerif.className} mt-3 text-2xl text-custom-text-secondary sm:text-3xl`}
            >
              Clique para ver o detalhe, se precisar.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map((area) => (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group home-panel flex items-center gap-4 rounded-[1.4rem] px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-custom-text-primary/28"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-custom-text-primary/16 text-custom-text-primary">
                    <area.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`${blogSerif.className} flex-1 text-xl text-custom-text-secondary`}
                  >
                    {area.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-custom-text-primary/50 transition group-hover:text-custom-text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
