import { getPublishedBlogs } from '@/lib/notion'
import Link from 'next/link'

// Revalidate every 5 minutes (300 seconds) to check for new content
export const revalidate = 300

export default async function LiveLegalBlogPage() {
  const databaseId = process.env.NOTION_LIVE_LEGAL_DB_ID!
  const blogs = await getPublishedBlogs(databaseId)

  return (
    <div className="blog-page min-h-screen bg-[#1B4332]">
      {/* Header Section */}
      <section className="py-16 pt-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blogs</h1>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto px-4">
            Legal insights and practical guidance for growing businesses
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="container mx-auto px-4 pb-20 max-w-7xl">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                href={`/blog/${blog.slug}`} 
                key={blog.id}
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="relative h-48 bg-gradient-to-br from-green-800 to-green-900 flex-shrink-0">
                    {blog.featuredImage ? (
                      <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/20 text-4xl">📄</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-[#d4a373] font-medium">{blog.category}</span>
                      <span className="text-gray-500">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d4a373] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {blog.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center text-sm text-gray-500 mt-auto">
                      <span>By {blog.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
