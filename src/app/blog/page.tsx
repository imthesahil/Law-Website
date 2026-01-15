"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-static"
export const revalidate = 0

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a5f3f] text-white">
        <div className="animate-pulse text-white/80">Loading blogs...</div>
      </div>
    )
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Corporate Governance for Startups",
      excerpt: "A comprehensive guide to establishing proper corporate governance structures that protect founders and investors while enabling growth.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Corporate Law",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 2,
      title: "Essential Legal Documents Every Startup Needs",
      excerpt: "From founder agreements to vendor contracts, learn which legal documents are critical for protecting your business from day one.",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Startup Law",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 3,
      title: "Navigating Employment Law: A Guide for Growing Companies",
      excerpt: "Key considerations for hiring, employee contracts, and compliance as your team expands beyond the founding members.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Employment Law",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  const navItems = ["Who we are?", "Services", "Clients", "UNSAID", "FAQ", "Contact us", "Blog"]

  return (
    <div className="min-h-screen overflow-hidden bg-[#1a5f3f]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a5f3f]/95 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center gap-3 cursor-pointer">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src="/images/live-legal-logo.png"
                    alt="Live Legal Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-xl font-semibold">Live</span>
                  <span className="text-white text-xl font-semibold">Legal</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                if (item === "Who we are?") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/who-we-are" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Who we are?
                      </Link>
                    </motion.div>
                  )
                } else if (item === "Services") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/services" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Services
                      </Link>
                    </motion.div>
                  )
                } else if (item === "Clients") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/clients" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Clients
                      </Link>
                    </motion.div>
                  )
                } else if (item === "UNSAID") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/unsaid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        UNSAID
                      </Link>
                    </motion.div>
                  )
                } else if (item === "FAQ") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/faq" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        FAQ
                      </Link>
                    </motion.div>
                  )
                } else if (item === "Contact us") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/contact-us" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Contact us
                      </Link>
                    </motion.div>
                  )
                } else {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/blog" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium border-b-2 border-[#d4af37] pb-1">
                        Blogs
                      </Link>
                    </motion.div>
                  )
                }
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden md:block"
            >
              <Button
                className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact-us">Book a consultation</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#1a5f3f] border-t border-white/10"
        >
          <div className="px-4 sm:px-6 py-4 space-y-4">
            <Link
              href="/who-we-are"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Who we are?
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/clients"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="/unsaid"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              UNSAID
            </Link>
            <Link
              href="/faq"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact-us"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <Link
              href="/blog"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Button className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium" asChild>
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Book a consultation</Link>
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1a5f3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">Blogs</h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Legal insights and practical guidance for growing businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-[#1a5f3f] to-[#0f4a32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[#d4af37]/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#d4af37]/20 to-[#1a5f3f]/40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d4af37] text-[#1a5f3f] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-white/60 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-white/70 text-lg">
              Stay tuned for insights on legal frameworks, compliance, and business guidance. Check back soon for our latest articles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#0f4a32]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
              Need Legal Support?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get practical, business-ready legal advice tailored to your needs.
            </p>
            <Button
              className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact-us">Book a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
