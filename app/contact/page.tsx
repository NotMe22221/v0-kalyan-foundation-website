"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Instagram, Facebook, Linkedin, Mail, ArrowRight, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 fluid-container py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Mail className="h-4 w-4" />
              Contact
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Let's <span className="text-primary">connect</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="fluid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this regarding?"
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message..."
                        rows={5}
                        className="rounded-xl"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full h-14">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Get in touch</h2>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Our Address</h3>
                      <address className="not-italic font-serif text-muted-foreground leading-relaxed">
                        VIII-Kalha, P. O. Sahajuri
                        <br />
                        P. S. Baghmundi
                        <br />
                        Purulia, West Bengal – 723152
                        <br />
                        India
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Instagram,
                        label: "@kalyanfoundation.in",
                        href: "https://www.instagram.com/kalyanfoundation.in",
                      },
                      {
                        icon: Facebook,
                        label: "Kalyan Foundation",
                        href: "https://www.facebook.com/share/1DKt7bScAB/?mibextid=wwXIfr",
                      },
                      { icon: Linkedin, label: "Kalyan Foundation", href: "#" },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <social.icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm">{social.label}</span>
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="font-bold mb-2">Questions About Donating?</h3>
                  <p className="font-serif text-sm mb-6 opacity-90">
                    We're here to help! Reach out to learn more about how your contribution can make a difference.
                  </p>
                  <Button asChild variant="secondary" className="rounded-full">
                    <Link href="/get-involved" className="flex items-center gap-2">
                      Learn About Donating
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="fluid-container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to make a difference?</h2>
          <p className="text-lg font-serif text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you want to volunteer, donate, or partner with us, we welcome your support in transforming lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-8">
              <Link href="/get-involved" className="flex items-center gap-2">
                Get Involved
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 bg-transparent">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
