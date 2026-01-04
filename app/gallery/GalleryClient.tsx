"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, X } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  {
    src: "/images/1000115479.jpeg",
    caption: "Community Gathering - Book Distribution Drive",
    category: "Education",
    alt: "Large group of children and teachers gathered under a pavilion with books being distributed",
  },
  {
    src: "/images/1000115904.jpeg",
    caption: "Anupama Kalyan Foundation School - Our Pride",
    category: "Community Events",
    alt: "Children and teachers posing in front of the Anupama Kalyan Foundation school entrance",
  },
  {
    src: "/images/1000115901.jpeg",
    caption: "School Entrance - A Beacon of Hope",
    category: "Education",
    alt: "Vertical view of children standing under the Anupama Kalyan Foundation entrance with large tree above",
  },
  {
    src: "/images/1000109167.jpeg",
    caption: "Art Activity - Creative Expression",
    category: "Welfare Programs",
    alt: "Children in pink uniforms engaged in art and creative activities at the foundation",
  },
  {
    src: "/images/1000115907.jpeg",
    caption: "Physical Activities - Joy of Movement",
    category: "Community Engagement",
    alt: "Children in colorful clothing participating in outdoor physical activities and dance",
  },
  {
    src: "/images/add5f6da-80dc-46cc-b924.jpeg",
    caption: "Mentorship Moment - Building Futures",
    category: "Education",
    alt: "Community leader engaging with children during an educational session",
  },
  {
    src: "/images/8170d6e0-0f60-47e9-b003.jpeg",
    caption: "Independence Day Celebration - Community Pride",
    category: "Cultural Events",
    alt: "Community members gathered with Indian flag celebrating independence day",
  },
  {
    src: "/images/1000115485.jpeg",
    caption: "Outdoor Learning - Knowledge in Nature",
    category: "Education",
    alt: "Children and teachers learning under a thatched pavilion in outdoor classroom setting",
  },
  {
    src: "/images/f8e02481-4ec0-40f4-b187.jpeg",
    caption: "Group Celebration - Together We Grow",
    category: "Community Engagement",
    alt: "Large group of children and adults together on the school grounds with Indian flags",
  },
  {
    src: "/images/eb528e27-89f3-41b5-8d6f.jpeg",
    caption: "Community Meal - Nourishing Lives",
    category: "Welfare Programs",
    alt: "Children enjoying a community meal together under a covered structure",
  },
]

function LightboxModal({ image, isOpen, onClose }) {
  if (!isOpen || !image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
          aria-label="Close lightbox"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="relative w-full h-auto rounded-lg overflow-hidden bg-black">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={1200}
            height={800}
            quality={85}
            className="w-full h-auto"
            priority
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className="mt-4 text-white">
          <h3 className="text-xl font-semibold text-balance">{image.caption}</h3>
          <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 fluid-container py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Camera className="h-4 w-4" />
              Our Gallery
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-balance">
              Moments that <span className="text-primary">inspire</span> change
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              Explore the moments that define our journey — from education drives and community events to the smiles
              that remind us why we do what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="fluid-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover-lift group cursor-pointer transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 overflow-hidden bg-muted">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                      {image.category}
                    </span>
                    <p className="text-white font-serif text-sm leading-relaxed">{image.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <CardContent className="p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Want to be part of our story?</h3>
                <p className="font-serif text-muted-foreground text-lg leading-relaxed mb-8">
                  Join us in creating more moments of joy, learning, and transformation for children in Purulia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="rounded-full">
                    <Link href="/get-involved" className="flex items-center gap-2">
                      Get Involved
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full bg-background/50 backdrop-blur-sm">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
              <div className="relative h-64 lg:h-auto hidden lg:block">
                <Image
                  src="/images/add5f6da-80dc-46cc-b924.jpeg"
                  alt="Children learning"
                  fill
                  className="object-cover"
                  quality={75}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal image={selectedImage} isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
