'use client'

import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

interface MapViewProps {
  properties: {
    id: string
    lat: number
    lng: number
    price: string
    address: string
  }[]
  onMarkerClick: (propertyId: string) => void
  activePropertyId?: string
}

export default function MapView({ properties, onMarkerClick, activePropertyId }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 34.0522, lng: -118.2437 }, // Los Angeles coordinates
      zoom: 12,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    })

    mapInstanceRef.current = map

    // Create markers for each property
    const markers = properties.map(property => {
      const marker = new google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map,
        icon: {
          url: '/marker.png',
          scaledSize: new google.maps.Size(32, 32)
        }
      })

      // Add click event listener
      marker.addListener('click', () => {
        onMarkerClick(property.id)
      })

      return marker
    })

    markersRef.current = markers

    // Cleanup
    return () => {
      markers.forEach(marker => marker.setMap(null))
    }
  }, [properties, onMarkerClick])

  // Update active marker
  useEffect(() => {
    if (!mapInstanceRef.current) return

    markersRef.current.forEach(marker => {
      const propertyId = marker.get('propertyId')
      if (propertyId === activePropertyId) {
        marker.setIcon({
          url: '/marker-active.png',
          scaledSize: new google.maps.Size(40, 40)
        })
      } else {
        marker.setIcon({
          url: '/marker.png',
          scaledSize: new google.maps.Size(32, 32)
        })
      }
    })
  }, [activePropertyId])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{properties.length} Properties</span>
        </div>
      </div>
    </div>
  )
} 