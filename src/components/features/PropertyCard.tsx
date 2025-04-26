'use client'

import Image from 'next/image'

interface PropertyCardProps {
  id: number
  imageUrl: string
  price: number
  address: string
  beds: number
  baths: number
  sqft: number
  type?: string
  status?: string
  yearBuilt?: number
  features?: string[]
  onClick?: () => void
}

export default function PropertyCard({
  id,
  imageUrl,
  price,
  address,
  beds,
  baths,
  sqft,
  type,
  status,
  yearBuilt,
  features,
  onClick
}: PropertyCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={address}
          fill
          className="object-cover"
        />
        {status && (
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {status}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${price.toLocaleString()}
            </p>
            <p className="text-gray-600">{address}</p>
          </div>
          {type && (
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {type}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span className="flex items-center">
            <span className="mr-1">🛏️</span>
            {beds} beds
          </span>
          <span className="flex items-center">
            <span className="mr-1">🚿</span>
            {baths} baths
          </span>
          <span className="flex items-center">
            <span className="mr-1">📏</span>
            {sqft.toLocaleString()} sqft
          </span>
        </div>

        {yearBuilt && (
          <p className="text-sm text-gray-500 mb-4">
            Built in {yearBuilt}
          </p>
        )}

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map(feature => (
              <span 
                key={feature}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 