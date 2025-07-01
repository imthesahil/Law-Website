"use client"
import {
  FileText,
  Star,
  Clock,
  Users,
  Award,
  Download,
  Eye,
  MessageSquare,
  CheckCircle,
  BarChart3,
  Calendar,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function JudgePortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedCompetition, setSelectedCompetition] = useState("all")

  // Mock data - in real app, this would come from API
  const judgeData = {
    name: "Hon'ble Justice Rajesh Kumar",
    designation: "Former High Court Judge",
    experience: "25+ years",
    specialization: "Constitutional Law, Commercial Law",
    assignedCompetitions: [
      {
        id: "constitutional-moot",
        name: "National Constitutional Law Moot Court",
        role: "Chief Judge",
        status: "Active",
        teams: 32,
        evaluatedTeams: 28,
        pendingEvaluations: 4,
        rounds: ["Preliminary", "Quarter-final", "Semi-final", "Final"],
        currentRound: "Semi-final",
      },
      {
        id: "commercial-arbitration",
        name: "International Commercial Arbitration Moot",
        role: "Panel Judge",
        status: "Upcoming",
        teams: 24,
        evaluatedTeams: 0,
        pendingEvaluations: 0,
        rounds: ["Preliminary", "Final"],
        currentRound: "Not Started",
      },
    ],
    evaluationQueue: [
      {
        id: 1,
        teamName: "Legal Eagles",
        competition: "Constitutional Moot",
        round: "Semi-final",
        memorial: "Constitutional Rights Memorial",
        submissionDate: "2025-01-20",
        dueDate: "2025-01-25",
        priority: "high",
        status: "pending",
      },
      {
        id: 2,
        teamName: "Justice Warriors",
        competition: "Constitutional Moot",
        round: "Semi-final",
        memorial: "Fundamental Rights Analysis",
        submissionDate: "2025-01-21",
        dueDate: "2025-01-25",
        priority: "high",
        status: "pending",
      },
      {
        id: 3,
        teamName: "Law Makers",
        competition: "Constitutional Moot",
        round: "Quarter-final",
        memorial: "Constitutional Interpretation",
        submissionDate: "2025-01-18",
        dueDate: "2025-01-23",
        priority: "medium",
        status: "completed",
      },
    ],
    recentEvaluations: [
      {
        id: 1,
        teamName: "Legal Eagles",
        competition: "Constitutional Moot",
        round: "Quarter-final",
        overallScore: 85,
        memorialScore: 88,
        oralScore: 82,
        evaluationDate: "2025-01-22",
        feedback: "Excellent legal research and argumentation. Strong oral presentation.",
      },
      {
        id: 2,
        teamName: "Justice Warriors",
        competition: "Constitutional Moot",
        round: "Quarter-final",
        overallScore: 78,
        memorialScore: 80,
        oralScore: 76,
        evaluationDate: "2025-01-21",
        feedback: "Good understanding of constitutional principles. Needs improvement in oral advocacy.",
      },
    ],
    scoringCriteria: {
      memorial: [
        { criterion: "Legal Research", weight: 25, maxScore: 25 },
        { criterion: "Legal Analysis", weight: 25, maxScore: 25 },
        { criterion: "Writing Quality", weight: 20, maxScore: 20 },
        { criterion: "Citation & Format", weight: 15, maxScore: 15 },
        { criterion: "Originality", weight: 15, maxScore: 15 },
      ],
      oral: [
        { criterion: "Knowledge of Law", weight: 30, maxScore: 30 },
        { criterion: "Argumentation", weight: 25, maxScore: 25 },
        { criterion: "Court Craft", weight: 20, maxScore: 20 },
        { criterion: "Response to Questions", weight: 15, maxScore: 15 },
        { criterion: "Presentation", weight: 10, maxScore: 10 },
      ],
    },
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "evaluations", label: "Evaluations", icon: FileText },
    { id: "competitions", label: "My Competitions", icon: Award },
    { id: "scoring", label: "Scoring System", icon: Star },
    { id: "feedback", label: "Feedback Management", icon: MessageSquare },
    { id: "schedule", label: "Schedule", icon: Calendar },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a5f3f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light">Judge Portal</h1>
              <p className="text-white/80 mt-2">
                Welcome, {judgeData.name} • {judgeData.designation}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/80">Experience</div>
              <div className="font-medium">{judgeData.experience}</div>
              <div className="text-sm text-white/80 mt-1">{judgeData.specialization}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeTab === tab.id ? "bg-[#1a5f3f] text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{judgeData.assignedCompetitions.length}</div>
                        <div className="text-gray-600">Competitions</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {judgeData.assignedCompetitions.reduce((acc, comp) => acc + comp.evaluatedTeams, 0)}
                        </div>
                        <div className="text-gray-600">Evaluated</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {judgeData.assignedCompetitions.reduce((acc, comp) => acc + comp.pendingEvaluations, 0)}
                        </div>
                        <div className="text-gray-600">Pending</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {judgeData.assignedCompetitions.reduce((acc, comp) => acc + comp.teams, 0)}
                        </div>
                        <div className="text-gray-600">Total Teams</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evaluation Queue */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                    Pending Evaluations
                  </h3>
                  <div className="space-y-4">
                    {judgeData.evaluationQueue
                      .filter((item) => item.status === "pending")
                      .map((evaluation) => (
                        <div
                          key={evaluation.id}
                          className={`p-4 rounded-lg border-l-4 ${getPriorityColor(evaluation.priority)}`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-800">{evaluation.teamName}</div>
                              <div className="text-sm text-gray-600">
                                {evaluation.competition} • {evaluation.round}
                              </div>
                              <div className="text-sm text-gray-600">{evaluation.memorial}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">Due Date</div>
                              <div className="font-medium text-red-600">
                                {new Date(evaluation.dueDate).toLocaleDateString("en-IN")}
                              </div>
                              <Button size="sm" className="mt-2 bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                                Start Evaluation
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Recent Evaluations */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                    Recent Evaluations
                  </h3>
                  <div className="space-y-4">
                    {judgeData.recentEvaluations.map((evaluation) => (
                      <div key={evaluation.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-semibold text-gray-800">{evaluation.teamName}</div>
                            <div className="text-sm text-gray-600">
                              {evaluation.competition} • {evaluation.round}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#1a5f3f]">{evaluation.overallScore}/100</div>
                            <div className="text-sm text-gray-600">Overall Score</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <div className="text-sm text-gray-600">Memorial Score</div>
                            <div className="font-medium">{evaluation.memorialScore}/100</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Oral Score</div>
                            <div className="font-medium">{evaluation.oralScore}/100</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 italic">"{evaluation.feedback}"</div>
                        <div className="text-xs text-gray-500 mt-2">
                          Evaluated on {new Date(evaluation.evaluationDate).toLocaleDateString("en-IN")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evaluations" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Evaluation Management</h3>
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedCompetition}
                        onChange={(e) => setSelectedCompetition(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                      >
                        <option value="all">All Competitions</option>
                        {judgeData.assignedCompetitions.map((comp) => (
                          <option key={comp.id} value={comp.id}>
                            {comp.name}
                          </option>
                        ))}
                      </select>
                      <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {judgeData.evaluationQueue.map((evaluation) => (
                      <div key={evaluation.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{evaluation.teamName}</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              {evaluation.competition} • {evaluation.round}
                            </div>
                            <div className="text-sm text-gray-600">{evaluation.memorial}</div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(evaluation.status)}`}
                            >
                              {evaluation.status.charAt(0).toUpperCase() + evaluation.status.slice(1)}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Submission Date</div>
                            <div className="font-medium">
                              {new Date(evaluation.submissionDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Due Date</div>
                            <div className="font-medium text-red-600">
                              {new Date(evaluation.dueDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            <Eye className="w-4 h-4 mr-2" />
                            View Memorial
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          {evaluation.status === "pending" && (
                            <Button size="sm" className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90">
                              Start Evaluation
                            </Button>
                          )}
                          {evaluation.status === "completed" && (
                            <Button size="sm" variant="outline" className="bg-transparent">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              View Feedback
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "competitions" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">My Assigned Competitions</h3>
                  <div className="space-y-6">
                    {judgeData.assignedCompetitions.map((competition) => (
                      <div key={competition.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{competition.name}</h4>
                            <div className="flex items-center mt-2 space-x-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}
                              >
                                {competition.status}
                              </span>
                              <span className="text-sm text-gray-600">Role: {competition.role}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Current Round</div>
                            <div className="font-medium">{competition.currentRound}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Total Teams</div>
                            <div className="font-medium">{competition.teams}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Evaluated</div>
                            <div className="font-medium text-green-600">{competition.evaluatedTeams}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Pending</div>
                            <div className="font-medium text-red-600">{competition.pendingEvaluations}</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm text-gray-600 mb-2">Competition Rounds</div>
                          <div className="flex flex-wrap gap-2">
                            {competition.rounds.map((round, index) => (
                              <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  round === competition.currentRound
                                    ? "bg-[#1a5f3f] text-white"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {round}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            View Statistics
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "scoring" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Scoring Criteria & Rubrics</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Memorial Scoring */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                        Memorial Evaluation
                      </h4>
                      <div className="space-y-3">
                        {judgeData.scoringCriteria.memorial.map((criterion, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-gray-800">{criterion.criterion}</div>
                              <div className="text-sm text-gray-600">{criterion.maxScore} points</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#1a5f3f] h-2 rounded-full"
                                style={{ width: `${(criterion.weight / 25) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{criterion.weight}% weightage</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Oral Scoring */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                        Oral Advocacy Evaluation
                      </h4>
                      <div className="space-y-3">
                        {judgeData.scoringCriteria.oral.map((criterion, index) => (
                          <div key={index} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-medium text-gray-800">{criterion.criterion}</div>
                              <div className="text-sm text-gray-600">{criterion.maxScore} points</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#1a5f3f] h-2 rounded-full"
                                style={{ width: `${(criterion.weight / 30) * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{criterion.weight}% weightage</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Feedback Management</h3>
                <div className="space-y-4">
                  {judgeData.recentEvaluations.map((evaluation) => (
                    <div key={evaluation.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-800">{evaluation.teamName}</h4>
                          <div className="text-sm text-gray-600">
                            {evaluation.competition} • {evaluation.round}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#1a5f3f]">{evaluation.overallScore}/100</div>
                          <div className="text-sm text-gray-600">Overall Score</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Feedback Provided:</div>
                        <div className="text-sm text-gray-600 italic">"{evaluation.feedback}"</div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          View Full Evaluation
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Edit Feedback
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Export Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Judging Schedule</h3>
                <div className="space-y-4">
                  {judgeData.assignedCompetitions.map((competition) => (
                    <div key={competition.id} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">{competition.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Current Round</div>
                            <div className="font-medium">{competition.currentRound}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Role</div>
                            <div className="font-medium">{competition.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Status</div>
                            <div className="font-medium">{competition.status}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
