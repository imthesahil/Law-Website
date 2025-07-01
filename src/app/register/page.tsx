"use client"

import { motion } from "framer-motion"
import { Trophy, Users, CreditCard, CheckCircle, ArrowRight, ArrowLeft, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCompetition, setSelectedCompetition] = useState("")
  const [formData, setFormData] = useState({
    competition: "",
    teamName: "",
    institution: "",
    members: [
      { name: "", email: "", phone: "", year: "", role: "Member" },
      { name: "", email: "", phone: "", year: "", role: "Member" },
      { name: "", email: "", phone: "", year: "", role: "Member" },
    ],
    teamLeader: 0,
    agreeTerms: false,
  })

  const competitions = [
    {
      id: "constitutional-moot",
      name: "National Constitutional Law Moot Court",
      fee: 2500,
      deadline: "2025-02-28",
      maxTeams: 64,
      registeredTeams: 45,
      description: "Premier constitutional law competition focusing on fundamental rights and judicial review.",
    },
    {
      id: "commercial-arbitration",
      name: "International Commercial Arbitration Moot",
      fee: 3000,
      deadline: "2025-03-30",
      maxTeams: 48,
      registeredTeams: 32,
      description: "International arbitration competition with real-world commercial disputes.",
    },
    {
      id: "environmental-law",
      name: "Environmental Law Advocacy Challenge",
      fee: 2000,
      deadline: "2025-04-15",
      maxTeams: 32,
      registeredTeams: 0,
      description: "Focus on environmental protection and sustainable development legal frameworks.",
    },
  ]

  const steps = [
    { number: 1, title: "Select Competition", icon: Trophy },
    { number: 2, title: "Team Details", icon: Users },
    { number: 3, title: "Member Information", icon: User },
    { number: 4, title: "Review & Payment", icon: CreditCard },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...formData.members]
    newMembers[index] = { ...newMembers[index], [field]: value }
    setFormData({ ...formData, members: newMembers })
  }

  const selectedCompetitionData = competitions.find((comp) => comp.id === selectedCompetition)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a5f3f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-light mb-4">
              Competition <span className="text-[#d4af37]">Registration</span>
            </h1>
            <p className="text-white/90 text-lg">
              Join India's most prestigious legal competitions and enhance your advocacy skills
            </p>
          </motion.div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              return (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive
                        ? "bg-[#1a5f3f] text-white"
                        : isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <IconComponent className="w-5 h-5" />}
                  </div>
                  <div className="ml-3">
                    <div className={`text-sm font-medium ${isActive ? "text-[#1a5f3f]" : "text-gray-600"}`}>
                      Step {step.number}
                    </div>
                    <div className={`text-xs ${isActive ? "text-[#1a5f3f]" : "text-gray-500"}`}>{step.title}</div>
                  </div>
                  {index < steps.length - 1 && <div className="hidden sm:block w-16 h-px bg-gray-300 mx-6"></div>}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Select Competition */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Select Competition</h2>
              <div className="space-y-4">
                {competitions.map((competition) => (
                  <div
                    key={competition.id}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      selectedCompetition === competition.id
                        ? "border-[#1a5f3f] bg-[#1a5f3f]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedCompetition(competition.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{competition.name}</h3>
                        <p className="text-gray-600 mb-4">{competition.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">Registration Fee</div>
                            <div className="font-medium">₹{competition.fee.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Deadline</div>
                            <div className="font-medium">
                              {new Date(competition.deadline).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500">Teams Registered</div>
                            <div className="font-medium">
                              {competition.registeredTeams}/{competition.maxTeams}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500">Availability</div>
                            <div
                              className={`font-medium ${
                                competition.registeredTeams < competition.maxTeams ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {competition.registeredTeams < competition.maxTeams ? "Available" : "Full"}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedCompetition === competition.id ? "border-[#1a5f3f] bg-[#1a5f3f]" : "border-gray-300"
                        }`}
                      >
                        {selectedCompetition === competition.id && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Team Details */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Team Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Team Name *</label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                    placeholder="Enter your team name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution/University *</label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                    placeholder="Enter your institution name"
                  />
                </div>
                {selectedCompetitionData && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Selected Competition</h3>
                    <div className="text-blue-700">
                      <div className="font-medium">{selectedCompetitionData.name}</div>
                      <div className="text-sm">Registration Fee: ₹{selectedCompetitionData.fee.toLocaleString()}</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Member Information */}
          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Team Members</h2>
              <div className="space-y-6">
                {formData.members.map((member, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-800">Member {index + 1}</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="teamLeader"
                          checked={formData.teamLeader === index}
                          onChange={() => setFormData({ ...formData, teamLeader: index })}
                          className="text-[#1a5f3f]"
                        />
                        <label className="text-sm text-gray-600">Team Leader</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => updateMember(index, "name", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) => updateMember(index, "email", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          value={member.phone}
                          onChange={(e) => updateMember(index, "phone", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year of Study *</label>
                        <select
                          value={member.year}
                          onChange={(e) => updateMember(index, "year", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                        >
                          <option value="">Select year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                          <option value="5th Year">5th Year</option>
                          <option value="Graduate">Graduate</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Review & Payment */}
          {currentStep === 4 && (
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Review & Payment</h2>
              <div className="space-y-6">
                {/* Registration Summary */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Registration Summary</h3>
                  {selectedCompetitionData && (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Competition:</span>
                        <span className="font-medium">{selectedCompetitionData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Name:</span>
                        <span className="font-medium">{formData.teamName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Institution:</span>
                        <span className="font-medium">{formData.institution}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team Members:</span>
                        <span className="font-medium">{formData.members.filter((m) => m.name).length}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                        <span>Registration Fee:</span>
                        <span className="text-[#1a5f3f]">₹{selectedCompetitionData.fee.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Terms & Conditions</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>• Registration fee is non-refundable after the deadline</p>
                    <p>• All team members must be current students or recent graduates</p>
                    <p>• Teams must submit memorials by the specified deadline</p>
                    <p>• Participation is subject to competition rules and regulations</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mr-3 text-[#1a5f3f]"
                    />
                    <label className="text-sm text-gray-700">
                      I agree to the terms and conditions and confirm that all information provided is accurate
                    </label>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90 px-12 py-4 text-lg"
                    disabled={!formData.agreeTerms}
                  >
                    <CreditCard className="mr-2 w-5 h-5" />
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1} className="bg-transparent">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Previous
            </Button>
            <div className="flex space-x-4">
              <Button variant="outline" className="bg-transparent" asChild>
                <Link href="/">Cancel</Link>
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !selectedCompetition) ||
                    (currentStep === 2 && (!formData.teamName || !formData.institution))
                  }
                  className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
