'use client'

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Enter location or ZIP"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
            />
          </div>

          {/* Min Price */}
          <div className="relative">
            <input
              type="number"
              placeholder="Min Price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
            />
          </div>

          {/* Max Price */}
          <div className="relative">
            <input
              type="number"
              placeholder="Max Price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4">
          <button
            className="w-full bg-[#E31837] text-white py-2 px-4 rounded-md hover:bg-[#CC1630] transition-colors duration-200 flex items-center justify-center"
            aria-label="Search homes"
          >
            SEARCH HOMES
          </button>
        </div>
      </div>
    </div>
  )
} 