import { MetadataRoute } from "next"
import { getAllPostSlugs } from "@/lib/blog"
import { SEO } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO.siteUrl
  const currentDate = new Date()

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  const areasRoutes = [
    'consultoria-juridica',
    'direito-civil',
    'direito-empresarial',
    'direito-imobiliario',
    'direito-processual',
    'direito-trabalhista',
    'direito-tributario',
  ].map(area => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPosts = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...areasRoutes, ...blogPosts]
}
