'use client'

import Header from '@/components/layout/Header'
import Image from 'next/image'
import { CheckCircle2, Home, DollarSign, TrendingUp, Shield } from 'lucide-react'

export default function BuyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#E31837] mb-8">BUYING A HOME</h1>
        </div>
      </section>

      {/* Investment Formula Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#E31837] mb-6">Investment Formula</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 border-2 border-[#E31837] rounded-lg">
                <Home className="h-12 w-12 text-[#E31837] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-center text-[#666666]">Prime location with growth potential</p>
              </div>
              <div className="flex flex-col items-center p-6 border-2 border-[#E31837] rounded-lg">
                <DollarSign className="h-12 w-12 text-[#E31837] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Value</h3>
                <p className="text-center text-[#666666]">Competitive pricing and appreciation</p>
              </div>
              <div className="flex flex-col items-center p-6 border-2 border-[#E31837] rounded-lg">
                <TrendingUp className="h-12 w-12 text-[#E31837] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Potential</h3>
                <p className="text-center text-[#666666]">Future development opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#E31837] mb-6">The Buying Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-[#666666]">Meet with our team to discuss your needs and preferences</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Property Search</h3>
                  <p className="text-[#666666]">We'll help you find properties that match your criteria</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Viewing & Selection</h3>
                  <p className="text-[#666666]">Schedule viewings and select your ideal property</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Offer & Negotiation</h3>
                  <p className="text-[#666666]">We'll guide you through making an offer and negotiations</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Closing Process</h3>
                  <p className="text-[#666666]">Complete paperwork and finalize your purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#E31837] mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/property4/800/600"
                  alt="Professional real estate team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-[#666666]">Our experienced team will guide you through every step of the process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Market Knowledge</h3>
                    <p className="text-[#666666]">Deep understanding of local market trends and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-[#E31837] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                    <p className="text-[#666666]">Tailored approach to meet your specific needs and preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 