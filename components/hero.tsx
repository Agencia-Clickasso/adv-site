import { Button } from "@/components/ui/button"
import { Scale, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excelência em
            <span className="text-amber-400 block">Advocacia</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Defendendo seus direitos com dedicação, experiência e compromisso. Soluções jurídicas personalizadas para
            cada cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg"
            >
              <Link href="#contact">Agendar Consulta Gratuita</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <Link href="#about">Conheça Nosso Trabalho</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <Scale className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Justiça</h3>
              <p className="text-slate-300">Defendemos seus direitos com integridade e transparência</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proteção</h3>
              <p className="text-slate-300">Estratégias sólidas para proteger seus interesses</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Confiança</h3>
              <p className="text-slate-300">Relacionamento próximo e atendimento personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
