'use client'

import Header from '@/components/layout/Header'
import SearchBar from '@/components/layout/SearchBar'
import PropertyCard from '@/components/features/PropertyCard'

// Sample property data
const sampleProperties = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: 750000,
    address: '123 Main St, Anytown, CA',
    beds: 4,
    baths: 3,
    sqft: 2500
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: 950000,
    address: '456 Oak Ave, Somewhere, CA',
    beds: 3,
    baths: 2,
    sqft: 2000
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: 550000,
    address: '789 Pine Rd, Anywhere, CA',
    beds: 2,
    baths: 2,
    sqft: 1500
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#333333] mb-4">
              Explore ALL your options before selling your home
            </h1>
            <p className="text-xl text-[#666666]">
              724 listings available
            </p>
          </div>
          
          <SearchBar />
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                imageUrl={property.imageUrl}
                price={property.price}
                address={property.address}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
