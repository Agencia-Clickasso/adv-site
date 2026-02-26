import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, FileText, Shield, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"
import JsonLd from "@/components/seo/json-ld"
import { buildTaxServiceSchema, createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-tributario")

export default function DireitoTributarioPage() {
  const services = [
    {
      icon: Calculator,
      title: "Planejamento Tributário",
      description: "Estratégias de otimização fiscal para pessoas físicas e jurídicas, sempre dentro da legalidade.",
      features: ["Estruturação societária", "Otimização fiscal", "Análise de regimes tributários", "Consultoria preventiva"]
    },
    {
      icon: Shield,
      title: "Defesa em Execuções Fiscais",
      description: "Representação em processos de execução fiscal, buscando a melhor solução para seu caso.",
      features: ["Defesas em execuções", "Acordos fiscais", "Suspensões de execução", "Recursos administrativos"]
    },
    {
      icon: FileText,
      title: "Consultoria Fiscal",
      description: "Orientação especializada em questões tributárias para evitar problemas e otimizar resultados.",
      features: ["Análise de obrigações", "Compliance tributário", "Auditorias fiscais", "Treinamentos"]
    },
    {
      icon: Scale,
      title: "Contencioso Tributário",
      description: "Representação em processos administrativos e judiciais relacionados a questões tributárias.",
      features: ["Mandados de segurança", "Ações anulatórias", "Compensações tributárias", "Restituições"]
    }
  ]

  return (
    <div className="min-h-screen bg-custom-bg-primary">
      <JsonLd data={buildTaxServiceSchema()} />
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
              <Calculator className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Tributário
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Assessoria tributária estratégica para empresas e profissionais, com atuação em planejamento tributário,
              execuções fiscais, consultoria fiscal e contencioso para proteger patrimônio e reduzir riscos fiscais.
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
                Soluções tributárias consultivas e contenciosas para regularizar passivos, otimizar carga fiscal e
                fortalecer a conformidade do seu negócio.
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
              Precisa de Assessoria Tributária?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Fale com a Dra. Lucimeire Xavier e receba orientação tributária personalizada para o seu caso.
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
