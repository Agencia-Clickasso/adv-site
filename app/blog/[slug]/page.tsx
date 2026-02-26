import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Clock, User } from 'lucide-react'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { Button } from '@/components/ui/button'
import mdxComponents from '@/components/mdx-components'
import JsonLd from '@/components/seo/json-ld'
import { buildBlogPostingSchema, canonicalUrl } from '@/lib/seo'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl(`/blog/${slug}`),
      locale: "pt_BR",
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostData(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-custom-bg-primary">
      <JsonLd
        data={buildBlogPostingSchema({
          title: post.title,
          description: post.excerpt,
          slug,
          datePublished: post.date,
          author: post.author,
          category: post.category,
        })}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/#blog">
              <Button 
                variant="ghost" 
                className="text-custom-text-primary hover:text-custom-text-secondary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Blog
              </Button>
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-custom-text-secondary bg-custom-bg-secondary rounded-full uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-custom-text-secondary mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-custom-text-primary mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-custom-text-primary text-sm space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              {post.author && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
              )}
            </div>
          </header>

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white/95 dark:bg-slate-800/95 rounded-lg p-8 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
              <MDXRemote 
                source={post.content} 
                components={mdxComponents}
              />
            </div>
          </article>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-custom-text-primary/30">
            <div className="text-center">
              <p className="text-custom-text-primary mb-4">
                Gostou do artigo? Compartilhe com quem precisa saber.
              </p>
              <Link href="/#blog">
                <Button 
                  variant="outline"
                  className="border-custom-text-primary text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  Ver Mais Artigos
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
