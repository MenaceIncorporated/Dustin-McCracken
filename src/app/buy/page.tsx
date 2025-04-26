'use client'

import Header from '@/components/layout/Header'
import PropertyCard from '@/components/features/PropertyCard'
import { Property } from '@/types/property'

// Mock data
const mockProperties: Property[] = [
  {
    id: '1',
    imageUrl: '/property1.jpg',
    price: 750000,
    address: '123 Main St, Los Angeles, CA',
    beds: 3,
    baths: 2,
    sqft: 2000,
    lat: 34.0522,
    lng: -118.2437
  }
]

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Properties for Sale</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onClick={() => {}}
            />
          ))}
        </div>
      </main>
    </div>
  )
} 