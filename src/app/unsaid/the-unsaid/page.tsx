"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowLeft, BookOpen, Shield, Heart, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function TheUnsaidPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    {
      icon: Heart,
      title: "Understanding Mental Health",
      content:
        "Mental health is an integral part of our overall well-being. It affects how we think, feel, and act. Understanding the basics of mental health helps us recognize when we or someone we care about might need support.",
    },
    {
      icon: Shield,
      title: "Your Rights Under the Mental Healthcare Act 2017",
      content:
        "The Mental Healthcare Act 2017 is a landmark legislation that protects the rights of persons with mental illness. It ensures access to mental healthcare, protects against discrimination, and establishes mechanisms for advance directives and nominated representatives.",
    },
    {
      icon: FileText,
      title: "Key Provisions You Should Know",
      content:
        "The Act guarantees the right to access mental healthcare, the right to community living, protection from cruel and inhuman treatment, and the right to information about treatment. It also decriminalizes suicide attempts and ensures insurance coverage for mental illness.",
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
                <Link href="/unsaid/blogs" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  Blogs
                </Link>
                <Link href="/unsaid/the-unsaid" className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1 text-sm">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a373] mb-8 text-center pt-16 md:pt-20"
          >
            The UNSAID
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-12 text-center"
          >
            <p>
              Navigating mental health doesn't have to feel like wandering through a fog. The UNSAID is our dedicated space for the essentials—breaking down complex clinical terms into human language you can actually use.
            </p>
            <p>
              Here, we combine the fundamentals of emotional well-being with a clear, no-nonsense guide to the Mental Healthcare Act 2017. We believe that when you understand your mind and your legal rights, you move from feeling overwhelmed to feeling empowered.
            </p>
            <p>
              Whether you are looking for a place to start or a way to protect your peace, this is your toolkit for the journey ahead.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#d4a373]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373]">{section.title}</h2>
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748]">{section.content}</p>
                </motion.section>
              )
            })}
          </div>

          {/* Resources Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 bg-[#e9edc9] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12 text-center"
          >
            <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-[#d4a373]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">Additional Resources</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-6">
              More detailed resources and guides will be available here soon. This section will include downloadable guides, FAQs, and links to official resources.
            </p>
            <Button
              className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/unsaid/contact">Get in Touch for More Information</Link>
            </Button>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

