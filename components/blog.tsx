import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from "@/lib/blog"
import Link from "next/link"

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <section id="blog" className="py-20 bg-custom-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-custom-text-secondary mb-4">Insights Jurídicos</h2>
            <p className="text-xl text-custom-text-primary max-w-3xl mx-auto">
              Mantenha-se informado com nossos artigos sobre as principais mudanças e tendências do mundo jurídico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center text-sm text-custom-text-primary mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-xs text-custom-text-primary mb-3 uppercase tracking-wide">{post.category}</div>
                  <CardTitle className="text-xl text-custom-text-secondary leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-custom-text-primary">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-custom-text-primary">{post.readTime}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-custom-text-primary hover:text-custom-text-secondary">
                        Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-secondary bg-transparent"
              >
                Ver Todos os Artigos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
