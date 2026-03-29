import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { blogSerif } from "@/lib/blog-design"
import { SEO } from "@/lib/seo"

export default function Footer() {
  return (
    <footer className="relative border-t border-custom-text-primary/12 bg-custom-bg-secondary text-custom-text-secondary">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <div className="space-y-5">
                <Image
                  src="/images/logo.png"
                  alt="Lucimeire Xavier Advocacia"
                  width={200}
                  height={80}
                  className="h-12 w-auto"
                />
                <p className={`${blogSerif.className} max-w-xl text-3xl leading-tight text-custom-text-secondary`}>
                  Advocacia tributária para decisões empresariais com mais clareza, menos improviso e melhor resposta jurídica em São Bernardo do Campo e no ABC.
                </p>
                <p className="max-w-xl text-sm leading-7 text-custom-text-primary/76">
                  Escritório com foco principal em Direito Tributário e atuação complementar em áreas que cercam a
                  operação, o passivo e a estrutura jurídica do cliente.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    ["Instagram", "https://www.instagram.com/dra.lucimeirexavier", Instagram],
                    ["Facebook", "https://www.facebook.com/share/1AuufW4tkE/", Facebook],
                    ["LinkedIn", "https://www.linkedin.com/in/lucimeire-xavier/", Linkedin],
                    ["YouTube", "https://www.youtube.com/@lucimeirexavier4203", Youtube],
                  ].map(([label, href, Icon]) => (
                    <Link
                      key={label}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label as string}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-custom-text-primary/14 text-custom-text-primary transition hover:border-custom-text-primary/38 hover:text-custom-text-secondary"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                  <Link
                    href="https://www.tiktok.com/@lucimeirexavier"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-custom-text-primary/14 text-custom-text-primary transition hover:border-custom-text-primary/38 hover:text-custom-text-secondary"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/58">Navegação</p>
                <div className="mt-5 space-y-3 text-sm text-custom-text-primary/78">
                  <Link href="/areas/direito-tributario" className="block transition hover:text-custom-text-secondary">
                    Advogada tributarista em São Bernardo do Campo
                  </Link>
                  <Link href="/blog" className="block transition hover:text-custom-text-secondary">
                    Blog jurídico
                  </Link>
                  <Link href="/#services" className="block transition hover:text-custom-text-secondary">
                    Áreas complementares
                  </Link>
                  <TrackedLink
                    href="/#contact"
                    ctaLabel="Agendar análise tributária"
                    ctaLocation="footer_contact_cta"
                    trafficContext="lead_capture"
                    className="block transition hover:text-custom-text-secondary"
                  >
                    Agendar análise tributária
                  </TrackedLink>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/58">Contato</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-custom-text-primary/78">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-custom-text-primary" />
                    <span>
                      {SEO.address.streetAddress}
                      <br />
                      Centro - {SEO.address.addressLocality} - {SEO.address.addressRegion}
                      <br />
                      CEP: {SEO.address.postalCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-custom-text-primary" />
                    <TrackedLink
                      href={`tel:${SEO.phoneIntl.replace(/-/g, "")}`}
                      ctaLabel="Telefone do rodapé"
                      ctaLocation="footer_phone"
                      trafficContext="lead_capture"
                      className="transition hover:text-custom-text-secondary"
                    >
                      {SEO.phoneDisplay}
                    </TrackedLink>
                  </div>
                  <div className="flex items-center gap-3 break-all">
                    <Mail className="h-5 w-5 text-custom-text-primary" />
                    <TrackedLink
                      href={`mailto:${SEO.email}`}
                      ctaLabel="Email do rodapé"
                      ctaLocation="footer_email"
                      trafficContext="lead_capture"
                      className="transition hover:text-custom-text-secondary"
                    >
                      {SEO.email}
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-custom-text-primary/12 pt-6 text-sm text-custom-text-primary/58 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; {new Date().getFullYear()} Lucimeire Xavier Advocacia. Todos os direitos reservados.</p>
              <p>OAB/SP 508937</p>
            </div>
          </div>
        </div>
      </footer>
  )
}
