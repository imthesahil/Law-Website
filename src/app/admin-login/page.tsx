"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Eye, EyeOff, Lock, Mail, GraduationCap, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (email === "admin@legalacademy.com" && password === "admin123") {
        // In a real app, you'd store the token in localStorage or cookies
        localStorage.setItem("adminToken", "dummy-token")
        router.push("/portals/admin")
      } else {
        setError("Invalid email or password")
      }
      setIsLoading(false)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a5f3f] via-[#2d7a5f] to-[#1a5f3f] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-6 left-6"
      >
        <Link href="/">
          <Button
            variant="ghost"
            className="text-white hover:text-[#d4af37] hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      {/* Login Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#d4af37] rounded-2xl mb-4 shadow-lg">
            <GraduationCap className="w-8 h-8 text-[#1a5f3f]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-white/70">Sign in to access the admin dashboard</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          variants={formVariants}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-[#1a5f3f] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="admin@legalacademy.com"
                  required
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5f3f] focus:border-[#1a5f3f] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1a5f3f] hover:bg-[#2d7a5f] text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </form>

          {/* Demo Credentials */}
          <motion.div
            variants={itemVariants}
            className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-2 font-medium">Demo Credentials:</p>
            <p className="text-xs text-gray-500">Email: admin@legalacademy.com</p>
            <p className="text-xs text-gray-500">Password: admin123</p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-6"
        >
          <p className="text-white/60 text-sm">
            © 2025 LegalAcademy. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 