import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About Us - Kalyan Foundation",
  description:
    "Learn about Kalyan Foundation's mission to empower underprivileged children in rural India through education. Founded by Kaira Ghosh in 2022.",
  keywords: "Kalyan Foundation, education NGO, rural India, Purulia, tribal children, youth leadership",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">About Kalyan Foundation</h1>
          <p className="text-2xl text-muted-foreground font-serif">Transforming lives through education</p>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">Meet Our Founder</h2>
            <p className="text-xl text-muted-foreground font-serif">Kaira Ghosh</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-lg font-serif text-muted-foreground leading-relaxed">
                <p>
                  At just 14, Kaira Ghosh founded the Kalyan Foundation in 2022 after witnessing the lack of access to
                  education and medical facilities in Purulia. What began as a simple effort to help a few children has
                  grown under her leadership into a youth-led initiative that continues to impact lives across rural
                  Bengal.
                </p>
                <p>
                  What started as a few disorganised learning sessions under trees — with children gathering around to
                  read and learn — soon became something much bigger. With the help of a few wonderful people from the
                  community, Kaira transformed a small hut into a classroom. Though they deserve far more, that humble
                  space became the first home of the Kalyan Foundation — a place built on hope, purpose, and the shared
                  belief that learning can change lives.
                </p>
                <p>
                  Deeply moved by the realities she saw, Kaira envisioned an organisation that would not only focus on
                  education but also raise funds for medical needs, promote awareness on female hygiene, and work
                  towards the overall upliftment of women in Purulia.
                </p>
                <p>
                  Her strength lies in her empathy and her ability to turn vision into action. As the Founder and
                  Director, she continues to lead with purpose, building programs that merge compassion with real
                  impact. Kaira believes that education is the strongest tool of transformation — one that every child
                  deserves, regardless of their circumstance.
                </p>
                <p>
                  Her journey is a reflection of determination at a young age, leadership rooted in kindness, and the
                  unwavering belief that meaningful change begins when one decides to act.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg"
                  alt="Kaira Ghosh with children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Team</h2>
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users className="h-10 w-10 text-primary" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg font-serif text-muted-foreground leading-relaxed">
              <p>
                The Kalyan Foundation is powered by a passionate group of young changemakers and community volunteers
                who work hand in hand to make a real difference.
              </p>
              <p>
                Our permanent volunteers, who come from the very communities we teach in, are the heart of our efforts.
                They are incredible individuals who dedicate their time and energy to teaching children from their own
                neighbourhoods, ensuring that learning continues even when we are not there.
              </p>
              <p>
                They are the ones who hold everything together — coordinating, guiding, and supporting each initiative
                with unmatched sincerity and care. We are eternally grateful to them for being the real force behind the
                scenes, turning our shared vision into reality every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance leading-tight">The Founder's Story</h2>
              <div className="space-y-6 text-lg font-serif text-muted-foreground leading-relaxed">
                <p>
                  At just 16 years old, Kaira Ghosh witnessed the stark reality of education inequality in Purulia, West
                  Bengal. In a region where literacy rates hover around 25%, most tribal children grow up without access
                  to schools or the opportunity to learn.
                </p>
                <p>
                  Kaira refused to accept this reality. With unwavering determination and a vision for change, she
                  founded Kalyan Foundation in 2022. What started as a small initiative has grown into a movement that's
                  transforming the lives of underprivileged children.
                </p>
                <p>
                  Today, Kalyan Foundation stands as a testament to the power of youth leadership and the belief that
                  every child deserves the right to learn, dream, and thrive.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image05-Oq5qyiCJyZQoEtnc3wuAISb5Fno3Ia.jpg"
                  alt="Kaira Ghosh with children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-balance">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card">
              <CardContent className="pt-12 pb-12 px-10">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                  To empower underprivileged children through education and awareness, providing them with the tools and
                  opportunities they need to build a better future for themselves and their communities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card">
              <CardContent className="pt-12 pb-12 px-10">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                  To ensure every child in rural India has the right to learn, dream, and thrive. We envision a future
                  where education is accessible to all, regardless of their background or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-balance">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Compassion</h3>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                We approach every child with empathy, understanding their unique challenges and celebrating their
                potential.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commitment</h3>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                We are dedicated to creating lasting change through consistent effort and unwavering focus on our
                mission.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-lg font-serif text-muted-foreground leading-relaxed">
                We operate with complete openness, ensuring every supporter knows exactly how their contribution makes a
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Challenge We're Addressing</h2>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-6">
            In Purulia, West Bengal, educational opportunities are scarce for tribal communities. Many children grow up
            without access to basic schooling, limiting their potential and perpetuating cycles of poverty.
          </p>
          <div className="bg-muted/50 border-2 border-primary/20 rounded-lg p-8 my-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Purulia: The Reality</h3>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-4">
              In Purulia, the literacy rate remains a pressing concern. The literacy rate of Ajodhya village is about{" "}
              <span className="font-bold text-primary">41.63%</span>, with male literacy at{" "}
              <span className="font-bold text-primary">55.06%</span> and female literacy at only{" "}
              <span className="font-bold text-primary">25.86%</span>.
            </p>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed">
              These figures highlight the urgency of our mission to promote access to education and equal opportunities.
            </p>
          </div>
          <p className="text-lg font-serif text-muted-foreground leading-relaxed">
            Kalyan Foundation is working to change this reality, one child at a time, by building schools, providing
            resources, and creating a nurturing environment where learning can flourish.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
