"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Users, Package, Share2, Globe, Info, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const ways = [
    {
      icon: Heart,
      title: "Give Money",
      description:
        "Your donation goes directly to food, books, teacher salaries, and building the school. Even ₹100 makes a real difference.",
    },
    {
      icon: Users,
      title: "Give Time",
      description:
        "Teach, mentor, or help with our programs — online or in-person. Your skills and care matter to these kids.",
    },
    {
      icon: Package,
      title: "Send Supplies",
      description: "Books, pens, notebooks, sports equipment — we'll make sure it reaches the kids who need it most.",
    },
    {
      icon: Share2,
      title: "Share Our Story",
      description:
        "Tell a friend, post on social media, send our website to your network. Awareness is its own kind of fuel.",
    },
  ]

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
              <Heart className="h-4 w-4" />
              Be Part of the Change
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              You Have the Power to Change Lives
            </h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed">
              There's no size too small, no way too insignificant. Whether it's money, time, or just telling others
              about what we do — it all matters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Four Ways to Help</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Find the Way That Works for You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((way, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <way.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{way.title}</h3>
                  <p className="font-serif text-muted-foreground text-sm leading-relaxed">{way.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="fluid-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Donate Today</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Send Money Directly to the Kids</h2>
            <p className="text-lg font-serif text-muted-foreground">
              Every rupee goes to meals, books, and building their futures. Nothing gets wasted on overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* India UPI */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">In India?</h3>
                    <p className="text-sm text-muted-foreground">Use UPI (Fastest)</p>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="bg-white rounded-2xl p-4 shadow-inner">
                    <Image
                      src="/images/whatsapp-20image-202025-11-28-20at-2007.jpg"
                      alt="UPI QR Code"
                      width={220}
                      height={280}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted text-center">
                  <p className="text-xs text-muted-foreground mb-1">Scan or use:</p>
                  <p className="font-mono font-semibold text-primary text-sm">0790656A0117730.bqr@kotak</p>
                </div>
              </CardContent>
            </Card>

            {/* International PayPal */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Anywhere Else?</h3>
                    <p className="text-sm text-muted-foreground">Use PayPal</p>
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="bg-muted rounded-2xl p-4">
                    <Image
                      src="/images/whatsapp-20image-202025-11-28-20at-2005.jpg"
                      alt="PayPal QR Code"
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center font-mono text-sm font-semibold text-primary mb-4">
                  Sanjanabhoir17@gmail.com
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 leading-relaxed">
                      The account shows Sanjana Bhoir's name because we're working on formal registration. But trust
                      this: every single donation goes directly to the kids and the school. We keep it real and
                      transparent.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="fluid-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Volunteer</span>
              <h2 className="text-4xl font-bold mt-4 mb-4">Want to Join the Team?</h2>
              <p className="text-lg font-serif text-muted-foreground">
                Tell us about yourself and how you'd like to help. We'll take it from there.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="What should we call you?"
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
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can You Help? *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us your skills, when you're free, and what inspires you about this work..."
                      rows={5}
                      className="rounded-xl"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full h-14">
                    Submit & Let's Connect
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="fluid-container text-center">
          <h2 className="text-4xl font-bold mb-6">Have Another Idea?</h2>
          <p className="text-xl font-serif opacity-90 max-w-2xl mx-auto mb-10">
            Maybe you're a brand looking to partner with us, an organization interested in collaborating, or you just
            have ideas we haven't thought of yet. Let's talk.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8">
            <Link href="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
