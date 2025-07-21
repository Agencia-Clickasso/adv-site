import { Building, Users, FileText, Gavel, Home, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas, contratos comerciais, fusões e aquisições.",
      features: ["Constituição de empresas", "Contratos comerciais", "Compliance empresarial"],
    },
    {
      icon: Users,
      title: "Direito Civil",
      description: "Questões relacionadas a contratos, responsabilidade civil e direitos pessoais.",
      features: ["Contratos civis", "Responsabilidade civil", "Direitos da personalidade"],
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis.",
      features: ["Compra e venda", "Locações", "Regularização fundiária"],
    },
    {
      icon: FileText,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas e assessoria em relações de trabalho.",
      features: ["Rescisões contratuais", "Ações trabalhistas", "Consultoria preventiva"],
    },
    {
      icon: Gavel,
      title: "Direito Processual",
      description: "Representação em processos judiciais e administrativos.",
      features: ["Ações judiciais", "Recursos", "Execuções"],
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description: "Orientação jurídica preventiva e estratégica para pessoas físicas e jurídicas.",
      features: ["Pareceres jurídicos", "Consultoria preventiva", "Due diligence"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, sempre com foco na excelência e
              resultados efetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-amber-600 mb-4" />
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
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
  )
}
