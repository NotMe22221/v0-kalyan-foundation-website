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
              Our Mission
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Making sure no child gets left behind
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl mb-12">
              Kalyan Foundation is a small, dedicated team working in rural West Bengal to give tribal children the
              education, food, and hope they deserve.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-bold text-primary">2022</p>
                <p className="text-muted-foreground text-sm mt-1">When We Started</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="text-xl font-bold text-foreground">190200084</p>
                <p className="text-muted-foreground text-sm mt-1">Registered NGO</p>
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Meet Kaira</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
                  The 14-year-old who decided to change things
                </h2>
              </div>
              <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kaira grew up in Purulia. She watched children in her neighborhood skip school because they were
                  hungry. She saw girls stop studying because they were expected to stay home. She couldn't unsee it, so
                  she decided to act.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-2xl italic">
                  "I realized that the only thing standing between these kids and their dreams was someone saying 'yes,
                  you can.' I decided to be that someone."
                </blockquote>
                <p>
                  At 14, Kaira started with almost nothing — just determination and a small group of supporters. Today,
                  Kalyan Foundation has taught over 50 children, served thousands of meals, and changed the trajectory
                  of entire families.
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Challenge</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Why Purulia Needs Help</h2>
            <p className="text-xl text-muted-foreground font-serif">
              Children shouldn't have to choose between school and survival.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/image04.jpg" alt="Kalyan Foundation School" fill className="object-cover" />
            </div>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground font-serif leading-relaxed">
                Purulia is a beautiful place with rich forests and vibrant tribal communities. But it's also one of
                India's most forgotten regions. Roads are tough. Hospitals are far away. Schools exist, but teachers
                often don't show up, and many families can't afford to send their kids.
              </p>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-2">
                    In villages near us, only about 1 in 3 people can read. And for girls? It's even worse.
                  </p>
                  <p className="text-6xl font-bold text-primary">25.86%</p>
                  <p className="text-muted-foreground text-sm mt-2">That's the literacy rate for women.</p>
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="text-4xl font-bold text-primary mb-1">55%</p>
                  <p className="text-muted-foreground text-sm">For Men</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <p className="text-4xl font-bold text-primary mb-1">26%</p>
                  <p className="text-muted-foreground text-sm">For Women</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Education is Scattered",
                description:
                  "Schools exist on paper, but many kids walk 5+ kilometers just to get there. Teachers don't always show up. By the time lunch comes around, their stomachs are already growling.",
              },
              {
                icon: Heart,
                title: "Hunger is Daily",
                description:
                  "Meals in these families are repetitive and sparse. Some kids come to school hungry. It's hard to learn math when you're thinking about when you'll eat.",
              },
              {
                icon: Globe,
                title: "Healthcare is Distant",
                description:
                  "When someone gets sick, the nearest hospital is hours away by foot or bumpy roads. Many issues go untreated simply because help is too far.",
              },
              {
                icon: Users,
                title: "Girls Face Extra Barriers",
                description:
                  "Girls are often kept home to help with housework or care for siblings. Even when they can attend school, they face pressure to drop out.",
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
                <span className="text-primary font-medium text-sm uppercase tracking-wider">The People</span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">The Santhal and Munda Tribes</h2>
              </div>
              <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Santhal and Munda communities have lived in these hills for generations. They have their own
                  languages, music, art, and traditions. They're strong, warm-hearted people who welcome us into their
                  lives.
                </p>
                <p>
                  But for too long, they've been left out of opportunities. Not because they're not capable — they're
                  incredibly capable — but because of where they were born and who they were born as.
                </p>
                <p className="text-primary font-semibold">
                  Working with these communities is an honor. Their kids are bright, eager, and hungry to learn — in
                  both senses of the word.
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">What We Believe In</h2>
            <p className="text-xl text-muted-foreground font-serif">One child's opportunity changes everything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                number: "01",
                title: "Books Break Cycles",
                description:
                  "When a child learns to read, they learn to choose their own future. It's that simple and that powerful.",
              },
              {
                number: "02",
                title: "Girls Deserve Futures",
                description:
                  "Every girl who walks into our classroom becomes a possibility. She becomes proof that things can be different.",
              },
              {
                number: "03",
                title: "Full Bellies, Open Minds",
                description:
                  "A warm meal isn't charity. It's the baseline for learning. Kids need food to focus, to play, to be kids.",
              },
              {
                number: "04",
                title: "Local Leaders",
                description:
                  "Our local team isn't just staff — they're teachers, mentors, and role models who show kids what strength looks like.",
              },
              {
                number: "05",
                title: "Hope is a Right",
                description:
                  "Every child, no matter where they're born or who they're born to, deserves to dream. To hope. To believe in tomorrow.",
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

      {/* PDF Document Viewer Section */}
      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Full Story</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Read Our "Who We Are" Document</h2>
            <p className="text-xl text-muted-foreground font-serif">
              Get the complete story of Kalyan Foundation, from our founder's journey to our vision for the future.
            </p>
          </div>

          {/* PDF Viewer */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <iframe
                src="https://blobs.vusercontent.net/blob/who%20we%20are-compressed-k44pb4svMWqVl35l308KZ19sXR8NTN.pdf"
                className="w-full h-full min-h-[600px]"
                title="Who We Are - Kalyan Foundation"
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* Download Link */}
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base gap-2">
              <a
                href="https://blobs.vusercontent.net/blob/who%20we%20are-compressed-k44pb4svMWqVl35l308KZ19sXR8NTN.pdf"
                download="Kalyan-Foundation-Who-We-Are.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRight className="h-5 w-5" />
                Download Full PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="fluid-container text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl font-serif opacity-90 max-w-2xl mx-auto mb-12">
            Whether you can donate, volunteer, or just share our story — you have the power to change a child's life.
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
