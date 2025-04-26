'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

interface InstantOfferFormProps {
  onSubmit: (data: {
    address: string
    propertyType: string
    beds: number
    baths: number
    sqft: number
    yearBuilt: number
    condition: string
    additionalInfo: string
  }) => void
}

export default function InstantOfferForm({ onSubmit }: InstantOfferFormProps) {
  const [address, setAddress] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')
  const [sqft, setSqft] = useState('')
  const [yearBuilt, setYearBuilt] = useState('')
  const [condition, setCondition] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      address,
      propertyType,
      beds: parseInt(beds),
      baths: parseInt(baths),
      sqft: parseInt(sqft),
      yearBuilt: parseInt(yearBuilt),
      condition,
      additionalInfo,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <Input
            type="text"
            placeholder="Enter your property address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="pl-10"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
              aria-label="Select property type"
            >
              <option value="">Select type</option>
              <option value="single-family">Single Family</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="multi-family">Multi-Family</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Condition
            </label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              required
              aria-label="Select property condition"
            >
              <option value="">Select condition</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="needs-work">Needs Work</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beds
            </label>
            <Input
              type="number"
              min="0"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Baths
            </label>
            <Input
              type="number"
              min="0"
              step="0.5"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Square Feet
            </label>
            <Input
              type="number"
              min="0"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year Built
          </label>
          <Input
            type="number"
            min="1800"
            max={new Date().getFullYear()}
            value={yearBuilt}
            onChange={(e) => setYearBuilt(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <Textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Any additional details about your property..."
            rows={4}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked === true)}
          required
        />
        <label
          htmlFor="terms"
          className="text-sm text-gray-600"
        >
          I agree to the terms and conditions and understand that this is an initial estimate
        </label>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={!termsAccepted}
      >
        Get Instant Offer
      </Button>
    </form>
  )
} 