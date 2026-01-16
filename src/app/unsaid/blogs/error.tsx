'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#fefae0] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">
          We couldn't load the blogs. This might be a temporary issue with our content system.
        </p>
        <button
          onClick={reset}
          className="bg-[#d4a373] text-white px-8 py-3 rounded-lg hover:bg-[#b8915f] transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
