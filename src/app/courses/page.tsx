"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Building,
  Shield,
  Briefcase,
  BookOpen,
  FileText,
  Users,
  ArrowRight,
  GraduationCap,
  Star,
  Clock,
  Info,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const courses = [
  {
    id: "corporate-law",
    icon: Building,
    title: "Corporate Law Mastery",
    short: "From business formation to mergers, master contract law, securities regulation, and corporate governance.",
    details: [
      "Business formation, mergers & acquisitions, and compliance",
      "Contract drafting, negotiation, and enforcement",
      "Securities regulation and insider trading laws",
      "Corporate governance, board duties, and shareholder rights",
      "Case studies and real-world simulations",
      "Certification on completion"
    ],
    duration: "8 weeks",
    level: "Intermediate to Advanced",
    instructor: "Prof. Michael Chen",
    color: "text-[#1a5f3f]",
    bgColor: "bg-[#1a5f3f]/5",
  },
  {
    id: "constitutional-law",
    icon: Shield,
    title: "Constitutional Law Training",
    short: "Master fundamental rights, civil liberties, separation of powers, and judicial review.",
    details: [
      "Fundamental rights and civil liberties",
      "Judicial review and constitutional amendments",
      "Landmark Supreme Court cases",
      "Separation of powers and federalism",
      "Interactive moot court exercises",
      "Certification on completion"
    ],
    duration: "6 weeks",
    level: "Beginner to Advanced",
    instructor: "Dr. Sarah Mitchell",
    color: "text-[#1a5f3f]",
    bgColor: "bg-[#1a5f3f]/5",
  },
  {
    id: "moot-court",
    icon: Briefcase,
    title: "Moot Court Excellence",
    short: "Expert training in advocacy, brief writing, and courtroom presence for competitions.",
    details: [
      "Oral advocacy and argumentation",
      "Memorial/brief writing workshops",
      "Courtroom etiquette and presence",
      "Real case simulations and feedback",
      "Competition preparation guidance",
      "Certification on completion"
    ],
    duration: "4 weeks",
    level: "All Levels",
    instructor: "Judge Rebecca Torres",
    color: "text-[#1a5f3f]",
    bgColor: "bg-[#1a5f3f]/5",
  },
  {
    id: "legal-research",
    icon: BookOpen,
    title: "Legal Research & Writing",
    short: "Sharpen your research, citation, and legal writing skills for practice and academia.",
    details: [
      "Primary & secondary legal research",
      "Citation styles (Bluebook, OSCOLA, etc.)",
      "Drafting legal opinions and memos",
      "Academic and professional writing",
      "Plagiarism avoidance and ethics",
      "Certification on completion"
    ],
    duration: "5 weeks",
    level: "Beginner to Intermediate",
    instructor: "Dr. James Wilson",
    color: "text-[#1a5f3f]",
    bgColor: "bg-[#1a5f3f]/5",
  },
]

export default function CoursesPage() {
  const [openCourse, setOpenCourse] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e6f4ef] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#d4af37]/20 px-4 py-2 rounded-full border border-[#d4af37]/30 mb-4">
            <GraduationCap className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">Expert-Led Legal Courses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">Advance Your Legal Career</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive, practical, and industry-recognized legal courses designed for students and professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className={`w-14 h-14 ${course.bgColor} rounded-2xl flex items-center justify-center mb-5`}>
                <course.icon className={`w-7 h-7 ${course.color}`} />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#1a5f3f]">{course.title}</h2>
              <p className="text-gray-600 mb-6 min-h-[60px]">{course.short}</p>
              <Button
                variant="outline"
                className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white transition-all duration-300 group bg-transparent"
                onClick={() => setOpenCourse(course.id)}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Modal for course details */}
              <AnimatePresence>
                {openCourse === course.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 40, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative border border-[#1a5f3f]/10"
                    >
                      <button
                        className="absolute top-4 right-4 text-gray-400 hover:text-[#1a5f3f] transition-colors"
                        onClick={() => setOpenCourse(null)}
                        aria-label="Close"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                          <course.icon className={`w-6 h-6 ${course.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1a5f3f] mb-1">{course.title}</h3>
                          <div className="text-sm text-gray-500">Instructor: {course.instructor}</div>
                        </div>
                      </div>
                      <ul className="mb-6 space-y-2 text-gray-700">
                        {course.details.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-4 h-4 text-[#d4af37] mr-2 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {course.duration}</div>
                        <div className="flex items-center"><Info className="w-4 h-4 mr-1" /> {course.level}</div>
                      </div>
                      <Button
                        className="bg-[#1a5f3f] text-white hover:bg-[#2d7a5f] w-full mt-2"
                        onClick={() => setOpenCourse(null)}
                      >
                        Close
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 