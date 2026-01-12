"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function UnsaidPage() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div className="min-h-screen overflow-hidden">
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
              <Link href="/" className="flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#1a5f3f]" />
                </div>
                <span className="text-xl font-medium text-[#d4af37]">Live Legal</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Courses", "Competitions", "Events", "Portals", "About"].map((item, index) => {
                if (item === "Courses") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/courses" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Courses
                      </Link>
                    </motion.div>
                  )
                } else if (item === "Events") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/events" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Events
                      </Link>
                    </motion.div>
                  )
                } else if (item === "Portals") {
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    >
                      <Link href="/portals" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Portals
                      </Link>
                    </motion.div>
                  )
                } else {
                  return (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
                    >
                      {item}
                    </motion.a>
                  )
                }
              })}
              {/* Unsaid by Live Legal Link */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + 5 * 0.1, duration: 0.6 }}
              >
                <Link 
                  href="/unsaid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
                >
                  Unsaid by Live Legal
                </Link>
              </motion.div>
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
                <Link href="/register">Register Now</Link>
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
            {["Courses", "Competitions", "Events", "Portals", "About"].map((item) => (
              item === "Courses" ? (
                <Link
                  key={item}
                  href="/courses"
                  className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </Link>
              ) : item === "Events" ? (
                <Link
                  key={item}
                  href="/events"
                  className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              ) : item === "Portals" ? (
                <Link
                  key={item}
                  href="/portals"
                  className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portals
                </Link>
              ) : (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            ))}
            {/* Unsaid by Live Legal Link - Mobile */}
            <Link
              href="/unsaid"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Unsaid by Live Legal
            </Link>
            <Button className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium">
              Register Now
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Main Content - Dark Green Background */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex items-center justify-center pt-20 bg-[#1a5f3f] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 w-full text-center">
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Optional: Lady Justice Icon */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-24 bg-[#d4af37]/20 rounded-full flex items-center justify-center border-2 border-[#d4af37]/30">
                <GraduationCap className="w-12 h-12 text-[#d4af37]" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
            >
              Unsaid by Live Legal
            </motion.h1>

            {/* Coming Soon Text */}
            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl text-[#d4af37] font-light"
            >
              Coming Soon...
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
