"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  FileText,
  Briefcase,
  Users,
  Handshake,
  ClipboardCheck,
  Shield,
  ArrowRight,
  UserCheck,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
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

  const services = [
    {
      icon: FileText,
      title: "Corporate Drafting",
      description: "We establish strong legal foundations from the start. Our corporate drafting delivers precise, compliant documentation tailored to your business operations.",
    },
    {
      icon: Handshake,
      title: "Business Agreements",
      description: "Whether it's clients or partners, we create agreements that protect your interests and minimise future conflicts. Each document reflects your commercial terms so expectations are clear from day one.",
    },
    {
      icon: Users,
      title: "HR & Workplace Policies",
      description: "We design HR policies that are easy to follow, legally compliant, and aligned with your workplace needs, supporting efficient operations and a healthy work culture.",
    },
    {
      icon: Briefcase,
      title: "Vendor Agreements",
      description: "We draft vendor agreements that clearly outline scope, timelines, payments, and responsibilities, helping you manage vendors with confidence while reducing misunderstandings and legal risks.",
    },
    {
      icon: ClipboardCheck,
      title: "Service-Level Agreements",
      description: "We draft SLAs that clearly define performance standards, deliverables, and accountability, ensuring transparency and supporting strong, professional client relationships.",
    },
    {
      icon: Shield,
      title: "Compliance-Aligned Documentation",
      description: "We ensure your key documents comply with current legal and regulatory requirements, helping you stay compliant, audit-ready, and focused on running your business without added legal stress.",
    },
  ]

  const extendedServices = [
    {
      icon: UserCheck,
      title: "Legal Hiring Consultancy",
      description: "We support law firms and other organisations in hiring the right legal talent by closely understanding their requirements and matching them with qualified professionals.",
    },
    {
      icon: BookOpen,
      title: "Moot Court Programs for Colleges",
      description: "We organise structured moot court sessions for colleges that give students hands-on experience in legal research, drafting, and courtroom advocacy.",
    },
  ]

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
              {["Who we are?", "Services", "Clients", "UNSAID", "FAQ", "Contact us", "Brochure"].map((item, index) => {
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
                      <Link href="/brochure" className="text-white hover:text-[#d4af37] transition-colors duration-300 font-medium">
                        Brochure
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
              href="/brochure"
              className="block text-white hover:text-[#d4af37] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Brochure
            </Link>
            <Button className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium" asChild>
              <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Book a consultation</Link>
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
              <Briefcase className="w-5 h-5 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">Our Services</h1>
          </motion.div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1a5f3f]/5 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#1a5f3f]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Extended Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
            id="extended"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light mb-4 text-[#1a5f3f]">Our Extended Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {extendedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#1a5f3f]/5 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact-us">
                Book a consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
