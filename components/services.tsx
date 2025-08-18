import { Building, Users, FileText, Gavel, Home, Briefcase, Calculator, ArrowRight, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const getServiceSlug = (title: string) => {
    const slugs: { [key: string]: string } = {
      "Direito Empresarial": "direito-empresarial",
      "Direito Civil": "direito-civil",
      "Direito Imobiliário": "direito-imobiliario",
      "Direito Trabalhista": "direito-trabalhista",
      "Direito Tributário": "direito-tributario",
      "Direito Processual": "direito-processual",
      "Consultoria Jurídica": "consultoria-juridica"
    }
    return slugs[title] || "#"
  }

  const services = [
    {
      icon: Calculator,
      title: "Direito Tributário",
      description: "Assessoria em questões tributárias, planejamento fiscal e defesa em processos tributários.",
      features: ["Planejamento tributário", "Defesa em execuções fiscais", "Consultoria fiscal"],
      highlight: true, // Highlight the main specialty
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas, contratos comerciais, fusões e aquisições.",
      features: ["Constituição de empresas", "Contratos comerciais", "Compliance empresarial"],
      highlight: false,
    },
    {
      icon: Users,
      title: "Direito Civil",
      description: "Questões relacionadas a contratos, responsabilidade civil e direitos pessoais.",
      features: ["Contratos civis", "Responsabilidade civil", "Direitos da personalidade"],
      highlight: false,
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis.",
      features: ["Compra e venda", "Locações", "Regularização fundiária"],
      highlight: false,
    },
    {
      icon: FileText,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas e assessoria em relações de trabalho.",
      features: ["Rescisões contratuais", "Ações trabalhistas", "Consultoria preventiva"],
      highlight: false,
    },
    {
      icon: Gavel,
      title: "Direito Processual",
      description: "Representação em processos judiciais e administrativos.",
      features: ["Ações judiciais", "Recursos", "Execuções"],
      highlight: false,
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description: "Orientação jurídica preventiva e estratégica para pessoas físicas e jurídicas.",
      features: ["Pareceres jurídicos", "Consultoria preventiva", "Due diligence"],
      highlight: false,
    },
  ]

  return (
    <section id="services" className="py-24 bg-custom-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(206,167,133,0.03),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-custom-text-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium mb-6">
              <Star className="h-4 w-4" />
              Nossas Especialidades
            </div>
            <h2 className="text-5xl font-bold text-custom-text-secondary mb-6 leading-tight">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-custom-text-primary/90 max-w-4xl mx-auto leading-relaxed">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, sempre com foco na excelência e
              resultados efetivos para nossos clientes.
            </p>
          </div>

          {/* Enhanced services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group h-full transition-all duration-500 hover:shadow-2xl ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-custom-text-primary/10 to-custom-text-primary/5 border-2 border-custom-text-primary/30 shadow-lg' 
                    : 'bg-custom-bg-secondary/50 backdrop-blur-sm border border-custom-text-primary/10 hover:bg-custom-bg-secondary/70'
                } hover:border-custom-text-primary/40 transform hover:-translate-y-2`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      service.highlight 
                        ? 'bg-custom-text-primary/30 text-custom-text-primary' 
                        : 'bg-custom-text-primary/20 text-custom-text-primary'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    {service.highlight && (
                      <div className="bg-custom-text-primary text-custom-bg-secondary px-2 py-1 rounded-full text-xs font-bold">
                        ESPECIALIDADE
                      </div>
                    )}
                  </div>
                  <CardTitle className={`text-xl mb-3 ${
                    service.highlight ? 'text-custom-text-secondary' : 'text-custom-text-secondary'
                  }`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className={`text-base leading-relaxed ${
                    service.highlight ? 'text-custom-text-primary/90' : 'text-custom-text-primary/80'
                  }`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Features list with enhanced styling */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-custom-text-primary/90">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.highlight ? 'bg-custom-text-primary' : 'bg-custom-text-primary/70'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Enhanced CTA section */}
                  <div className="pt-4 border-t border-custom-text-primary/10">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className={`w-full group/btn transition-all duration-300 ${
                        service.highlight
                          ? 'border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary'
                          : 'border-custom-text-primary/50 text-custom-text-primary/80 hover:border-custom-text-primary hover:text-custom-text-primary hover:bg-custom-text-primary/10'
                      }`}
                    >
                      <Link href={`/areas/${getServiceSlug(service.title)}`} className="flex items-center justify-center gap-2">
                        Saiba Mais
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-custom-bg-secondary/50 backdrop-blur-sm border border-custom-text-primary/20 rounded-2xl px-8 py-6">
              <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-custom-text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-custom-text-secondary mb-1">
                  Precisa de Aconselhamento Jurídico?
                </h3>
                <p className="text-sm text-custom-text-primary/80">
                  Agende uma consulta e descubra como podemos ajudar
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href="#contact">
                  Agendar Consulta
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
