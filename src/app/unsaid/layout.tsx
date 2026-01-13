import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unsaid by Live Legal - The Internal Monologue, Unmuted",
  description:
    "A space for the 3:00 AM thoughts, the 'I don't belong' feelings, and everything you've been taught to edit out.",
  icons: {
    icon: "/images/unsaid-logo.png",
  },
}

export default function UnsaidLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

