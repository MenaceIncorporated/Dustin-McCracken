'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface FiltersProps {
  onApply: (filters: {
    priceRange: [number, number]
    beds: number[]
    baths: number[]
    propertyTypes: string[]
  }) => void
  onClose: () => void
}

export default function Filters({ onApply, onClose }: FiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000])
  const [beds, setBeds] = useState<number[]>([1, 2, 3, 4, 5])
  const [baths, setBaths] = useState<number[]>([1, 2, 3, 4])
  const [propertyTypes, setPropertyTypes] = useState<string[]>(['House', 'Condo', 'Townhouse'])

  const handleApply = () => {
    onApply({
      priceRange,
      beds,
      baths,
      propertyTypes
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        
        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              min={0}
              max={2000000}
              step={10000}
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Beds */}
          <div>
            <h3 className="font-medium mb-2">Bedrooms</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((bed) => (
                <Checkbox
                  key={bed}
                  checked={beds.includes(bed)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBeds([...beds, bed])
                    } else {
                      setBeds(beds.filter((b) => b !== bed))
                    }
                  }}
                  label={`${bed}+`}
                />
              ))}
            </div>
          </div>

          {/* Baths */}
          <div>
            <h3 className="font-medium mb-2">Bathrooms</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((bath) => (
                <Checkbox
                  key={bath}
                  checked={baths.includes(bath)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBaths([...baths, bath])
                    } else {
                      setBaths(baths.filter((b) => b !== bath))
                    }
                  }}
                  label={`${bath}+`}
                />
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-medium mb-2">Property Types</h3>
            <div className="flex flex-wrap gap-2">
              {['House', 'Condo', 'Townhouse'].map((type) => (
                <Checkbox
                  key={type}
                  checked={propertyTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setPropertyTypes([...propertyTypes, type])
                    } else {
                      setPropertyTypes(propertyTypes.filter((t) => t !== type))
                    }
                  }}
                  label={type}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )
} 