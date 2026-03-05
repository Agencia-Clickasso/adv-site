import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { blogSerif } from "@/lib/blog-design"

export default function Footer() {
  return (
    <>
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
                  Advocacia tributária para decisões empresariais com mais clareza, menos improviso e melhor resposta jurídica.
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
                    Direito Tributário
                  </Link>
                  <Link href="/blog" className="block transition hover:text-custom-text-secondary">
                    Blog jurídico
                  </Link>
                  <Link href="/#services" className="block transition hover:text-custom-text-secondary">
                    Áreas complementares
                  </Link>
                  <Link href="/#contact" className="block transition hover:text-custom-text-secondary">
                    Agendar consulta
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-custom-text-primary/58">Contato</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-custom-text-primary/78">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-custom-text-primary" />
                    <span>
                      Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101
                      <br />
                      Centro - São Bernardo do Campo - SP
                      <br />
                      CEP: 09750-730
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-custom-text-primary" />
                    <span>(11) 96758-6911</span>
                  </div>
                  <div className="flex items-center gap-3 break-all">
                    <Mail className="h-5 w-5 text-custom-text-primary" />
                    <span>contato@lucimeirexavieradvocacia.adv.br</span>
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

      <a
        href="https://api.whatsapp.com/send?phone=11967586911"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-text-secondary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.122 1.392-.207.237-.414.266-.77.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.547.155-.724.159-.158.355-.414.533-.622.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.949 0 1.738 1.27 3.417 1.447 3.654.178.237 2.5 3.82 6.063 5.207.849.292 1.51.466 2.027.596.851.204 1.627.175 2.24.106.683-.077 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z"
            fill="#fff"
          />
        </svg>
      </a>
    </>
  )
}
