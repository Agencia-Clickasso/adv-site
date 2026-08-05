import { Metadata } from "next"
import { ArrowLeft, ArrowRight, Calendar, Clock3, User } from "lucide-react"
import Link from "next/link"
import TrackedLink from "@/components/tracked-link"
import { Button } from "@/components/ui/button"
import { PRIORITY_POST_SLUGS, getSortedPostsData, sortPostsByPriority } from "@/lib/blog"
import { blogSans, blogSerif, formatBlogDate } from "@/lib/blog-design"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Blog de Direito Tributário, IRPF e Consultoria Tributária",
  description:
    "Blog de Direito Tributário com conteúdos sobre IRPF, malha fina, execução fiscal, consultoria tributária, compliance e prevenção de riscos para empresas e pessoa física.",
  path: "/blog",
  keywords: [
    "blog direito tributário",
    "imposto de renda pessoa física",
    "malha fina",
    "irpf 2026",
    "artigos tributários",
    "compliance tributário",
    "execução fiscal",
    "planejamento tributário",
    "consultoria fiscal",
  ],
})

export const revalidate = 3600

function categoryId(category: string) {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
}

export default async function BlogPage() {
  const posts = await getSortedPostsData()
  const taxPosts = posts.filter((post) => post.category.toLowerCase().includes("tribut"))
  const prioritySlugs = new Set<string>(PRIORITY_POST_SLUGS)
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
    <main
      className={`relative min-h-screen overflow-hidden bg-custom-bg-primary text-custom-text-secondary ${blogSans.className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <div className="blog-grid-pattern absolute inset-0" />
        <div className="blog-orb absolute left-[-8rem] top-10 h-72 w-72" />
        <div className="blog-orb absolute right-[-4rem] top-[22rem] h-64 w-64 opacity-60" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-8 rounded-full border border-custom-text-primary/18 bg-white/[0.04] px-5 text-custom-text-primary hover:bg-custom-text-primary/10 hover:text-custom-text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o site
            </Button>
          </Link>

          {/* Hero */}
          <section className="overflow-hidden rounded-[2rem] border border-custom-text-primary/12 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent p-6 shadow-[0_28px_100px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="blog-kicker">Caderno jurídico</span>
              <span className="rounded-full border border-custom-text-primary/12 bg-black/20 px-3 py-1 text-xs text-custom-text-primary/70">
                Atualizado em {posts[0] ? formatBlogDate(posts[0].date) : "breve"}
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <h1
                  className={`${blogSerif.className} max-w-3xl text-[2.6rem] leading-[0.98] text-custom-text-secondary sm:text-5xl lg:text-6xl`}
                >
                  Análises para decidir antes do problema virar passivo.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-custom-text-primary/82 sm:text-lg">
                  Tributário, IRPF, execução fiscal e prevenção — com leitura prática para empresas
                  e clínicas.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: posts.length, label: "Artigos" },
                  { value: taxPosts.length, label: "Tributário" },
                  { value: categories.length, label: "Frentes" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#cea785]/25 bg-[#cea785]/10 px-3 py-4 text-center"
                  >
                    <div className={`${blogSerif.className} text-3xl text-custom-text-secondary`}>
                      {stat.value}
                    </div>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-[#d4b08a]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {categories.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-2 border-t border-custom-text-primary/10 pt-6">
                {categories.map((category) => (
                  <a
                    key={category}
                    href={`#${categoryId(category)}`}
                    className="rounded-full border border-[#cea785]/28 bg-[#cea785]/08 px-4 py-2 text-sm text-[#e8c9a8] transition hover:border-[#cea785]/55 hover:bg-[#cea785]/16 hover:text-custom-text-secondary"
                  >
                    {category}
                  </a>
                ))}
                <Link
                  href="/para/clinicas-medicas-e-odontologicas"
                  className="rounded-full border border-[#cea785]/40 bg-[#cea785]/18 px-4 py-2 text-sm font-medium text-[#f3d7b4] transition hover:bg-[#cea785]/28"
                >
                  Clínicas de saúde
                </Link>
              </div>
            ) : null}
          </section>

          {/* Featured */}
          {leadPost ? (
            <section className="mt-12">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a67a]">
                    Em destaque
                  </p>
                  <h2
                    className={`${blogSerif.className} mt-2 text-3xl text-custom-text-secondary sm:text-4xl`}
                  >
                    Leituras prioritárias
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-12">
                <article className="group relative flex flex-col overflow-hidden rounded-[1.85rem] border border-[#dcc3a4] bg-gradient-to-br from-[#fffbf5] via-[#f7efdf] to-[#efe3cf] p-7 text-slate-900 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-9 lg:col-span-7">
                  <div className="pointer-events-none absolute -right-8 top-0 h-44 w-44 rounded-full bg-[#cea785]/30 blur-3xl" />
                  <div className="relative flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#7f5b39] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#fef8ee]">
                      {leadPost.category}
                    </span>
                    {prioritySlugs.has(leadPost.slug) ? (
                      <span className="rounded-full border border-[#c9a67a] bg-white/75 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#7f5b39]">
                        Prioridade
                      </span>
                    ) : null}
                  </div>
                  <h2
                    className={`${blogSerif.className} relative mt-5 text-3xl leading-[1.06] sm:text-4xl lg:text-[2.6rem]`}
                  >
                    {leadPost.title}
                  </h2>
                  <p className="relative mt-4 flex-1 text-base leading-8 text-slate-700">
                    {leadPost.excerpt}
                  </p>
                  <div className="relative mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#dcc3a4]/80 pt-5 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#9c744a]" />
                      {formatBlogDate(leadPost.date)}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#9c744a]" />
                      {leadPost.readTime}
                    </span>
                    {leadPost.author ? (
                      <span className="inline-flex items-center gap-2">
                        <User className="h-4 w-4 text-[#9c744a]" />
                        {leadPost.author}
                      </span>
                    ) : null}
                  </div>
                  <Link href={`/blog/${leadPost.slug}`} className="relative mt-6 inline-flex w-fit">
                    <Button className="rounded-full bg-[#1b2028] px-6 text-[#f8f0df] hover:bg-[#0f1319]">
                      Ler análise completa
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </article>

                <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                  {secondaryFeaturedPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group flex flex-col rounded-[1.45rem] border border-custom-text-primary/12 bg-white/[0.05] p-5 transition duration-300 hover:border-[#cea785]/40 hover:bg-white/[0.09]"
                    >
                      <div className="flex items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-[#c9a67a]">
                        <span className="truncate">{post.category}</span>
                        <span className="shrink-0 text-custom-text-primary/50">
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        className={`${blogSerif.className} mt-3 text-xl leading-snug text-custom-text-secondary sm:text-[1.35rem]`}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition hover:text-[#e8c9a8]"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-custom-text-primary/70">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-2 border-t border-custom-text-primary/10 pt-3">
                        <span className="text-xs text-custom-text-primary/50">
                          {formatBlogDate(post.date)}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-[#e0b990] transition group-hover:text-custom-text-secondary"
                        >
                          Abrir
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Topics strip */}
          <section className="mt-12 flex flex-wrap gap-2 rounded-[1.5rem] border border-custom-text-primary/10 bg-black/20 px-5 py-5">
            <span className="mr-1 self-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-custom-text-primary/45">
              Temas
            </span>
            {[
              "Execução Fiscal",
              "Planejamento",
              "IRPF 2026",
              "Malha Fina",
              "Compliance",
              "Clínicas",
              "Lucro Presumido",
              "Cobrança",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-custom-text-primary/12 bg-white/[0.04] px-3.5 py-1.5 text-sm text-custom-text-primary/78"
              >
                {topic}
              </span>
            ))}
          </section>

          {/* Categories */}
          <div className="mt-16 space-y-16">
            {categories.map((category) => {
              const categoryPosts = categoriesMap[category]

              return (
                <section key={category} id={categoryId(category)} className="scroll-mt-24">
                  <div className="mb-6 flex flex-col gap-2 border-b border-custom-text-primary/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#c9a67a]">
                        Seção
                      </p>
                      <h2
                        className={`${blogSerif.className} mt-1 text-3xl text-custom-text-secondary sm:text-4xl`}
                      >
                        {category}
                      </h2>
                    </div>
                    <p className="text-sm text-custom-text-primary/60">
                      {categoryPosts.length} artigo{categoryPosts.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {categoryPosts.map((post, index) => {
                      const isLead = index === 0
                      return (
                        <article
                          key={post.slug}
                          className={
                            isLead
                              ? "group flex flex-col rounded-[1.5rem] border border-[#dcc3a4]/70 bg-gradient-to-br from-[#fffbf5] to-[#f0e4d0] p-6 text-slate-900 shadow-[0_16px_50px_rgba(0,0,0,0.16)] sm:col-span-2 xl:col-span-1"
                              : "group flex flex-col rounded-[1.5rem] border border-custom-text-primary/12 bg-white/[0.045] p-6 transition duration-300 hover:border-[#cea785]/35 hover:bg-white/[0.08]"
                          }
                        >
                          <div
                            className={`flex items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.16em] ${
                              isLead ? "text-[#7f5b39]" : "text-[#c9a67a]"
                            }`}
                          >
                            <span>{isLead ? "Destaque" : formatBlogDate(post.date)}</span>
                            <span
                              className={isLead ? "text-slate-600" : "text-custom-text-primary/50"}
                            >
                              {post.readTime}
                            </span>
                          </div>
                          <h3
                            className={`${blogSerif.className} mt-3 text-2xl leading-snug ${
                              isLead ? "text-slate-950" : "text-custom-text-secondary"
                            }`}
                          >
                            <Link
                              href={`/blog/${post.slug}`}
                              className={isLead ? "hover:text-[#7f5b39]" : "hover:text-[#e8c9a8]"}
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p
                            className={`mt-3 line-clamp-3 flex-1 text-sm leading-7 ${
                              isLead ? "text-slate-700" : "text-custom-text-primary/72"
                            }`}
                          >
                            {post.excerpt}
                          </p>
                          <div
                            className={`mt-5 flex items-center justify-between gap-3 border-t pt-4 ${
                              isLead ? "border-[#dcc3a4]/80" : "border-custom-text-primary/10"
                            }`}
                          >
                            <span
                              className={`text-xs ${isLead ? "text-slate-600" : "text-custom-text-primary/50"}`}
                            >
                              {isLead ? formatBlogDate(post.date) : post.author || category}
                            </span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className={`inline-flex items-center gap-1.5 text-sm font-medium transition ${
                                isLead
                                  ? "text-[#7f5b39] hover:text-slate-950"
                                  : "text-[#e0b990] hover:text-custom-text-secondary"
                              }`}
                            >
                              Ler
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </div>

          {posts.length === 0 ? (
            <section className="mt-16 rounded-[2rem] border border-custom-text-primary/12 bg-white/5 px-6 py-16 text-center">
              <h2 className={`${blogSerif.className} text-4xl text-custom-text-secondary`}>
                Nenhum artigo publicado
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-custom-text-primary/82">
                O espaço editorial está preparado para receber novos conteúdos.
              </p>
            </section>
          ) : null}

          {posts.length > 0 ? (
            <section className="mt-20 overflow-hidden rounded-[1.85rem] border border-[#dcc3a4] bg-gradient-to-br from-[#fffbf5] via-[#f6eddc] to-[#ebdcc4] px-6 py-10 text-slate-900 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-8 lg:px-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7f5b39]">
                    Próximo passo
                  </p>
                  <h2 className={`${blogSerif.className} mt-3 text-3xl leading-tight sm:text-4xl`}>
                    Se o tema encosta na sua operação, o melhor momento para agir é agora.
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700">
                    Use o blog como referência inicial e trate a decisão jurídica com o contexto
                    real do caso.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button
                    asChild
                    className="rounded-full bg-[#1b2028] px-8 text-[#f8f0df] hover:bg-[#0f1319]"
                  >
                    <TrackedLink
                      href="/#contact"
                      ctaLabel="Falar com o escritório"
                      ctaLocation="blog_hub_final_cta"
                      trafficContext="lead_capture"
                    >
                      Falar com o escritório
                    </TrackedLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-[#b99066] bg-transparent text-[#7f5b39] hover:bg-[#1b2028] hover:text-[#f8f0df]"
                  >
                    <Link href="/para/clinicas-medicas-e-odontologicas">
                      Assessoria para clínicas
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  )
}
