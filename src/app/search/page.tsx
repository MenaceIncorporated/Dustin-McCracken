'use client'

import { useState } from 'react'
import { SearchIcon, Filter, MapPin } from 'lucide-react'
import SearchFilters from '@/components/features/SearchFilters'
import PropertyCard from '@/components/features/PropertyCard'

// Sample data - replace with actual API data
const sampleProperties = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: '$750,000',
    address: '123 Main St, Anytown, CA 90210',
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: 'Single Family'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: '$625,000',
    address: '456 Oak Ave, Somewhere, CA 90211',
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: 'Condo'
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: '$895,000',
    address: '789 Pine St, Elsewhere, CA 90212',
    beds: 5,
    baths: 4,
    sqft: 3200,
    type: 'Single Family'
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/seed/property4/800/600',
    price: '$550,000',
    address: '321 Elm St, Nowhere, CA 90213',
    beds: 3,
    baths: 2,
    sqft: 1600,
    type: 'Townhouse'
  }
]

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 2000000] as [number, number],
    beds: [] as number[],
    baths: [] as number[],
    propertyTypes: [] as string[],
    features: [] as string[]
  })

  const handleApplyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters)
    setShowFilters(false)
  }

  const filteredProperties = sampleProperties.filter(property => {
    const matchesSearch = 
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPrice = 
      property.price.replace(/[^0-9]/g, '') >= filters.priceRange[0] &&
      property.price.replace(/[^0-9]/g, '') <= filters.priceRange[1]

    const matchesBeds = 
      filters.beds.length === 0 || 
      filters.beds.includes(property.beds)

    const matchesBaths = 
      filters.baths.length === 0 || 
      filters.baths.includes(property.baths)

    const matchesType = 
      filters.propertyTypes.length === 0 || 
      filters.propertyTypes.includes(property.type)

    return matchesSearch && matchesPrice && matchesBeds && matchesBaths && matchesType
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by location, price, or property type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <button
              type="button"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={() => setShowFilters(true)}
            >
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-600">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {filteredProperties.length} Properties Found
          </h1>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Los Angeles, CA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <SearchFilters onApply={handleApplyFilters} />
            </div>
          </div>

          {/* Property Listings */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  imageUrl={property.imageUrl}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No properties found matching your criteria
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowFilters(false)}
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SearchFilters onApply={handleApplyFilters} />
          </div>
        </div>
      )}
    </div>
  )
} 