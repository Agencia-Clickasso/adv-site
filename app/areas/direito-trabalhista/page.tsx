import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Users, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-trabalhista")

export default function DireitoTrabalhistaPage() {
  const services = [
    {
      icon: FileText,
      title: "Rescisões Contratuais",
      description: "Assessoria completa em processos de demissão, incluindo cálculo de verbas rescisórias e acordos.",
      features: ["Cálculo de verbas rescisórias", "Acordos trabalhistas", "Demissões por justa causa", "Demissões sem justa causa"]
    },
    {
      icon: Shield,
      title: "Ações Trabalhistas",
      description: "Defesa dos seus direitos trabalhistas em todas as instâncias da Justiça do Trabalho.",
      features: ["Reclamações trabalhistas", "Recursos trabalhistas", "Execuções trabalhistas", "Defesas em processos"]
    },
    {
      icon: Users,
      title: "Consultoria Preventiva",
      description: "Orientações para evitar problemas trabalhistas e manter a conformidade com a legislação.",
      features: ["Revisão de contratos", "Políticas internas", "Treinamentos", "Auditorias trabalhistas"]
    },
    {
      icon: Scale,
      title: "Direitos Coletivos",
      description: "Assessoria em negociações coletivas, acordos e convenções coletivas de trabalho.",
      features: ["Negociações coletivas", "Acordos coletivos", "Convenções coletivas", "Sindicatos"]
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
              <FileText className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Trabalhista
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Defendemos seus direitos trabalhistas com expertise e dedicação. Oferecemos assessoria 
              completa em questões trabalhistas para empregadores e empregados.
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
                Oferecemos uma ampla gama de serviços em Direito Trabalhista para proteger seus direitos.
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
              Precisa de Ajuda Trabalhista?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Nossa equipe está pronta para defender seus direitos trabalhistas. 
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
