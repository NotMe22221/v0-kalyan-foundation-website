"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getBlogPosts } from "@/lib/blog-posts"
import { BookOpen, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const allPosts = getBlogPosts()

  const categories = ["All", "Education", "Health", "Environment", "Community"]

  const filteredPosts =
    selectedCategory === "All" ? allPosts : allPosts.filter((post) => post.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 fluid-container py-40">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <BookOpen className="h-4 w-4" />
                Stories
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                Our <span className="text-primary">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif leading-relaxed">
                Updates, impact stories, and volunteer experiences from the Kalyan Foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-border">
          <div className="fluid-container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="fluid-container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4">No Stories Yet</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto font-serif">
                  Check back soon for updates and inspiring stories from our foundation.
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/get-involved" className="flex items-center gap-2">
                    Get Involved
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.slug} className="border-0 shadow-lg hover-lift overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground font-serif text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">
                          <p className="font-medium">{post.author}</p>
                          <p>{post.date}</p>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary text-sm font-medium flex items-center gap-1 group/link"
                        >
                          Read More
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
