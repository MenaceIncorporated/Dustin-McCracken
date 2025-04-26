'use client'

import { Property } from '@/types/property'

interface MapViewProps {
  properties: Property[]
  center: { lat: number; lng: number }
  zoom: number
  onMarkerClick: (property: Property) => void
  selectedProperty?: Property
}

export default function MapView({
  properties,
  center,
  zoom,
  onMarkerClick,
  selectedProperty
}: MapViewProps) {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">Map View</h3>
        <p className="text-sm text-gray-500 mt-1">
          {properties.length} properties in this area
        </p>
      </div>
    </div>
  )
} 