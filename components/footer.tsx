import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 text-white">
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
              <p className="text-slate-300 mb-6 max-w-md">
                Escritório de advocacia especializado em soluções jurídicas personalizadas, com mais de 15 anos de
                experiência e compromisso com a excelência.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/lucimeirexavieradvocacia/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/lucimeire-xavier-b8b18aa0/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Áreas de Atuação</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Direito Civil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Direito Empresarial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Direito Trabalhista
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Direito Imobiliário
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Consultoria Jurídica
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-amber-400" />
                  <span className="text-sm">Rua das Flores, 123 - São Paulo, SP</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-amber-400" />
                  <span className="text-sm">(11) 96758-6911</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-amber-400" />
                  <span className="text-sm">contato@lucimeirexavieradvocacia.adv.br</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
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
        className="hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
