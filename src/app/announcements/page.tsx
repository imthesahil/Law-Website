"use client"

import { motion } from "framer-motion"
import { Bell, Calendar, Search, Tag, ArrowRight, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AnnouncementsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const announcements = [
    {
      id: 1,
      title: "New Competition Portal Launch",
      date: "2025-01-15",
      type: "Platform Update",
      content:
        "We're excited to announce the launch of our enhanced competition portal with new features including real-time team management, streamlined memorial submission process, and instant notifications for important updates. The new portal offers improved user experience with better navigation and comprehensive dashboard for teams, judges, and administrators.",
      priority: "high",
      author: "LegalAcademy Team",
      tags: ["Portal", "Update", "Features"],
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Judge Registration Open for Upcoming Competitions",
      date: "2025-01-12",
      type: "Registration",
      content:
        "We are now accepting applications from experienced advocates, retired judges, and legal professionals to serve as judges for our upcoming moot court competitions. This is an excellent opportunity to contribute to legal education and mentor the next generation of lawyers. Interested candidates should have minimum 5 years of legal practice experience.",
      priority: "medium",
      author: "Judicial Panel Committee",
      tags: ["Judges", "Registration", "Opportunity"],
      readTime: "2 min read",
    },
    {
      id: 3,
      title: "Merit-Based Scholarship Program Announced",
      date: "2025-01-10",
      type: "Scholarship",
      content:
        "LegalAcademy is proud to announce our new merit-based scholarship program aimed at supporting underprivileged students who demonstrate exceptional potential in legal studies. The scholarship covers full registration fees for all competitions and provides additional mentorship opportunities. Applications are open until February 28, 2025.",
      priority: "high",
      author: "Scholarship Committee",
      tags: ["Scholarship", "Financial Aid", "Students"],
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Workshop: Advanced Legal Research Techniques",
      date: "2025-01-08",
      type: "Workshop",
      content:
        "Join us for a comprehensive workshop on advanced legal research techniques conducted by leading legal researchers and librarians. The workshop will cover database navigation, citation methods, case law analysis, and effective research strategies for moot court preparation. Limited seats available - register now!",
      priority: "medium",
      author: "Education Department",
      tags: ["Workshop", "Research", "Skills"],
      readTime: "2 min read",
    },
    {
      id: 5,
      title: "Constitutional Moot Court Problem Released",
      date: "2025-01-05",
      type: "Competition Update",
      content:
        "The official problem statement for the National Constitutional Law Moot Court competition has been released. Teams can now download the problem statement, rules, and guidelines from the competition portal. Memorial submission deadline is March 10, 2025. We encourage all registered teams to start their research immediately.",
      priority: "high",
      author: "Competition Committee",
      tags: ["Constitutional Law", "Problem", "Deadline"],
      readTime: "3 min read",
    },
    {
      id: 6,
      title: "New Partnership with Supreme Court Bar Association",
      date: "2025-01-03",
      type: "Partnership",
      content:
        "LegalAcademy has entered into a strategic partnership with the Supreme Court Bar Association to enhance the quality of legal education and provide better opportunities for law students. This partnership will bring renowned advocates as mentors and judges for our competitions.",
      priority: "medium",
      author: "Partnership Team",
      tags: ["Partnership", "SCBA", "Collaboration"],
      readTime: "3 min read",
    },
    {
      id: 7,
      title: "System Maintenance Scheduled",
      date: "2025-01-01",
      type: "Technical",
      content:
        "Our platform will undergo scheduled maintenance on January 15, 2025, from 2:00 AM to 6:00 AM IST. During this time, some services may be temporarily unavailable. We apologize for any inconvenience and appreciate your patience as we work to improve our systems.",
      priority: "low",
      author: "Technical Team",
      tags: ["Maintenance", "System", "Downtime"],
      readTime: "1 min read",
    },
    {
      id: 8,
      title: "International Arbitration Moot Registration Extended",
      date: "2024-12-28",
      type: "Deadline Extension",
      content:
        "Due to popular demand, we have extended the registration deadline for the International Commercial Arbitration Moot competition to March 30, 2025. This gives teams additional time to prepare and register for this prestigious international competition.",
      priority: "medium",
      author: "Competition Committee",
      tags: ["Arbitration", "Extension", "Registration"],
      readTime: "2 min read",
    },
  ]

  const filters = [
    { key: "all", label: "All Announcements", count: announcements.length },
    {
      key: "Platform Update",
      label: "Platform Updates",
      count: announcements.filter((a) => a.type === "Platform Update").length,
    },
    {
      key: "Competition Update",
      label: "Competition Updates",
      count: announcements.filter((a) => a.type === "Competition Update").length,
    },
    { key: "Scholarship", label: "Scholarships", count: announcements.filter((a) => a.type === "Scholarship").length },
    { key: "Workshop", label: "Workshops", count: announcements.filter((a) => a.type === "Workshop").length },
  ]

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesFilter = activeFilter === "all" || announcement.type === activeFilter
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500 bg-red-50"
      case "medium":
        return "border-l-yellow-500 bg-yellow-50"
      case "low":
        return "border-l-green-500 bg-green-50"
      default:
        return "border-l-gray-500 bg-gray-50"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Platform Update":
        return "bg-blue-100 text-blue-800"
      case "Competition Update":
        return "bg-green-100 text-green-800"
      case "Scholarship":
        return "bg-purple-100 text-purple-800"
      case "Workshop":
        return "bg-orange-100 text-orange-800"
      case "Registration":
        return "bg-indigo-100 text-indigo-800"
      case "Partnership":
        return "bg-pink-100 text-pink-800"
      case "Technical":
        return "bg-gray-100 text-gray-800"
      case "Deadline Extension":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a5f3f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              Latest <span className="text-[#d4af37]">Announcements</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and important updates from LegalAcademy. Never miss
              important deadlines and opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-[#1a5f3f] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAnnouncements.length === 0 ? (
            <div className="text-center py-16">
              <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No announcements found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredAnnouncements.map((announcement, index) => (
                <motion.article
                  key={announcement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`bg-white border-l-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${getPriorityColor(announcement.priority)}`}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(announcement.type)}`}
                          >
                            {announcement.type}
                          </span>
                          {announcement.priority === "high" && (
                            <div className="flex items-center text-red-600">
                              <AlertTriangle className="w-4 h-4 mr-1" />
                              <span className="text-xs font-medium">High Priority</span>
                            </div>
                          )}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{announcement.title}</h2>
                        <div className="flex items-center text-sm text-gray-600 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(announcement.date).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {announcement.readTime}
                          </div>
                          <div>By {announcement.author}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {announcement.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-[#1a5f3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Never Miss an Update</h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter and get instant notifications about important announcements, deadlines, and
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              />
              <Button className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 px-6 py-3">
                <Bell className="mr-2 w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
