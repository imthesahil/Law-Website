"use client"
import {
  Settings,
  Users,
  Trophy,
  Calendar,
  DollarSign,
  BarChart3,
  Plus,
  Edit,
  Eye,
  Download,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Filter,
  UserCheck,
  FileText,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AdminPortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedCompetition, setSelectedCompetition] = useState("all")

  // Mock data - in real app, this would come from API
  const adminData = {
    totalCompetitions: 12,
    activeCompetitions: 5,
    totalTeams: 248,
    totalRevenue: "₹12,45,000",
    pendingApprovals: 15,
    competitions: [
      {
        id: "constitutional-moot",
        name: "National Constitutional Law Moot Court",
        status: "Active",
        registeredTeams: 64,
        maxTeams: 64,
        registrationFee: 2500,
        totalRevenue: "₹1,60,000",
        startDate: "2025-03-15",
        endDate: "2025-03-17",
        location: "Supreme Court of India, New Delhi",
        pendingApprovals: 5,
        paidTeams: 59,
      },
      {
        id: "commercial-arbitration",
        name: "International Commercial Arbitration Moot",
        status: "Registration Open",
        registeredTeams: 32,
        maxTeams: 48,
        registrationFee: 3000,
        totalRevenue: "₹96,000",
        startDate: "2025-04-22",
        endDate: "2025-04-24",
        location: "Mumbai International Arbitration Centre",
        pendingApprovals: 8,
        paidTeams: 24,
      },
      {
        id: "environmental-law",
        name: "Environmental Law Advocacy Challenge",
        status: "Coming Soon",
        registeredTeams: 0,
        maxTeams: 32,
        registrationFee: 2000,
        totalRevenue: "₹0",
        startDate: "2025-05-10",
        endDate: "2025-05-12",
        location: "National Green Tribunal, Delhi",
        pendingApprovals: 0,
        paidTeams: 0,
      },
    ],
    teamApprovals: [
      {
        id: 1,
        teamName: "Legal Eagles",
        institution: "NLSIU Bangalore",
        competition: "Constitutional Moot",
        registrationDate: "2025-01-20",
        paymentStatus: "Paid",
        documentsStatus: "Complete",
        status: "Pending Review",
        members: 3,
      },
      {
        id: 2,
        teamName: "Justice Warriors",
        institution: "NALSAR Hyderabad",
        competition: "Commercial Arbitration",
        registrationDate: "2025-01-21",
        paymentStatus: "Pending",
        documentsStatus: "Incomplete",
        status: "Pending Payment",
        members: 2,
      },
      {
        id: 3,
        teamName: "Law Makers",
        institution: "Gujarat National Law University",
        competition: "Constitutional Moot",
        registrationDate: "2025-01-19",
        paymentStatus: "Paid",
        documentsStatus: "Complete",
        status: "Approved",
        members: 3,
      },
    ],
    judges: [
      {
        id: 1,
        name: "Hon'ble Justice Rajesh Kumar",
        designation: "Former High Court Judge",
        specialization: "Constitutional Law",
        assignedCompetitions: 2,
        status: "Active",
        email: "justice.kumar@example.com",
      },
      {
        id: 2,
        name: "Dr. Priya Sharma",
        designation: "Senior Advocate",
        specialization: "Commercial Law",
        assignedCompetitions: 1,
        status: "Active",
        email: "priya.sharma@example.com",
      },
    ],
    recentActivity: [
      {
        id: 1,
        action: "Team Registration",
        description: "Legal Eagles registered for Constitutional Moot",
        timestamp: "2025-01-22 10:30 AM",
        type: "registration",
      },
      {
        id: 2,
        action: "Payment Received",
        description: "₹2,500 payment received from Justice Warriors",
        timestamp: "2025-01-22 09:15 AM",
        type: "payment",
      },
      {
        id: 3,
        action: "Judge Assignment",
        description: "Justice Kumar assigned to Constitutional Moot",
        timestamp: "2025-01-21 04:20 PM",
        type: "assignment",
      },
    ],
    analytics: {
      registrationTrend: [
        { month: "Oct", registrations: 45 },
        { month: "Nov", registrations: 62 },
        { month: "Dec", registrations: 78 },
        { month: "Jan", registrations: 96 },
      ],
      revenueTrend: [
        { month: "Oct", revenue: 112500 },
        { month: "Nov", revenue: 186000 },
        { month: "Dec", revenue: 234000 },
        { month: "Jan", revenue: 288000 },
      ],
    },
  }

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "competitions", label: "Competitions", icon: Trophy },
    { id: "teams", label: "Team Management", icon: Users },
    { id: "judges", label: "Judge Management", icon: UserCheck },
    { id: "payments", label: "Financial Management", icon: DollarSign },
    { id: "scheduling", label: "Scheduling", icon: Calendar },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
      case "paid":
      case "complete":
        return "bg-green-100 text-green-800"
      case "pending":
      case "pending review":
      case "pending payment":
      case "incomplete":
        return "bg-yellow-100 text-yellow-800"
      case "registration open":
        return "bg-blue-100 text-blue-800"
      case "coming soon":
        return "bg-gray-100 text-gray-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a5f3f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light">Admin Panel</h1>
              <p className="text-white/80 mt-2">Comprehensive platform management and analytics</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-[#d4af37] text-[#1a5f3f] hover:bg-[#d4af37]/90">
                <Plus className="w-4 h-4 mr-2" />
                Create Competition
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a5f3f] bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
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
                        <Trophy className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{adminData.totalCompetitions}</div>
                        <div className="text-gray-600">Total Competitions</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{adminData.totalTeams}</div>
                        <div className="text-gray-600">Registered Teams</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{adminData.totalRevenue}</div>
                        <div className="text-gray-600">Total Revenue</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{adminData.pendingApprovals}</div>
                        <div className="text-gray-600">Pending Approvals</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Competitions Overview */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Active Competitions</h3>
                  <div className="space-y-4">
                    {adminData.competitions
                      .filter((comp) => comp.status === "Active" || comp.status === "Registration Open")
                      .map((competition) => (
                        <div key={competition.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-800">{competition.name}</h4>
                              <div className="text-sm text-gray-600">{competition.location}</div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}
                            >
                              {competition.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-gray-600">Teams</div>
                              <div className="font-medium">
                                {competition.registeredTeams}/{competition.maxTeams}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-600">Revenue</div>
                              <div className="font-medium">{competition.totalRevenue}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Pending</div>
                              <div className="font-medium text-yellow-600">{competition.pendingApprovals}</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Paid</div>
                              <div className="font-medium text-green-600">{competition.paidTeams}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Recent Activity</h3>
                  <div className="space-y-4">
                    {adminData.recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                            activity.type === "registration"
                              ? "bg-blue-100"
                              : activity.type === "payment"
                                ? "bg-green-100"
                                : "bg-purple-100"
                          }`}
                        >
                          {activity.type === "registration" && <Users className="w-5 h-5 text-blue-600" />}
                          {activity.type === "payment" && <DollarSign className="w-5 h-5 text-green-600" />}
                          {activity.type === "assignment" && <UserCheck className="w-5 h-5 text-purple-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{activity.action}</div>
                          <div className="text-sm text-gray-600">{activity.description}</div>
                        </div>
                        <div className="text-xs text-gray-500">{activity.timestamp}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "competitions" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Competition Management</h3>
                    <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New Competition
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {adminData.competitions.map((competition) => (
                      <div key={competition.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{competition.name}</h4>
                            <div className="text-sm text-gray-600 mt-1 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {competition.location}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center mt-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(competition.startDate).toLocaleDateString("en-IN")} -{" "}
                              {new Date(competition.endDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}
                            >
                              {competition.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Registered Teams</div>
                            <div className="font-medium">
                              {competition.registeredTeams}/{competition.maxTeams}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div
                                className="bg-[#1a5f3f] h-2 rounded-full"
                                style={{ width: `${(competition.registeredTeams / competition.maxTeams) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Registration Fee</div>
                            <div className="font-medium">₹{competition.registrationFee.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Total Revenue</div>
                            <div className="font-medium text-green-600">{competition.totalRevenue}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Pending Approvals</div>
                            <div className="font-medium text-yellow-600">{competition.pendingApprovals}</div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Analytics
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "teams" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Team Management & Approvals</h3>
                    <div className="flex items-center space-x-4">
                      <select
                        value={selectedCompetition}
                        onChange={(e) => setSelectedCompetition(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                      >
                        <option value="all">All Competitions</option>
                        {adminData.competitions.map((comp) => (
                          <option key={comp.id} value={comp.id}>
                            {comp.name}
                          </option>
                        ))}
                      </select>
                      <Button variant="outline" className="bg-transparent">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {adminData.teamApprovals.map((team) => (
                      <div key={team.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{team.teamName}</h4>
                            <div className="text-sm text-gray-600 mt-1">{team.institution}</div>
                            <div className="text-sm text-gray-600">
                              {team.competition} • {team.members} members
                            </div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(team.status)}`}
                            >
                              {team.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Registration Date</div>
                            <div className="font-medium">
                              {new Date(team.registrationDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Payment Status</div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(team.paymentStatus)}`}
                            >
                              {team.paymentStatus}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Documents</div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(team.documentsStatus)}`}
                            >
                              {team.documentsStatus}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            <Eye className="w-4 h-4 mr-2" />
                            Review
                          </Button>
                          {team.status === "Pending Review" && (
                            <>
                              <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Approve
                              </Button>
                              <Button size="sm" className="bg-red-600 text-white hover:bg-red-700">
                                <XCircle className="w-4 h-4 mr-2" />
                                Reject
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <FileText className="w-4 h-4 mr-2" />
                            Documents
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "judges" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Judge Management</h3>
                    <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Invite Judge
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {adminData.judges.map((judge) => (
                      <div key={judge.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800">{judge.name}</h4>
                            <div className="text-sm text-gray-600 mt-1">{judge.designation}</div>
                            <div className="text-sm text-gray-600">Specialization: {judge.specialization}</div>
                            <div className="text-sm text-gray-600">Email: {judge.email}</div>
                          </div>
                          <div className="text-right">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(judge.status)}`}
                            >
                              {judge.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-600">Assigned Competitions</div>
                            <div className="font-medium">{judge.assignedCompetitions}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Status</div>
                            <div className="font-medium">{judge.status}</div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                            <Eye className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Calendar className="w-4 h-4 mr-2" />
                            Assign Competition
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Financial Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-800">{adminData.totalRevenue}</div>
                    <div className="text-green-600">Total Revenue</div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-800">₹45,000</div>
                    <div className="text-yellow-600">Pending Payments</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-800">₹15,000</div>
                    <div className="text-blue-600">Refunds Processed</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {adminData.competitions.map((competition) => (
                    <div key={competition.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-800">{competition.name}</h4>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{competition.totalRevenue}</div>
                          <div className="text-sm text-gray-600">Revenue</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Registration Fee</div>
                          <div className="font-medium">₹{competition.registrationFee.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Paid Teams</div>
                          <div className="font-medium text-green-600">{competition.paidTeams}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Pending Payments</div>
                          <div className="font-medium text-yellow-600">
                            {competition.registeredTeams - competition.paidTeams}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "scheduling" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Competition Scheduling</h3>
                <div className="space-y-6">
                  {adminData.competitions.map((competition) => (
                    <div key={competition.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{competition.name}</h4>
                          <div className="text-sm text-gray-600 mt-1 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {competition.location}
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(competition.status)}`}
                        >
                          {competition.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">Start Date</div>
                            <div className="font-medium">
                              {new Date(competition.startDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-[#1a5f3f] mr-2" />
                          <div>
                            <div className="text-sm text-gray-600">End Date</div>
                            <div className="font-medium">
                              {new Date(competition.endDate).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Rounds
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <UserCheck className="w-4 h-4 mr-2" />
                          Assign Judges
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <MapPin className="w-4 h-4 mr-2" />
                          Venue Management
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Registration Trend</h4>
                    <div className="space-y-3">
                      {adminData.analytics.registrationTrend.map((data, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600">{data.month}</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                              <div
                                className="bg-[#1a5f3f] h-2 rounded-full"
                                style={{ width: `${(data.registrations / 100) * 100}%` }}
                              ></div>
                            </div>
                            <span className="font-medium">{data.registrations}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Revenue Trend</h4>
                    <div className="space-y-3">
                      {adminData.analytics.revenueTrend.map((data, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600">{data.month}</span>
                          <div className="flex items-center">
                            <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${(data.revenue / 300000) * 100}%` }}
                              ></div>
                            </div>
                            <span className="font-medium">₹{(data.revenue / 1000).toFixed(0)}K</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Competition Performance</h4>
                  <div className="space-y-4">
                    {adminData.competitions.map((competition) => (
                      <div key={competition.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-gray-800">{competition.name}</h5>
                          <span className="text-sm text-gray-600">
                            {competition.registeredTeams}/{competition.maxTeams} teams
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#1a5f3f] h-2 rounded-full"
                            style={{ width: `${(competition.registeredTeams / competition.maxTeams) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                          <span>Revenue: {competition.totalRevenue}</span>
                          <span>{Math.round((competition.registeredTeams / competition.maxTeams) * 100)}% filled</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Platform Settings</h3>
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">General Settings</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                        <input
                          type="text"
                          defaultValue="LegalAcademy"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                        <input
                          type="email"
                          defaultValue="admin@legalacademy.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Competition Settings</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Default Registration Fee</label>
                        <input
                          type="number"
                          defaultValue="2500"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Team Size</label>
                        <input
                          type="number"
                          defaultValue="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-[#1a5f3f] text-white hover:bg-[#1a5f3f]/90">Save Settings</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
