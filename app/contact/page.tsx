"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

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
    <>
      <Head>
        <title>Contact Us - Kalyan Foundation</title>
        <meta
          name="description"
          content="Get in touch with Kalyan Foundation. Located in Purulia, West Bengal. Contact us for donations, volunteering, or partnership opportunities."
        />
        <meta
          name="keywords"
          content="contact Kalyan Foundation, Purulia NGO, education charity contact, volunteer inquiry"
        />
      </Head>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Contact Us</h1>
            <p className="text-xl text-muted-foreground font-serif">We'd love to hear from you</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card className="border-2">
                  <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
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
                          rows={6}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2">Our Address</h3>
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

                  <Card className="border-2">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Follow Us</h3>
                      <div className="space-y-3">
                        <Link
                          href="https://www.instagram.com/kalyanfoundation.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Instagram className="h-5 w-5 flex-shrink-0" />
                          <span className="text-sm">@kalyanfoundation.in</span>
                        </Link>
                        <Link
                          href="https://www.facebook.com/share/1DKt7bScAB/?mibextid=wwXIfr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Facebook className="h-5 w-5 flex-shrink-0" />
                          <span className="text-sm">Kalyan Foundation</span>
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Linkedin className="h-5 w-5 flex-shrink-0" />
                          <span className="text-sm">Kalyan Foundation</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-primary text-primary-foreground">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">Questions About Donating?</h3>
                      <p className="font-serif text-sm mb-4 opacity-90">
                        We're here to help! Reach out to learn more about how your contribution can make a difference.
                      </p>
                      <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        <Link href="/get-involved">Learn About Donating</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Make a Difference?</h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-8">
              Whether you want to volunteer, donate, or partner with us, we welcome your support in transforming lives
              through education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
