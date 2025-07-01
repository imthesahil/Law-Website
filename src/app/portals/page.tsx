"use client"

import { motion } from "framer-motion"
import {
  Users,
  Scale,
  Settings,
  Trophy,
  Calendar,
  Upload,
  FileText,
  Shield,
  Award,
  ChevronRight,
  ExternalLink,
  Lock,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortalsPage() {
  const portals = [
    {
      title: "Competition Portal",
      description:
        "Access all active competitions, rules, timelines, and registration forms. Download moot problems and procedural documents.",
      icon: Trophy,
      color: "from-[#1a5f3f] to-[#2d7a5f]",
      features: [
        "Competition listings with detailed information",
        "Registration forms & team management",
        "Access to moot problems & materials",
        "Timeline tracking & deadlines",
        "Prize information & rules",
      ],
      href: "/portals/competition",
      status: "Available",
    },
    {
      title: "Team Portal",
      description:
        "Secure login area for student teams to manage registrations, upload memorials, and track competition progress.",
      icon: Users,
      color: "from-[#2d7a5f] to-[#1a5f3f]",
      features: [
        "Team registration & profile management",
        "Memorial & document upload system",
        "Shared files & team collaboration",
        "Deadline tracking & notifications",
        "Oral round schedules & results",
      ],
      href: "/portals/team",
      status: "Login Required",
    },
    {
      title: "Judge Portal",
      description: "Dedicated portal for judges to evaluate teams, score performances, and provide detailed feedback.",
      icon: Scale,
      color: "from-[#1a5f3f] to-[#0f4a32]",
      features: [
        "Secure judge authentication",
        "Team scoring & evaluation forms",
        "Memorial review & assessment",
        "Feedback submission system",
        "Competition results management",
      ],
      href: "/portals/judge",
      status: "Invitation Only",
    },
    {
      title: "Admin Panel",
      description: "Comprehensive administration panel for managing competitions, users, and platform operations.",
      icon: Settings,
      color: "from-[#0f4a32] to-[#1a5f3f]",
      features: [
        "Create & edit competitions",
        "Team approval & fee management",
        "Round scheduling & results",
        "User account management",
        "Data export & reporting",
      ],
      href: "/portals/admin",
      status: "Admin Only",
    },
    {
      title: "Events Calendar",
      description:
        "Comprehensive events calendar with filters for upcoming, live, and past legal events and competitions.",
      icon: Calendar,
      color: "from-[#2d7a5f] to-[#1a5f3f]",
      features: [
        "Interactive events calendar",
        "Event filtering & search",
        "Detailed event information",
        "Registration links & reminders",
        "Past event archives",
      ],
      href: "/portals/events",
      status: "Available",
    },
  ]

  const quickActions = [
    {
      title: "Register for Competition",
      description: "Quick registration for upcoming moot court competitions",
      icon: Trophy,
      href: "/register",
      color: "bg-[#1a5f3f]",
    },
    {
      title: "Submit Memorial",
      description: "Upload your team's memorial and supporting documents",
      icon: Upload,
      href: "/submit",
      color: "bg-[#d4af37]",
    },
    {
      title: "View Results",
      description: "Check latest competition results and rankings",
      icon: Award,
      href: "/results",
      color: "bg-[#2d7a5f]",
    },
    {
      title: "Access Materials",
      description: "Download moot problems and procedural documents",
      icon: FileText,
      href: "/materials",
      color: "bg-[#0f4a32]",
    },
  ]

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
              Legal Academy <span className="text-[#d4af37]">Portals</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Access specialized portals designed for different user roles in our legal education ecosystem. From
              competition management to team collaboration, find the right portal for your needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-4 text-gray-800">Quick Actions</h2>
            <p className="text-gray-600 text-lg">Fast access to common portal functions</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                {action.title === "Register for Competition" && (
                  <Button asChild size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 bg-transparent">
                    <Link href="/register">
                      <Trophy className="mr-2 w-4 h-4" />
                      Register for Competition
                    </Link>
                  </Button>
                )}
                {action.title === "Submit Memorial" && (
                  <Button asChild size="sm" className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90">
                    <Link href="/submit-memorial">
                      <Upload className="mr-2 w-4 h-4" />
                      Submit Memorial
                    </Link>
                  </Button>
                )}
                {action.title === "View Results" && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Link href={action.href}>
                      Access
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
                {action.title === "Access Materials" && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Link href={action.href}>
                      Access
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Portals */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-800">Specialized Portals</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose the portal that matches your role and access level. Each portal is designed with specific features
              and tools for optimal user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portals.map((portal, index) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${portal.color} p-6 text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <portal.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">{portal.title}</h3>
                        <div className="flex items-center mt-1">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              portal.status === "Available"
                                ? "bg-green-400"
                                : portal.status === "Login Required"
                                  ? "bg-yellow-400"
                                  : "bg-red-400"
                            }`}
                          ></div>
                          <span className="text-sm opacity-90">{portal.status}</span>
                        </div>
                      </div>
                    </div>
                    {portal.status === "Login Required" && <Lock className="w-5 h-5 opacity-70" />}
                    {portal.status === "Invitation Only" && <UserCheck className="w-5 h-5 opacity-70" />}
                    {portal.status === "Admin Only" && <Shield className="w-5 h-5 opacity-70" />}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{portal.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Features:</h4>
                    <ul className="space-y-2">
                      {portal.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#1a5f3f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {portal.title === "Competition Portal" && (
                    <Button
                      asChild
                      className="w-full bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 transition-all duration-300 group"
                    >
                      <Link href="/competitions">
                        Access Portal
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  )}

                  {portal.title === "Events Calendar" && (
                    <Button
                      asChild
                      className="w-full bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 transition-all duration-300 group"
                    >
                      <Link href="/events">
                        Access Portal
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  )}

                  {portal.title !== "Competition Portal" && portal.title !== "Events Calendar" && (
                    <Button
                      asChild
                      className="w-full bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 transition-all duration-300 group"
                      disabled={portal.status === "Admin Only" || portal.status === "Invitation Only"}
                    >
                      <Link href={portal.href}>
                        {portal.status === "Available"
                          ? "Access Portal"
                          : portal.status === "Login Required"
                            ? "Login to Access"
                            : portal.status === "Invitation Only"
                              ? "Invitation Required"
                              : "Admin Access Only"}
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portal Access Information */}
      <div className="py-16 bg-[#1a5f3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Need Help Accessing a Portal?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Different portals have different access requirements. Contact our support team if you need assistance with
              portal access or have questions about your account permissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-4">
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a5f3f] font-medium px-8 py-4 bg-transparent"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
