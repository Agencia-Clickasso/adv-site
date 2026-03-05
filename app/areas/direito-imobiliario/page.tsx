import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, FileText, Shield, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-imobiliario")

export default function DireitoImobiliarioPage() {
  const services = [
    {
      icon: Home,
      title: "Compra e Venda",
      description: "Assessoria completa em transações imobiliárias, desde a negociação até a escrituração.",
      features: ["Análise de documentos", "Negociações", "Elaboração de contratos", "Escrituração"]
    },
    {
      icon: FileText,
      title: "Locações",
      description: "Elaboração e revisão de contratos de locação, garantindo a proteção dos seus interesses.",
      features: ["Contratos de locação", "Renovações", "Despejos", "Revisões de aluguel"]
    },
    {
      icon: Shield,
      title: "Regularização Fundiária",
      description: "Processos de regularização de imóveis, incluindo usucapião e desapropriação.",
      features: ["Usucapião", "Desapropriação", "Regularização de terras", "Certidões"]
    },
    {
      icon: Scale,
      title: "Direito Condominial",
      description: "Assessoria em questões condominiais, incluindo convenções e administração.",
      features: ["Convenções condominiais", "Administração", "Contenciosos", "Assembleias"]
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
              <Home className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Imobiliário
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Apoio jurídico para compra, locação, regularização e proteção patrimonial em operações
              imobiliárias. Esta atuação complementa o trabalho principal do escritório em tributário,
              especialmente quando a operação traz reflexo fiscal ou patrimonial relevante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Analisar operação imobiliária</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
                <Link href="/areas/direito-tributario">Ver atuação em Direito Tributário</Link>
              </Button>
            </div>
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
                Suporte jurídico para reduzir risco documental, contratual e patrimonial em negócios
                imobiliários.
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

      <section className="py-20 bg-custom-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-custom-text-secondary mb-6">
              Imóveis também pedem leitura tributária
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Compra e venda, holdings, locação e regularização podem afetar ITBI, ganho de capital e
              organização patrimonial. O encaminhamento para a área tributária evita olhar parcial sobre a operação.
            </p>
            <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
              <Link href="/areas/direito-tributario">Entender o impacto tributário</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-custom-text-secondary mb-6">
              Vai comprar, vender ou regularizar um imóvel?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Revisar a operação antes da assinatura reduz risco contratual e custo de correção. Se houver
              efeito fiscal, a análise segue integrada com a frente tributária.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Agendar consulta</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
                <Link href="/areas/direito-tributario">Falar com tributário</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
