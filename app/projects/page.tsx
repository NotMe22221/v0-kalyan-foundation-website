import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, BookOpen, Users, Utensils, Leaf, Stethoscope, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Projects - Kalyan Foundation",
  description:
    "Explore Kalyan Foundation's education, health, and environment projects transforming lives in rural Purulia, West Bengal.",
}

export default function ProjectsPage() {
  const themes = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Building schools, providing learning materials, and creating safe spaces for quality education.",
      items: ["Anupuma School establishment", "Learning materials distribution", "Teacher training programs"],
    },
    {
      icon: Stethoscope,
      title: "Health",
      description: "Ensuring children receive nutritious meals and basic healthcare to support their growth.",
      items: ["Daily nutritious meals program", "Health awareness sessions", "Basic healthcare access"],
    },
    {
      icon: Leaf,
      title: "Environment",
      description: "Teaching environmental awareness and sustainable practices for a better future.",
      items: ["Environmental education", "Sustainable building practices", "Community clean-up initiatives"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 fluid-container py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Our Work
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Creating lasting <span className="text-primary">change</span> through education
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              From humble beginnings to transformative impact — explore our initiatives that are changing lives in
              Purulia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Focus Areas</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Projects by Theme</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <theme.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{theme.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-6">{theme.description}</p>
                  <ul className="space-y-2">
                    {theme.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Flagship Project</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">Anupuma School</h2>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                Our flagship project transforming a small hut into a beacon of hope and learning for tribal children in
                Purulia.
              </p>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                Today, the school features outdoor classrooms with thatched roofs, a dining area where children receive
                nutritious meals, and a safe environment where learning comes alive.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: School,
                    title: "Quality Education Access",
                    desc: "Structured learning programs for children",
                  },
                  { icon: Utensils, title: "Nutritious Meals", desc: "Daily meals to fuel learning and growth" },
                  { icon: Users, title: "Community Engagement", desc: "Building relationships with families" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground font-serif">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["/images/image04.jpg", "/images/image05.jpg", "/images/image.png", "/images/image.png"].map(
                (src, index) => (
                  <div key={index} className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`School image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Coming Soon</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Upcoming Initiatives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl hover-lift">
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Literacy Program</h3>
                <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-4">
                  Introducing basic computer skills and digital education to prepare children for the modern world and
                  bridge the digital divide.
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Planning Phase
                </span>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover-lift">
              <CardContent className="p-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Girl Education Initiative</h3>
                <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-4">
                  A focused program to encourage and support girl education in tribal communities, addressing cultural
                  barriers and providing mentorship.
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Development Phase
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="fluid-container text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Help us expand our impact</h2>
          <p className="text-xl font-serif opacity-90 max-w-2xl mx-auto mb-12">
            Your support can help us reach more children, build more schools, and create more opportunities for
            education in rural India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base">
              <Link href="/get-involved" className="flex items-center gap-2">
                Volunteer with Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-white/30 text-white hover:bg-white hover:text-primary bg-transparent"
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
