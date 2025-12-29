import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Sparkles, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const featuredPosts = [
    {
      slug: "first-day-anupuma-school",
      title: "The First Day at Anupuma School",
      excerpt: "A heartwarming story of how 30 children walked through our doors for the very first time.",
      author: "Kaira Ghosh",
      date: "March 15, 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg",
    },
    {
      slug: "volunteer-experience-purulia",
      title: "A Volunteer's Journey: Two Weeks in Purulia",
      excerpt:
        "International volunteer Sarah shares her transformative experience working with children in rural India.",
      author: "Sarah Mitchell",
      date: "March 10, 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHSJK3w22ij2K7XGsxQgUnXrxw5nxq.png",
    },
    {
      slug: "nutrition-program-launch",
      title: "Launching Our Nutrition Program",
      excerpt: "Every child deserves a healthy meal. Learn about our new initiative to provide nutritious food.",
      author: "Kaira Ghosh",
      date: "February 28, 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPVOgMPKR9MCj1hweg9elyA1imZILH.png",
    },
  ]

  const blogPosts = [
    {
      slug: "latest-story-1",
      title: "Latest Story 1",
      excerpt: "This is the excerpt for the latest story 1.",
      author: "Author 1",
      date: "2024-03-20",
      image: "https://blob.v0.app/story1.jpg",
    },
    {
      slug: "latest-story-2",
      title: "Latest Story 2",
      excerpt: "This is the excerpt for the latest story 2.",
      author: "Author 2",
      date: "2024-03-19",
      image: "https://blob.v0.app/story2.jpg",
    },
    {
      slug: "latest-story-3",
      title: "Latest Story 3",
      excerpt: "This is the excerpt for the latest story 3.",
      author: "Author 3",
      date: "2024-03-18",
      image: "https://blob.v0.app/story3.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg"
            alt="Children learning in rural India"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Lighting the Path of Education in Rural India
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-serif text-pretty max-w-2xl mx-auto">
            Kalyan Foundation empowers tribal children in Purulia with access to education, dignity, and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/get-involved">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-base bg-white/90 hover:bg-white text-primary">
              <Link href="/get-involved">Join as a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">About Kalyan Foundation</h2>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-4">
            Founded by Kaira Ghosh at just 16, Kalyan Foundation is transforming forgotten spaces into schools of hope.
          </p>
          <p className="text-sm text-muted-foreground">Registered NGO — Reg. No. 190200084</p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-primary">50+</div>
                <p className="text-muted-foreground font-serif">Children Reached</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-primary">1</div>
                <p className="text-muted-foreground font-serif">School Built</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-primary">∞</div>
                <p className="text-muted-foreground font-serif">Dreams Awakened</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anupuma School Story */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Story of Anupuma School</h2>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-6">
                What began as a small hut has transformed into a functional learning space where children discover the
                joy of education. Anupuma School represents more than just a building — it's a beacon of hope in a
                community where literacy rates hover around 25%.
              </p>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-6">
                Every day, children gather under the thatched roof to learn, grow, and dream of a brighter future. With
                dedicated teachers and a nurturing environment, we're proving that education can transform lives.
              </p>
              <Button asChild>
                <Link href="/projects">Learn More About Our Projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image04-4xdrONqFjRdy6mbs9Z2VODfYGqtRuZ.jpg"
                alt="Kalyan Foundation School"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oHSJK3w22ij2K7XGsxQgUnXrxw5nxq.png"
                alt="Outdoor classroom"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E05jIJs0CjLCoWUjBGcDtsvuL4oRRe.png"
                alt="Happy children"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPVOgMPKR9MCj1hweg9elyA1imZILH.png"
                alt="Children eating together"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Latest from Our Blog</h2>
            <p className="text-lg font-serif text-muted-foreground max-w-2xl mx-auto">
              Read stories of transformation, volunteer experiences, and updates from the field
            </p>
          </div>

          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-lg text-muted-foreground mb-6">
              No blog posts yet. Check back soon for inspiring stories!
            </p>
            <Button asChild variant="outline">
              <Link href="/blog">
                Visit Blog Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">Latest Stories</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Read about our journey, volunteer experiences, and the impact we're making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-balance group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-serif mb-4 line-clamp-2">{post.excerpt}</p>
                  <Button asChild variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Support Our Mission</h2>
          <p className="text-lg font-serif mb-8 leading-relaxed opacity-90">
            Your contribution helps us provide education, meals, and hope to children who need it most. Every donation
            makes a difference.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto">
            <p className="text-sm mb-2 opacity-90">Donate via UPI</p>
            <p className="text-2xl font-mono font-semibold">0790656a0117730.bqr@kotak</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base bg-white text-primary hover:bg-white/90">
              <Link href="/get-involved">Donate with UPI</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent transition-all"
            >
              <Link href="/get-involved">Send Supplies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground/90 mb-6 text-balance">
            "This is more than a school — it's hope in brick and board."
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  )
}
