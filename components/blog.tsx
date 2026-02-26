import { Calendar, ArrowRight, User, Star, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from "@/lib/blog"
import Link from "next/link"

export default async function Blog() {
  const posts = await getSortedPostsData()

  return (
    <section id="blog" className="py-24 bg-custom-bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(206,167,133,0.03),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-custom-text-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced header section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-custom-text-primary/10 border border-custom-text-primary/20 rounded-full px-4 py-2 text-sm text-custom-text-primary font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Conteúdo Jurídico
            </div>
            <h2 className="text-5xl font-bold text-custom-text-secondary mb-6 leading-tight">
              Insights Jurídicos
            </h2>
            <p className="text-xl text-custom-text-primary/90 max-w-4xl mx-auto leading-relaxed">
              Mantenha-se informado com nossos artigos sobre as principais mudanças e tendências do mundo jurídico.
              Conhecimento é poder, e estamos aqui para compartilhar o nosso.
            </p>
          </div>

          {/* Enhanced blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="group h-full bg-custom-bg-primary/30 backdrop-blur-sm border border-custom-text-primary/10 hover:bg-custom-bg-primary/50 hover:border-custom-text-primary/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  {/* Enhanced metadata section */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-custom-text-primary/70">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-custom-text-primary/60 bg-custom-text-primary/10 px-2 py-1 rounded-full">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1 bg-custom-text-primary/20 text-custom-text-primary px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        {post.category}
                      </div>
                      {post.author && (
                        <div className="flex items-center text-xs text-custom-text-primary/70">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced title and description */}
                  <CardTitle className="text-xl text-custom-text-secondary leading-tight mb-3 group-hover:text-custom-text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-custom-text-primary/80 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Enhanced CTA section */}
                  <div className="flex items-center justify-between pt-4 border-t border-custom-text-primary/10">
                    <div className="flex items-center gap-2 text-sm text-custom-text-primary/70">
                      <Star className="h-3 w-3 text-custom-text-primary/50" />
                      <span>Artigo recomendado</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-custom-text-primary hover:text-custom-text-secondary hover:bg-custom-text-primary/10 group/btn transition-all duration-300"
                      >
                        Ler mais 
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-custom-bg-primary/30 backdrop-blur-sm border border-custom-text-primary/20 rounded-2xl px-8 py-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-custom-text-secondary mb-2">
                  Quer se manter atualizado?
                </h3>
                <p className="text-custom-text-primary/80 max-w-md">
                  Acesse nosso blog completo e descubra mais insights jurídicos valiosos para você.
                </p>
              </div>
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary bg-transparent rounded-xl px-8 py-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Ver Todos os Artigos
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
