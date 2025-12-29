import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Gallery - Kalyan Foundation",
  description:
    "View photos from our education drives, events, and programs in Purulia. See the impact of Kalyan Foundation's work with tribal children.",
  keywords: "Kalyan Foundation gallery, education drive photos, Purulia events, NGO activities",
}

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg",
    caption: "Outdoor classroom session with children",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E05jIJs0CjLCoWUjBGcDtsvuL4oRRe.png",
    caption: "Happy moments with our students",
    category: "Community",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPVOgMPKR9MCj1hweg9elyA1imZILH.png",
    caption: "Meal program - Nourishing young minds",
    category: "Nutrition",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image04-4xdrONqFjRdy6mbs9Z2VODfYGqtRuZ.jpg",
    caption: "Students at Kalyan Foundation School",
    category: "Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHSJK3w22ij2K7XGsxQgUnXrxw5nxq.png",
    caption: "Learning under the open sky",
    category: "Education",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Gallery</h1>
          <p className="text-xl text-muted-foreground font-serif">Moments that inspire change</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg font-serif text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore the moments that define our journey — from education drives and community events to the smiles
              that remind us why we do what we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4 pb-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </div>
                  <p className="font-serif text-muted-foreground text-sm">{image.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="border-2 bg-muted/30 max-w-2xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-4">Want to Be Part of Our Story?</h3>
                <p className="font-serif text-muted-foreground mb-6">
                  Join us in creating more moments of joy, learning, and transformation for children in Purulia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/get-involved"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get Involved
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
