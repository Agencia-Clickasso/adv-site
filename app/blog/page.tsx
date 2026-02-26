import { Metadata } from 'next'
import { Calendar, ArrowRight, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getSortedPostsData } from '@/lib/blog'

export const metadata: Metadata = {
  title: "Blog Jurídico e Tributário",
  description:
    "Conteúdo jurídico com foco em Direito Tributário, compliance, contratos e prevenção de riscos para empresas e profissionais.",
  alternates: {
    canonical: "/blog",
  },
}

export const dynamic = "force-dynamic"

export default async function BlogPage() {
  const posts = await getSortedPostsData()
  
  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {
    const category = post.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(post)
    return acc
  }, {} as Record<string, typeof posts>)

  const categories = Object.keys(postsByCategory).sort()

  return (
    <div className="min-h-screen bg-custom-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/#blog">
              <Button 
                variant="ghost" 
                className="text-custom-text-primary hover:text-custom-text-secondary mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Site
              </Button>
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-custom-text-secondary mb-6">
                Insights Jurídicos
              </h1>
              <p className="text-xl text-custom-text-primary max-w-3xl mx-auto">
                Todos os nossos artigos organizados por área do direito. 
                Mantenha-se informado com as principais mudanças e tendências do mundo jurídico.
              </p>
            </div>
          </div>

          {/* Posts by Category */}
          {categories.map((category) => (
            <section key={category} className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-custom-text-secondary mb-2">
                  {category}
                </h2>
                <div className="w-24 h-1 bg-custom-text-primary rounded"></div>
                <p className="text-custom-text-primary mt-4">
                  {postsByCategory[category].length} artigo{postsByCategory[category].length !== 1 ? 's' : ''} nesta categoria
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsByCategory[category].map((post) => (
                  <Card key={post.slug} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-custom-bg-secondary/20 border-custom-text-primary/20">
                    <CardHeader>
                      <div className="flex items-center text-sm text-custom-text-primary mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-xs text-custom-text-primary mb-3 uppercase tracking-wide font-semibold">
                        {post.category}
                      </div>
                      {post.author && (
                        <div className="flex items-center text-xs text-custom-text-primary mb-3">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                      )}
                      <CardTitle className="text-xl text-custom-text-secondary leading-tight hover:text-custom-text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-custom-text-primary">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-custom-text-primary">
                          {post.readTime}
                        </span>
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-custom-text-primary hover:text-custom-text-secondary hover:bg-custom-bg-secondary/30"
                          >
                            Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-custom-text-secondary mb-4">
                Nenhum artigo encontrado
              </h2>
              <p className="text-custom-text-primary mb-8">
                Novos artigos serão publicados em breve. Volte sempre para conferir as novidades!
              </p>
              <Link href="/#blog">
                <Button 
                  variant="outline"
                  className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  Voltar para o Site
                </Button>
              </Link>
            </div>
          )}

          {/* Footer */}
          {posts.length > 0 && (
            <div className="text-center mt-16 pt-8 border-t border-custom-text-primary/30">
              <h3 className="text-2xl font-bold text-custom-text-secondary mb-4">
                Precisa de Orientação Jurídica?
              </h3>
              <p className="text-custom-text-primary mb-6 max-w-2xl mx-auto">
                Se você tem dúvidas sobre algum dos temas abordados ou precisa de assessoria jurídica especializada, 
                entre em contato conosco.
              </p>
              <Link href="/#contact">
                <Button 
                  size="lg"
                  className="bg-custom-text-primary text-custom-bg-primary hover:bg-custom-text-secondary"
                >
                  Entre em Contato
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
