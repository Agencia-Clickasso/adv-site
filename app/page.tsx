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
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 space-y-3">
        {/* Phone FAB */}
        <Link 
          href="tel:+5511967586911"
          className="group flex items-center justify-center w-14 h-14 bg-custom-text-primary hover:bg-custom-text-primary/90 text-custom-bg-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Ligar para (11) 96758-6911"
        >
          <Phone className="h-6 w-6" />
        </Link>
        
        {/* WhatsApp FAB */}
        <Link 
          href="https://wa.me/5511967586911?text=Olá! Gostaria de agendar uma consulta jurídica."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Enviar mensagem no WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
