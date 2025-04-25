'use client'

import Image from 'next/image'
import { Bed, Bath, Ruler, BedDouble, Maximize2 } from 'lucide-react'

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
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-[1.02] ${
        isActive ? 'ring-2 ring-[#E31837]' : ''
      }`}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={`Property at ${address}`}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="text-[#E31837] font-bold text-xl mb-2">
          {price}
        </div>
        
        <div className="text-gray-700 mb-2">{address}</div>
        
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <BedDouble className="w-5 h-5 mr-1" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-1" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="w-5 h-5 mr-1" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  )
} 