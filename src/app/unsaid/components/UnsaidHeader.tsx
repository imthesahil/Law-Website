"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function UnsaidHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUnsaidMenuOpen, setIsUnsaidMenuOpen] = useState(false)

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

  const unsaidNavItems = [
    { name: "About us", href: "/unsaid/about-us" },
    { name: "Services", href: "/unsaid/services" },
    { name: "Blogs", href: "/unsaid/blogs" },
    { name: "The UNSAID", href: "/unsaid/the-unsaid" },
    { name: "Contact Us", href: "/unsaid/contact" },
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#ccd5ae]/95 backdrop-blur-sm border-b border-[#ccd5ae]"
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
                {/* Logo Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-[#2d3748] text-2xl sm:text-3xl font-bold">UNSAID</span>
                  <span className="text-[#2d3748] text-sm sm:text-base font-medium">by Live Legal</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#2d3748] hover:text-[#d4a373] transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link
                href="/unsaid"
                className="text-[#d4a373] font-medium border-b-2 border-[#d4a373] pb-1"
              >
                UNSAID
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6 text-[#2d3748]" /> : <Menu className="w-6 h-6 text-[#2d3748]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-[#ccd5ae] border-t border-[#ccd5ae]"
        >
          <div className="px-4 sm:px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block text-[#2d3748] hover:text-[#d4a373] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/unsaid"
              className="block text-[#d4a373] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              UNSAID
            </Link>
          </div>
        </motion.div>
      </motion.nav>

      {/* UNSAID Sub-Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-[#ccd5ae]/95 backdrop-blur-sm border-b border-[#ccd5ae]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-center h-12">
            {/* Desktop Sub-Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {unsaidNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#2d3748]/80 hover:text-[#d4a373] transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Sub-Nav Button */}
            <button
              onClick={() => setIsUnsaidMenuOpen(!isUnsaidMenuOpen)}
              className="md:hidden text-[#2d3748]/80 hover:text-[#d4a373] text-sm font-medium"
            >
              {isUnsaidMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Sub-Nav Menu */}
          <motion.div
            initial={false}
            animate={{ height: isUnsaidMenuOpen ? "auto" : 0, opacity: isUnsaidMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {unsaidNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-[#2d3748]/80 hover:text-[#d4a373] transition-colors duration-300 text-sm"
                  onClick={() => setIsUnsaidMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}

