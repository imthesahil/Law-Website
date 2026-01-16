import { getBlogBySlug, getPublishedBlogs } from '@/lib/notion'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

export const revalidate = 300

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const databaseId = process.env.NOTION_LIVE_LEGAL_DB_ID!
  const blog = await getBlogBySlug(databaseId, params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <header className="bg-[#1B4332] py-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/blog" 
            className="text-[#d4a373] hover:text-[#b8915f] transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Blogs</span>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <span className="text-[#d4a373] font-medium bg-[#d4a373]/10 px-3 py-1 rounded-full">
            {blog.category}
          </span>
          <span>•</span>
          <span>{new Date(blog.date).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}</span>
          <span>•</span>
          <span>By {blog.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed border-l-4 border-[#d4a373] pl-6 italic">
            {blog.excerpt}
          </p>
        )}

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={blog.featuredImage} 
              alt={blog.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content - Markdown Rendered */}
        <div className="prose prose-lg max-w-none 
                      prose-headings:text-gray-900 prose-headings:font-bold
                      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                      prose-p:text-gray-700 prose-p:leading-relaxed
                      prose-a:text-[#d4a373] prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900 prose-strong:font-bold
                      prose-ul:list-disc prose-ol:list-decimal
                      prose-li:text-gray-700
                      prose-blockquote:border-l-4 prose-blockquote:border-[#d4a373] prose-blockquote:pl-4 prose-blockquote:italic
                      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-img:rounded-lg prose-img:shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content || ''}
          </ReactMarkdown>
        </div>

        {/* Back Button Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-block bg-[#d4a373] text-white px-8 py-3 rounded-lg hover:bg-[#b8915f] transition-colors font-medium"
          >
            ← Back to All Blogs
          </Link>
        </div>
      </article>
    </div>
  )
}

// Generate static paths for all published blog posts
export async function generateStaticParams() {
  try {
    const databaseId = process.env.NOTION_LIVE_LEGAL_DB_ID!
    const blogs = await getPublishedBlogs(databaseId)
    
    return blogs.map((blog) => ({
      slug: blog.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
