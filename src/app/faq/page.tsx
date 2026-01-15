"use client"

import { motion } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function FAQPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const faqSections = [
    {
      title: "FAQs for Startups & Businesses",
      faqs: [
        {
          question: "Do you work with early-stage startups?",
          answer: "Yes. We regularly work with early-stage and growing startups, helping them put the right legal structure in place from the beginning.",
        },
        {
          question: "What legal services are most relevant for startups?",
          answer: "Our startup-focused services include corporate drafting, founder and shareholder agreements, client and vendor contracts, HR policies, and compliance support.",
        },
        {
          question: "Can your services be customised based on our stage of growth?",
          answer: "Absolutely. Our legal support is tailored to your business size, industry, and current stage, whether you're just starting out or scaling.",
        },
        {
          question: "Do you offer ongoing legal support for businesses?",
          answer: "Yes. You can engage us for one-time assignments or opt for retainership depending on your needs.",
        },
      ],
    },
    {
      title: "FAQs for Legal Hiring Support",
      faqs: [
        {
          question: "What kind of legal roles do you help hire for?",
          answer: "We support hiring for in-house legal roles, law firm positions, and other legal support functions based on your requirements.",
        },
        {
          question: "Is LiveLegal a recruitment agency?",
          answer: "No. Our legal hiring support is advisory and role-focused. We understand your needs and help connect you with suitable legal professionals.",
        },
        {
          question: "How do you ensure the right fit for legal roles?",
          answer: "We take time to understand the role scope, experience level, and work environment before identifying suitable legal talent.",
        },
      ],
    },
    {
      title: "FAQs for Moot Court Services",
      faqs: [
        {
          question: "Who are your moot court programs designed for?",
          answer: "Our moot court sessions are designed for law colleges and institutions looking to give students practical exposure beyond theory.",
        },
        {
          question: "What do students gain from your moot court sessions?",
          answer: "Students gain hands-on experience in legal research, drafting, oral advocacy, and structured argument presentation.",
        },
        {
          question: "Can moot court sessions be customised for colleges?",
          answer: "Yes. We tailor sessions based on academic requirements, student levels, and institutional goals.",
        },
      ],
    },
    {
      title: "Pricing & Consultation FAQs",
      faqs: [
        {
          question: "Do you offer a free consultation?",
          answer: "Yes. We offer an initial consultation to understand your requirements and discuss how we can support you.",
        },
        {
          question: "How is your pricing structured?",
          answer: "Our pricing depends on the scope of work, complexity, and duration of engagement. We offer transparent pricing with no hidden charges.",
        },
        {
          question: "Do you provide flexible or retainer-based pricing?",
          answer: "Yes. For ongoing support, we offer flexible and retainer-based pricing options.",
        },
        {
          question: "Will I receive a quote before work begins?",
          answer: "Always. We clearly outline the scope, timelines, and fees before starting any engagement.",
        },
      ],
    },
  ]

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
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
              <HelpCircle className="w-5 h-5 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] font-medium">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">FAQ</h1>
          </motion.div>

          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-medium text-[#1a5f3f] mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 10 + faqIndex
                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: faqIndex * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-base sm:text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                          <motion.div animate={{ rotate: openFaq === globalIndex ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === globalIndex ? "auto" : 0,
                            opacity: openFaq === globalIndex ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
