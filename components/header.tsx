"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Lucimeire Xavier Advocacia"
              width={200}
              height={80}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-100 hover:text-amber-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6">
              <Link href="#contact">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-amber-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-800">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-amber-100 hover:text-amber-300 transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-semibold mt-4">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    Agendar Consulta
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
