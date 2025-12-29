import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Package, Share2 } from "lucide-react"

export function Donate() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg sm:text-xl mb-12 opacity-90">
            Your contribution directly impacts the lives of children in rural Purulia. Every donation brings us closer
            to a future where every child has access to education.
          </p>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 sm:p-8 lg:p-10 mb-8">
            <div className="mb-6">
              <p className="text-sm sm:text-base mb-2 opacity-90">Donate via UPI</p>
              <p className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold">0790656a0117730.bqr@kotak</p>
            </div>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donate Now
            </Button>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground h-auto py-4 sm:py-6"
            >
              <Heart className="mr-2 w-5 h-5" />
              <span>Donate with UPI</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground h-auto py-4 sm:py-6"
            >
              <Package className="mr-2 w-5 h-5" />
              <span>Send Supplies</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground h-auto py-4 sm:py-6"
            >
              <Share2 className="mr-2 w-5 h-5" />
              <span>Share Our Story</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
