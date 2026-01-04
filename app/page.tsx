import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Sparkles, ArrowRight, ArrowUpRight, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const impactStats = [
    { number: "50+", label: "Children Finding Hope", icon: Users },
    { number: "1", label: "Dream School Built", icon: BookOpen },
    { number: "∞", label: "Futures Unfolding", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image05.jpg"
            alt="Children learning in rural India"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 fluid-container py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span>Giving Every Child a Fighting Chance</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-fade-up delay-100">
              Bringing <span className="text-primary">education and hope</span> to children in rural India
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl font-serif leading-relaxed animate-fade-up delay-200">
              Kalyan Foundation is a small team with a big heart. We're working to make sure every tribal child in
              Purulia gets a real chance to learn, dream, and build a better life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-base group">
                <Link href="/get-involved" className="flex items-center gap-2">
                  Support Us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
              >
                <Link href="/about">See What We Do</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
                It started with one girl who couldn't ignore what she saw
              </h2>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                Kaira Ghosh was 14 when she realized that the kids in her community were being left behind. They had
                dreams just like any other kids — but fewer chances to chase them. So she did something about it.
              </p>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                What started as one person's idea has become a small but mighty team. Today, we run a school where
                children get not just education, but meals, safety, and the chance to believe in their own future.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild variant="outline" className="rounded-full group bg-transparent">
                  <Link href="/about" className="flex items-center gap-2">
                    Learn Our Full Story
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <span className="text-sm text-muted-foreground">Reg. No. 190200084</span>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/image04.jpg"
                      alt="Kalyan Foundation School"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/image.png"
                      alt="Children eating together"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/image.png"
                      alt="Happy children"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative h-48 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/image.png"
                      alt="Outdoor classroom"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We've Done</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Real Lives, Real Changes</h2>
            <p className="text-xl text-muted-foreground font-serif">
              Behind every number is a child with a name, a family, and a future we're helping to build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift bg-card">
                <CardContent className="p-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold text-foreground mb-3">{stat.number}</div>
                  <p className="text-muted-foreground font-serif text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image src="/images/image.png" alt="Anupuma School outdoor classroom" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-3">
                    Our Home Base
                  </span>
                  <h3 className="text-3xl font-bold text-white">Anupuma School</h3>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Where It Happens</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 leading-tight">
                From a simple hut to a beacon of hope
              </h2>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                There's a place in Purulia where children gather under a thatched roof. They come with hungry bellies
                and curious minds. They leave with full stomachs and fuller hearts.
              </p>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                Anupuma School started small. Today, it's where real learning happens — where a child who might have
                spent their day working in fields instead gets to discover math, literature, art, and dreams.
              </p>
              <Button asChild className="rounded-full group">
                <Link href="/projects" className="flex items-center gap-2">
                  Visit Our Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="fluid-container">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-16 w-16 mx-auto mb-8 opacity-30" />
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif italic leading-relaxed mb-8">
              "Education isn't just about textbooks. It's about belief — belief that every child deserves a future."
            </blockquote>
            <div className="h-px w-24 bg-primary-foreground/30 mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="fluid-container">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <Heart className="h-12 w-12 text-primary mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">You Can Help</h2>
                <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-8">
                  Whether you donate ₹100 or ₹10,000, volunteer your weekend, or just share our story — you matter. You
                  help us feed hungry kids, teach excited learners, and build futures.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">Donate via UPI in India</p>
                    <p className="font-mono font-semibold">0790656a0117730.bqr@kotak</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-full flex-1">
                      <Link href="/get-involved">Donate</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full flex-1 bg-transparent">
                      <Link href="/get-involved">Volunteer</Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/image05.jpg" alt="Children in classroom" fill className="object-cover" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
