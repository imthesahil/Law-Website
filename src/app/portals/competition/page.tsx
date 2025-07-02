"use client"

import { motion } from "framer-motion"
import { Trophy, Users, FileText, Calendar, Star, CheckCircle } from "lucide-react"

export default function CompetitionPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
            <Trophy className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">Competition Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">All Competitions in One Place</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Access, register, and manage all moot court, ADR, and debate competitions from a single portal. Stay updated on deadlines, results, and resources.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
        >
          {[
            {
              icon: <Calendar className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Unified Calendar",
              desc: "View all upcoming competitions, deadlines, and events in one place.",
            },
            {
              icon: <Users className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "Easy Registration",
              desc: "Register your team for any competition with a few clicks.",
            },
            {
              icon: <FileText className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Document Center",
              desc: "Download problems, rules, and submit memorials securely.",
            },
            {
              icon: <CheckCircle className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "Live Updates",
              desc: "Get real-time notifications on results, clarifications, and announcements.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-[#1a5f3f]/10"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mb-2 text-[#1a5f3f]">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-[#1a5f3f] mb-6 text-center">How It Works</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {[
              { step: "1. Browse Competitions", desc: "Explore all upcoming and ongoing competitions." },
              { step: "2. Register & Submit", desc: "Sign up, upload documents, and manage your team." },
              { step: "3. Track Progress", desc: "Get updates, view results, and download certificates." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="bg-[#1a5f3f]/5 rounded-xl p-6 text-center w-full max-w-xs"
              >
                <div className="text-lg font-semibold text-[#1a5f3f] mb-2">{item.step}</div>
                <div className="text-gray-600 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-[#d4af37]/20 text-center"
        >
          <div className="flex justify-center mb-4">
            <Star className="w-6 h-6 text-[#d4af37]" />
            <Star className="w-6 h-6 text-[#d4af37]" />
            <Star className="w-6 h-6 text-[#d4af37]" />
            <Star className="w-6 h-6 text-[#d4af37]" />
            <Star className="w-6 h-6 text-[#d4af37]" />
          </div>
          <p className="text-lg text-gray-700 mb-2">
            “The Competition Portal made it so easy to manage our team and stay updated. Highly recommended for all law students!”
          </p>
          <div className="text-sm text-gray-500">— Law Student Team Leader</div>
        </motion.div>
      </div>
    </div>
  )
} 