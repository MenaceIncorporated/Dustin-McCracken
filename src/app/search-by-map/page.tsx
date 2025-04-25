'use client'

import { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import MapView from '@/components/features/MapView'
import PropertyCard from '@/components/features/PropertyCard'
import SearchFilters from '@/components/features/SearchFilters'

interface Property {
  id: number;
  imageUrl: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  lat?: number;
  lng?: number;
}

// Sample property data
const sampleProperties: Property[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: '$750,000',
    address: '123 Main St, Anytown, CA',
    beds: 4,
    baths: 3,
    sqft: 2500,
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: '$950,000',
    address: '456 Oak Ave, Somewhere, CA',
    beds: 3,
    baths: 2,
    sqft: 2000,
    lat: 37.7749,
    lng: -122.4194
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: '$550,000',
    address: '789 Pine Rd, Anywhere, CA',
    beds: 2,
    baths: 2,
    sqft: 1500,
    lat: 37.7749,
    lng: -122.4194
  }
]

export default function SearchByMap() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [activePropertyId, setActivePropertyId] = useState<string>()
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

  const handleMarkerClick = (propertyId: string) => {
    setActivePropertyId(propertyId)
    // Scroll to the property card
    const element = document.getElementById(`property-${propertyId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const filteredProperties = sampleProperties.filter(property => {
    const matchesSearch = 
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.type.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPrice = 
      parseInt(property.price.replace(/[^0-9]/g, '')) >= filters.priceRange[0] &&
      parseInt(property.price.replace(/[^0-9]/g, '')) <= filters.priceRange[1]

    const matchesBeds = 
      !filters.beds || property.beds >= filters.beds

    const matchesBaths = 
      !filters.baths || property.baths >= filters.baths

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
                <Search className="h-5 w-5 text-gray-400" />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 h-[600px]">
            <MapView
              properties={filteredProperties}
              onMarkerClick={handleMarkerClick}
              activePropertyId={activePropertyId}
            />
          </div>

          {/* Property Listings */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <SearchFilters onApply={handleApplyFilters} />
            </div>
            <div className="space-y-4">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  id={`property-${property.id}`}
                  className={`transition-all duration-200 ${
                    activePropertyId === property.id ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <PropertyCard
                    id={property.id}
                    imageUrl={property.imageUrl}
                    price={property.price}
                    address={property.address}
                    beds={property.beds}
                    baths={property.baths}
                    sqft={property.sqft}
                    isActive={activePropertyId === property.id}
                    onClick={() => setActivePropertyId(property.id)}
                  />
                </div>
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