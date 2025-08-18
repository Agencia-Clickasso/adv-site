import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-bg-primary relative">
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
