import { Button } from "@/components/ui/button"
import { Scale, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative bg-custom-bg-primary text-custom-text-secondary pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-custom-bg-primary via-custom-bg-secondary to-custom-bg-primary"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excelência em
            <span className="text-custom-text-primary block">Advocacia</span>
          </h1>
          <p className="text-xl md:text-2xl text-custom-text-primary mb-8 leading-relaxed">
            Defendendo seus direitos com dedicação, experiência e compromisso. Soluções jurídicas personalizadas para
            cada cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg"
            >
              <Link href="#contact">Agendar Consulta</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <Link href="#about">Conheça Nosso Trabalho</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <Scale className="h-12 w-12 text-custom-text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Justiça</h3>
              <p className="text-custom-text-primary">Defendemos seus direitos com integridade e transparência</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-custom-text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proteção</h3>
              <p className="text-custom-text-primary">Estratégias sólidas para proteger seus interesses</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-custom-text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Confiança</h3>
              <p className="text-custom-text-primary">Relacionamento próximo e atendimento personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
