'use client'

import Header from '@/components/layout/Header'
import PropertyCard from '@/components/features/PropertyCard'

const properties = [
  {
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: 750000,
    address: '123 Main St, Anytown, CA',
    beds: 4,
    baths: 3,
    sqft: 2500
  },
  {
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: 950000,
    address: '456 Oak Ave, Somewhere, CA',
    beds: 3,
    baths: 2,
    sqft: 2000
  },
  {
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: 550000,
    address: '789 Pine Rd, Anywhere, CA',
    beds: 2,
    baths: 2,
    sqft: 1500
  }
]

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Properties for Sale</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
            />
          ))}
        </div>
      </main>
    </div>
  )
} 