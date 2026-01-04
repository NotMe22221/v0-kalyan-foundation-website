import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import GalleryClient from "./GalleryClient"

export const metadata = {
  title: "Gallery - Kalyan Foundation",
  description:
    "View photos from our education drives, events, and programs in Purulia. See the impact of Kalyan Foundation's work.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <GalleryClient />
      <Footer />
    </div>
  )
}
