"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  Users,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ClientsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation - Same as other pages */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a5f3f]/95 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center gap-3 cursor-pointer">
                {/* Logo Icon */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src="/images/live-legal-logo.png"
                    alt="Live Legal Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Logo Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-xl font-semibold">Live</span>
                  <span className="text-white text-xl font-semibold">Legal</span>
                </div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Link href="/who-we-are" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  Who we are?
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Link href="/services" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Link href="/clients" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  Clients
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href="/unsaid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  UNSAID
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link href="/faq" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  FAQ
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link href="/contact-us" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  Contact us
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link href="/blog" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                  Blogs
                </Link>
              </motion.div>
            </div>

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

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

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
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
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

      {/* Header Section */}
      <section className="bg-[#1a5f3f] py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Our Clients</h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We're proud to work with forward-thinking companies and organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Logo Marquee Section */}
      <section className="bg-[#0f2419] py-16 overflow-hidden">
        {/* Client logos array */}
        {(() => {
          const clientLogos = Array.from({ length: 8 }, (_, i) => i + 1)
          const duplicatedLogos = [...clientLogos, ...clientLogos]
          
          return (
            <>
              {/* Row 1 - Scrolls right to left (medium speed) */}
              <div className="logo-scroll-container flex overflow-hidden mb-8">
                <div className="logo-scroll-row-1 flex gap-16 items-center">
                  {duplicatedLogos.map((num, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-6 shadow-lg min-w-[200px] h-[100px]"
                    >
                      <Image
                        src={`/images/clients/client-${num}.png`}
                        alt={`Client ${num}`}
                        width={200}
                        height={80}
                        className="max-h-[60px] w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Scrolls left to right (reverse, faster speed) */}
              <div className="logo-scroll-container flex overflow-hidden">
                <div className="logo-scroll-row-2 flex gap-16 items-center">
                  {duplicatedLogos.map((num, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-6 shadow-lg min-w-[200px] h-[100px]"
                    >
                      <Image
                        src={`/images/clients/client-${num}.png`}
                        alt={`Client ${num}`}
                        width={200}
                        height={80}
                        className="max-h-[60px] w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )
        })()}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact-us">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
