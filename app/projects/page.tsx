import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, BookOpen, Users, Utensils, Leaf, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Projects - Kalyan Foundation",
  description:
    "Explore Kalyan Foundation's education, health, and environment projects transforming lives in rural Purulia, West Bengal.",
  keywords: "education projects, rural development, Anupuma School, tribal children, Purulia projects",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Our Projects</h1>
          <p className="text-xl text-muted-foreground font-serif">Creating lasting change through education</p>
        </div>
      </section>

      {/* Projects by Theme section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Projects by Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">
                  Building schools, providing learning materials, and creating safe spaces where children can access
                  quality education.
                </p>
                <ul className="space-y-2 text-sm font-serif text-muted-foreground">
                  <li>• Anupuma School establishment</li>
                  <li>• Learning materials distribution</li>
                  <li>• Teacher training programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Stethoscope className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Health</h3>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">
                  Ensuring children receive nutritious meals and basic healthcare to support their growth and learning.
                </p>
                <ul className="space-y-2 text-sm font-serif text-muted-foreground">
                  <li>• Daily nutritious meals program</li>
                  <li>• Health awareness sessions</li>
                  <li>• Basic healthcare access</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Leaf className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Environment</h3>
                <p className="font-serif text-muted-foreground leading-relaxed mb-4">
                  Teaching environmental awareness and sustainable practices to create a better future for the
                  community.
                </p>
                <ul className="space-y-2 text-sm font-serif text-muted-foreground">
                  <li>• Environmental education</li>
                  <li>• Sustainable building practices</li>
                  <li>• Community clean-up initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anupuma School - Main Project */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Anupuma School</h2>
            <p className="text-xl font-serif text-muted-foreground leading-relaxed">
              Our flagship project transforming a small hut into a beacon of hope and learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Transformation</h3>
              <div className="space-y-6 text-lg font-serif text-muted-foreground leading-relaxed mb-10">
                <p>
                  Anupuma School began as a modest structure with limited resources. Through dedication, community
                  support, and generous donations, we've transformed it into a fully functional learning space where
                  children can thrive.
                </p>
                <p>
                  Today, the school features outdoor classrooms with thatched roofs, a dining area where children
                  receive nutritious meals, and a safe environment where learning comes alive.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <School className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quality Education Access</h4>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      Providing structured learning programs for children who previously had no access to formal
                      education
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Nutritious Meals</h4>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      Daily meals ensure children have the energy to learn and grow
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/40">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Community Engagement</h4>
                    <p className="font-serif text-muted-foreground leading-relaxed">
                      Building strong relationships with families and local communities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image04-4xdrONqFjRdy6mbs9Z2VODfYGqtRuZ.jpg"
                  alt="Kalyan Foundation School building"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg"
                  alt="Children in classroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHSJK3w22ij2K7XGsxQgUnXrxw5nxq.png"
                  alt="Outdoor learning"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPVOgMPKR9MCj1hweg9elyA1imZILH.png"
                  alt="Meal time"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Recent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 cursor-pointer">
              <Link href="/blog">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image04-4xdrONqFjRdy6mbs9Z2VODfYGqtRuZ.jpg"
                    alt="School building progress"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Building Anupuma School</h3>
                  <p className="text-sm font-serif text-muted-foreground mb-3">
                    The journey from a small hut to a fully functional learning space.
                  </p>
                  <span className="text-sm text-primary font-semibold">Read the full story →</span>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 cursor-pointer">
              <Link href="/blog">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E05jIJs0CjLCoWUjBGcDtsvuL4oRRe.png"
                    alt="International volunteers"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">International Volunteers Join Us</h3>
                  <p className="text-sm font-serif text-muted-foreground mb-3">
                    Students from around the world bring fresh perspectives and energy.
                  </p>
                  <span className="text-sm text-primary font-semibold">Read the full story →</span>
                </CardContent>
              </Link>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 cursor-pointer">
              <Link href="/blog">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg"
                    alt="Children learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Stories from Purulia</h3>
                  <p className="text-sm font-serif text-muted-foreground mb-3">
                    Hear from the children whose lives have been transformed by education.
                  </p>
                  <span className="text-sm text-primary font-semibold">Read the full story →</span>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Initiatives */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-balance">Upcoming Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  Digital Literacy Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                  Introducing basic computer skills and digital education to prepare children for the modern world. We
                  aim to bridge the digital divide and provide access to technology-based learning.
                </p>
                <p className="text-sm font-medium text-primary">Status: Planning Phase</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  Girl Education Initiative
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                  A focused program to encourage and support girl education in tribal communities, addressing cultural
                  barriers and providing mentorship opportunities.
                </p>
                <p className="text-sm font-medium text-primary">Status: Development Phase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Help Us Expand Our Impact</h2>
          <p className="text-xl font-serif mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
            Your support can help us reach more children, build more schools, and create more opportunities for
            education in rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg h-14 px-10 bg-white text-primary hover:bg-white/95 shadow-xl"
            >
              <Link href="/get-involved">Volunteer with Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg h-14 px-10 bg-white text-primary hover:bg-white/95 shadow-xl"
            >
              <Link href="/get-involved">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
