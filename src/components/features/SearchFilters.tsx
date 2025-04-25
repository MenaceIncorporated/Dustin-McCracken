'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

interface SearchFiltersProps {
  onApply: (filters: {
    priceRange: [number, number]
    beds: number[]
    baths: number[]
    propertyTypes: string[]
    features: string[]
  }) => void
}

export default function SearchFilters({ onApply }: SearchFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000])
  const [beds, setBeds] = useState<number[]>([])
  const [baths, setBaths] = useState<number[]>([])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [features, setFeatures] = useState<string[]>([])

  const handleBedChange = (value: number) => {
    setBeds(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const handleBathChange = (value: number) => {
    setBaths(prev => 
      prev.includes(value) 
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  const handlePropertyTypeChange = (type: string) => {
    setPropertyTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    )
  }

  const handleFeatureChange = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onApply({
      priceRange,
      beds,
      baths,
      propertyTypes,
      features,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={2000000}
          step={10000}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Beds</h3>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, '5+'].map((value) => (
            <Checkbox
              key={value}
              id={`bed-${value}`}
              checked={beds.includes(typeof value === 'number' ? value : 6)}
              onCheckedChange={() => handleBedChange(typeof value === 'number' ? value : 6)}
              label={`${value} ${value === 1 ? 'Bed' : 'Beds'}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Baths</h3>
        <div className="grid grid-cols-3 gap-2">
          {[1, 1.5, 2, 2.5, 3, '3+'].map((value) => (
            <Checkbox
              key={value}
              id={`bath-${value}`}
              checked={baths.includes(typeof value === 'number' ? value : 4)}
              onCheckedChange={() => handleBathChange(typeof value === 'number' ? value : 4)}
              label={`${value} ${value === 1 ? 'Bath' : 'Baths'}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Property Type</h3>
        <div className="space-y-2">
          {['Single Family', 'Condo', 'Townhouse', 'Multi-Family'].map((type) => (
            <Checkbox
              key={type}
              id={`type-${type}`}
              checked={propertyTypes.includes(type)}
              onCheckedChange={() => handlePropertyTypeChange(type)}
              label={type}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
        <div className="space-y-2">
          {['Garage', 'Pool', 'Fireplace', 'Air Conditioning', 'Basement'].map((feature) => (
            <Checkbox
              key={feature}
              id={`feature-${feature}`}
              checked={features.includes(feature)}
              onCheckedChange={() => handleFeatureChange(feature)}
              label={feature}
            />
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full">
        <Search className="mr-2 h-4 w-4" />
        Apply Filters
      </Button>
    </form>
  )
} 