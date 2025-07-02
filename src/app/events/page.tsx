"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Search,
  ExternalLink,
  BookOpen,
  Award,
  Target,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CalendarView from "@/components/CalendarView"

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)

  const events = [
    {
      id: 1,
      title: "National Constitutional Law Moot Court",
      date: "2025-03-15",
      endDate: "2025-03-17",
      time: "09:00 AM",
      location: "Supreme Court of India, New Delhi",
      type: "competition",
      status: "upcoming",
      participants: 128,
      prize: "₹2,00,000",
      description: "Premier constitutional law competition focusing on fundamental rights and judicial review.",
      registrationDeadline: "2025-02-28",
      category: "Constitutional Law",
    },
    {
      id: 2,
      title: "International Commercial Arbitration Moot",
      date: "2025-04-22",
      endDate: "2025-04-24",
      time: "10:00 AM",
      location: "Mumbai International Arbitration Centre",
      type: "competition",
      status: "upcoming",
      participants: 96,
      prize: "₹1,50,000",
      description: "International arbitration competition with real-world commercial disputes.",
      registrationDeadline: "2025-03-30",
      category: "Commercial Law",
    },
    {
      id: 3,
      title: "Legal Research Methodology Workshop",
      date: "2025-02-10",
      endDate: "2025-02-10",
      time: "02:00 PM",
      location: "Online Webinar",
      type: "workshop",
      status: "upcoming",
      participants: 200,
      description: "Advanced techniques for legal research and citation methods.",
      category: "Legal Research",
    },
    {
      id: 4,
      title: "Environmental Law Advocacy Challenge",
      date: "2025-05-10",
      endDate: "2025-05-12",
      time: "09:30 AM",
      location: "National Green Tribunal, Delhi",
      type: "competition",
      status: "upcoming",
      participants: 64,
      prize: "₹1,00,000",
      description: "Focus on environmental protection and sustainable development legal frameworks.",
      registrationDeadline: "2025-04-15",
      category: "Environmental Law",
    },
    {
      id: 5,
      title: "Corporate Law Summit 2024",
      date: "2024-12-15",
      endDate: "2024-12-16",
      time: "09:00 AM",
      location: "Hotel Taj Palace, Mumbai",
      type: "conference",
      status: "past",
      participants: 300,
      description: "Annual summit bringing together corporate law experts and practitioners.",
      category: "Corporate Law",
    },
    {
      id: 6,
      title: "Intellectual Property Rights Seminar",
      date: "2025-01-25",
      endDate: "2025-01-25",
      time: "11:00 AM",
      location: "India International Centre, Delhi",
      type: "seminar",
      status: "live",
      participants: 150,
      description: "Current trends and challenges in intellectual property law.",
      category: "IP Law",
    },
  ]

  const filters = [
    { key: "all", label: "All Events", count: events.length },
    { key: "upcoming", label: "Upcoming", count: events.filter((e) => e.status === "upcoming").length },
    { key: "live", label: "Live", count: events.filter((e) => e.status === "live").length },
    { key: "past", label: "Past", count: events.filter((e) => e.status === "past").length },
    { key: "competition", label: "Competitions", count: events.filter((e) => e.type === "competition").length },
    { key: "workshop", label: "Workshops", count: events.filter((e) => e.type === "workshop").length },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesFilter = activeFilter === "all" || event.status === activeFilter || event.type === activeFilter
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "live":
        return "bg-green-100 text-green-800"
      case "past":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "competition":
        return Trophy
      case "workshop":
        return BookOpen
      case "conference":
        return Users
      case "seminar":
        return Target
      default:
        return Calendar
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
              Legal <span className="text-[#d4af37]">Events Calendar</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover upcoming moot court competitions, workshops, seminars, and conferences. Stay updated with the
              latest legal education events across India.
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
                placeholder="Search events..."
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

      {/* Events Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-end mb-8">
            <Button
              variant={showCalendar ? "outline" : "default"}
              className={showCalendar ? "border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white bg-transparent" : "bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90"}
              onClick={() => setShowCalendar((v) => !v)}
            >
              {showCalendar ? "Show List View" : "Show Calendar View"}
            </Button>
          </div>
          {showCalendar ? (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              <CalendarView events={events} />
            </motion.div>
          ) : (
            <>
              {filteredEvents.length === 0 ? (
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredEvents.map((event, index) => {
                    const TypeIcon = getTypeIcon(event.type)
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-[#1a5f3f]/10 rounded-lg flex items-center justify-center mr-3">
                                <TypeIcon className="w-5 h-5 text-[#1a5f3f]" />
                              </div>
                              <div>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}
                                >
                                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                </span>
                              </div>
                            </div>
                            {event.status === "upcoming" && (
                              <Button size="sm" variant="outline" className="text-xs bg-transparent">
                                <Bell className="w-3 h-3 mr-1" />
                                Remind Me
                              </Button>
                            )}
                          </div>

                          <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                        </div>

                        {/* Details */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-3 text-[#1a5f3f]" />
                            <span>
                              {new Date(event.date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                              {event.endDate &&
                                event.endDate !== event.date &&
                                ` - ${new Date(event.endDate).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "long",
                                })}`}
                            </span>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-3 text-[#1a5f3f]" />
                            <span>{event.time}</span>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-3 text-[#1a5f3f]" />
                            <span>{event.location}</span>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="w-4 h-4 mr-3 text-[#1a5f3f]" />
                            <span>{event.participants} Participants</span>
                          </div>

                          {event.prize && (
                            <div className="flex items-center text-sm text-gray-600">
                              <Award className="w-4 h-4 mr-3 text-[#1a5f3f]" />
                              <span>Prize: {event.prize}</span>
                            </div>
                          )}

                          {event.registrationDeadline && event.status === "upcoming" && (
                            <div className="flex items-center text-sm text-red-600">
                              <Clock className="w-4 h-4 mr-3 text-red-500" />
                              <span>
                                Registration Deadline: {new Date(event.registrationDeadline).toLocaleDateString("en-IN")}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="p-6 pt-0">
                          <div className="flex gap-3">
                            <Button
                              className="flex-1 bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 transition-all duration-300"
                              disabled={event.status === "past"}
                            >
                              {event.status === "past"
                                ? "View Details"
                                : event.type === "competition"
                                  ? "Register Now"
                                  : "Join Event"}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white bg-transparent"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-[#1a5f3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Never Miss an Event</h2>
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter and get notified about upcoming competitions, workshops, and legal events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              />
              <Button className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 px-6 py-3">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
