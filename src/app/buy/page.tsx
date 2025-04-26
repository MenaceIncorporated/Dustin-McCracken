'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import SearchBar from '@/components/layout/SearchBar'
import PropertyCard from '@/components/features/PropertyCard'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/Slider'

const properties = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: 750000,
    address: '123 Main St, Anytown, CA',
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: 'Single Family',
    status: 'For Sale',
    yearBuilt: 2020,
    features: ['Pool', 'Garage', 'Updated Kitchen']
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: 950000,
    address: '456 Oak Ave, Somewhere, CA',
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: 'Townhouse',
    status: 'For Sale',
    yearBuilt: 2019,
    features: ['Balcony', 'Smart Home', 'Hardwood Floors']
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: 550000,
    address: '789 Pine Rd, Anywhere, CA',
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: 'Condo',
    status: 'For Sale',
    yearBuilt: 2021,
    features: ['Gym', 'Parking', 'Security']
  }
]

const propertyTypes = ['Single Family', 'Townhouse', 'Condo', 'Multi-Family']
const features = ['Pool', 'Garage', 'Updated Kitchen', 'Balcony', 'Smart Home', 'Hardwood Floors', 'Gym', 'Parking', 'Security']

export default function BuyPage() {
  const [priceRange, setPriceRange] = useState([0, 2000000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [minBeds, setMinBeds] = useState(0)
  const [minBaths, setMinBaths] = useState(0)
  const [sortBy, setSortBy] = useState('price-asc')

  const filteredProperties = properties
    .filter(property => 
      (selectedTypes.length === 0 || selectedTypes.includes(property.type)) &&
      property.price >= priceRange[0] &&
      property.price <= priceRange[1] &&
      property.beds >= minBeds &&
      property.baths >= minBaths &&
      (selectedFeatures.length === 0 || 
        selectedFeatures.every(feature => property.features.includes(feature)))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'beds-desc':
          return b.beds - a.beds
        case 'sqft-desc':
          return b.sqft - a.sqft
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchBar />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <Slider
                  defaultValue={[0, 2000000]}
                  max={2000000}
                  step={50000}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </h3>
                <div className="space-y-2">
                  {propertyTypes.map(type => (
                    <div key={type} className="flex items-center">
                      <Checkbox
                        id={`type-${type}`}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTypes([...selectedTypes, type])
                          } else {
                            setSelectedTypes(selectedTypes.filter(t => t !== type))
                          }
                        }}
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="ml-2 text-sm text-gray-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beds & Baths */}
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Beds
                    </label>
                    <select
                      value={minBeds}
                      onChange={(e) => setMinBeds(Number(e.target.value))}
                      className="w-full rounded-md border-gray-300"
                      aria-label="Minimum number of bedrooms"
                    >
                      {[0, 1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num}+
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Baths
                    </label>
                    <select
                      value={minBaths}
                      onChange={(e) => setMinBaths(Number(e.target.value))}
                      className="w-full rounded-md border-gray-300"
                      aria-label="Minimum number of bathrooms"
                    >
                      {[0, 1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>
                          {num}+
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Features
                </h3>
                <div className="space-y-2">
                  {features.map(feature => (
                    <div key={feature} className="flex items-center">
                      <Checkbox
                        id={`feature-${feature}`}
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedFeatures([...selectedFeatures, feature])
                          } else {
                            setSelectedFeatures(selectedFeatures.filter(f => f !== feature))
                          }
                        }}
                      />
                      <label
                        htmlFor={`feature-${feature}`}
                        className="ml-2 text-sm text-gray-600"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Properties */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} Properties Found
              </h1>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border-gray-300"
                aria-label="Sort properties by"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="beds-desc">Most Beds</option>
                <option value="sqft-desc">Largest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 