import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className="bg-custom-bg-secondary text-custom-text-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Lucimeire Xavier Advocacia</h3>
              <p className="text-custom-text-primary text-sm leading-relaxed">
                Especialistas em Direito Tributário, oferecendo soluções jurídicas personalizadas 
                e eficazes para nossos clientes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
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
    </>
  )
}
