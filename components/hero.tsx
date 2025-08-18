import { Button } from "@/components/ui/button"
import { Scale, Shield, Users, ArrowRight, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative bg-custom-bg-primary text-custom-text-secondary pt-20 overflow-hidden">
      {/* Background with enhanced gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-bg-primary via-custom-bg-secondary to-custom-bg-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(206,167,133,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(254,251,215,0.05),transparent_50%)]"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-custom-text-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-custom-text-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-custom-text-primary/8 rounded-full blur-lg animate-pulse delay-500"></div>
      
      {/* Additional floating decorative elements */}
      <div className="absolute top-32 left-1/3 w-8 h-8 bg-custom-text-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-48 right-1/4 w-6 h-6 bg-custom-text-primary/15 rounded-full animate-float-delay-1"></div>
      <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-custom-text-primary/12 rounded-full animate-float-delay-2"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main content with improved layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium">
                <Star className="h-4 w-4" />
                Especialista em Direito Tributário
              </div>

              {/* Main heading with improved typography */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-custom-text-secondary">Excelência em</span>
                  <span className="text-custom-text-primary block bg-gradient-to-r from-custom-text-primary to-custom-text-primary/80 bg-clip-text text-transparent">
                    Advocacia
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-custom-text-primary/90 leading-relaxed max-w-lg">
                  Defendendo seus direitos com dedicação, experiência e compromisso. Soluções jurídicas personalizadas para
                  cada cliente.
                </p>
              </div>



              {/* CTA buttons with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Agendar Consulta
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg rounded-xl bg-transparent transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href="#about">Conheça Nosso Trabalho</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Stats and features */}
            <div className="space-y-8">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-custom-bg-secondary/50 backdrop-blur-sm border border-custom-text-primary/20 rounded-2xl p-6 text-center hover:bg-custom-bg-secondary/70 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-custom-text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10</div>
                  <div className="text-sm text-custom-text-primary/80">Nota no TCC</div>
                </div>
                <div className="bg-custom-bg-secondary/50 backdrop-blur-sm border border-custom-text-primary/20 rounded-2xl p-6 text-center hover:bg-custom-bg-secondary/70 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-custom-text-primary mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                  <div className="text-sm text-custom-text-primary/80">Horas de Cursos</div>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-custom-bg-secondary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-custom-text-primary/20 rounded-full flex items-center justify-center group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                    <Scale className="h-5 w-5 text-custom-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-custom-text-secondary">Justiça</h4>
                    <p className="text-sm text-custom-text-primary/80">Defendemos seus direitos com integridade</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-custom-bg-secondary/30 rounded-xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-custom-text-primary/20 rounded-full flex items-center justify-center group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                    <Shield className="h-5 w-5 text-custom-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-custom-text-secondary">Proteção</h4>
                    <p className="text-sm text-custom-text-primary/80">Estratégias sólidas para seus interesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom features grid with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group text-center p-8 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <Scale className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-custom-text-secondary">Justiça</h3>
              <p className="text-custom-text-primary/80 leading-relaxed">Defendemos seus direitos com integridade e transparência, sempre buscando o melhor resultado para nossos clientes.</p>
            </div>
            <div className="group text-center p-8 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <Shield className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-custom-text-secondary">Proteção</h3>
              <p className="text-custom-text-primary/80 leading-relaxed">Estratégias sólidas e personalizadas para proteger seus interesses e garantir seus direitos.</p>
            </div>
            <div className="group text-center p-8 bg-custom-bg-secondary/30 backdrop-blur-sm rounded-2xl border border-custom-text-primary/10 hover:bg-custom-bg-secondary/50 hover:border-custom-text-primary/30 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-custom-text-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                <Users className="h-8 w-8 text-custom-text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-custom-text-secondary">Confiança</h3>
              <p className="text-custom-text-primary/80 leading-relaxed">Relacionamento próximo e atendimento personalizado, construindo confiança através da excelência.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
