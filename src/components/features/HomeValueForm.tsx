'use client'

import { useState } from 'react'

export default function HomeValueForm() {
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Searching for:', address)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-[#333333] mb-6">What's Your Home Worth?</h2>
      <p className="text-[#666666] mb-6">
        Enter your address below to receive a free, instant home value estimate.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-[#666666] mb-2">
            Property Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your full address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837] pr-12"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground hover:text-foreground"
              aria-label="Search"
            >
              <span className="text-lg">🔍</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E31837] text-white py-3 rounded-md font-medium hover:bg-[#CC1630] transition-colors duration-200"
        >
          Get Instant Value
        </button>

        <p className="text-sm text-[#666666] text-center">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  )
} 