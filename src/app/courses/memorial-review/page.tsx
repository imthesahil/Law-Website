"use client"

import { motion } from "framer-motion"
import { FileText, Star, CheckCircle, BookOpen, Users } from "lucide-react"

export default function MemorialReviewPage() {
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
            <FileText className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">Memorial Review</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">Expert Memorial Review</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get your moot court memorials reviewed by experienced professionals for actionable feedback, higher scores, and improved advocacy.
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
              icon: <CheckCircle className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "Detailed Scoring Rubric",
              desc: "Receive a comprehensive score breakdown based on national moot standards.",
            },
            {
              icon: <BookOpen className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Legal Research Assessment",
              desc: "Feedback on research quality, citation style, and legal argumentation.",
            },
            {
              icon: <Users className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Panel of Experts",
              desc: "Memorials reviewed by experienced advocates, judges, and faculty.",
            },
            {
              icon: <Star className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "Actionable Suggestions",
              desc: "Get clear, practical tips to improve your memorial and advocacy skills.",
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
              { step: "1. Submit Memorial", desc: "Upload your memorial securely for review." },
              { step: "2. Expert Review", desc: "Our panel evaluates and scores your memorial." },
              { step: "3. Receive Feedback", desc: "Get a detailed report and actionable suggestions." },
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

        {/* Testimonial */}
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
            “The feedback on my memorial was detailed and practical. It helped me win the Best Memorial award!”
          </p>
          <div className="text-sm text-gray-500">— Kavya Reddy, Law Student</div>
        </motion.div>
      </div>
    </div>
  )
} 