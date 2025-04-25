'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface SearchFormProps {
  onSubmit: (filters: SearchFilters) => void
}

interface SearchFilters {
  propertyType: string[]
  housingSubType: string[]
  propertyStatus: string[]
  priceRange: [number, number]
  beds: number[]
  baths: number[]
  sqftRange: [number, number]
  yearBuilt: [number, number]
  features: string[]
}

const propertyTypes = ['Single Family', 'Multi Family', 'Condo', 'Townhouse', 'Land']
const housingSubTypes = ['Detached', 'Attached', 'Semi-Detached']
const propertyStatus = ['Active', 'Pending', 'Sold']
const features = ['Garage', 'Pool', 'Fireplace', 'Basement', 'Central AC']

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    propertyType: [],
    housingSubType: [],
    propertyStatus: [],
    priceRange: [0, 2000000],
    beds: [],
    baths: [],
    sqftRange: [0, 5000],
    yearBuilt: [1900, 2024],
    features: []
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(filters)
  }

  const handleCheckboxChange = (category: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Property Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Property Type</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {propertyTypes.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={filters.propertyType.includes(type)}
                onCheckedChange={() => handleCheckboxChange('propertyType', type)}
              />
              <label htmlFor={type} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Housing Sub Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Housing Sub Type</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {housingSubTypes.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={filters.housingSubType.includes(type)}
                onCheckedChange={() => handleCheckboxChange('housingSubType', type)}
              />
              <label htmlFor={type} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Property Status */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Property Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {propertyStatus.map(status => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={status}
                checked={filters.propertyStatus.includes(status)}
                onCheckedChange={() => handleCheckboxChange('propertyStatus', status)}
              />
              <label htmlFor={status} className="text-sm">{status}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Price Range</h3>
        <Slider
          value={filters.priceRange}
          min={0}
          max={2000000}
          step={10000}
          onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
        />
        <div className="flex justify-between text-sm text-[#666666]">
          <span>${filters.priceRange[0].toLocaleString()}</span>
          <span>${filters.priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Beds & Baths */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Beds</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, '6+'].map(beds => (
              <div key={beds} className="flex items-center space-x-2">
                <Checkbox
                  id={`beds-${beds}`}
                  checked={filters.beds.includes(Number(beds))}
                  onCheckedChange={() => handleCheckboxChange('beds', String(beds))}
                />
                <label htmlFor={`beds-${beds}`} className="text-sm">{beds}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Baths</h3>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, '5+'].map(baths => (
              <div key={baths} className="flex items-center space-x-2">
                <Checkbox
                  id={`baths-${baths}`}
                  checked={filters.baths.includes(Number(baths))}
                  onCheckedChange={() => handleCheckboxChange('baths', String(baths))}
                />
                <label htmlFor={`baths-${baths}`} className="text-sm">{baths}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Square Footage */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Square Footage</h3>
        <Slider
          value={filters.sqftRange}
          min={0}
          max={5000}
          step={100}
          onValueChange={(value) => setFilters(prev => ({ ...prev, sqftRange: value as [number, number] }))}
        />
        <div className="flex justify-between text-sm text-[#666666]">
          <span>{filters.sqftRange[0].toLocaleString()} sqft</span>
          <span>{filters.sqftRange[1].toLocaleString()} sqft</span>
        </div>
      </div>

      {/* Year Built */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Year Built</h3>
        <Slider
          value={filters.yearBuilt}
          min={1900}
          max={2024}
          step={1}
          onValueChange={(value) => setFilters(prev => ({ ...prev, yearBuilt: value as [number, number] }))}
        />
        <div className="flex justify-between text-sm text-[#666666]">
          <span>{filters.yearBuilt[0]}</span>
          <span>{filters.yearBuilt[1]}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map(feature => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={feature}
                checked={filters.features.includes(feature)}
                onCheckedChange={() => handleCheckboxChange('features', feature)}
              />
              <label htmlFor={feature} className="text-sm">{feature}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full">
          Search Properties
        </Button>
      </div>
    </form>
  )
} 