import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="bg-custom-bg-secondary text-custom-text-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <Image
                src="/images/logo.png"
                alt="Lucimeire Xavier Advocacia"
                width={200}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <p className="text-custom-text-primary mb-6 max-w-md">
                Escritório de advocacia especializado em Direito Tributário e soluções jurídicas personalizadas, 
                com formação de excelência e compromisso com resultados eficazes para nossos clientes.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/dra.lucimeirexavier"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-custom-text-primary hover:text-custom-text-secondary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1AuufW4tkE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-custom-text-primary hover:text-custom-text-secondary transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/lucimeire-xavier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-custom-text-primary hover:text-custom-text-secondary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.youtube.com/@lucimeirexavier4203"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-custom-text-primary hover:text-custom-text-secondary transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@lucimeirexavier"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-custom-text-primary hover:text-custom-text-secondary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Áreas de Atuação</h3>
              <ul className="space-y-2 text-custom-text-primary">
                <li>
                  <Link href="/areas/direito-tributario" className="hover:text-custom-text-secondary transition-colors">
                    Direito Tributário
                  </Link>
                </li>
                <li>
                  <Link href="/areas/direito-civil" className="hover:text-custom-text-secondary transition-colors">
                    Direito Civil
                  </Link>
                </li>
                <li>
                  <Link href="/areas/direito-empresarial" className="hover:text-custom-text-secondary transition-colors">
                    Direito Empresarial
                  </Link>
                </li>
                <li>
                  <Link href="/areas/direito-trabalhista" className="hover:text-custom-text-secondary transition-colors">
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link href="/areas/direito-imobiliario" className="hover:text-custom-text-secondary transition-colors">
                    Direito Imobiliário
                  </Link>
                </li>
                <li>
                  <Link href="/areas/consultoria-juridica" className="hover:text-custom-text-secondary transition-colors">
                    Consultoria Jurídica
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-custom-text-primary">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-custom-text-secondary" />
                  <span className="text-sm">
                    Rua José Versolato, nº 111, BL B - 11° andar – Cj. 1101
                    <br />
                    Centro - São Bernardo do Campo - SP
                    <br />
                    CEP: 09750-730
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-custom-text-secondary" />
                  <span className="text-sm">(11) 96758-6911</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-custom-text-secondary" />
                  <span className="text-sm">contato@lucimeirexavieradvocacia.adv.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-custom-bg-primary mt-8 pt-8 text-center text-custom-text-primary">
            <p>&copy; {new Date().getFullYear()} Lucimeire Xavier Advocacia. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">OAB/SP 508937</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=11967586911"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s',
        }}
        className="hover:scale-110 focus:outline-none focus:ring-2 focus:ring-custom-text-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
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