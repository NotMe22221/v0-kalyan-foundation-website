"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog-posts"

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
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Our Stories</h1>
              <p className="text-lg md:text-xl opacity-90">
                Updates, impact stories, and volunteer experiences from the Kalyan Foundation
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm md:text-base"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 md:py-20">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-primary">No Stories Yet</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Check back soon for updates and stories from our foundation.
                </p>
                <Button asChild size="lg">
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 md:mb-3 text-balance">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs md:text-sm text-muted-foreground">
                          <p className="font-medium">{post.author}</p>
                          <p>{post.date}</p>
                        </div>
                        <Button asChild variant="ghost" className="text-primary">
                          <Link href={`/blog/${post.slug}`}>Read More →</Link>
                        </Button>
                      </div>
                    </div>
                  </article>
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
