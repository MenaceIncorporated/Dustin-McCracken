'use client'

import Image from 'next/image'
import { Bed, Bath, Ruler } from 'lucide-react'

interface PropertyCardProps {
  id: number
  imageUrl: string
  price: string
  address: string
  beds: number
  baths: number
  sqft: number
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
  isActive = false,
  onClick
}: PropertyCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-all duration-200 ${
        isActive ? 'ring-2 ring-[#E31837]' : 'hover:shadow-md'
      }`}
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
        <div className="text-[#E31837] font-bold text-xl mb-2">
          ${price}
        </div>
        
        <div className="text-[#333333] font-medium mb-4">
          {address}
        </div>
        
        <div className="flex items-center space-x-4 text-[#666666]">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center">
            <Ruler className="h-4 w-4 mr-1" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
} 