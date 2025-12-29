import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Kalyan Foundation
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          </div>

          <Card className="p-6 sm:p-8 lg:p-10 bg-background border-border">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
              Founded by <strong>Kaira Ghosh</strong> at just 16 years old, Kalyan Foundation is transforming forgotten
              spaces into schools of hope. In Purulia, where literacy rates hover around 25%, most tribal children grow
              up without access to education. Kaira refused to accept that.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
              <strong className="text-primary">Our Mission:</strong> To empower underprivileged children through
              education and awareness.
            </p>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              <strong className="text-primary">Our Vision:</strong> To ensure every child in rural India has the right
              to learn, dream, and thrive.
            </p>
          </Card>

          <div className="mt-8 p-4 sm:p-6 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              Registered NGO — Reg. No. <strong>190200084</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
