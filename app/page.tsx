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
  title: "Advogada Tributarista em São Bernardo do Campo para Empresas",
  description:
    "Advogada tributarista em São Bernardo do Campo para empresas e profissionais. Assessoria em planejamento tributário, execução fiscal, consultoria fiscal e prevenção de riscos tributários.",
  path: "/",
  keywords: [
    "advogada tributarista são bernardo do campo",
    "direito tributário são bernardo do campo",
    "advogado tributário são bernardo do campo",
    "planejamento tributário",
    "execução fiscal",
    "consultoria fiscal",
  ],
})

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-custom-bg-primary">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="home-grid-pattern absolute inset-0" />
        <div className="home-orb absolute left-[-10rem] top-20 h-[26rem] w-[26rem]" />
        <div className="home-orb absolute right-[-8rem] top-[34rem] h-[22rem] w-[22rem]" />
      </div>

      <div className="relative">
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
    </main>
  )
}
