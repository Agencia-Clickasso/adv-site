import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Blog() {
  const posts = [
    {
      title: "Mudanças na Lei Trabalhista: O que Você Precisa Saber",
      excerpt:
        "Análise das principais alterações na legislação trabalhista e seus impactos para empregadores e empregados.",
      date: "15 de Janeiro, 2024",
      readTime: "5 min de leitura",
      category: "Direito Trabalhista",
    },
    {
      title: "Contratos Empresariais: Cláusulas Essenciais",
      excerpt: "Guia completo sobre as cláusulas mais importantes que não podem faltar em contratos comerciais.",
      date: "10 de Janeiro, 2024",
      readTime: "7 min de leitura",
      category: "Direito Empresarial",
    },
    {
      title: "Direitos do Consumidor: Como Se Proteger",
      excerpt:
        "Conheça seus direitos como consumidor e saiba como proceder em casos de problemas com produtos e serviços.",
      date: "5 de Janeiro, 2024",
      readTime: "4 min de leitura",
      category: "Direito Civil",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Insights Jurídicos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantenha-se informado com nossos artigos sobre as principais mudanças e tendências do mundo jurídico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center text-sm text-amber-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="text-xs text-slate-500 mb-3 uppercase tracking-wide">{post.category}</div>
                  <CardTitle className="text-xl text-slate-900 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-slate-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                      Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
            >
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
