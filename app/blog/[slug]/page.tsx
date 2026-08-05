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

export const revalidate = 3600

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
    <main
      className={`relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary ${blogSans.className}`}
    >
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

      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="blog-grid-pattern absolute inset-0" />
        <div className="blog-orb absolute left-[-10rem] top-16 h-80 w-80" />
        <div className="blog-orb absolute right-[-8rem] top-[20rem] h-72 w-72 opacity-70" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 rounded-full border border-custom-text-primary/18 bg-white/[0.04] px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o blog
            </Button>
          </Link>

          {/* Header */}
          <header className="overflow-hidden rounded-[1.85rem] border border-custom-text-primary/12 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent p-6 shadow-[0_24px_80px_rgba(0,0,0,0.26)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#cea785]/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#e8c9a8]">
                {post.category}
              </span>
              <span className="rounded-full border border-custom-text-primary/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-custom-text-primary/55">
                Artigo jurídico
              </span>
            </div>

            <h1
              className={`${blogSerif.className} mt-5 max-w-4xl text-[2.4rem] leading-[1.02] text-custom-text-secondary sm:text-5xl lg:text-[3.25rem]`}
            >
              {post.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-custom-text-primary/82 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 text-sm text-custom-text-primary/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cea785]/25 bg-[#cea785]/10 px-3.5 py-1.5">
                <Compass className="h-3.5 w-3.5 text-[#cea785]" />
                {formatBlogDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cea785]/25 bg-[#cea785]/10 px-3.5 py-1.5">
                <Clock3 className="h-3.5 w-3.5 text-[#cea785]" />
                {post.readTime}
              </span>
              {post.author ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cea785]/25 bg-[#cea785]/10 px-3.5 py-1.5">
                  <User className="h-3.5 w-3.5 text-[#cea785]" />
                  {post.author}
                </span>
              ) : null}
            </div>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <article className="blog-paper rounded-[1.85rem] p-6 sm:p-8 lg:p-10">
              <div className="blog-prose max-w-none">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>

            <aside className="space-y-4 lg:sticky lg:top-8">
              <div className="rounded-[1.5rem] border border-custom-text-primary/12 bg-white/[0.05] p-5 backdrop-blur-sm">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c9a67a]">
                  Leitura guiada
                </p>
                <p className="mt-3 text-sm leading-7 text-custom-text-primary/78">
                  Trate o artigo como insumo técnico. Decisões fiscais e societárias pedem o
                  contexto real do caso.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#dcc3a4] bg-gradient-to-br from-[#fffbf5] to-[#f0e4d0] p-5 text-slate-900 shadow-[0_16px_45px_rgba(0,0,0,0.18)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#7f5b39] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#fef8ee]">
                  <FolderOpen className="h-3.5 w-3.5" />
                  Atendimento
                </div>
                <h2 className={`${blogSerif.className} mt-4 text-2xl leading-tight`}>
                  Aplicar isso no contexto real?
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Avaliamos risco, documentos e estratégia antes de qualquer resposta formal.
                </p>
                <Button
                  asChild
                  className="mt-5 w-full rounded-full bg-[#1b2028] text-[#f8f0df] hover:bg-[#0f1319]"
                >
                  <TrackedLink
                    href="/#contact"
                    ctaLabel="Solicitar orientação tributária"
                    ctaLocation="blog_post_sidebar_cta"
                    trafficContext="lead_capture"
                  >
                    Solicitar orientação
                  </TrackedLink>
                </Button>
                <Link
                  href="/para/clinicas-medicas-e-odontologicas"
                  className="mt-3 block text-center text-sm font-medium text-[#7f5b39] transition hover:text-slate-950"
                >
                  Sou clínica de saúde →
                </Link>
              </div>
            </aside>
          </div>

          <footer className="mt-10 rounded-[1.5rem] border border-custom-text-primary/12 bg-white/[0.04] p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#c9a67a]">
                  Continue lendo
                </p>
                <p
                  className={`${blogSerif.className} mt-2 text-2xl text-custom-text-secondary sm:text-3xl`}
                >
                  Explore outras análises do blog.
                </p>
              </div>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="rounded-full border-[#cea785]/45 bg-transparent text-[#e8c9a8] hover:bg-[#cea785]/15 hover:text-custom-text-secondary"
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
