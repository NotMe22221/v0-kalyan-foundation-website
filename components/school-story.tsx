import Image from "next/image"
import { Card } from "@/components/ui/card"

export function SchoolStory() {
  return (
    <section id="school" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Anupuma School Story
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming a small hut into a beacon of hope and learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image04-4xdrONqFjRdy6mbs9Z2VODfYGqtRuZ.jpg"
                  alt="Children at Kalyan Foundation School"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </Card>
            </div>

            <div className="space-y-6">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                What started as a small hut has transformed into a functional learning space where dreams take root. The
                Anupuma School serves as the heart of our mission, providing quality education to tribal children who
                previously had no access to formal learning.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Here, children don't just learn to read and write—they discover their potential, build confidence, and
                envision futures they never thought possible.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 italic text-base sm:text-lg text-foreground/70">
                "This is more than a school — it's hope in brick and board."
              </blockquote>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHSJK3w22ij2K7XGsxQgUnXrxw5nxq.png"
                alt="Outdoor classroom"
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPVOgMPKR9MCj1hweg9elyA1imZILH.png"
                alt="Children having meals"
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </Card>
            <Card className="overflow-hidden sm:col-span-2 lg:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E05jIJs0CjLCoWUjBGcDtsvuL4oRRe.png"
                alt="Happy students"
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
