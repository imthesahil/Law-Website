"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  Download,
  Eye,
  Calendar,
  Clock,
  Users,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function SubmitMemorialPage() {
  const [selectedCompetition, setSelectedCompetition] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  // Mock data for user's registered competitions
  const registeredCompetitions = [
    {
      id: "constitutional-moot",
      name: "National Constitutional Law Moot Court",
      deadline: "2025-03-10",
      status: "Open",
      submitted: false,
      maxSize: "25 MB",
      format: "PDF",
      guidelines: "Memorial should not exceed 25 pages including cover page and table of contents.",
    },
    {
      id: "commercial-arbitration",
      name: "International Commercial Arbitration Moot",
      deadline: "2025-04-15",
      status: "Open",
      submitted: false,
      maxSize: "30 MB",
      format: "PDF",
      guidelines: "Memorial should follow UNCITRAL arbitration format and guidelines.",
    },
    {
      id: "environmental-law",
      name: "Environmental Law Advocacy Challenge",
      deadline: "2025-05-05",
      status: "Not Started",
      submitted: false,
      maxSize: "20 MB",
      format: "PDF",
      guidelines: "Focus on environmental protection and sustainable development frameworks.",
    },
  ]

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const selectedCompetitionData = registeredCompetitions.find((comp) => comp.id === selectedCompetition)

  const getDaysLeft = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

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
              Submit <span className="text-[#d4af37]">Memorial</span>
            </h1>
            <p className="text-white/90 text-lg">Upload your team's memorial for competition evaluation</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Upload Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Competition Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Select Competition</h2>
              <div className="space-y-4">
                {registeredCompetitions.map((competition) => {
                  const daysLeft = getDaysLeft(competition.deadline)
                  return (
                    <div
                      key={competition.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                        selectedCompetition === competition.id
                          ? "border-[#1a5f3f] bg-[#1a5f3f]/5"
                          : "border-gray-200 hover:border-gray-300"
                      } ${competition.status === "Not Started" ? "opacity-50" : ""}`}
                      onClick={() => competition.status !== "Not Started" && setSelectedCompetition(competition.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{competition.name}</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                              <span>Due: {new Date(competition.deadline).toLocaleDateString("en-IN")}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-gray-500" />
                              <span
                                className={`${
                                  daysLeft <= 7 ? "text-red-600" : daysLeft <= 14 ? "text-yellow-600" : "text-green-600"
                                }`}
                              >
                                {daysLeft > 0 ? `${daysLeft} days left` : "Overdue"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              competition.status === "Open"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {competition.status}
                          </span>
                          {competition.submitted && <CheckCircle className="w-5 h-5 text-green-500 mt-2" />}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* File Upload Section */}
            {selectedCompetitionData && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Upload Memorial</h2>

                {/* Upload Guidelines */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">Upload Guidelines</h3>
                  <div className="text-blue-700 text-sm space-y-1">
                    <p>• Format: {selectedCompetitionData.format} only</p>
                    <p>• Maximum file size: {selectedCompetitionData.maxSize}</p>
                    <p>• {selectedCompetitionData.guidelines}</p>
                  </div>
                </div>

                {/* Drag and Drop Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-[#1a5f3f] bg-[#1a5f3f]/5"
                      : uploadedFile
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {uploadedFile ? (
                    <div className="space-y-4">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                      <div>
                        <div className="font-semibold text-gray-800">{uploadedFile.name}</div>
                        <div className="text-sm text-gray-600">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</div>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setUploadedFile(null)}
                          className="text-red-600 hover:text-red-700 bg-transparent"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                      <div>
                        <div className="text-lg font-medium text-gray-800">Drop your memorial here</div>
                        <div className="text-gray-600">or click to browse files</div>
                      </div>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90" asChild>
                          <span>Choose File</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                {uploadedFile && (
                  <div className="mt-6 flex justify-end space-x-4">
                    <Button variant="outline" className="bg-transparent">
                      Save as Draft
                    </Button>
                    <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                      <Upload className="w-4 h-4 mr-2" />
                      Submit Memorial
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Competition Info */}
            {selectedCompetitionData && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Competition Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-600">Competition</div>
                    <div className="font-medium">{selectedCompetitionData.name}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Submission Deadline</div>
                    <div className="font-medium">
                      {new Date(selectedCompetitionData.deadline).toLocaleDateString("en-IN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600">Time Remaining</div>
                    <div
                      className={`font-medium ${
                        getDaysLeft(selectedCompetitionData.deadline) <= 7
                          ? "text-red-600"
                          : getDaysLeft(selectedCompetitionData.deadline) <= 14
                            ? "text-yellow-600"
                            : "text-green-600"
                      }`}
                    >
                      {getDaysLeft(selectedCompetitionData.deadline)} days
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/competitions">
                    <Trophy className="w-4 h-4 mr-2" />
                    View Competitions
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/portals/team">
                    <Users className="w-4 h-4 mr-2" />
                    Team Portal
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Sample Memorial
                </Button>
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Need Help?</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Having trouble with your submission? Our support team is here to help.
                  </p>
                  <Button size="sm" className="bg-yellow-600 text-white hover:bg-yellow-700">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
