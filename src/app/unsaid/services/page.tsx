"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowLeft, Headphones, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                <Link href="/unsaid/services" className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1 text-sm">
                  Services
                </Link>
                <Link href="/unsaid/blogs" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a373] mb-12 text-center pt-16 md:pt-20"
          >
            Services
          </motion.h1>

          <div className="space-y-16">
            {/* Counselling Sessions */}
            <motion.section
              id="counselling"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-[#d4a373]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">Counselling Sessions</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                Dedicated time to focus on your mental health with a qualified professional. We provide a safe environment to explore your challenges, find balance, and reclaim your peace of mind.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Professional counselling services</p>
                <p className="text-[#2d3748]/60 text-sm">Book a one-on-one session with our qualified mental health professionals to discuss your concerns in a confidential, supportive environment.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/unsaid/contact">Book a Session</Link>
              </Button>
            </motion.section>

            {/* Community Outreach */}
            <motion.section
              id="outreach"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#d4a373]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">Community Outreach</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                We take the conversation beyond our platform and into the heart of the community. Whether it's a classroom or a corporate office, we host workshops designed to dismantle stigma and empower individuals with practical mental health awareness and rights education.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Workshops and training programs</p>
                <p className="text-[#2d3748]/60 text-sm">We offer customized workshops for educational institutions, corporate offices, and community organizations focused on mental health awareness and legal rights education.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/unsaid/contact">Inquire About Workshops</Link>
              </Button>
            </motion.section>

            {/* The UNSAID */}
            <motion.section
              id="unsaid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-[#d4a373]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">The UNSAID</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                Interactive workshops designed to bridge the gap between internal struggle and external advocacy. We provide the vocabulary to name your noise and the legal literacy to protect your peace.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Interactive workshops and sessions</p>
                <p className="text-[#2d3748]/60 text-sm">Join our structured programs that combine mental health awareness with legal rights education, helping you navigate both internal and external challenges.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/unsaid/contact">Explore The UNSAID</Link>
              </Button>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}
