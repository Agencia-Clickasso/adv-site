import { Building, Users, FileText, Gavel, Home, Briefcase, Calculator, ArrowRight, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type SupportArea = {
  icon: typeof Building
  title: string
  description: string
  features: string[]
  href: string
  bridge: string
}

export default function Services() {
  const primaryService = {
    icon: Calculator,
    title: "Direito Tributário",
    description:
      "Atuação central do escritório para planejamento tributário, revisão de carga fiscal, defesas administrativas e execuções fiscais.",
    features: [
      "Planejamento tributário e reorganização",
      "Defesa em execuções fiscais e cobranças",
      "Consultoria para reduzir pagamento indevido",
      "Análise estratégica de passivo e risco fiscal",
    ],
    href: "/areas/direito-tributario",
  }

  const supportAreas: SupportArea[] = [
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Estruturação societária, contratos e governança para decisões empresariais com reflexo fiscal.",
      features: ["Constituição de empresas", "Contratos comerciais", "Compliance empresarial"],
      href: "/areas/direito-empresarial",
      bridge: "Apoia decisões que costumam exigir leitura tributária conjunta.",
    },
    {
      icon: Gavel,
      title: "Direito Processual",
      description: "Estratégia processual para litígios judiciais e administrativos ligados à operação e à cobrança.",
      features: ["Ações judiciais", "Recursos", "Execuções"],
      href: "/areas/direito-processual",
      bridge: "Ganha relevância quando o caso envolve contencioso tributário.",
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description: "Consultoria preventiva para revisar documentos, rotinas e decisões antes que virem passivo.",
      features: ["Pareceres jurídicos", "Consultoria preventiva", "Due diligence"],
      href: "/areas/consultoria-juridica",
      bridge: "Funciona como porta de entrada para diagnóstico fiscal mais completo.",
    },
    {
      icon: Users,
      title: "Direito Civil",
      description: "Contratos e disputas patrimoniais que pedem previsibilidade jurídica e prevenção de desgaste.",
      features: ["Contratos civis", "Responsabilidade civil", "Direitos da personalidade"],
      href: "/areas/direito-civil",
      bridge: "Complementa operações com impacto patrimonial e negocial.",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis com atenção ao risco patrimonial da operação.",
      features: ["Compra e venda", "Locações", "Regularização fundiária"],
      href: "/areas/direito-imobiliario",
      bridge: "Entra quando o negócio imobiliário traz efeito fiscal relevante.",
    },
    {
      icon: FileText,
      title: "Direito Trabalhista",
      description: "Revisão de rotinas e contingências para reduzir passivo trabalhista e impacto financeiro.",
      features: ["Rescisões contratuais", "Ações trabalhistas", "Consultoria preventiva"],
      href: "/areas/direito-trabalhista",
      bridge: "Complementa a análise de custo e exposição da operação.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-custom-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(206,167,133,0.03),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-custom-text-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium mb-6">
              <Star className="h-4 w-4" />
              Foco de Atuação
            </div>
            <h2 className="text-5xl font-bold text-custom-text-secondary mb-6 leading-tight">
              Direito Tributário como eixo principal
            </h2>
            <p className="text-xl text-custom-text-primary/90 max-w-4xl mx-auto leading-relaxed">
              A aquisição orgânica e a proposta comercial do site estão concentradas em planejamento,
              contencioso e consultoria tributária. As demais áreas existem como apoio à operação,
              não como disputa de protagonismo.
            </p>
          </div>

          <Card className="mb-12 bg-gradient-to-br from-custom-text-primary/10 to-custom-text-primary/5 border-2 border-custom-text-primary/30 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-custom-text-primary/30 text-custom-text-primary">
                    <primaryService.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="inline-flex bg-custom-text-primary text-custom-bg-secondary px-2 py-1 rounded-full text-xs font-bold mb-3">
                      FOCO PRINCIPAL
                    </div>
                    <CardTitle className="text-3xl text-custom-text-secondary mb-3">
                      {primaryService.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-custom-text-primary/90 max-w-3xl">
                      {primaryService.description}
                    </CardDescription>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary font-semibold px-6 py-3 rounded-xl shadow-lg"
                >
                  <Link href={primaryService.href} className="flex items-center gap-2">
                    Ver página principal
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {primaryService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-custom-text-primary/10 bg-custom-bg-secondary/40 px-4 py-3 text-sm text-custom-text-primary/90"
                  >
                    <div className="h-2 w-2 rounded-full bg-custom-text-primary"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-custom-text-secondary mb-3">
              Áreas complementares
            </h3>
            <p className="text-custom-text-primary/80 max-w-3xl mx-auto">
              Estas frentes apoiam decisões empresariais, patrimoniais e processuais que frequentemente
              se conectam ao risco fiscal e à estratégia tributária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((service) => (
              <Card
                key={service.title}
                className="group h-full bg-custom-bg-secondary/50 backdrop-blur-sm border border-custom-text-primary/10 hover:bg-custom-bg-secondary/70 hover:border-custom-text-primary/30 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-custom-text-primary/20 text-custom-text-primary mb-4 group-hover:bg-custom-text-primary/30 transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-custom-text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-custom-text-primary/80">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-custom-text-primary/85">
                        <div className="w-2 h-2 rounded-full mr-3 bg-custom-text-primary/70"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-custom-text-primary/70 mb-6">
                    {service.bridge}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-custom-text-primary/50 text-custom-text-primary/80 hover:border-custom-text-primary hover:text-custom-text-primary hover:bg-custom-text-primary/10"
                  >
                    <Link href={service.href} className="flex items-center justify-center gap-2">
                      Ver área complementar
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex max-w-4xl flex-col gap-5 rounded-2xl border border-custom-text-primary/20 bg-custom-bg-secondary/50 px-8 py-6 backdrop-blur-sm lg:flex-row lg:items-center">
              <div className="w-12 h-12 bg-custom-text-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                <Star className="h-6 w-6 text-custom-text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-custom-text-secondary mb-1">
                  Sua demanda envolve cobrança fiscal, tributo indevido ou risco de autuação?
                </h3>
                <p className="text-sm text-custom-text-primary/80">
                  Priorize a análise tributária primeiro. Se a operação também tocar contrato, societário,
                  processo ou passivo trabalhista, as áreas complementares entram no mesmo fluxo.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary font-semibold px-6 py-3 rounded-xl shadow-lg"
              >
                <Link href="#contact">Solicitar análise tributária</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
