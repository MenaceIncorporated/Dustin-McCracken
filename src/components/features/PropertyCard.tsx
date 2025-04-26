'use client'

import Image from 'next/image'
import { Property } from '@/types/property'

interface PropertyCardProps extends Property {
  isActive?: boolean
  onClick: () => void
}

export default function PropertyCard({
  id,
  imageUrl,
  price,
  address,
  beds,
  baths,
  sqft,
  isActive,
  onClick
}: PropertyCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 ${
        isActive ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={address}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xl font-semibold text-gray-900">
          ${price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600 mt-1">{address}</div>
        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="mr-1">🛏️</span>
            {beds} {beds === 1 ? 'Bed' : 'Beds'}
          </div>
          <div className="flex items-center">
            <span className="mr-1">🚿</span>
            {baths} {baths === 1 ? 'Bath' : 'Baths'}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📏</span>
            {sqft.toLocaleString()} sqft
          </div>
        </div>
      </div>
    </div>
  )
} 