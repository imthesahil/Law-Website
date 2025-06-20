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
  GraduationCap,
  Trophy,
  Star,
  Play,
  Building,
  Shield,
  Briefcase,
  Clock,
  Target,
  ChevronDown,
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import Image from "next/image"

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

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a5f3f]/95 backdrop-blur-sm border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#1a5f3f]" />
              </div>
              <span className="text-xl font-medium text-[#d4af37]">LegalAcademy</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Courses", "Moot Courts", "About", "Success Stories"].map((item, index) => (
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
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden md:block"
            >
              <Button className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                Start Learning Today
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
          <div className="px-6 py-4 space-y-4">
            {["Courses", "Moot Courts", "About", "Success Stories"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block text-white hover:text-[#d4af37] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium">
              Start Learning Today
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section - Dark Green Background */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center pt-20 bg-[#1a5f3f] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
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
                <span className="text-sm text-[#d4af37] font-medium">Top-Rated Legal Education Platform</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                Master Legal Excellence with
                <br />
                <span className="text-[#d4af37] font-medium">Expert-Led Courses</span>
                <br />& Moot Court Training
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                Transform your legal career with comprehensive courses, practical moot court simulations, and expert
                guidance. Learn from industry professionals and build the skills that matter in today's legal landscape.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <BookOpen className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Courses
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Trophy, text: "Expert-Led Moot Courts" },
                  { icon: BookOpen, text: "Comprehensive Curriculum" },
                  { icon: Users, text: "Interactive Learning" },
                  { icon: Award, text: "Industry Recognition" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <div className="w-8 h-8 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                {[
                  { number: "5000+", label: "Students Enrolled" },
                  { number: "50+", label: "Expert Courses" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl lg:text-4xl font-light text-[#d4af37] mb-2 group-hover:text-[#d4af37]/80 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
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
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                  priority
                />

                {/* Enhanced glow effect with educational theme */}
                <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/30 via-[#d4af37]/10 to-transparent blur-3xl -z-10 scale-150"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Course Categories Section - White Background */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-800">Explore Our Perfect Course Areas</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our course areas—specialized expertise providing tailored legal education for your unique
              learning needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Corporate Law Courses",
                description:
                  "From business formation to mergers, we offer strategic guidance and comprehensive courses for corporate legal professionals. Master contract law, securities regulation, and corporate governance.",
                color: "text-[#1a5f3f]",
                bgColor: "bg-[#1a5f3f]/5",
              },
              {
                icon: Shield,
                title: "Constitutional Law Training",
                description:
                  "Constitutional law mastery—dedicated, results-driven legal education for achieving excellence in fundamental rights. Explore civil liberties, separation of powers, and judicial review.",
                color: "text-[#1a5f3f]",
                bgColor: "bg-[#1a5f3f]/5",
              },
              {
                icon: Briefcase,
                title: "Moot Court Excellence",
                description:
                  "Expert training in moot court advocacy and litigation skills, guiding you through competitive legal argumentation. Develop oral advocacy, brief writing, and courtroom presence.",
                color: "text-[#1a5f3f]",
                bgColor: "bg-[#1a5f3f]/5",
              },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${course.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <course.icon className={`w-8 h-8 ${course.color}`} />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                <Button
                  variant="outline"
                  className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white transition-all duration-300 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section - Light Green Background */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#c8e6c9] text-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">About us</div>
              <h2 className="text-4xl lg:text-5xl font-light leading-tight text-gray-800">
                Leading the way in delivering justice through tailored education.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The legal education journey of humanity is a testament to the evolution of societies, cultures, and
                governance systems. From ancient traditions to modern legal frameworks, we bridge theory with practical
                application to create tomorrow's legal leaders.
              </p>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {[
                { number: "95%", label: "Success Rate", icon: Target },
                { number: "10+ years", label: "Years Experience", icon: Clock },
                { number: "5000+", label: "Students Trained", icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-3"
                >
                  <div className="w-16 h-16 bg-white/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#1a5f3f]" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-light text-gray-800">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Meet Our Instructors Section - White Background */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-800">Meet Our Expert Instructors</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our expert instructors deliver top-tier legal education with proven success and years of practical
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className={`h-80 bg-gradient-to-br ${instructor.gradient} flex items-end p-6 relative`}>
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      width={400}
                      height={400}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="relative z-10 text-white">
                      <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                      <p className="text-white/90 text-sm">{instructor.role}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="absolute top-4 right-4 w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center"
                    >
                      <ArrowRight className="w-5 h-5 text-[#1a5f3f]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section - Light Gray Background */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50 text-gray-800"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-800">Quick Answers for Peace of Mind</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our legal education and training services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Trust Signals - Educational Partners */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-lg mb-12"
          >
            Trusted by Leading Law Schools & Legal Institutions
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: GraduationCap, name: "Law Schools" },
              { icon: Scale, name: "Bar Associations" },
              { icon: BookOpen, name: "Legal Libraries" },
              { icon: Trophy, name: "Moot Court Societies" },
              { icon: Users, name: "Student Bodies" },
              { icon: Award, name: "Legal Academies" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <partner.icon className="w-8 h-8 text-gray-400" />
                <span className="text-sm text-gray-500 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer Section - Dark Green Background */}
      <footer className="bg-[#1a5f3f] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#1a5f3f]" />
                </div>
                <span className="text-xl font-medium text-[#d4af37]">LegalAcademy</span>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed max-w-md">
                A legal education platform is an innovative learning environment designed to provide comprehensive legal
                training and moot court excellence. The primary service offered by our academy is transformative legal
                education.
              </p>

              {/* CTA Button */}
              <Button className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Start Learning Today
              </Button>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, name: "Facebook", href: "#" },
                  { icon: Twitter, name: "Twitter", href: "#" },
                  { icon: Youtube, name: "YouTube", href: "#" },
                  { icon: Linkedin, name: "LinkedIn", href: "#" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a5f3f] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Main Pages */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Main Pages</h4>
                <div className="space-y-3">
                  {["Home", "Courses", "About", "Blog"].map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Course Categories */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Course Categories</h4>
                <div className="space-y-3">
                  {["Constitutional Law", "Corporate Law", "Moot Courts", "Legal Research", "Case Studies"].map(
                    (link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    ),
                  )}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white mb-4">Services</h4>
                <div className="space-y-3">
                  {["Legal Training", "Moot Court Prep", "Career Guidance", "Certification", "Expert Mentoring"].map(
                    (link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-white/70 hover:text-[#d4af37] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    ),
                  )}
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
            <p className="text-white/60">Copyright & design by LegalAcademy 2025, All rights reserved</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
