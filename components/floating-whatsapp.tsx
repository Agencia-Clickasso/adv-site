import TrackedLink from "@/components/tracked-link"
import WhatsAppIcon from "@/components/icons/whatsapp-icon"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export default function FloatingWhatsApp() {
  return (
    <TrackedLink
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="Fale conosco no WhatsApp"
      ctaLabel="Fale conosco no WhatsApp"
      ctaLocation="floating_whatsapp"
      trafficContext="lead_capture"
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-text-secondary sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
    </TrackedLink>
  )
}
