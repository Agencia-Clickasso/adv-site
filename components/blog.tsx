import Link from "next/link"
import { ArrowRight, Calendar, Clock3, Sparkles, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRIORITY_POST_SLUGS, getSortedPostsData, sortPostsByPriority } from "@/lib/blog"
import { blogSerif, formatBlogDate } from "@/lib/blog-design"

export default async function Blog() {
  const posts = await getSortedPostsData()
  const prioritySlugs = new Set(PRIORITY_POST_SLUGS)
  const displayPosts = sortPostsByPriority(posts).slice(0, 3)
  const [leadPost, ...restPosts] = displayPosts

  return (
    <section id="blog" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Conteúdo estratégico
              </div>
              <h2 className={`${blogSerif.className} max-w-3xl text-5xl leading-[0.96] text-custom-text-secondary sm:text-6xl`}>
                O blog agora funciona como extensão editorial da proposta do escritório.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-custom-text-primary/84">
                Em vez de artigos soltos, a home apresenta o blog como repertório de decisão: execução fiscal,
                planejamento tributário, cobrança e prevenção com curadoria clara.
              </p>
              <Link href="/blog" className="inline-flex">
                <Button className="rounded-full bg-custom-text-primary px-7 text-custom-bg-primary hover:bg-custom-text-secondary">
                  Ver caderno completo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-5">
              {leadPost ? (
                <article className="home-paper rounded-[1.9rem] p-7 text-slate-900 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#7f5b39]">
                    <span className="rounded-full border border-[#d2b290] bg-white/70 px-3 py-1">{leadPost.category}</span>
                    {prioritySlugs.has(leadPost.slug) ? <span>Prioridade editorial</span> : null}
                  </div>
                  <h3 className={`${blogSerif.className} mt-5 text-4xl leading-tight`}>{leadPost.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{leadPost.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatBlogDate(leadPost.date)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {leadPost.readTime}
                    </span>
                    {leadPost.author ? (
                      <span className="inline-flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {leadPost.author}
                      </span>
                    ) : null}
                  </div>
                  <Link href={`/blog/${leadPost.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#7f5b39] transition hover:text-slate-950">
                    Ler artigo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ) : null}

              <div className="grid gap-4 md:grid-cols-2">
                {restPosts.map((post) => (
                  <article key={post.slug} className="home-panel rounded-[1.6rem] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/62">{post.category}</p>
                    <h3 className={`${blogSerif.className} mt-3 text-2xl leading-tight text-custom-text-secondary`}>
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-custom-text-primary/76">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between gap-3 text-xs text-custom-text-primary/58">
                      <span>{formatBlogDate(post.date)}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm text-custom-text-primary transition hover:text-custom-text-secondary">
                      Abrir leitura
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
