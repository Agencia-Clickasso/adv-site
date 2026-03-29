import type { Metadata } from "next"
import "./globals.css"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import { blogSans } from "@/lib/blog-design"
import { SEO } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: `${SEO.siteName} | Direito Tributário em São Bernardo do Campo`,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.defaultDescription,
  applicationName: SEO.siteName,
  keywords: [
    "advogada tributarista",
    "direito tributário",
    "advogada tributarista são bernardo do campo",
    "advogado tributário são bernardo do campo",
    "planejamento tributário",
    "execução fiscal",
    "consultoria fiscal",
    "São Bernardo do Campo",
  ],
  openGraph: {
    type: "website",
    locale: SEO.locale,
    siteName: SEO.siteName,
    title: `${SEO.siteName} | Direito Tributário em São Bernardo do Campo`,
    description: SEO.defaultDescription,
    url: SEO.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.siteName,
    description: SEO.defaultDescription,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {googleAnalyticsId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${googleAnalyticsId}');
                `,
              }}
            />
          </>
        ) : (
          <script
            dangerouslySetInnerHTML={{
              __html: "window.dataLayer = window.dataLayer || [];",
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning className={`${blogSans.className} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
