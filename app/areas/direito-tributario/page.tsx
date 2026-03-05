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
              Advogada Tributarista para Empresas e Profissionais
            </h1>
            <p className="text-xl text-custom-text-primary mb-8 leading-relaxed">
              Atuação em planejamento tributário, execuções fiscais, consultoria fiscal preventiva e contencioso
              tributário para reduzir riscos, proteger patrimônio e enfrentar cobranças com estratégia.
            </p>
            <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
              <Link href="/#contact">Falar sobre meu caso</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-custom-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-custom-text-secondary mb-4">Como Podemos Atuar</h2>
              <p className="text-xl text-custom-text-primary max-w-3xl mx-auto">
                Soluções tributárias consultivas e contenciosas para regularizar passivos, otimizar carga fiscal e
                fortalecer a conformidade do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              <div className="rounded-2xl border border-custom-text-primary/20 bg-custom-bg-secondary/30 p-6">
                <h3 className="text-xl font-semibold text-custom-text-secondary mb-3">Quando procurar ajuda</h3>
                <p className="text-custom-text-primary leading-relaxed">
                  Quando há aumento da carga tributária, cobrança inesperada, execução fiscal, dúvida sobre regime
                  tributário ou necessidade de revisar operações e recuperar créditos.
                </p>
              </div>
              <div className="rounded-2xl border border-custom-text-primary/20 bg-custom-bg-secondary/30 p-6">
                <h3 className="text-xl font-semibold text-custom-text-secondary mb-3">O que analisamos</h3>
                <p className="text-custom-text-primary leading-relaxed">
                  Passivos fiscais, obrigações acessórias, enquadramento tributário, histórico de autuações,
                  oportunidades de prevenção e medidas administrativas ou judiciais cabíveis.
                </p>
              </div>
              <div className="rounded-2xl border border-custom-text-primary/20 bg-custom-bg-secondary/30 p-6">
                <h3 className="text-xl font-semibold text-custom-text-secondary mb-3">Objetivo da atuação</h3>
                <p className="text-custom-text-primary leading-relaxed">
                  Reduzir exposição fiscal, organizar a resposta jurídica e buscar soluções sustentáveis para caixa,
                  operação e patrimônio.
                </p>
              </div>
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

            <div className="mt-12 rounded-2xl border border-custom-text-primary/20 bg-custom-bg-secondary/20 p-8">
              <h2 className="text-3xl font-bold text-custom-text-secondary mb-4">Perguntas frequentes sobre assessoria tributária</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-custom-text-primary">
                <div>
                  <h3 className="text-lg font-semibold text-custom-text-secondary mb-2">Execução fiscal sempre exige processo judicial?</h3>
                  <p>
                    Nem sempre. O primeiro passo é entender a origem da cobrança, o estágio do débito e quais medidas
                    administrativas, negociais ou judiciais fazem sentido para o caso.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-custom-text-secondary mb-2">Planejamento tributário serve só para empresas grandes?</h3>
                  <p>
                    Não. Empresas de diferentes portes podem revisar regime, operação e obrigações para reduzir risco e
                    evitar pagamento indevido dentro da legalidade.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-custom-text-secondary mb-2">É possível recuperar tributos pagos indevidamente?</h3>
                  <p>
                    Dependendo do histórico da empresa e da natureza do recolhimento, pode haver espaço para revisão,
                    compensação ou pedido de restituição.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-custom-text-secondary mb-2">Quando vale buscar consultoria preventiva?</h3>
                  <p>
                    Antes de mudança societária, expansão operacional, revisão de contratos ou sempre que houver dúvida
                    sobre impacto fiscal relevante no negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-custom-text-secondary mb-6">
              Precisa revisar sua situação fiscal com mais clareza?
            </h2>
            <p className="text-xl text-custom-text-primary mb-8">
              Fale com a Dra. Lucimeire Xavier para entender riscos, alternativas e próximos passos para o seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-custom-text-primary hover:bg-custom-text-secondary text-custom-bg-secondary font-semibold px-8 py-4 text-lg">
                <Link href="/#contact">Solicitar Atendimento</Link>
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
