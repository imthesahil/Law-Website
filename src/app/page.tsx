"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Scale,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Menu,
  X,
  Trophy,
  Star,
  Building,
  Shield,
  Briefcase,
  Clock,
  Target,
  ChevronDown,
  ArrowRight,
  Linkedin,
  Instagram,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  Upload,
  Bell,
  ExternalLink,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function LegalEducationWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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

  const faqData = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer comprehensive legal education courses including Constitutional Law, Corporate Law, Criminal Law, Moot Court Training, Legal Research & Writing, and specialized certification programs designed for aspiring lawyers and legal professionals.",
    },
    {
      question: "How do I know if I need legal education training?",
      answer:
        "If you're a law student, recent graduate, or legal professional looking to enhance your skills, our courses are perfect for you. We cater to all levels from beginners to advanced practitioners seeking specialized knowledge.",
    },
    {
      question: "What can I expect during the course enrollment?",
      answer:
        "Upon enrollment, you'll receive access to our comprehensive learning platform, course materials, expert instructor guidance, interactive sessions, and practical assignments. You'll also join our community of legal learners.",
    },
    {
      question: "Do you provide moot court training?",
      answer:
        "Yes! Our moot court programs are designed to develop your advocacy skills, legal argumentation, and courtroom presence. We offer both beginner and advanced moot court training with real case simulations.",
    },
    {
      question: "How are your course fees structured?",
      answer:
        "We offer flexible pricing options including individual course purchases, bundle packages, and subscription plans. Financial aid and payment plans are available for qualifying students. Contact us for detailed pricing information.",
    },
  ]

  const instructors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Constitutional Law Instructor",
      image: "/placeholder.svg?height=400&width=400",
      gradient: "from-[#1a5f3f] to-[#2d7a5f]",
    },
    {
      name: "Prof. Michael Chen",
      role: "Corporate Law Specialist",
      image: "/placeholder.svg?height=400&width=400",
      gradient: "from-[#2d7a5f] to-[#1a5f3f]",
    },
    {
      name: "Judge Rebecca Torres",
      role: "Moot Court Director",
      image: "/placeholder.svg?height=400&width=400",
      gradient: "from-[#1a5f3f] to-[#0f4a32]",
    },
    {
      name: "Dr. James Wilson",
      role: "Legal Research Coordinator",
      image: "/placeholder.svg?height=400&width=400",
      gradient: "from-[#0f4a32] to-[#1a5f3f]",
    },
  ]

  const upcomingCompetitions = [
    {
      title: "National Constitutional Law Moot Court",
      date: "March 15-17, 2025",
      location: "Supreme Court of India, New Delhi",
      prize: "₹2,00,000",
      registrationDeadline: "February 28, 2025",
      teams: 64,
      status: "Registration Open",
      description: "Premier constitutional law competition focusing on fundamental rights and judicial review.",
    },
    {
      title: "International Commercial Arbitration Moot",
      date: "April 22-24, 2025",
      location: "Mumbai International Arbitration Centre",
      prize: "₹1,50,000",
      registrationDeadline: "March 30, 2025",
      teams: 48,
      status: "Registration Open",
      description: "International arbitration competition with real-world commercial disputes.",
    },
    {
      title: "Environmental Law Advocacy Challenge",
      date: "May 10-12, 2025",
      location: "National Green Tribunal, Delhi",
      prize: "₹1,00,000",
      registrationDeadline: "April 15, 2025",
      teams: 32,
      status: "Coming Soon",
      description: "Focus on environmental protection and sustainable development legal frameworks.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Law Student, NLSIU Bangalore",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Live Legal's moot court training transformed my advocacy skills. I won the National Constitutional Moot after their intensive program. The mentorship and practical approach are unmatched.",
      rating: 5,
      competition: "National Constitutional Moot Winner 2024",
    },
    {
      name: "Arjun Patel",
      role: "Advocate, Gujarat High Court",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The corporate law courses here are exceptional. Real case studies, expert faculty, and practical insights helped me excel in my practice. Highly recommend for serious legal professionals.",
      rating: 5,
      competition: "Corporate Law Specialist",
    },
    {
      name: "Kavya Reddy",
      role: "Final Year Student, NALSAR",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "From memorial writing to oral advocacy, Live Legal covers everything. Their competition portal made registration and submission seamless. Won 3 moots this year!",
      rating: 5,
      competition: "Multiple Moot Winner 2024",
    },
  ]

  const announcements = [
    {
      title: "New Competition Portal Launch",
      date: "January 15, 2025",
      type: "Platform Update",
      content: "Enhanced team management, memorial submission, and real-time updates now available.",
      priority: "high",
    },
    {
      title: "Judge Registration Open",
      date: "January 12, 2025",
      type: "Registration",
      content: "Experienced advocates and judges can now register for upcoming moot court competitions.",
      priority: "medium",
    },
    {
      title: "Scholarship Program Announced",
      date: "January 10, 2025",
      type: "Scholarship",
      content: "Merit-based scholarships available for underprivileged students. Applications open till February 28.",
      priority: "high",
    },
    {
      title: "Workshop: Advanced Legal Research",
      date: "January 8, 2025",
      type: "Workshop",
      content: "Free workshop on advanced legal research techniques. Register now for limited seats.",
      priority: "medium",
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
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

      {/* Hero Section - Dark Green Background */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center pt-20 bg-[#1a5f3f] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content (60%) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30"
              >
                <Star className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm text-[#d4af37] font-medium">
                  Clear. Simple. Legally Sound.
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight"
              >
                Legal support, without the legal stress.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl"
              >
                Practical, business-ready legal support for founders, growing teams, and institutions. Clear advice and tailored solutions that help you operate with confidence.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact-us">
                    <Briefcase className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Book a consultation
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                  asChild
                >
                  <Link href="/services">
                    <FileText className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Explore our services
                  </Link>
                </Button>
              </motion.div>

              {/* Value Proposition */}
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-white/20"
              >
                <h3 className="text-lg font-medium text-[#d4af37] mb-3">Why Choose Live Legal?</h3>
                <p className="text-sm text-white/90 mb-4">Legal solutions that move as fast as your work does.</p>
              </motion.div>
            </motion.div>

            {/* Right Column - Lady Justice Statue */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="lg:col-span-2 relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/lady-justice.png"
                  alt="Lady Justice statue representing legal education excellence"
                  width={500}
                  height={700}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                  priority
                />

                {/* Enhanced glow effect with educational theme */}
                <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/30 via-[#d4af37]/10 to-transparent blur-3xl -z-10 scale-150"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Live Legal Section - White Background */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 lg:py-20 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-800">
              Why Choose Live Legal?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Legal solutions that move as fast as your work does.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Strategic Legal Partnership",
                subtitle: "We work with your vision, not just your documents.",
                description: "→ Every solution is tailored to your goals, helping you build strong, compliant foundations that last.",
              },
              {
                title: "Clear & Practical Guidance",
                subtitle: "We simplify the law so you can make confident decisions.",
                description: "→ No jargon, no confusion just advice you can actually use.",
              },
              {
                title: "Affordable & Accessible Legal Support",
                subtitle: "Quality legal help shouldn't be out of reach.",
                description: "→ Transparent pricing and flexible support designed for creators and growing businesses.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-[#1a5f3f] font-medium mb-4">{feature.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>




      {/* Footer Section - Dark Green Background */}
      <footer className="bg-[#1a5f3f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Left Column - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                {/* Logo Icon */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <Image
                    src="/images/live-legal-logo.png"
                    alt="Live Legal Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Logo Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-xl font-semibold">Live</span>
                  <span className="text-white text-xl font-semibold">Legal</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed max-w-md">
                Practical, business-ready legal support for founders, growing teams, and institutions. Clear advice and tailored solutions that help you operate with confidence.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a
                  href="https://www.linkedin.com/company/live-legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a5f3f] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/livelegal_"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a5f3f] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Services</h4>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                  >
                    Services
                  </Link>
                  <Link
                    href="/services#extended"
                    className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                  >
                    Our Extended Services
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Support</h4>
                <div className="space-y-3">
                  <Link
                    href="/unsaid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                  >
                    UNSAID
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/20 text-center"
          >
            <p className="text-white/60">© 2025 Live Legal. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
