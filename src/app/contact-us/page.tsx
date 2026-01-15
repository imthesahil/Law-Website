"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  Mail,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ContactUsPage() {
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

  const navItems = ["Who we are?", "Services", "Clients", "UNSAID", "FAQ", "Contact us", "Blog"]

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
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <Link
                    href={item === "Blog" ? "/blog" : `/${item.toLowerCase().replace("?", "").replace(" ", "-")}`}
                    {...(item === "UNSAID" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium"
                  >
                    {item === "Blog" ? "Blogs" : item}
                  </Link>
                </motion.div>
              ))}
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
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Blog" ? "/blog" : `/${item.toLowerCase().replace("?", "").replace(" ", "-")}`}
                {...(item === "UNSAID" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item === "Blog" ? "Blogs" : item}
              </Link>
            ))}
            <Button className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium" asChild>
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Book a consultation</Link>
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-[#1a5f3f] via-[#1a5f3f] to-[#0d3d2a] py-20 pt-32 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
              <MessageSquare className="w-5 h-5 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 text-white">Contact Us</h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Get in touch with us. We're here to help.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Card */}
            <motion.a
              href="https://wa.me/917521855584"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
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
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                Chat with us on WhatsApp
              </h3>
              <p className="text-white/70 text-sm">
                Click to start a conversation
              </p>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:tejaswini@livelegal.co.in"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-full bg-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-[#1a5f3f]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
                Send us an email
              </h3>
              <p className="text-white/70 text-sm">
                tejaswini@livelegal.co.in
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
