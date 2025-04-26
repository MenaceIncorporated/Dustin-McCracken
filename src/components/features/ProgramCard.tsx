'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProgramCardProps {
  id: string
  name: string
  description: string
  requirements: string[]
  benefits: string[]
  imageUrl: string
  typicalRate: string
  minDownPayment: string
  maxLoanAmount: string
  isSelected: boolean
  isCompared: boolean
  onSelect: () => void
  onToggleCompare: () => void
  onCheckEligibility: () => void
}

export default function ProgramCard({
  id,
  name,
  description,
  requirements,
  benefits,
  imageUrl,
  typicalRate,
  minDownPayment,
  maxLoanAmount,
  isSelected,
  isCompared,
  onSelect,
  onToggleCompare,
  onCheckEligibility
}: ProgramCardProps) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onSelect}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
        {isCompared && (
          <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Selected for Comparison
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Rate</p>
            <p className="text-gray-600">{typicalRate}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Min Down</p>
            <p className="text-gray-600">{minDownPayment}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Max Loan</p>
            <p className="text-gray-600">{maxLoanAmount}</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <Button 
            onClick={(e) => {
              e.stopPropagation()
              onCheckEligibility()
            }}
            className="w-full"
          >
            Check Eligibility
          </Button>
          <Button 
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              onToggleCompare()
            }}
            className={`w-full ${isCompared ? 'bg-gray-100' : ''}`}
          >
            {isCompared ? 'Remove from Comparison' : 'Add to Compare'}
          </Button>
        </div>
      </div>
    </div>
  )
} 