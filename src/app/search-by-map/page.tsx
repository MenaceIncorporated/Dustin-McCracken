'use client'

import { useState } from 'react'
import PropertyCard from '@/components/features/PropertyCard'
import MapView from '@/components/features/MapView'
import { Property } from '@/types/property'

// Mock data - replace with your actual data source
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
  },
  // Add more mock properties as needed
]

export default function SearchByMapPage() {
  const [properties] = useState<Property[]>(mockProperties)
  const [selectedProperty, setSelectedProperty] = useState<Property | undefined>()
  const [center] = useState({ lat: 34.0522, lng: -118.2437 })
  const [zoom] = useState(12)

  const handleMarkerClick = (property: Property) => {
    setSelectedProperty(property)
  }

  return (
    <div className="flex h-[calc(100vh-64px)]">
      {/* Map Section */}
      <div className="w-2/3 h-full">
        <MapView
          properties={properties}
          center={center}
          zoom={zoom}
          onMarkerClick={handleMarkerClick}
          selectedProperty={selectedProperty}
        />
      </div>

      {/* Property List Section */}
      <div className="w-1/3 h-full overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              isActive={selectedProperty?.id === property.id}
              onClick={() => setSelectedProperty(property)}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 