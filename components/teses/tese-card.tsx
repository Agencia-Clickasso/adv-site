import { ArrowRight } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { blogSerif } from "@/lib/blog-design"
import type { Tese } from "@/lib/teses"
import { buildTeseWhatsAppUrl } from "@/lib/whatsapp"

type TeseCardProps = {
  tese: Tese
}

export default function TeseCard({ tese }: TeseCardProps) {
  return (
    <article className="home-panel flex h-full flex-col rounded-[1.7rem] p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/58">
        Tese {String(tese.numero).padStart(2, "0")}
      </p>

      <h3
        className={`${blogSerif.className} mt-3 text-2xl leading-tight text-custom-text-secondary sm:text-[1.75rem]`}
      >
        {tese.title}
      </h3>

      <div className="mt-5 space-y-4 text-sm leading-7 text-custom-text-primary/82">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/55">
            Oportunidade
          </p>
          <p className="mt-1">{tese.oportunidade}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/55">
            Para quem é
          </p>
          <p className="mt-1">{tese.paraQuem}</p>
        </div>
      </div>

      <div className="mt-5 rounded-[1.4rem] border border-custom-text-primary/12 bg-black/15 p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/55">
          Análise personalizada
        </p>
        <p className="mt-2 text-sm leading-7 text-custom-text-primary/78">{tese.analise}</p>
      </div>

      <div className="mt-auto pt-6">
        <TrackedLink
          href={buildTeseWhatsAppUrl(tese.title)}
          target="_blank"
          rel="noopener noreferrer"
          ctaLabel={tese.ctaLabel}
          ctaLocation="teses_page_card"
          trafficContext="lead_capture"
          className="inline-flex items-center gap-2 rounded-full bg-custom-text-primary px-5 py-3 text-sm font-semibold text-custom-bg-primary transition hover:bg-custom-text-secondary"
        >
          {tese.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </TrackedLink>
      </div>
    </article>
  )
}
