import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gavel, FileText, Shield, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DireitoProcessualPage() {
  const services = [
    {
      icon: Gavel,
      title: "Ações Judiciais",
      description: "Representação em processos judiciais em todas as instâncias, defendendo seus interesses com expertise.",
      features: ["Petições iniciais", "Contestação", "Recursos", "Execuções"]
    },
    {
      icon: FileText,
      title: "Recursos",
      description: "Elaboração e apresentação de recursos para garantir a defesa dos seus direitos em todas as instâncias.",
      features: ["Recursos ordinários", "Recursos especiais", "Recursos extraordinários", "Embargos"]
    },
    {
      icon: Shield,
      title: "Execuções",
      description: "Atuação em processos de execução para garantir o cumprimento de obrigações e direitos.",
      features: ["Execuções judiciais", "Execuções fiscais", "Execuções trabalhistas", "Embargos à execução"]
    },
    {
      icon: Scale,
      title: "Processos Administrativos",
      description: "Representação em processos administrativos perante órgãos públicos e autarquias.",
      features: ["Defesas administrativas", "Recursos administrativos", "Mandados de segurança", "Ações populares"]
    }
  ]

  return (
    <div className="min-h-screen bg-custom-bg-primary">
      {/* Header */}
      <div className="bg-custom-bg-secondary border-b border-custom-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-custom-text-primary hover:text-custom-text-secondary transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao início
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-custom-bg-primary via-custom-bg-secondary to-custom-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Gavel className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Processual
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Representação processual especializada em todas as instâncias. Oferecemos assessoria 
              completa em processos judiciais e administrativos.
            </p>
            <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
              <Link href="/#contact">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-custom-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-custom-text-secondary mb-4">Nossos Serviços</h2>
              <p className="text-xl text-custom-text-primary max-w-3xl mx-auto">
                Oferecemos uma ampla gama de serviços em Direito Processual para defender seus interesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-bg-secondary">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-custom-text-primary mb-4" />
                    <CardTitle className="text-xl text-custom-text-secondary">{service.title}</CardTitle>
                    <CardDescription className="text-custom-text-primary">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-custom-text-primary">
                          <div className="w-2 h-2 bg-custom-text-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-custom-text-secondary mb-6">
              Precisa de Representação Processual?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Nossa equipe está pronta para representá-lo em seus processos. 
              Entre em contato e agende uma consulta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Agendar Consulta</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
