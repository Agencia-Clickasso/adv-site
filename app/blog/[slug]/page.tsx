import { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock3, Compass, FolderOpen, User } from "lucide-react"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import mdxComponents from "@/components/mdx-components"
import JsonLd from "@/components/seo/json-ld"
import { getAllPostSlugs, getPostData } from "@/lib/blog"
import { blogSans, blogSerif, formatBlogDate } from "@/lib/blog-design"
import { buildBlogPostingSchema, createBlogPostMetadata } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = "force-dynamic"

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return createBlogPostMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className={`relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary ${blogSans.className}`}>
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

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="blog-grid-pattern absolute inset-0" />
        <div className="blog-orb absolute left-[-12rem] top-20 h-96 w-96" />
        <div className="blog-orb absolute right-[-10rem] top-[26rem] h-80 w-80 opacity-75" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 rounded-full border border-custom-text-primary/20 bg-white/5 px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o blog
            </Button>
          </Link>

          <section className="rounded-[2rem] border border-custom-text-primary/15 bg-gradient-to-br from-white/8 via-white/4 to-transparent p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-custom-text-primary/68">
              <span className="blog-kicker">{post.category}</span>
              <span>Artigo jurídico</span>
            </div>

            <h1 className={`${blogSerif.className} mt-6 max-w-4xl text-5xl leading-[0.96] text-custom-text-secondary sm:text-6xl`}>
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-custom-text-primary/88 sm:text-xl">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-custom-text-primary/78">
              <span className="inline-flex items-center gap-2 rounded-full border border-custom-text-primary/14 bg-black/10 px-4 py-2">
                <Compass className="h-4 w-4" />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-custom-text-primary/14 bg-black/10 px-4 py-2">
                <Clock3 className="h-4 w-4" />
                {post.readTime}
              </span>
              {post.author ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-custom-text-primary/14 bg-black/10 px-4 py-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              ) : null}
            </div>
          </section>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="blog-paper rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="blog-prose max-w-none">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-8">
              <div className="rounded-[1.75rem] border border-custom-text-primary/12 bg-custom-bg-secondary/88 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
                <p className="text-xs uppercase tracking-[0.28em] text-custom-text-primary/65">Leitura guiada</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-custom-text-primary/82">
                  <p>O artigo foi diagramado para leitura longa, com contraste mais alto e espaçamento mais generoso.</p>
                  <p>Se este tema afeta decisão fiscal, societária ou contratual, trate o conteúdo como insumo técnico, não como diagnóstico fechado.</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-custom-text-primary/12 bg-[#f6eddc] p-6 text-slate-900 shadow-[0_18px_55px_rgba(0,0,0,0.22)]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d2b290] bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#7f5b39]">
                  <FolderOpen className="h-3.5 w-3.5" />
                  Atendimento
                </div>
                <h2 className={`${blogSerif.className} mt-5 text-3xl leading-tight`}>
                  Precisa aplicar isso no contexto real da empresa?
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  O escritório pode avaliar risco, documentos e estratégia antes de qualquer resposta formal.
                </p>
                <Button asChild className="mt-6 rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319]">
                  <TrackedLink
                    href="/#contact"
                    ctaLabel="Solicitar orientação tributária"
                    ctaLocation="blog_post_sidebar_cta"
                    trafficContext="lead_capture"
                  >
                    Solicitar orientação
                  </TrackedLink>
                </Button>
              </div>
            </aside>
          </div>

          <footer className="mt-12 border-t border-custom-text-primary/12 pt-8">
            <div className="flex flex-col gap-6 rounded-[1.75rem] border border-custom-text-primary/12 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-custom-text-primary/60">Continue lendo</p>
                <p className={`${blogSerif.className} mt-2 text-3xl text-custom-text-secondary`}>Explore outras análises do blog jurídico.</p>
              </div>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="rounded-full border-custom-text-primary/30 bg-transparent text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                >
                  Ver mais artigos
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
