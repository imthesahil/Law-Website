"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TheSundayScriptPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a373] mb-8 text-center pt-16 md:pt-20"
          >
            The Sunday Script
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8 text-center"
          >
            A late-night letter for the quietest hours of the week. Every Sunday, we deliver one anonymous truth, one legal right, and a few words for the noise you're carrying into Monday.
          </motion.p>

          {/* Subscription Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#e9edc9] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12 mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-6 text-center">
              Subscribe to The Sunday Script
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-6 text-center">
              Contact us to subscribe and start receiving The Sunday Script every Sunday.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
              {/* WhatsApp Card */}
              <motion.a
                href="https://wa.me/917521855584?text=I'd like to subscribe to The Sunday Script"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#fefae0] border-2 border-[#ccd5ae] rounded-2xl p-8 lg:p-12 shadow-lg hover:border-[#d4a373] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 lg:w-12 lg:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#2d3748] mb-2 group-hover:text-[#d4a373] transition-colors duration-300">
                  Subscribe via WhatsApp
                </h3>
                <p className="text-[#2d3748]/70 text-sm">
                  Click to start a conversation
                </p>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href="mailto:tejaswini@livelegal.co.in?subject=Sunday Script Subscription&body=I'd like to subscribe to The Sunday Script newsletter."
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#fefae0] border-2 border-[#ccd5ae] rounded-2xl p-8 lg:p-12 shadow-lg hover:border-[#d4a373] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-full bg-[#d4a373] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2d3748] mb-2 group-hover:text-[#d4a373] transition-colors duration-300">
                  Subscribe via Email
                </h3>
                <p className="text-[#2d3748]/70 text-sm">
                  tejaswini@livelegal.co.in
                </p>
              </motion.a>
            </div>
          </motion.div>

          {/* Archive Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 lg:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-6 text-center">
              Archive
            </h2>
            <p className="text-[#2d3748]/70 text-center">
              Past Sunday Scripts will be available here soon.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

