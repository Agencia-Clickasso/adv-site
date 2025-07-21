import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
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
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
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
                <span className="text-sm">(11) 9999-8888</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-400" />
                <span className="text-sm">contato@lucimeirexavier.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Lucimeire Xavier Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">OAB/SP 123.456 | CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  )
}
