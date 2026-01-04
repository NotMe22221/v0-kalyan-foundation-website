"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Stories", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="fluid-container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/image-720.png"
                alt="Kalyan Foundation"
                width={48}
                height={48}
                className="rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-foreground"}`}
            >
              Kalyan Foundation
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 rounded-full px-6 group">
              <Link href="/get-involved" className="flex items-center gap-2">
                Donate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-full p-2.5 text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-1 animate-fade-in">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full rounded-full">
                <Link href="/get-involved">Donate Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
