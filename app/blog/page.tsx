import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { Card } from '@/components/ui/card'
import { getBlogPosts } from '@/lib/db'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | danishahmed111',
  description: 'Articles, insights, and updates from danishahmed111',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Thoughts, insights, and updates</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-2">
                          <User size={16} />
                          {post.author}
                        </span>
                        {post.category && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        )}
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt || post.content.substring(0, 150)}</p>

                      <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-4 transition-all">
                        Read More
                        <ArrowRight size={18} />
                      </div>
                    </Card>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Blog posts coming soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
