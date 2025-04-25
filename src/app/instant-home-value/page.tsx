'use client'

import Image from 'next/image'
import Header from '@/components/layout/Header'
import HomeValueForm from '@/components/features/HomeValueForm'

export default function InstantHomeValuePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/home-value/1920/1080"
            alt="Modern house at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Discover Your Home's True Value
                </h1>
                <p className="text-xl mb-8 max-w-lg">
                  Get an instant, accurate estimate of your home's market value. Our advanced algorithm analyzes recent sales and market trends to provide you with a reliable valuation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E31837] rounded-full flex items-center justify-center mr-3">✓</span>
                    Free, instant valuation
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E31837] rounded-full flex items-center justify-center mr-3">✓</span>
                    No obligation or commitment
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-[#E31837] rounded-full flex items-center justify-center mr-3">✓</span>
                    Accurate market analysis
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <HomeValueForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-12">
            How Our Home Value Calculator Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Market Analysis</h3>
              <p className="text-[#666666]">
                We analyze recent sales of similar properties in your area to determine current market trends and values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Property Details</h3>
              <p className="text-[#666666]">
                Our system considers your home's size, features, and condition to provide a more accurate valuation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Local Expertise</h3>
              <p className="text-[#666666]">
                We combine our local market knowledge with advanced algorithms to give you the most reliable estimate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 