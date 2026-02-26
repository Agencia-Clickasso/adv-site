import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import JsonLd from "@/components/seo/json-ld"
import { buildLegalServiceSchema, createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Advogada Tributarista em São Bernardo do Campo",
  description:
    "Assessoria em Direito Tributário para empresas e profissionais em São Bernardo do Campo. Planejamento tributário, execuções fiscais, consultoria fiscal e contencioso tributário.",
  path: "/",
  keywords: [
    "advogada tributarista são bernardo do campo",
    "direito tributário são bernardo do campo",
    "planejamento tributário",
    "execução fiscal",
  ],
})

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg-primary relative">
      <JsonLd data={buildLegalServiceSchema()} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
