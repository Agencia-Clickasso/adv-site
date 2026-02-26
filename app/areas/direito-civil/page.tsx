import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, Shield, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-civil")

export default function DireitoCivilPage() {
  const services = [
    {
      icon: FileText,
      title: "Contratos Civis",
      description: "Elaboração, revisão e análise de contratos civis diversos, garantindo a proteção dos seus interesses.",
      features: ["Contratos de compra e venda", "Contratos de prestação de serviços", "Contratos de locação", "Contratos de doação"]
    },
    {
      icon: Shield,
      title: "Responsabilidade Civil",
      description: "Defesa em casos de danos morais, materiais e estéticos, buscando a reparação adequada.",
      features: ["Danos morais", "Danos materiais", "Responsabilidade civil objetiva", "Indenizações"]
    },
    {
      icon: Users,
      title: "Direitos da Personalidade",
      description: "Proteção dos direitos fundamentais da pessoa, incluindo honra, imagem e privacidade.",
      features: ["Direito à honra", "Direito à imagem", "Direito à privacidade", "Direito ao nome"]
    },
    {
      icon: Scale,
      title: "Direito de Família",
      description: "Assessoria em questões familiares, incluindo divórcios, guarda de filhos e inventários.",
      features: ["Divórcios", "Guarda de filhos", "Inventários", "Alimentos"]
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
              <Users className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Civil
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Proteção dos seus direitos civis com expertise e dedicação. Oferecemos soluções jurídicas 
              personalizadas para questões relacionadas a contratos, responsabilidade civil e direitos pessoais.
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
                Oferecemos uma ampla gama de serviços em Direito Civil para atender às suas necessidades jurídicas.
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
              Precisa de Ajuda com Questões Civis?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Nossa equipe está pronta para ajudá-lo com suas questões jurídicas. 
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
