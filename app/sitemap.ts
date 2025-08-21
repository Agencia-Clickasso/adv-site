import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lucimeirexavieradvocacia.com.br' // Replace with your actual domain
  
  // Get current date for lastModified
  const currentDate = new Date()
  
  // Static routes
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

  // Areas of practice routes
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

  // Blog post routes (based on the MDX files found)
  const blogPosts = [
    'contratos-empresariais-clausulas-essenciais',
    'direitos-consumidor-como-se-proteger',
    'mudancas-lei-trabalhista-2024',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all routes
  return [...staticRoutes, ...areasRoutes, ...blogPosts]
}
