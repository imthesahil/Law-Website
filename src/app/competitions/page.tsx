"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Clock,
  FileText,
  Download,
  ChevronRight,
  ArrowRight,
  Scale,
  Gavel,
  MessageSquare,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState("moot-court")
  const [selectedCompetition, setSelectedCompetition] = useState<string | null>(null)

  const competitionTypes = [
    {
      id: "moot-court",
      title: "Moot Court Competitions",
      icon: Scale,
      description: "Traditional appellate advocacy competitions with written memorials and oral arguments",
      color: "from-[#1a5f3f] to-[#2d7a5f]",
    },
    {
      id: "adr",
      title: "ADR Simulations",
      icon: Gavel,
      description: "Alternative Dispute Resolution including arbitration, mediation, and negotiation",
      color: "from-[#2d7a5f] to-[#1a5f3f]",
    },
    {
      id: "debate",
      title: "Debate Competitions",
      icon: MessageSquare,
      description: "Parliamentary and policy debates on contemporary legal and social issues",
      color: "from-[#1a5f3f] to-[#0f4a32]",
    },
  ]

  const competitions = {
    "moot-court": [
      {
        id: "constitutional-moot",
        title: "National Constitutional Law Moot Court",
        date: "2025-03-15",
        endDate: "2025-03-17",
        location: "Supreme Court of India, New Delhi",
        prize: "₹2,00,000",
        teams: 64,
        registrationDeadline: "2025-02-28",
        status: "Registration Open",
        format: "Written Memorial + Oral Rounds",
        category: "Constitutional Law",
        description: "Premier constitutional law competition focusing on fundamental rights and judicial review.",
        timeline: [
          { phase: "Registration", deadline: "2025-02-28", status: "active" },
          { phase: "Memorial Submission", deadline: "2025-03-10", status: "upcoming" },
          { phase: "Preliminary Rounds", deadline: "2025-03-15", status: "upcoming" },
          { phase: "Final Rounds", deadline: "2025-03-17", status: "upcoming" },
        ],
        prizeStructure: [
          { position: "Winner", amount: "₹1,00,000", trophy: "Gold Trophy + Certificate" },
          { position: "Runner-up", amount: "₹60,000", trophy: "Silver Trophy + Certificate" },
          { position: "Semi-finalist", amount: "₹20,000", trophy: "Certificate" },
          { position: "Best Memorial", amount: "₹20,000", trophy: "Special Award" },
        ],
        documents: [
          { name: "Moot Problem", type: "PDF", size: "2.5 MB", downloadUrl: "#" },
          { name: "Rules & Regulations", type: "PDF", size: "1.8 MB", downloadUrl: "#" },
          { name: "Memorial Guidelines", type: "PDF", size: "1.2 MB", downloadUrl: "#" },
          { name: "Clarifications", type: "PDF", size: "0.8 MB", downloadUrl: "#" },
        ],
        faqs: [
          {
            question: "What is the team composition?",
            answer: "Each team must consist of 2-3 members with at least one being a law student.",
          },
          {
            question: "Is there a registration fee?",
            answer: "Yes, the registration fee is ₹2,500 per team, which includes all materials and refreshments.",
          },
          {
            question: "What is the memorial word limit?",
            answer: "The memorial should not exceed 25 pages including cover page and table of contents.",
          },
        ],
      },
      {
        id: "commercial-arbitration",
        title: "International Commercial Arbitration Moot",
        date: "2025-04-22",
        endDate: "2025-04-24",
        location: "Mumbai International Arbitration Centre",
        prize: "₹1,50,000",
        teams: 48,
        registrationDeadline: "2025-03-30",
        status: "Registration Open",
        format: "Arbitration Simulation",
        category: "Commercial Law",
        description: "International arbitration competition with real-world commercial disputes.",
        timeline: [
          { phase: "Registration", deadline: "2025-03-30", status: "active" },
          { phase: "Memorial Submission", deadline: "2025-04-15", status: "upcoming" },
          { phase: "Arbitration Rounds", deadline: "2025-04-22", status: "upcoming" },
          { phase: "Final Award", deadline: "2025-04-24", status: "upcoming" },
        ],
        prizeStructure: [
          { position: "Winner", amount: "₹75,000", trophy: "Gold Trophy + Certificate" },
          { position: "Runner-up", amount: "₹45,000", trophy: "Silver Trophy + Certificate" },
          { position: "Best Advocate", amount: "₹15,000", trophy: "Special Award" },
          { position: "Best Memorial", amount: "₹15,000", trophy: "Special Award" },
        ],
        documents: [
          { name: "Arbitration Problem", type: "PDF", size: "3.2 MB", downloadUrl: "#" },
          { name: "UNCITRAL Rules", type: "PDF", size: "2.1 MB", downloadUrl: "#" },
          { name: "Procedural Guidelines", type: "PDF", size: "1.5 MB", downloadUrl: "#" },
        ],
        faqs: [
          {
            question: "Is international participation allowed?",
            answer: "Yes, international teams are welcome to participate in this competition.",
          },
          {
            question: "What law will be applicable?",
            answer: "The competition will be governed by UNCITRAL Arbitration Rules and Indian Arbitration Act.",
          },
        ],
      },
    ],
    adr: [
      {
        id: "mediation-challenge",
        title: "National Mediation Challenge",
        date: "2025-05-15",
        endDate: "2025-05-16",
        location: "India International Centre, Delhi",
        prize: "₹75,000",
        teams: 32,
        registrationDeadline: "2025-04-30",
        status: "Coming Soon",
        format: "Role-play Mediation",
        category: "ADR",
        description: "Practical mediation skills competition with real-world scenarios.",
        timeline: [
          { phase: "Registration", deadline: "2025-04-30", status: "upcoming" },
          { phase: "Preliminary Rounds", deadline: "2025-05-15", status: "upcoming" },
          { phase: "Final Rounds", deadline: "2025-05-16", status: "upcoming" },
        ],
        prizeStructure: [
          { position: "Winner", amount: "₹40,000", trophy: "Gold Trophy + Certificate" },
          { position: "Runner-up", amount: "₹25,000", trophy: "Silver Trophy + Certificate" },
          { position: "Best Mediator", amount: "₹10,000", trophy: "Special Award" },
        ],
        documents: [
          { name: "Mediation Scenarios", type: "PDF", size: "1.8 MB", downloadUrl: "#" },
          { name: "Competition Rules", type: "PDF", size: "1.2 MB", downloadUrl: "#" },
        ],
        faqs: [
          {
            question: "Do I need prior mediation experience?",
            answer: "No prior experience required. Training materials will be provided.",
          },
        ],
      },
    ],
    debate: [
      {
        id: "policy-debate",
        title: "National Policy Debate Championship",
        date: "2025-06-10",
        endDate: "2025-06-12",
        location: "Indian Law Institute, Delhi",
        prize: "₹1,00,000",
        teams: 40,
        registrationDeadline: "2025-05-25",
        status: "Coming Soon",
        format: "Parliamentary Debate",
        category: "Policy Debate",
        description: "Parliamentary style debates on contemporary policy issues.",
        timeline: [
          { phase: "Registration", deadline: "2025-05-25", status: "upcoming" },
          { phase: "Preliminary Rounds", deadline: "2025-06-10", status: "upcoming" },
          { phase: "Final Rounds", deadline: "2025-06-12", status: "upcoming" },
        ],
        prizeStructure: [
          { position: "Winner", amount: "₹50,000", trophy: "Gold Trophy + Certificate" },
          { position: "Runner-up", amount: "₹30,000", trophy: "Silver Trophy + Certificate" },
          { position: "Best Speaker", amount: "₹20,000", trophy: "Special Award" },
        ],
        documents: [
          { name: "Debate Format Guide", type: "PDF", size: "1.5 MB", downloadUrl: "#" },
          { name: "Topic Areas", type: "PDF", size: "0.9 MB", downloadUrl: "#" },
        ],
        faqs: [
          {
            question: "What is the debate format?",
            answer: "Parliamentary debate format with 4 speakers per side and 7-minute speeches.",
          },
        ],
      },
    ],
  }

  const activeCompetitions = competitions[activeTab as keyof typeof competitions] || []

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
              Legal <span className="text-[#d4af37]">Competitions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Participate in India's most prestigious legal competitions. From moot courts to ADR simulations, develop
              practical skills through experiential learning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Competition Types Tabs */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4">
            {competitionTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    activeTab === type.id ? "border-[#1a5f3f] bg-[#1a5f3f]/5" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        activeTab === type.id ? "bg-[#1a5f3f] text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3
                      className={`text-xl font-semibold ${activeTab === type.id ? "text-[#1a5f3f]" : "text-gray-800"}`}
                    >
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Competitions Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeCompetitions.map((competition, index) => (
              <motion.div
                key={competition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Competition Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          competition.status === "Registration Open"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {competition.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#1a5f3f]">{competition.prize}</div>
                      <div className="text-sm text-gray-600">Total Prize Pool</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{competition.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{competition.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                      <span>
                        {new Date(competition.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                        {competition.endDate &&
                          ` - ${new Date(competition.endDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                          })}`}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                      <span className="truncate">{competition.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-[#1a5f3f]" />
                      <span>{competition.teams} Teams Max</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <Clock className="w-4 h-4 mr-2 text-red-500" />
                      <span className="truncate">
                        Reg: {new Date(competition.registrationDeadline).toLocaleDateString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {competition.format}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {competition.category}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 transition-all duration-300"
                      disabled={competition.status === "Coming Soon"}
                      asChild
                    >
                      <Link href={competition.status === "Coming Soon" ? "#" : "/register"}>
                        {competition.status === "Coming Soon" ? "Coming Soon" : "Register Now"}
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#1a5f3f] text-[#1a5f3f] hover:bg-[#1a5f3f] hover:text-white bg-transparent"
                      onClick={() =>
                        setSelectedCompetition(selectedCompetition === competition.id ? null : competition.id)
                      }
                    >
                      {selectedCompetition === competition.id ? "Hide Details" : "View Details"}
                    </Button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedCompetition === competition.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 bg-gray-50"
                  >
                    <div className="p-6 space-y-6">
                      {/* Timeline */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                          Competition Timeline
                        </h4>
                        <div className="space-y-3">
                          {competition.timeline.map((phase, idx) => (
                            <div key={idx} className="flex items-center">
                              <div
                                className={`w-3 h-3 rounded-full mr-3 ${
                                  phase.status === "active"
                                    ? "bg-green-500"
                                    : phase.status === "completed"
                                      ? "bg-gray-400"
                                      : "bg-yellow-500"
                                }`}
                              ></div>
                              <span className="flex-1 text-sm text-gray-700">{phase.phase}</span>
                              <span className="text-sm text-gray-600">{phase.deadline}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Prize Structure */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                          Prize Structure
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {competition.prizeStructure.map((prize, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="font-semibold text-gray-800">{prize.position}</div>
                              <div className="text-[#1a5f3f] font-bold">{prize.amount}</div>
                              <div className="text-sm text-gray-600">{prize.trophy}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Documents */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                          Competition Documents
                        </h4>
                        <div className="space-y-2">
                          {competition.documents.map((doc, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                            >
                              <div className="flex items-center">
                                <FileText className="w-4 h-4 mr-3 text-gray-500" />
                                <div>
                                  <div className="font-medium text-gray-800">{doc.name}</div>
                                  <div className="text-sm text-gray-600">
                                    {doc.type} • {doc.size}
                                  </div>
                                </div>
                              </div>
                              <Button size="sm" variant="outline" className="bg-transparent">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* FAQs */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                          <Info className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                          Frequently Asked Questions
                        </h4>
                        <div className="space-y-3">
                          {competition.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="font-medium text-gray-800 mb-2">{faq.question}</div>
                              <div className="text-sm text-gray-600">{faq.answer}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#1a5f3f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Ready to Compete?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of law students who have enhanced their advocacy skills through our competitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90 font-medium px-8 py-4"
                asChild
              >
                <Link href="/register">
                  Register Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a5f3f] font-medium px-8 py-4 bg-transparent"
                asChild
              >
                <Link href="/portals/team">
                  Access Team Portal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
