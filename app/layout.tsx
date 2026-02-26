import type { Metadata } from "next"
import "./globals.css"
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
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
