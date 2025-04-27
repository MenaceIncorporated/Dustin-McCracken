import React, { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export default function SearchHomesComponent() {
  const [location, setLocation] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', { location, minPrice, maxPrice })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-text-light" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="form-input pl-10"
                placeholder="Enter location or ZIP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div>
              <input
                type="text"
                className="form-input"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            
            <div>
              <input
                type="text"
                className="form-input"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mt-4">
            <button
              type="submit"
              className="btn-primary w-full"
            >
              SEARCH HOMES
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 