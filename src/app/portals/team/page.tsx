"use client"
import {
  Users,
  Upload,
  FileText,
  Calendar,
  Bell,
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  User,
  Mail,
  Phone,
  Save,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TeamPortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isEditingProfile, setIsEditingProfile] = useState(false)

  // Mock data - in real app, this would come from API
  const teamData = {
    teamName: "Legal Eagles",
    teamId: "LE2025001",
    institution: "National Law School of India University",
    members: [
      {
        id: 1,
        name: "Priya Sharma",
        email: "priya.sharma@nlsiu.ac.in",
        phone: "+91 9876543210",
        role: "Team Leader",
        year: "4th Year",
        verified: true,
      },
      {
        id: 2,
        name: "Arjun Patel",
        email: "arjun.patel@nlsiu.ac.in",
        phone: "+91 9876543211",
        role: "Member",
        year: "3rd Year",
        verified: true,
      },
      {
        id: 3,
        name: "Kavya Reddy",
        email: "kavya.reddy@nlsiu.ac.in",
        phone: "+91 9876543212",
        role: "Member",
        year: "4th Year",
        verified: false,
      },
    ],
    registeredCompetitions: [
      {
        id: "constitutional-moot",
        name: "National Constitutional Law Moot Court",
        status: "Active",
        registrationDate: "2025-01-15",
        memorialDeadline: "2025-03-10",
        oralRounds: "2025-03-15",
        memorialSubmitted: true,
        paymentStatus: "Paid",
      },
      {
        id: "commercial-arbitration",
        name: "International Commercial Arbitration Moot",
        status: "Registered",
        registrationDate: "2025-01-20",
        memorialDeadline: "2025-04-15",
        oralRounds: "2025-04-22",
        memorialSubmitted: false,
        paymentStatus: "Pending",
      },
    ],
    documents: [
      {
        id: 1,
        name: "Constitutional Moot Memorial - Final",
        type: "Memorial",
        competition: "Constitutional Moot",
        uploadDate: "2025-01-20",
        status: "Submitted",
        version: "v2.1",
        size: "2.5 MB",
      },
      {
        id: 2,
        name: "Team Registration Form",
        type: "Registration",
        competition: "Constitutional Moot",
        uploadDate: "2025-01-15",
        status: "Approved",
        version: "v1.0",
        size: "1.2 MB",
      },
      {
        id: 3,
        name: "Commercial Arbitration Memorial - Draft",
        type: "Memorial",
        competition: "Commercial Arbitration",
        uploadDate: "2025-01-22",
        status: "Draft",
        version: "v1.0",
        size: "1.8 MB",
      },
    ],
    upcomingDeadlines: [
      {
        competition: "Commercial Arbitration Moot",
        task: "Memorial Submission",
        deadline: "2025-04-15",
        daysLeft: 45,
        priority: "high",
      },
      {
        competition: "Constitutional Moot",
        task: "Oral Rounds",
        deadline: "2025-03-15",
        daysLeft: 15,
        priority: "medium",
      },
    ],
    notifications: [
      {
        id: 1,
        title: "Memorial Approved",
        message: "Your Constitutional Moot memorial has been approved by the organizing committee.",
        date: "2025-01-21",
        type: "success",
        read: false,
      },
      {
        id: 2,
        title: "Payment Reminder",
        message: "Payment for Commercial Arbitration Moot is due in 3 days.",
        date: "2025-01-20",
        type: "warning",
        read: false,
      },
      {
        id: 3,
        title: "New Clarification Available",
        message: "A new clarification has been posted for Constitutional Moot.",
        date: "2025-01-19",
        type: "info",
        read: true,
      },
    ],
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Users },
    { id: "competitions", label: "My Competitions", icon: Award },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "team", label: "Team Management", icon: Users },
    { id: "schedule", label: "Schedule", icon: Calendar },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
      case "submitted":
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "registered":
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
              <h1 className="text-3xl font-light">Team Portal</h1>
              <p className="text-white/80 mt-2">
                Welcome back, {teamData.teamName} • Team ID: {teamData.teamId}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-white/80">Institution</div>
              <div className="font-medium">{teamData.institution}</div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{teamData.registeredCompetitions.length}</div>
                        <div className="text-gray-600">Active Competitions</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{teamData.documents.length}</div>
                        <div className="text-gray-600">Documents</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{teamData.upcomingDeadlines.length}</div>
                        <div className="text-gray-600">Upcoming Deadlines</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                    Upcoming Deadlines
                  </h3>
                  <div className="space-y-4">
                    {teamData.upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className={`p-4 rounded-lg border-l-4 ${getPriorityColor(deadline.priority)}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-800">{deadline.task}</div>
                            <div className="text-sm text-gray-600">{deadline.competition}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-800">{deadline.daysLeft} days left</div>
                            <div className="text-sm text-gray-600">
                              {new Date(deadline.deadline).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-[#1a5f3f]" />
                    Recent Notifications
                  </h3>
                  <div className="space-y-4">
                    {teamData.notifications.slice(0, 3).map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border ${notification.read ? "bg-gray-50" : "bg-blue-50 border-blue-200"}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800">{notification.title}</div>
                            <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                          </div>
                          <div className="text-xs text-gray-500">{notification.date}</div>
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
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">My Competitions</h3>
                  <div className="space-y-6">
                    {teamData.registeredCompetitions.map((competition) => (
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
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.paymentStatus)}`}
                              >
                                Payment: {competition.paymentStatus}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-600">Registered</div>
                            <div className="font-medium">
                              {new Date(competition.registrationDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Memorial Deadline</div>
                            <div className="font-medium">
                              {new Date(competition.memorialDeadline).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Oral Rounds</div>
                            <div className="font-medium">
                              {new Date(competition.oralRounds).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Memorial Status</div>
                            <div
                              className={`font-medium ${competition.memorialSubmitted ? "text-green-600" : "text-red-600"}`}
                            >
                              {competition.memorialSubmitted ? "Submitted" : "Not Submitted"}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            View Details
                          </Button>
                          {!competition.memorialSubmitted && (
                            <Button size="sm" variant="outline" className="bg-transparent">
                              <Upload className="w-4 h-4 mr-2" />
                              Upload Memorial
                            </Button>
                          )}
                          {competition.paymentStatus === "Pending" && (
                            <Button size="sm" className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90">
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Document Management</h3>
                    <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {teamData.documents.map((doc) => (
                      <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="w-8 h-8 text-gray-500 mr-4" />
                            <div>
                              <div className="font-semibold text-gray-800">{doc.name}</div>
                              <div className="text-sm text-gray-600">
                                {doc.competition} • {doc.type} • {doc.size} • {doc.version}
                              </div>
                              <div className="text-xs text-gray-500">
                                Uploaded: {new Date(doc.uploadDate).toLocaleDateString("en-IN")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}
                            >
                              {doc.status}
                            </span>
                            <Button size="sm" variant="outline" className="bg-transparent">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="bg-transparent">
                              <Download className="w-4 h-4" />
                            </Button>
                            {doc.status === "Draft" && (
                              <>
                                <Button size="sm" variant="outline" className="bg-transparent">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 hover:text-red-700 bg-transparent"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Team Management</h3>
                    <Button
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                      variant="outline"
                      className="bg-transparent"
                    >
                      {isEditingProfile ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                      {isEditingProfile ? "Cancel" : "Edit Team"}
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {teamData.members.map((member) => (
                      <div key={member.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                              <User className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800 flex items-center">
                                {member.name}
                                {member.verified && <CheckCircle className="w-4 h-4 text-green-500 ml-2" />}
                                {!member.verified && <AlertTriangle className="w-4 h-4 text-yellow-500 ml-2" />}
                              </div>
                              <div className="text-sm text-gray-600">
                                {member.role} • {member.year}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-medium ${member.verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                            >
                              {member.verified ? "Verified" : "Pending Verification"}
                            </div>
                          </div>
                        </div>

                        {isEditingProfile && (
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 text-gray-500 mr-2" />
                                <input
                                  type="email"
                                  defaultValue={member.email}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 text-gray-500 mr-2" />
                                <input
                                  type="tel"
                                  defaultValue={member.phone}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {!isEditingProfile && (
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-2" />
                              {member.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-2" />
                              {member.phone}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {isEditingProfile && (
                      <div className="flex justify-end space-x-3">
                        <Button onClick={() => setIsEditingProfile(false)} variant="outline" className="bg-transparent">
                          Cancel
                        </Button>
                        <Button
                          onClick={() => setIsEditingProfile(false)}
                          className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "schedule" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Competition Schedule</h3>
                <div className="space-y-4">
                  {teamData.registeredCompetitions.map((competition) => (
                    <div key={competition.id} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">{competition.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Memorial Deadline</div>
                            <div className="font-medium">
                              {new Date(competition.memorialDeadline).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Oral Rounds</div>
                            <div className="font-medium">
                              {new Date(competition.oralRounds).toLocaleDateString("en-IN")}
                            </div>
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

            {activeTab === "notifications" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">All Notifications</h3>
                <div className="space-y-4">
                  {teamData.notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${notification.read ? "bg-gray-50" : "bg-blue-50 border-blue-200"}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className="font-semibold text-gray-800">{notification.title}</div>
                            {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                        </div>
                        <div className="text-xs text-gray-500">{notification.date}</div>
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
