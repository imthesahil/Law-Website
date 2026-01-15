"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  MessageSquare,
  Instagram,
  Headphones,
  Users,
  BookOpen,
  ArrowRightCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function UnsaidPage() {
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

  const unsaidNavItems = [
    { name: "About us", href: "/unsaid/about-us" },
    { name: "Services", href: "/unsaid/services" },
    { name: "Blogs", href: "/unsaid/blogs" },
    { name: "The UNSAID", href: "/unsaid/the-unsaid" },
    { name: "Contact Us", href: "/unsaid/contact" },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[#fefae0]">
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
              {unsaidNavItems.map((item, index) => (
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

      {/* Hero Section */}
      <section className="pt-40 sm:pt-44 md:pt-48 pb-16 bg-[#fefae0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-[#d4a373]"
          >
            The Internal Monologue, Unmuted.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-[#6b7280] font-light leading-relaxed"
          >
            This is a space for the 3:00 AM thoughts, the "I don't belong" feelings, and everything you've been taught to edit out.
          </motion.p>
        </div>
      </section>

      {/* Section 1: The Story Behind the Silence */}
      <section className="py-16 bg-[#e9edc9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a373] mb-8"
          >
            The Story Behind the Silence
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg sm:text-xl leading-relaxed text-[#2d3748]"
          >
            <p>
              We spent years mastering the "Edit."
            </p>
            <p>
              We knew how to say "I'm fine" with just the right amount of conviction. We knew how to show up to the meeting, the dinner, and the zoom call while our internal monologue was screaming. We realized that while the world was getting better at talking about diagnoses, it was getting worse at talking about the actual experience of living with them.
            </p>
            <p className="text-[#d4a373] font-semibold">
              UNSAID was born out of a simple realization: The heaviest things we carry are the things we never say out loud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-16 bg-[#faedcd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a373] mb-8"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed text-[#2d3748]"
          >
            We aren't a clinic. We aren't doctors. We are two people who felt the gap between the "polished" mental health advice online and the raw, messy reality of our thoughts. We started this initiative to move the conversation away from the clinical "labels" and back to the human truth.
          </motion.p>
        </div>
      </section>

      {/* Section 3: Why We Are Here */}
      <section className="py-16 bg-[#fefae0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a373] mb-8"
          >
            Why We Are Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl sm:text-2xl font-semibold text-[#2d3748] mb-8"
          >
            Most mental health awareness stops at the surface. We want to go deeper.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            <li className="flex items-start gap-3 text-lg sm:text-xl leading-relaxed text-[#2d3748]">
              <ArrowRightCircle className="w-6 h-6 text-[#d4a373] flex-shrink-0 mt-1" />
              <span>We believe that naming the feeling is the first step to surviving it.</span>
            </li>
            <li className="flex items-start gap-3 text-lg sm:text-xl leading-relaxed text-[#2d3748]">
              <ArrowRightCircle className="w-6 h-6 text-[#d4a373] flex-shrink-0 mt-1" />
              <span>We believe that knowing your rights (like the Mental Healthcare Act 2017) is a form of self-defense.</span>
            </li>
            <li className="flex items-start gap-3 text-lg sm:text-xl leading-relaxed text-[#2d3748]">
              <ArrowRightCircle className="w-6 h-6 text-[#d4a373] flex-shrink-0 mt-1" />
              <span>We believe that community happens when one person is brave enough to stop editing themselves, giving everyone else permission to do the same.</span>
            </li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8"
          >
            This platform—our podcast, our page, and this space—is for the parts of your story that usually get deleted. We aren't here to "fix" you, because we don't think you're broken. We're just here to make sure you don't have to carry the silence alone.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-8"
          >
            Are you ready to stop editing?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-[#d4a373] text-white hover:bg-[#b8915f] border-2 border-[#ccd5ae] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://www.instagram.com/livelegal_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Join the Conversation on Instagram
              </a>
            </Button>
            <Button
              asChild
              className="bg-transparent border-2 border-[#d4a373] text-[#d4a373] hover:bg-[#d4a373] hover:text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="#"
                className="flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Listen to the Podcast
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Vision & Mission */}
      <section className="py-16 bg-[#e9edc9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">The Vision</h3>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748]">
                To build a world where the weight of silence is replaced by the power of being seen.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#faedcd] border border-[#ccd5ae] rounded-2xl p-8 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#d4a373] mb-4">The Mission</h3>
              <p className="text-lg sm:text-xl leading-relaxed text-[#2d3748]">
                Our mission is to publish the thoughts you usually backspace. We bridge the gap between clinical mental health and the messy reality of living it. Through raw storytelling and legal empowerment, we turn the things you hide into the things that connect us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Services */}
      <section className="py-16 bg-[#faedcd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a373] mb-12 text-center"
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Counselling Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#fefae0] border-2 border-[#ccd5ae] rounded-2xl p-6 lg:p-8 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#d4a373]/20 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-[#d4a373]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d4a373] mb-4">Counselling Sessions</h3>
              <p className="text-[#2d3748] leading-relaxed mb-6 flex-grow">
                Dedicated time to focus on your mental health with a qualified professional. We provide a safe environment to explore your challenges, find balance, and reclaim your peace of mind.
              </p>
              <Button
                asChild
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold w-full rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/unsaid/services#counselling">Book a Session</Link>
              </Button>
            </motion.div>

            {/* Card 2: Community Outreach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#fefae0] border-2 border-[#ccd5ae] rounded-2xl p-6 lg:p-8 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#d4a373]/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#d4a373]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d4a373] mb-4">Community Outreach</h3>
              <p className="text-[#2d3748] leading-relaxed mb-6 flex-grow">
                We take the conversation beyond our platform and into the heart of the community. Whether it's a classroom or a corporate office, we host workshops designed to dismantle stigma and empower individuals with practical mental health awareness and rights education.
              </p>
              <Button
                asChild
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold w-full rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/unsaid/services#outreach">Inquire About Workshops</Link>
              </Button>
            </motion.div>

            {/* Card 3: The UNSAID */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#fefae0] border-2 border-[#ccd5ae] rounded-2xl p-6 lg:p-8 hover:border-[#d4a373] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#d4a373]/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#d4a373]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d4a373] mb-4">The UNSAID</h3>
              <p className="text-[#2d3748] leading-relaxed mb-6 flex-grow">
                Interactive workshops designed to bridge the gap between internal struggle and external advocacy. We provide the vocabulary to name your noise and the legal literacy to protect your peace.
              </p>
              <Button
                asChild
                className="bg-[#d4a373] text-white hover:bg-[#b8915f] font-semibold w-full rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="/unsaid/services#unsaid">Explore The UNSAID</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: The UNSAID */}
      <section className="py-16 bg-[#e9edc9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a373] mb-8 text-center"
          >
            The UNSAID
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg sm:text-xl leading-relaxed text-[#2d3748] mb-8"
          >
            <p>
              Navigating mental health doesn't have to feel like wandering through a fog. The UNSAID is our dedicated space for the essentials—breaking down complex clinical terms into human language you can actually use.
            </p>
            <p>
              Here, we combine the fundamentals of emotional well-being with a clear, no-nonsense guide to the Mental Healthcare Act 2017. We believe that when you understand your mind and your legal rights, you move from feeling overwhelmed to feeling empowered.
            </p>
            <p>
              Whether you are looking for a place to start or a way to protect your peace, this is your toolkit for the journey ahead.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <Button
              asChild
              className="bg-[#d4a373] text-white hover:bg-[#b8915f] border-2 border-[#ccd5ae] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/unsaid/the-unsaid" className="flex items-center justify-center gap-2">
                Explore The UNSAID
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Bring UNSAID to Your Campus */}
      <section className="py-16 bg-[#d4a373]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
          >
            Bring UNSAID to Your Campus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed text-white/95 mb-8"
          >
            We believe the strongest communities are built on awareness and advocacy. If you are a student body, a faculty member or a corporate employee looking to foster a safer environment, we invite you to collaborate with us.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl leading-relaxed text-white/95 mb-8"
          >
            Our workshops are designed to equip students with the vocabulary for mental health and the legal literacy they need for the future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              className="bg-white text-[#d4a373] hover:bg-white/90 border-2 border-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/unsaid/contact" className="flex items-center justify-center gap-2">
                Inquire About a Workshop
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ccd5ae] border-t border-[#ccd5ae] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2d3748] text-sm">
            © 2025 UNSAID by Live Legal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
