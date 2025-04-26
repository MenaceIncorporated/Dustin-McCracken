'use client'

import Header from '@/components/layout/Header'
import ContactForm from '@/components/features/ContactForm'
import TeamInfo from '@/components/features/TeamInfo'

const teamMember = {
  id: 1,
  name: "Dustin McCracken",
  role: "Real Estate Agent",
  imageUrl: "/dustin-mccracken.jpg",
  bio: "Dedicated real estate professional with years of experience in helping clients find their perfect home."
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <ContactForm />
          </div>
          <div>
            <TeamInfo teamMember={teamMember} />
          </div>
        </div>
      </main>
    </div>
  )
} 