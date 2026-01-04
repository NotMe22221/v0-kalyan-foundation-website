import Link from "next/link"
import { Instagram, Facebook, Linkedin, ArrowUpRight, Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="fluid-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/image-720.png"
                alt="Kalyan Foundation"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-xl font-semibold">Kalyan Foundation</span>
            </div>
            <p className="text-background/70 font-serif leading-relaxed max-w-md">
              Empowering tribal children in Purulia with access to education, dignity, and hope. Together, we're
              building a brighter future, one child at a time.
            </p>
            <p className="text-background/50 text-sm">Registered NGO — Reg. No. 190200084</p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://www.instagram.com/kalyanfoundation.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1DKt7bScAB/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-background/50">Navigate</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Projects", href: "/projects" },
                { name: "Stories", href: "/blog" },
                { name: "Gallery", href: "/gallery" },
                { name: "Get Involved", href: "/get-involved" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-background/50">Contact</h3>
            <address className="not-italic text-background/70 space-y-4">
              <p className="leading-relaxed">
                VIII-Kalha, P. O. Sahajuri
                <br />
                P. S. Baghmundi
                <br />
                Purulia, West Bengal – 723152
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-background hover:text-background/80 transition-colors font-medium"
              >
                Send us a message
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="fluid-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© {currentYear} Kalyan Foundation. All rights reserved.</p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> for the children of Purulia
          </p>
        </div>
      </div>
    </footer>
  )
}
