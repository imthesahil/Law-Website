"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowLeft, Archive, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function TheOpenRoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fefae0]">
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ccd5ae]/95 backdrop-blur-sm border-b border-[#ccd5ae]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
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
                <span className="text-[#2d3748] text-base font-medium">Unsaid by</span>
                <span className="text-[#2d3748] text-xl font-semibold">Live Legal</span>
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
                <Link href="/unsaid/the-open-room" className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1 text-sm">
                  The Open Room
                </Link>
                <Link href="/unsaid/the-sunday-script" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
                  The Sunday Script
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
            The Open Room
          </motion.h1>

          <div className="space-y-16">
            {/* The Archive */}
            <motion.section
              id="archive"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#d4a373]/20 rounded-lg flex items-center justify-center">
                  <Archive className="w-8 h-8 text-[#d4a373]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">The Archive (Anonymous Submissions)</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                A digital safe-deposit box for the thoughts you usually backspace. Drop your truths here anonymously—no judgment, no tracing, just the relief of letting them go.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Coming Soon: Anonymous submission form</p>
                <p className="text-[#2d3748]/60 text-sm">We're building a secure, anonymous platform where you can share your thoughts without fear of judgment or exposure.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                disabled
              >
                Submit Anonymously (Coming Soon)
              </Button>
            </motion.section>

            {/* The Circle */}
            <motion.section
              id="circle"
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">The Circle (Peer Support)</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                Moderated spaces where the mask finally comes off. These aren't "fixing" sessions; they are quiet gatherings for those tired of performing wellness to find others who speak the same language.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Coming Soon: Peer support sessions</p>
                <p className="text-[#2d3748]/60 text-sm">Join moderated, safe spaces where you can connect with others who understand the weight of unspoken thoughts.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                disabled
              >
                Join The Circle (Coming Soon)
              </Button>
            </motion.section>

            {/* Unsaid Sessions */}
            <motion.section
              id="sessions"
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
                <h2 className="text-3xl sm:text-4xl font-bold text-[#d4a373]">Unsaid Sessions</h2>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8">
                Interactive workshops designed to bridge the gap between internal struggle and external advocacy. We provide the vocabulary to name your noise and the legal literacy to protect your peace.
              </p>
              <div className="bg-[#fefae0] rounded-lg p-6 mb-6 border border-[#ccd5ae]">
                <p className="text-[#2d3748]/70 text-sm mb-4">Coming Soon: Workshop schedule</p>
                <p className="text-[#2d3748]/60 text-sm">Interactive sessions combining mental health awareness with legal rights education, helping you navigate both internal and external challenges.</p>
              </div>
              <Button
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                disabled
              >
                Explore Sessions (Coming Soon)
              </Button>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}

