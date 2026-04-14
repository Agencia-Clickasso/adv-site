import fs from "node:fs"
import path from "node:path"
import { MetadataRoute } from "next"
import { getAllPostSlugs, getSortedPostsData } from "@/lib/blog"
import { SEO } from "@/lib/seo"

export const revalidate = 3600

function getFileLastModified(relativePath: string) {
  try {
    const absolutePath = path.join(process.cwd(), relativePath)
    return fs.statSync(absolutePath).mtime
  } catch {
    return new Date("2026-03-31T00:00:00.000Z")
  }
}

export async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO.siteUrl
  const posts = await getSortedPostsData()
  const postDates = new Map(
    posts.map((post) => [post.slug, new Date(post.date)])
  )
  const latestPostDate =
    posts.length > 0 ? new Date(posts[0].date) : getFileLastModified("app/blog/page.tsx")

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: getFileLastModified("app/page.tsx"),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ]

  const areasPriorityMap: Record<string, number> = {
    'direito-tributario': 0.95,
    'direito-empresarial': 0.55,
    'direito-processual': 0.5,
    'consultoria-juridica': 0.5,
    'direito-civil': 0.4,
    'direito-imobiliario': 0.4,
    'direito-trabalhista': 0.4,
  }

  const areasChangeFrequencyMap: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
    'direito-tributario': 'weekly',
    'direito-empresarial': 'monthly',
    'direito-processual': 'monthly',
    'consultoria-juridica': 'monthly',
    'direito-civil': 'yearly',
    'direito-imobiliario': 'yearly',
    'direito-trabalhista': 'yearly',
  }

  const areasRoutes = Object.keys(areasPriorityMap).map(area => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: getFileLastModified(`app/areas/${area}/page.tsx`),
    changeFrequency: areasChangeFrequencyMap[area],
    priority: areasPriorityMap[area],
  }))

  const postsPriorityMap: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
    'planejamento-tributario-para-empresas-como-reduzir-riscos': { priority: 0.8, changeFrequency: 'monthly' },
    'defesa-em-execucao-fiscal-estrategias-para-empresas': { priority: 0.8, changeFrequency: 'monthly' },
    'consultoria-fiscal-para-empresas-quando-contratar-e-quais-problemas-evita': { priority: 0.8, changeFrequency: 'monthly' },
    'imposto-de-renda-pessoa-fisica-2026-erros-silenciosos-e-oportunidades-tributarias': { priority: 0.79, changeFrequency: 'monthly' },
    'recuperacao-de-creditos-tributarios-quem-pode-recuperar-e-cuidados': { priority: 0.8, changeFrequency: 'monthly' },
    'malha-fina-imposto-de-renda-2026-como-saber-e-o-que-fazer': { priority: 0.76, changeFrequency: 'monthly' },
    'declaracao-simplificada-ou-completa-irpf-2026-como-escolher': { priority: 0.72, changeFrequency: 'monthly' },
    'alugueis-no-imposto-de-renda-2026-como-declarar-e-evitar-erros': { priority: 0.72, changeFrequency: 'monthly' },
    'parcelamento-de-divida-fiscal-para-empresas-quando-vale-a-pena': { priority: 0.75, changeFrequency: 'monthly' },
    'quais-documentos-separar-antes-de-uma-consultoria-tributaria': { priority: 0.7, changeFrequency: 'monthly' },
    'compliance-tributario-como-evitar-autuacoes': { priority: 0.68, changeFrequency: 'monthly' },
    'simples-nacional-lucro-presumido-e-lucro-real-como-avaliar-o-regime-tributario': { priority: 0.68, changeFrequency: 'monthly' },
    'como-suspender-execucao-fiscal-para-empresa': { priority: 0.78, changeFrequency: 'monthly' },
    'o-que-fazer-ao-receber-cobranca-tributaria-na-empresa': { priority: 0.78, changeFrequency: 'monthly' },
    'contratos-empresariais-clausulas-essenciais': { priority: 0.35, changeFrequency: 'yearly' },
    'direitos-consumidor-como-se-proteger': { priority: 0.25, changeFrequency: 'yearly' },
    'mudancas-lei-trabalhista-2024': { priority: 0.25, changeFrequency: 'yearly' },
  }

  const blogPosts = (await getAllPostSlugs()).map((slug) => {
    const config = postsPriorityMap[slug] || { priority: 0.4, changeFrequency: 'yearly' as const }
    const lastModified =
      postDates.get(slug) ?? getFileLastModified(`content/blog/${slug}.mdx`)

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    }
  })

  return [...staticRoutes, ...areasRoutes, ...blogPosts]
}

export default sitemap
