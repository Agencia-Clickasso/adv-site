import { SEO } from "@/lib/seo"

export const WHATSAPP_PHONE = SEO.phoneIntl.replace(/\D/g, "")

export function buildWhatsAppUrl(message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`
  return message ? `${base}&text=${encodeURIComponent(message)}` : base
}

export function buildTeseWhatsAppUrl(teseTitle: string) {
  return buildWhatsAppUrl(`Olá, vim pelo site e quero analisar a tese: ${teseTitle}.`)
}
