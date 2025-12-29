"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

export default function TeamPage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const teamSections = [
    {
      id: "founder",
      title: "Founder and Director",
      description:
        "I founded the Kalyan Foundation in 2022 when I was 14. I started it after visiting Purulia and witnessing children being deprived of education and basic opportunities. That experience shaped my goal of ensuring access to learning and development for every child, regardless of background.",
      members: [
        {
          name: "Kaira Ghosh",
          role: "Founder & Director",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-woman-founder-nonprofit-leader-Ql0Yx8Ql0Yx8Ql0Yx8.jpg",
          bio: "Founded Kalyan Foundation at age 14 with a vision to transform education in rural India",
        },
      ],
    },
    {
      id: "tech",
      title: "Tech & Social Media Team",
      description:
        "The heart of our foundation's digital presence lies with our tech and social media teams. I met most of them online, and together we've built a strong, creative bond. They are responsible for managing our website, campaigns, and outreach. I am eternally grateful for their efforts and the dedication they bring to spreading awareness of our mission.",
      members: [
        {
          name: "Tech Team Member",
          role: "Web Developer",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team-member-nonprofit-B4wE8B4wE8B4wE8.jpg",
          bio: "Building digital solutions to amplify our impact",
        },
        {
          name: "Social Media Manager",
          role: "Content Creator",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/volunteer-nonprofit-worker-hzvWzhzvWzhzvWz.jpg",
          bio: "Sharing our story with the world",
        },
      ],
    },
    {
      id: "volunteers",
      title: "International Volunteers",
      description:
        "Our international volunteers include students from across the world who dedicate their time to helping us. Their involvement brings fresh ideas, cultural diversity, and immense positivity. The children in Purulia love interacting with them, and these connections remind us how compassion can transcend borders.",
      members: [],
    },
    {
      id: "partners",
      title: "Partners and More",
      description:
        "This section will include the logos and links of our partner organizations and collaborators. To be filled later on.",
      members: [],
    },
  ]

  return (
    <>
      <Head>
        <title>Our Team - Kalyan Foundation</title>
        <meta
          name="description"
          content="Meet the team behind Kalyan Foundation. Learn about founder Kaira Ghosh, our tech team, international volunteers, and partners."
        />
        <meta name="keywords" content="Kalyan Foundation team, Kaira Ghosh, NGO volunteers, education team, Purulia" />
      </Head>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground font-serif">The people making a difference</p>
          </div>
        </section>

        {/* Interactive Team Sections */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto space-y-6">
            {teamSections.map((section) => (
              <Card key={section.id} className="border-2 overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                  {openSection === section.id ? (
                    <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
                  )}
                </button>

                {openSection === section.id && (
                  <div className="px-6 pb-6">
                    <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-8">
                      {section.description}
                    </p>

                    {section.members.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.members.map((member, index) => (
                          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                              <div className="relative h-64 w-full">
                                <Image
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                                <p className="text-sm font-serif text-muted-foreground">{member.bio}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
