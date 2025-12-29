export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
}

// Empty array - add your blog posts here or use the admin panel
export const blogPosts: BlogPost[] = []

export function getBlogPosts() {
  return blogPosts
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}
