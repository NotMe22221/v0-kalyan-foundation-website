"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Users, Package, Share2, Globe, Info } from "lucide-react"
import { useState } from "react"
import Head from "next/head"
import Image from "next/image"

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Head>
        <title>Get Involved - Kalyan Foundation</title>
        <meta
          name="description"
          content="Join Kalyan Foundation in transforming lives through education. Donate, volunteer, or partner with us to support children in rural India."
        />
        <meta
          name="keywords"
          content="donate, volunteer, support education, NGO India, Kalyan Foundation, help children"
        />
      </Head>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Get Involved</h1>
            <p className="text-xl text-muted-foreground font-serif">Join us in transforming lives through education</p>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">How You Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Donate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">
                    Your financial contribution helps us provide education, meals, and resources to children in need.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">
                    Share your time and skills to teach, mentor, or support our programs both on-site and remotely.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Send Supplies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">
                    Donate books, stationery, educational materials, or other supplies that help children learn.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Share Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">
                    Help us reach more supporters by sharing our mission on social media and with your network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Make a Donation</h2>
              <p className="text-lg font-serif text-muted-foreground">
                Every contribution, no matter the size, makes a real difference
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Indian Donations - UPI */}
              <Card className="border-2">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Heart className="h-6 w-6 text-primary" />
                    <CardTitle>Donate from India</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-serif">Via UPI</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-4 mb-4 inline-block">
                      <Image
                        src="/images/whatsapp-20image-202025-11-28-20at-2007.jpg"
                        alt="Kalyan Foundation BHIM UPI QR Code - Kotak Mahindra Bank"
                        width={280}
                        height={350}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <p className="text-sm text-muted-foreground mb-2">UPI ID</p>
                      <p className="text-base md:text-lg font-mono font-semibold text-primary break-all">
                        0790656A0117730.bqr@kotak
                      </p>
                    </div>
                    <p className="text-sm font-serif text-muted-foreground">
                      Scan the QR code or use the UPI ID above to make your donation. All contributions go directly to
                      supporting our educational programs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* International Donations - PayPal */}
              <Card className="border-2">
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="h-6 w-6 text-primary" />
                    <CardTitle>International Donations</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground font-serif">Via PayPal</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <Image
                        src="/images/whatsapp-20image-202025-11-28-20at-2005.jpg"
                        alt="PayPal QR Code for international donations"
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </div>
                    <p className="text-sm font-mono font-semibold text-primary mb-4">Sanjanabhoir17@gmail.com</p>

                    {/* Important Notice */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-left">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800 leading-relaxed">
                          If you notice that the PayPal page displays the name Sanjana Bhoir instead of Kalyan
                          Foundation, there's no need to worry. As a small, developing NGO based in India, we are
                          currently not eligible to receive international donations directly, since this requires formal
                          FCRA registration and an annual income threshold that we have not yet reached. Until we meet
                          those criteria, this supported account is the legally compliant and fully transparent way for
                          us to accept contributions from our international well-wishers. Every donation received
                          through this secure channel is accounted for and directed entirely toward Kalyan Foundation's
                          initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Other Ways to Donate */}
            <Card className="border-2 mt-8">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-4 text-center">Other Ways to Donate</h3>
                <div className="space-y-4 text-center">
                  <p className="font-serif text-muted-foreground">
                    For bank transfers, sponsorships, or to discuss larger contributions, please contact us directly.
                  </p>
                  <Button asChild variant="outline">
                    <a href="#contact-form">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Volunteer Form */}
        <section id="contact-form" className="py-20 px-4 bg-background">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Volunteer with Us</h2>
              <p className="text-lg font-serif text-muted-foreground">
                Fill out the form below and we'll get in touch with you
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about yourself and how you'd like to help *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your skills, availability, and what motivates you to volunteer..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Partner with Us</h2>
            <p className="text-lg font-serif text-muted-foreground leading-relaxed mb-8">
              Are you a brand, institution, or organization interested in supporting our mission? We welcome
              partnerships that can help us expand our reach and impact.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
