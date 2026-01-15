"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-static"
export const revalidate = 0

export default function BlogsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fefae0]">
        <div className="animate-pulse text-[#2d3748]/70">Loading blogs...</div>
      </div>
    )
  }

  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Mental Health Rights: A Beginner's Guide",
      excerpt: "An introduction to the Mental Healthcare Act 2017 and what it means for you and your loved ones.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Mental Health 101",
    },
    {
      id: 2,
      title: "Breaking the Silence: Stories from the Community",
      excerpt: "Real stories from individuals who found their voice and reclaimed their peace of mind.",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Community",
    },
    {
      id: 3,
      title: "Navigating Mental Health in the Workplace",
      excerpt: "Practical advice for maintaining mental wellness while building your career.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Wellness",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fefae0]">
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ccd5ae]/95 backdrop-blur-sm border-b border-[#ccd5ae]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/unsaid" className="flex items-center gap-3 cursor-pointer">
              {/* Logo Icon */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/images/unsaid-logo.png"
                  alt="Unsaid by Live Legal Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#2d3748] text-2xl sm:text-3xl font-bold">UNSAID</span>
                <span className="text-[#2d3748] text-sm sm:text-base font-medium">by Live Legal</span>
              </div>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6 text-[#2d3748]" /> : <Menu className="w-6 h-6 text-[#2d3748]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* UNSAID Sub-Navigation */}
      <nav className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#ccd5ae]/95 backdrop-blur-sm border-b border-[#ccd5ae]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-4">
              <Link href="/unsaid" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/unsaid/about-us" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  About us
                </Link>
                <Link href="/unsaid/services" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  Services
                </Link>
                <Link href="/unsaid/blogs" className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1 text-sm">
                  Blogs
                </Link>
                <Link href="/unsaid/the-unsaid" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  The UNSAID
                </Link>
                <Link href="/unsaid/contact" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 sm:pt-36 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a373] mb-8 text-center pt-16 md:pt-20"
          >
            Blogs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-12 text-center max-w-3xl mx-auto"
          >
            Stories, insights, and resources for navigating mental health and understanding your rights.
          </motion.p>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#faedcd] border-2 border-[#ccd5ae] rounded-2xl p-6 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <span className="bg-[#d4a373] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#d4a373] mb-3">{post.title}</h2>
                <p className="text-[#2d3748] text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[#2d3748]/60 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href={`/unsaid/blogs/${post.id}`} className="flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center bg-[#e9edc9] border border-[#ccd5ae] rounded-2xl p-8"
          >
            <p className="text-[#2d3748]/70 text-lg">
              New perspectives on mental health, legal rights, and emotional wellness coming soon. Your journey toward understanding starts here.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
