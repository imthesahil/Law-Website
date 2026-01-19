'use client'

export default function BlogDate({ date }: { date: string }) {
  return (
    <span suppressHydrationWarning>
      {new Date(date).toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })}
    </span>
  )
}

