"use client"

import { motion } from "framer-motion"
import { Menu, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsPage() {
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
                <Link href="/unsaid/about-us" className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1 text-sm">
                  About us
                </Link>
                <Link href="/unsaid/the-open-room" className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors text-sm font-medium">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a373] mb-12 pt-16 md:pt-20"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-lg sm:text-xl leading-relaxed text-[#2d3748]"
          >
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">Who We Are</h2>
              <p>
                We aren't a clinic. We aren't doctors. We are two people who felt the gap between the "polished" mental health advice online and the raw, messy reality of our thoughts. We started this initiative to move the conversation away from the clinical "labels" and back to the human truth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">Why We Are Here</h2>
              <p className="mb-4">
                Most mental health awareness stops at the surface. We want to go deeper.
              </p>
              <ul className="space-y-3 list-disc list-inside">
                <li>We believe that naming the feeling is the first step to surviving it.</li>
                <li>We believe that knowing your rights (like the Mental Healthcare Act 2017) is a form of self-defense.</li>
                <li>We believe that community happens when one person is brave enough to stop editing themselves, giving everyone else permission to do the same.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">Our Story</h2>
              <p>
                We spent years mastering the "Edit." We knew how to say "I'm fine" with just the right amount of conviction. We knew how to show up to the meeting, the dinner, and the zoom call while our internal monologue was screaming. We realized that while the world was getting better at talking about diagnoses, it was getting worse at talking about the actual experience of living with them.
              </p>
              <p className="mt-4 text-[#d4a373] font-semibold">
                UNSAID was born out of a simple realization: The heaviest things we carry are the things we never say out loud.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

