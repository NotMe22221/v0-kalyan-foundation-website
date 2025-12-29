import { Users, School, Heart, BookOpen } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Children Reached",
    },
    {
      icon: School,
      number: "1",
      label: "School Built",
    },
    {
      icon: BookOpen,
      number: "100+",
      label: "Books Distributed",
    },
    {
      icon: Heart,
      number: "Countless",
      label: "Dreams Awakened",
    },
  ]

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every contribution creates ripples of change in the lives of children who need it most
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
