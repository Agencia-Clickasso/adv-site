export const SEO = {
  siteName: "Lucimeire Xavier Advocacia",
  siteUrl: "https://www.lucimeirexavieradvocacia.adv.br",
  locale: "pt_BR",
  defaultTitle: "Advogada Tributarista em São Bernardo do Campo",
  defaultDescription:
    "Assessoria em Direito Tributário para empresas e profissionais em São Bernardo do Campo e no ABC, com foco em planejamento tributário, execução fiscal, consultoria fiscal e prevenção de riscos tributários.",
  phoneDisplay: "(11) 96758-6911",
  phoneIntl: "+55-11-96758-6911",
  email: "contato@lucimeirexavieradvocacia.adv.br",
  address: {
    streetAddress: "Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101",
    addressLocality: "São Bernardo do Campo",
    addressRegion: "SP",
    postalCode: "09750-730",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/dra.lucimeirexavier",
    "https://www.facebook.com/share/1AuufW4tkE/",
    "https://www.linkedin.com/in/lucimeire-xavier/",
    "https://www.youtube.com/@lucimeirexavier4203",
    "https://www.tiktok.com/@lucimeirexavier",
  ],
} as const

/** Absolute public URL for a path on the canonical host. */
export function canonicalUrl(path: string) {
  return new URL(path, SEO.siteUrl).toString()
}
