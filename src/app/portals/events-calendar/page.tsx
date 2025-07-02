"use client"

import { motion } from "framer-motion"
import { Calendar, Bell, Star, CheckCircle, Clock } from "lucide-react"

export default function EventsCalendarPage() {
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
            <Calendar className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">Events Calendar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light mb-4 text-[#1a5f3f]">Upcoming Legal Events</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            View all upcoming competitions, workshops, and legal events in one place. Stay organized and never miss a deadline.
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
              icon: <Bell className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "Instant Notifications",
              desc: "Get notified about new events, deadlines, and schedule changes instantly.",
            },
            {
              icon: <CheckCircle className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Easy Event Tracking",
              desc: "Track all your registered events and important dates in one calendar.",
            },
            {
              icon: <Clock className="w-7 h-7 text-[#1a5f3f] mb-2" />,
              title: "Never Miss a Deadline",
              desc: "Automatic reminders for submissions, registrations, and event start times.",
            },
            {
              icon: <Calendar className="w-7 h-7 text-[#d4af37] mb-2" />,
              title: "All Events in One Place",
              desc: "Competitions, workshops, seminars, and more—organized for your convenience.",
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
              { step: "1. Explore Events", desc: "Browse all upcoming legal events and competitions." },
              { step: "2. Add to Calendar", desc: "Save important events and set reminders." },
              { step: "3. Stay Updated", desc: "Receive notifications and never miss an opportunity." },
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
            “The Events Calendar keeps me organized and ensures I never miss a competition or workshop!”
          </p>
          <div className="text-sm text-gray-500">— Law Student</div>
        </motion.div>
      </div>
    </div>
  )
} 