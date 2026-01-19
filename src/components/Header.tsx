"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Who we are?", "Services", "Clients", "UNSAID", "FAQ", "Contact us", "Blog"].map((item, index) => {
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
                    <Link href="/blog" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
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
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
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
            className="block text-white hover:text-[#d4af37] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Button
            className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium mt-4"
            asChild
          >
            <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Book a consultation</Link>
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

