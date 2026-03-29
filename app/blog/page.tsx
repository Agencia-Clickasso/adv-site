import { Metadata } from "next"
import { ArrowLeft, ArrowRight, Calendar, Clock3, User } from "lucide-react"
import Link from "next/link"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { PRIORITY_POST_SLUGS, getSortedPostsData, sortPostsByPriority } from "@/lib/blog"
import { blogSans, blogSerif, formatBlogDate } from "@/lib/blog-design"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Blog de Direito Tributário para Empresas",
  description:
    "Blog de Direito Tributário com conteúdos sobre planejamento tributário, execução fiscal, consultoria fiscal, compliance e prevenção de riscos para empresas.",
  path: "/blog",
  keywords: [
    "blog direito tributário",
    "artigos tributários",
    "compliance tributário",
    "execução fiscal",
    "planejamento tributário",
    "consultoria fiscal",
  ],
})

export const dynamic = "force-dynamic"

function categoryId(category: string) {
  return category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
}

export default async function BlogPage() {
  const posts = await getSortedPostsData()
  const taxPosts = posts.filter((post) => post.category.toLowerCase().includes("tribut"))
  const prioritySlugs = new Set(PRIORITY_POST_SLUGS)
  const featuredPosts = sortPostsByPriority(posts).slice(0, 4)
  const [leadPost, ...secondaryFeaturedPosts] = featuredPosts
  const categoriesMap = posts.reduce(
    (acc, post) => {
      if (!acc[post.category]) acc[post.category] = []
      acc[post.category].push(post)
      return acc
    },
    {} as Record<string, typeof posts>
  )

  const categories = Object.keys(categoriesMap).sort((a, b) => {
    const aIsTax = a.toLowerCase().includes("tribut")
    const bIsTax = b.toLowerCase().includes("tribut")
    if (aIsTax && !bIsTax) return -1
    if (!aIsTax && bIsTax) return 1
    return a.localeCompare(b, "pt-BR")
  })

  return (
    <main className={`relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary ${blogSans.className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="blog-grid-pattern absolute inset-0" />
        <div className="blog-orb absolute left-[-10rem] top-12 h-80 w-80" />
        <div className="blog-orb absolute right-[-6rem] top-[28rem] h-72 w-72 opacity-70" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/#blog">
            <Button
              variant="ghost"
              className="mb-8 rounded-full border border-custom-text-primary/20 bg-white/5 px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o site
            </Button>
          </Link>

          <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-[2rem] border border-custom-text-primary/15 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-6 shadow-[0_32px_120px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="blog-kicker">Caderno tributário</span>
                <span className="rounded-full border border-custom-text-primary/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-custom-text-primary/70">
                  Atualizado em {posts[0] ? formatBlogDate(posts[0].date) : "breve"}
                </span>
              </div>

              <h1 className={`${blogSerif.className} max-w-4xl text-5xl leading-[0.95] text-custom-text-secondary sm:text-6xl lg:text-7xl`}>
                Análises jurídicas para quem precisa decidir antes do problema virar passivo.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-custom-text-primary/88 sm:text-xl">
                O blog foi reorganizado como uma mesa editorial: prioridade clara para tributário, leitura mais fluida e
                acesso rápido aos artigos que ajudam empresas a reduzir risco, reagir a cobranças e estruturar prevenção.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                  <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>{posts.length}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">Artigos publicados</p>
                </div>
                <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                  <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>{taxPosts.length}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">Foco tributário</p>
                </div>
                <div className="rounded-[1.5rem] border border-custom-text-primary/10 bg-black/15 p-5">
                  <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>{categories.length}</div>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-custom-text-primary/68">Frentes de atuação</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-custom-text-primary/15 bg-custom-bg-secondary/85 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.32)] sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-custom-text-primary/70">Mapa de leitura</p>
              <div className="mt-6 space-y-5">
                {[
                  "Planejamento tributário para reduzir exposição antes de autuações.",
                  "Execução fiscal e suspensão de cobrança em situações críticas.",
                  "Consultoria preventiva para contratos, compliance e rotina empresarial.",
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-custom-text-primary/10 bg-white/5 p-4 text-sm leading-7 text-custom-text-primary/82">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-custom-text-primary/10 pt-6">
                <p className={`${blogSerif.className} text-2xl text-custom-text-secondary`}>Navegue por categoria</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <a
                      key={category}
                      href={`#${categoryId(category)}`}
                      className="rounded-full border border-custom-text-primary/16 px-4 py-2 text-sm text-custom-text-primary transition hover:border-custom-text-primary/40 hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {leadPost ? (
            <section className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="group rounded-[2rem] border border-custom-text-primary/15 bg-[#f6eddc] p-8 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#7f5b39]">
                  <span className="rounded-full border border-[#d2b290] bg-white/70 px-3 py-1">{leadPost.category}</span>
                  {prioritySlugs.has(leadPost.slug) ? <span>Prioridade editorial</span> : null}
                </div>
                <h2 className={`${blogSerif.className} mt-6 text-4xl leading-tight sm:text-5xl`}>
                  {leadPost.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">{leadPost.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600">
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
                <Link href={`/blog/${leadPost.slug}`} className="mt-10 inline-flex">
                  <Button className="rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319]">
                    Ler análise completa
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </article>

              <div className="grid gap-5">
                {secondaryFeaturedPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-[1.75rem] border border-custom-text-primary/12 bg-white/6 p-6 backdrop-blur-sm transition duration-300 hover:border-custom-text-primary/28 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-custom-text-primary/68">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className={`${blogSerif.className} mt-4 text-3xl leading-tight text-custom-text-secondary`}>
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-custom-text-primary/82">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm text-custom-text-primary/68">{formatBlogDate(post.date)}</span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm text-custom-text-primary transition hover:text-custom-text-secondary">
                        Abrir
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 flex flex-wrap gap-3 rounded-[1.75rem] border border-custom-text-primary/12 bg-white/5 p-5">
            {[
              "Execução Fiscal",
              "Planejamento Tributário",
              "Compliance",
              "Cobrança Tributária",
              "Consultoria Empresarial",
              "Contratos",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-custom-text-primary/12 bg-black/10 px-4 py-2 text-sm text-custom-text-primary/85"
              >
                {topic}
              </span>
            ))}
          </section>

          <div className="mt-16 space-y-14">
            {categories.map((category) => {
              const [highlight, ...rest] = categoriesMap[category]

              return (
                <section key={category} id={categoryId(category)} className="scroll-mt-24">
                  <div className="flex flex-col gap-4 border-b border-custom-text-primary/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-custom-text-primary/60">Seção</p>
                      <h2 className={`${blogSerif.className} mt-2 text-4xl text-custom-text-secondary sm:text-5xl`}>{category}</h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-7 text-custom-text-primary/76">
                      {categoriesMap[category].length} artigo{categoriesMap[category].length !== 1 ? "s" : ""} nesta frente, com
                      abordagem prática para decisão, prevenção e resposta jurídica.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    {highlight ? (
                      <article className="rounded-[1.9rem] border border-custom-text-primary/14 bg-gradient-to-br from-custom-bg-secondary via-custom-bg-secondary to-[#171f2c] p-7 shadow-[0_18px_70px_rgba(0,0,0,0.25)] sm:p-8">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-custom-text-primary/70">
                          <span className="rounded-full border border-custom-text-primary/14 px-3 py-1 uppercase tracking-[0.22em]">
                            Destaque da seção
                          </span>
                          <span>{formatBlogDate(highlight.date)}</span>
                        </div>
                        <h3 className={`${blogSerif.className} mt-5 text-3xl leading-tight text-custom-text-secondary sm:text-4xl`}>
                          {highlight.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-custom-text-primary/84">{highlight.excerpt}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-custom-text-primary/68">
                          <span className="inline-flex items-center gap-2">
                            <Clock3 className="h-4 w-4" />
                            {highlight.readTime}
                          </span>
                          {highlight.author ? (
                            <span className="inline-flex items-center gap-2">
                              <User className="h-4 w-4" />
                              {highlight.author}
                            </span>
                          ) : null}
                        </div>
                        <Link href={`/blog/${highlight.slug}`} className="mt-8 inline-flex">
                          <Button
                            variant="outline"
                            className="rounded-full border-custom-text-primary/30 bg-transparent text-custom-text-primary hover:bg-custom-text-primary hover:text-custom-bg-primary"
                          >
                            Ler artigo
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </article>
                    ) : null}

                    <div className="space-y-4">
                      {rest.map((post) => (
                        <article
                          key={post.slug}
                          className="rounded-[1.5rem] border border-custom-text-primary/10 bg-white/5 p-5 transition duration-300 hover:border-custom-text-primary/26 hover:bg-white/8"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-custom-text-primary/60">
                            <span>{formatBlogDate(post.date)}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className={`${blogSerif.className} mt-3 text-2xl leading-tight text-custom-text-secondary`}>
                            {post.title}
                          </h3>
                          <p className="mt-3 line-clamp-2 text-sm leading-7 text-custom-text-primary/78">{post.excerpt}</p>
                          <div className="mt-4 flex items-center justify-between gap-3">
                            <span className="text-xs uppercase tracking-[0.18em] text-custom-text-primary/56">
                              {post.author || post.category}
                            </span>
                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm text-custom-text-primary hover:text-custom-text-secondary">
                              Ler mais
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>

          {posts.length === 0 ? (
            <section className="mt-16 rounded-[2rem] border border-custom-text-primary/12 bg-white/5 px-6 py-16 text-center">
              <h2 className={`${blogSerif.className} text-4xl text-custom-text-secondary`}>Nenhum artigo publicado</h2>
              <p className="mx-auto mt-4 max-w-2xl text-custom-text-primary/82">
                O espaço editorial está preparado para receber novos conteúdos. Volte em breve para acompanhar as publicações.
              </p>
            </section>
          ) : null}

          {posts.length > 0 ? (
            <section className="mt-20 rounded-[2rem] border border-custom-text-primary/14 bg-[#f6eddc] px-6 py-10 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-8 lg:px-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#7f5b39]">Próximo passo</p>
                  <h2 className={`${blogSerif.className} mt-3 text-4xl leading-tight sm:text-5xl`}>
                    Se o tema do artigo encosta na sua operação, o melhor momento para agir é agora.
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                    Use o blog como referência inicial, mas trate a decisão jurídica com contexto real do seu negócio.
                  </p>
                </div>
                <Button asChild className="rounded-full bg-[#1b2028] px-8 text-[#f8f0df] hover:bg-[#0f1319]">
                  <TrackedLink
                    href="/#contact"
                    ctaLabel="Falar com o escritório"
                    ctaLocation="blog_hub_final_cta"
                    trafficContext="lead_capture"
                  >
                    Falar com o escritório
                  </TrackedLink>
                </Button>
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  )
}
