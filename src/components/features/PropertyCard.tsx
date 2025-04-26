'use client'

import Image from 'next/image'

type PropertyCardProps = {
  imageUrl: string
  price: number
  address: string
  beds: number
  baths: number
  sqft: number
}

export default function PropertyCard({ imageUrl, price, address, beds, baths, sqft }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
            {beds} Beds
          </div>
          <div className="flex items-center">
            <span className="mr-1">🚿</span>
            {baths} Baths
          </div>
          <div className="flex items-center">
            <span className="mr-1">📏</span>
            {sqft} sqft
          </div>
        </div>
      </div>
    </div>
  )
} 