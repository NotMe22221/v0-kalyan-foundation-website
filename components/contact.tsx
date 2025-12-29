import { Card } from "@/components/ui/card"
import { MapPin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Have questions or want to get involved? We'd love to hear from you
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    VIII-Kalha, P. O. Sahajuri
                    <br />
                    P. S. Baghmundi
                    <br />
                    Purulia, West Bengal – 723152
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Contact us for volunteer opportunities, partnerships, or any inquiries
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="https://www.instagram.com/kalyanfoundation.in" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
