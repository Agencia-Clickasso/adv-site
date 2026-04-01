"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import TrackedLink from "@/components/tracked-link"
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="home-panel flex h-14 items-center justify-between rounded-full px-4 sm:h-20 sm:px-6">
          <Link href="/" className="flex items-center gap-3 pr-3" aria-label="Lucimeire Xavier Advocacia">
            <Image
              src="/images/logo.png"
              alt="Lucimeire Xavier Advocacia"
              width={200}
              height={80}
              className="h-7 w-auto sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-custom-text-secondary/88 transition hover:text-custom-text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <TrackedLink
              href="tel:+5511967586911"
              ctaLabel="Telefone do topo"
              ctaLocation="header_phone"
              trafficContext="lead_capture"
              className="inline-flex items-center gap-2 rounded-full border border-custom-text-primary/14 px-4 py-2 text-sm text-custom-text-primary transition hover:border-custom-text-primary/36 hover:text-custom-text-secondary"
            >
              <Phone className="h-4 w-4" />
              (11) 96758-6911
            </TrackedLink>
            <Button asChild className="rounded-full bg-custom-text-primary px-6 text-custom-bg-primary hover:bg-custom-text-secondary">
              <TrackedLink
                href="#contact"
                ctaLabel="Agendar análise tributária"
                ctaLocation="header_primary_cta"
                trafficContext="lead_capture"
              >
                Agendar análise tributária
              </TrackedLink>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-custom-text-secondary md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-custom-text-primary/12 bg-custom-bg-secondary text-custom-text-secondary">
              <div className="mt-10 flex flex-col space-y-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-custom-text-secondary transition hover:text-custom-text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full bg-custom-text-primary text-custom-bg-primary hover:bg-custom-text-secondary">
                  <TrackedLink
                    href="#contact"
                    ctaLabel="Agendar análise tributária"
                    ctaLocation="mobile_menu_cta"
                    trafficContext="lead_capture"
                    onClick={() => setIsOpen(false)}
                  >
                    Agendar análise tributária
                  </TrackedLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
