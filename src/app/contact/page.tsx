'use client'

import Header from '@/components/layout/Header'
import ContactForm from '@/components/features/ContactForm'
import TeamInfo from '@/components/features/TeamInfo'
import { Search } from 'lucide-react'

// Sample team member data
const teamMember = {
  id: 1,
  name: 'Josh Barker',
  role: 'Principal Broker',
  imageUrl: 'https://picsum.photos/seed/team1/400/400',
  bio: 'With over 15 years of experience in the real estate industry, Josh has helped hundreds of clients achieve their real estate goals. His expertise in market analysis and negotiation has made him one of the most trusted brokers in the region.'
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#E31837] mb-8">Contact Josh Barker Real Estate</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search Box */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#E31837] mb-4">Search Properties</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by location, price, or property type"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837] pr-10"
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] hover:text-[#E31837]"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Team Info */}
              <TeamInfo teamMember={teamMember} />

              {/* Testimonials */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#E31837] mb-4">Client Testimonials</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#E31837] pl-4">
                    <p className="text-[#666666] italic">"Josh and his team made the home buying process smooth and stress-free. Their attention to detail and market knowledge was impressive."</p>
                    <p className="text-[#333333] font-medium mt-2">- Sarah Johnson</p>
                  </div>
                  <div className="border-l-4 border-[#E31837] pl-4">
                    <p className="text-[#666666] italic">"Professional, knowledgeable, and always available. I couldn't have asked for a better real estate experience."</p>
                    <p className="text-[#333333] font-medium mt-2">- Michael Chen</p>
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