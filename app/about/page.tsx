"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Users, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 fluid-container py-40">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Who We Are
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Empowering change,
              <span className="block text-primary">one life at a time</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl mb-12">
              A youth-led, registered non-profit rooted in Purulia, dedicated to bringing education, nourishment,
              dignity, and possibility to children and families who have long lived on the margins of opportunity.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-bold text-primary">2022</p>
                <p className="text-muted-foreground text-sm mt-1">Founded</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-xl font-bold text-foreground">190200084</p>
                <p className="text-muted-foreground text-sm mt-1">Registration No.</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-xl font-bold text-foreground">Purulia</p>
                <p className="text-muted-foreground text-sm mt-1">West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Founder's Letter</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
                  A responsibility born of love
                </h2>
              </div>
              <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
                <p>
                  I grew up watching Purulia through a different lens — not just as my home, but as a place where
                  potential remained hidden beneath hardship. The Santhal and Munda children I met along the way carried
                  dreams far larger than the circumstances they were born into.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-2xl italic">
                  "Starting Kalyan Foundation was not a choice as much as it was a responsibility born out of love for
                  my hometown."
                </blockquote>
                <p>
                  Every child we teach, every meal we serve, every small smile we witness reinforces a belief that has
                  guided us from the beginning: the world is not equal, but compassion can build its bridges.
                </p>
              </div>
              <p className="text-foreground font-semibold">— Kaira Ghosh, Founder</p>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/image.png" alt="Kaira Ghosh with children" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Purulia: The Reality */}
      <section className="py-32 bg-background">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Context</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Purulia: The Reality</h2>
            <p className="text-xl text-muted-foreground font-serif">
              We live on the same planet — just in two different worlds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/image04.jpg" alt="Kalyan Foundation School" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground font-serif leading-relaxed">
                The Ajodhya Hills region, where we work, is geographically stunning yet profoundly underserved. Roads
                cut sharply through forests and rocky slopes, leaving villages isolated from basic services.
              </p>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-2">In Ajodhya village, literacy averages</p>
                  <p className="text-6xl font-bold text-primary">41.63%</p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="text-4xl font-bold text-primary mb-1">55.06%</p>
                  <p className="text-muted-foreground text-sm">Male Literacy</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="text-4xl font-bold text-primary mb-1">25.86%</p>
                  <p className="text-muted-foreground text-sm">Female Literacy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Education Crisis",
                description:
                  "Schools exist, but distance and lack of trained teachers make attendance unpredictable. Many children walk several kilometers each way.",
              },
              {
                icon: Heart,
                title: "Food Insecurity",
                description:
                  "Meals are often sparse and repetitive. For many children, hunger is a constant companion, shaping their ability to concentrate and learn.",
              },
              {
                icon: Globe,
                title: "Healthcare Gap",
                description:
                  "No hospitals or clinics within the hills. Any medical emergency requires hours of travel to Purulia town.",
              },
              {
                icon: Users,
                title: "Girl's Barriers",
                description:
                  "Girls are often expected to help with household work or care for siblings, interrupting schooling and limiting opportunities.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communities We Serve */}
      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Communities</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">The Santhal & Munda Tribes</h2>
              </div>
              <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Santhal and Munda tribes of Purulia carry centuries of heritage in their songs, their
                  craftsmanship, their rhythms, and their collective spirit. Their culture is rich, layered, and deeply
                  connected to the land.
                </p>
                <p>
                  Despite this vibrancy, generations have been denied access to education, healthcare, and steady income
                  simply because of their geography and identity.
                </p>
                <p className="text-primary font-semibold">
                  Working with them is an honour. They welcome us with open hearts and learn with unstoppable eagerness.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/image05.jpg" alt="Children learning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Teach */}
      <section className="py-32 bg-background">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Why We Teach</h2>
            <p className="text-xl text-muted-foreground font-serif">Their dreams aren't lost. They're waiting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                number: "01",
                title: "Learning Breaks Patterns",
                description:
                  "A single lesson becomes an inheritance. When a child learns to read, they learn to choose.",
              },
              {
                number: "02",
                title: "Girls Deserve More",
                description: "Every girl who sits with us becomes a new possibility and a reminder that change begins.",
              },
              {
                number: "03",
                title: "Hunger Shouldn't Decide",
                description: "A warm lunch becomes the bridge between survival and schooling.",
              },
              {
                number: "04",
                title: "Staff Carry Forward",
                description:
                  "Ground staff teach with patience, showing children what strength rooted in humility looks like.",
              },
              {
                number: "05",
                title: "Hope is a Right",
                description: "Every child deserves to imagine tomorrow. Every child deserves to dream without apology.",
              },
            ].map((item) => (
              <div key={item.number} className="group">
                <div className="bg-muted/50 rounded-3xl p-6 h-full hover:bg-primary/5 transition-all duration-300">
                  <p className="text-5xl font-bold text-primary/20 mb-4">{item.number}</p>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      {/* Initiatives section remains unchanged for this example */}

      {/* Impact */}
      {/* Impact section remains unchanged for this example */}

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="fluid-container text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Join our mission</h2>
          <p className="text-xl font-serif opacity-90 max-w-2xl mx-auto mb-12">
            Every contribution, no matter the size, helps us reach more children and create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8 text-base">
              <Link href="/get-involved" className="flex items-center gap-2">
                Get Involved
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-white/30 text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
