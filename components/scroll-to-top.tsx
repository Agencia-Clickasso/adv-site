"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-20 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-custom-text-primary/80 text-custom-bg-secondary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-custom-text-primary hover:shadow-xl sm:bottom-6 sm:left-6 sm:z-50 sm:h-12 sm:w-12"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  )
}
