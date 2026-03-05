import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, FileText, Shield, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { createAreaMetadata } from "@/lib/seo"

export const metadata: Metadata = createAreaMetadata("direito-empresarial")

export default function DireitoEmpresarialPage() {
  const services = [
    {
      icon: Building,
      title: "Constituição de Empresas",
      description: "Auxiliamos na criação e estruturação de empresas, escolhendo o melhor tipo societário para seu negócio.",
      features: ["Constituição de LTDA", "Constituição de EIRELI", "Contratos sociais", "Registro na Junta Comercial"]
    },
    {
      icon: FileText,
      title: "Contratos Comerciais",
      description: "Elaboração e revisão de contratos comerciais para proteger os interesses da sua empresa.",
      features: ["Contratos de fornecimento", "Contratos de distribuição", "Contratos de franquia", "Acordos de confidencialidade"]
    },
    {
      icon: Shield,
      title: "Compliance Empresarial",
      description: "Implementação de políticas de conformidade e gestão de riscos para sua empresa.",
      features: ["Políticas de compliance", "Gestão de riscos", "Treinamentos", "Auditorias internas"]
    },
    {
      icon: Users,
      title: "Fusões e Aquisições",
      description: "Assessoria completa em processos de M&A, desde a due diligence até o fechamento da operação.",
      features: ["Due diligence", "Estruturação de operações", "Negociações", "Integração pós-fusão"]
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
              <Building className="h-20 w-20 text-custom-text-primary mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-custom-text-secondary mb-6">
              Direito Empresarial
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Estruturação jurídica para empresas com foco em contratos, governança e redução de risco
              operacional. Esta área funciona em conjunto com o núcleo tributário para decisões que afetam
              caixa, expansão e exposição fiscal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Agendar consulta empresarial</Link>
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
                Apoio empresarial para estruturar decisões com mais previsibilidade jurídica e menos ruído
                contratual, societário e regulatório.
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
              Empresarial com impacto tributário exige leitura conjunta
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Constituição societária, contratos, reorganização e due diligence podem gerar efeitos fiscais
              relevantes. Por isso, esta frente apoia a operação empresarial sem competir com o foco principal
              do escritório em estratégia tributária.
            </p>
            <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
              <Link href="/areas/direito-tributario">Conhecer a frente tributária</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-custom-text-secondary mb-6">
              Precisa estruturar uma decisão empresarial com mais segurança?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Revisamos contratos, estrutura e riscos da operação. Quando houver reflexo fiscal,
              o encaminhamento para a área tributária acontece desde o início.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Agendar consulta</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary font-semibold px-8 py-4 text-lg bg-transparent">
                <Link href="/areas/direito-tributario">Ir para Direito Tributário</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
