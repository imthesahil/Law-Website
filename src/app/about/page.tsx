"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Clock, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
            <GraduationCap className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">About Live Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">Leading the way in legal education</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Live Legal bridges the gap between theory and practice, empowering the next generation of legal professionals with hands-on training, expert mentorship, and real-world experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[{
            icon: Target,
            label: "Success Rate",
            value: "95%"
          }, {
            icon: Clock,
            label: "Years Experience",
            value: "10+ years"
          }, {
            icon: Users,
            label: "Students Trained",
            value: "10,000+"
          }].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#1a5f3f]" />
              </div>
              <div className="text-4xl lg:text-5xl font-light text-gray-800">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center text-gray-700 text-lg"
        >
          <p>
            Our mission is to deliver accessible, high-quality legal education and training, preparing students and professionals for success in the legal field. We believe in experiential learning, innovation, and a commitment to justice.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 