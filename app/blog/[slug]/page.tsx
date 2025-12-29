import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getBlogPost, getRelatedPosts } from "@/lib/blog-posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm md:text-base mb-4 md:mb-6 hover:underline opacity-90"
              >
                ← Back to Stories
              </Link>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm mb-4 md:mb-6 opacity-90">
                <span className="bg-primary-foreground/20 px-3 py-1 rounded-full">{post.category}</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
                {post.title}
              </h1>
              <p className="text-base md:text-lg opacity-90">By {post.author}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-0">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto -mt-8 md:-mt-12">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-sm md:prose-base lg:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="font-serif text-lg md:text-xl font-bold mb-2 text-balance">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Button asChild variant="ghost" size="sm" className="text-primary">
                        <Link href={`/blog/${relatedPost.slug}`}>Read More →</Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 md:mb-6">Want to Make a Difference?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Join us in empowering children through education and creating lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
