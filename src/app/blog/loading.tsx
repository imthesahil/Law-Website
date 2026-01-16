export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1B4332]">
      <section className="py-16 pt-32 text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-white/20 rounded w-48 mx-auto mb-4"></div>
          <div className="h-6 bg-white/10 rounded w-96 mx-auto"></div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 pb-20 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
