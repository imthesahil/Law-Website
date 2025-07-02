"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Clock, X } from "lucide-react"

// Event type
export type CalendarEvent = {
  id: number
  title: string
  date: string // YYYY-MM-DD
  endDate?: string // YYYY-MM-DD
  time?: string
  location?: string
  description?: string
  type?: string
  status?: string
}

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const days = []
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i))
  }
  return days
}

function getMonthMatrix(year: number, month: number) {
  const days = getMonthDays(year, month)
  const matrix = []
  let week: Date[] = []
  // Fill initial empty days
  for (let i = 0; i < days[0].getDay(); i++) week.push(null as any)
  days.forEach((day) => {
    week.push(day)
    if (week.length === 7) {
      matrix.push(week)
      week = []
    }
  })
  if (week.length) {
    while (week.length < 7) week.push(null as any)
    matrix.push(week)
  }
  return matrix
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function CalendarView({ events }: { events: CalendarEvent[] }) {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)

  const matrix = getMonthMatrix(year, month)

  // Map events by date string
  const eventsByDate: Record<string, CalendarEvent[]> = {}
  events.forEach((event) => {
    const start = new Date(event.date)
    const end = event.endDate ? new Date(event.endDate) : start
    for (
      let d = new Date(start);
      d <= end;
      d.setDate(d.getDate() + 1)
    ) {
      const key = d.toISOString().slice(0, 10)
      if (!eventsByDate[key]) eventsByDate[key] = []
      eventsByDate[key].push(event)
    }
  })

  function prevMonth() {
    if (month === 0) {
      setMonth(11)
      setYear((y) => y - 1)
    } else {
      setMonth((m) => m - 1)
    }
  }
  function nextMonth() {
    if (month === 11) {
      setMonth(0)
      setYear((y) => y + 1)
    } else {
      setMonth((m) => m + 1)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto mt-10">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous Month"
        >
          <Calendar className="w-5 h-5 text-[#1a5f3f]" />
        </button>
        <div className="text-xl font-semibold text-[#1a5f3f]">
          {monthNames[month]} {year}
        </div>
        <button
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Next Month"
        >
          <Calendar className="w-5 h-5 text-[#1a5f3f] rotate-180" />
        </button>
      </div>
      {/* Day Names */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map((d) => (
          <div key={d} className="text-xs font-medium text-gray-500 text-center">{d}</div>
        ))}
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {matrix.flat().map((date, i) => {
          const key = date ? date.toISOString().slice(0, 10) : `empty-${i}`
          const isToday = date && date.toDateString() === new Date().toDateString()
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * i, duration: 0.3 }}
              className={`rounded-xl min-h-[80px] bg-gray-50 border border-gray-200 p-1 flex flex-col items-center relative ${isToday ? "ring-2 ring-[#d4af37]" : ""}`}
            >
              <div className={`text-xs font-semibold mb-1 ${isToday ? "text-[#d4af37]" : "text-gray-700"}`}>
                {date ? date.getDate() : ""}
              </div>
              <div className="flex flex-col gap-1 w-full">
                {date && eventsByDate[key]?.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="truncate text-xs px-2 py-1 rounded-lg bg-[#1a5f3f]/10 text-[#1a5f3f] hover:bg-[#d4af37]/80 hover:text-white transition-colors w-full text-left"
                  >
                    {event.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
      {/* Event Popover */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative border border-[#1a5f3f]/10"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-[#1a5f3f] transition-colors"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-[#d4af37] mr-2" />
                <div className="text-lg font-semibold text-[#1a5f3f]">{selectedEvent.title}</div>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Date:</span> {selectedEvent.date}
                {selectedEvent.endDate && selectedEvent.endDate !== selectedEvent.date && (
                  <> - {selectedEvent.endDate}</>
                )}
              </div>
              {selectedEvent.time && (
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Time:</span> {selectedEvent.time}
                </div>
              )}
              {selectedEvent.location && (
                <div className="text-sm text-gray-600 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-[#1a5f3f]" /> {selectedEvent.location}
                </div>
              )}
              {selectedEvent.description && (
                <div className="text-sm text-gray-700 mb-2">
                  {selectedEvent.description}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 