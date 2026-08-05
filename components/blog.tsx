import Link from "next/link"
import { ArrowRight, Calendar, Clock3, Sparkles } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { PRIORITY_POST_SLUGS, getSortedPostsData, sortPostsByPriority } from "@/lib/blog"
import { blogSerif, formatBlogDate } from "@/lib/blog-design"

export default async function Blog() {
  const posts = await getSortedPostsData()
  const prioritySlugs = new Set<string>(PRIORITY_POST_SLUGS)
  const displayPosts = sortPostsByPriority(posts).slice(0, 3)
  const [leadPost, ...restPosts] = displayPosts

  return (
    <section id="blog" className="relative py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-custom-text-primary/12 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5" />
                Blog
              </div>
              <h2
                className={`${blogSerif.className} text-4xl leading-[0.98] text-custom-text-secondary sm:text-5xl lg:text-[3.4rem]`}
              >
                Leitura tributária para decidir com menos improviso.
              </h2>
              <p className="max-w-xl text-base leading-7 text-custom-text-primary/80 sm:text-lg sm:leading-8">
                Planejamento, execução fiscal, cobrança e prevenção — com recorte prático.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <Button
                asChild
                className="rounded-full bg-custom-text-primary px-7 text-custom-bg-primary hover:bg-custom-text-secondary"
              >
                <Link href="/blog">
                  Ver todos os artigos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <TrackedLink
                href="/para/clinicas-medicas-e-odontologicas"
                ctaLabel="Assessoria para clínicas via blog home"
                ctaLocation="home_blog_intro"
                trafficContext="commercial_page"
                className="inline-flex items-center gap-2 text-sm text-custom-text-primary/80 transition hover:text-custom-text-secondary"
              >
                Assessoria para clínicas
                <ArrowRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {leadPost ? (
              <article className="group home-paper flex flex-col rounded-[1.8rem] p-7 text-slate-900 transition duration-300 hover:-translate-y-0.5 sm:p-8 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-custom-bg-primary px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-custom-text-secondary">
                    {leadPost.category}
                  </span>
                  {prioritySlugs.has(leadPost.slug) ? (
                    <span className="rounded-full border border-custom-text-primary/40 bg-white/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-custom-text-primary">
                      Destaque
                    </span>
                  ) : null}
                </div>

                <h3
                  className={`${blogSerif.className} mt-5 text-[1.85rem] leading-[1.08] text-slate-950 sm:text-4xl`}
                >
                  {leadPost.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-slate-700 sm:text-base sm:leading-8">
                  {leadPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-custom-text-primary/25 pt-5 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-custom-text-primary" />
                    {formatBlogDate(leadPost.date)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-custom-text-primary" />
                    {leadPost.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${leadPost.slug}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-custom-bg-primary px-5 py-2.5 text-sm font-medium text-custom-text-secondary transition group-hover:bg-custom-bg-secondary"
                >
                  Ler artigo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            ) : null}

            <div className="flex flex-col gap-4 lg:col-span-5">
              {restPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group home-panel flex flex-1 flex-col rounded-[1.5rem] p-5 transition duration-300 hover:border-custom-text-primary/28 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-custom-text-primary/25 bg-custom-text-primary/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-custom-text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-custom-text-primary/55">{post.readTime}</span>
                  </div>

                  <h3
                    className={`${blogSerif.className} mt-3 text-xl leading-snug text-custom-text-secondary sm:text-2xl`}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-custom-text-primary"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-7 text-custom-text-primary/72">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-custom-text-primary/10 pt-4">
                    <span className="text-xs text-custom-text-primary/55">
                      {formatBlogDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-custom-text-primary transition hover:text-custom-text-secondary"
                    >
                      Ler
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
