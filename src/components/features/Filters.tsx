'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/Slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

interface FiltersProps {
  onApply: (filters: {
    priceRange: [number, number]
    beds: number[]
    baths: number[]
    propertyTypes: string[]
    yearBuilt: [number, number]
    squareFootage: [number, number]
    amenities: string[]
    lotSize: [number, number]
    parkingSpaces: number[]
  }) => void
  onSaveSearch?: (name: string) => void
  onClose: () => void
}

export default function Filters({ onApply, onSaveSearch, onClose }: FiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000])
  const [beds, setBeds] = useState<number[]>([])
  const [baths, setBaths] = useState<number[]>([])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [yearBuilt, setYearBuilt] = useState<[number, number]>([1950, new Date().getFullYear()])
  const [squareFootage, setSquareFootage] = useState<[number, number]>([0, 10000])
  const [amenities, setAmenities] = useState<string[]>([])
  const [lotSize, setLotSize] = useState<[number, number]>([0, 5])
  const [parkingSpaces, setParkingSpaces] = useState<number[]>([])
  const [showSaveSearch, setShowSaveSearch] = useState(false)
  const [searchName, setSearchName] = useState('')

  const handleApply = () => {
    onApply({
      priceRange,
      beds,
      baths,
      propertyTypes,
      yearBuilt,
      squareFootage,
      amenities,
      lotSize,
      parkingSpaces
    })
  }

  const handleSaveSearch = () => {
    if (onSaveSearch && searchName) {
      onSaveSearch(searchName)
      setShowSaveSearch(false)
      setSearchName('')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Advanced Filters</h2>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-2">Price Range</h3>
            <Slider
              value={priceRange}
              min={0}
              max={2000000}
              step={10000}
              onChange={setPriceRange}
              label="Price Range"
              formatValue={(val) => `$${val.toLocaleString()}`}
            />
          </div>

          {/* Square Footage */}
          <div>
            <h3 className="font-medium mb-2">Square Footage</h3>
            <Slider
              value={squareFootage}
              min={0}
              max={10000}
              step={100}
              onChange={setSquareFootage}
              label="Square Footage"
              formatValue={(val) => `${val.toLocaleString()} sqft`}
            />
          </div>

          {/* Year Built */}
          <div>
            <h3 className="font-medium mb-2">Year Built</h3>
            <Slider
              value={yearBuilt}
              min={1900}
              max={new Date().getFullYear()}
              step={1}
              onChange={setYearBuilt}
              label="Year Built"
            />
          </div>

          {/* Lot Size */}
          <div>
            <h3 className="font-medium mb-2">Lot Size (Acres)</h3>
            <Slider
              value={lotSize}
              min={0}
              max={5}
              step={0.1}
              onChange={setLotSize}
              label="Lot Size"
              formatValue={(val) => `${val} acres`}
            />
          </div>

          {/* Beds */}
          <div>
            <h3 className="font-medium mb-2">Bedrooms</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Checkbox
                  key={num}
                  id={`bed-${num}`}
                  checked={beds.includes(num)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBeds([...beds, num])
                    } else {
                      setBeds(beds.filter((b) => b !== num))
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Baths */}
          <div>
            <h3 className="font-medium mb-2">Bathrooms</h3>
            <div className="flex flex-wrap gap-2">
              {[1, 1.5, 2, 2.5, 3, 3.5, 4].map((num) => (
                <Checkbox
                  key={num}
                  id={`bath-${num}`}
                  checked={baths.includes(num)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setBaths([...baths, num])
                    } else {
                      setBaths(baths.filter((b) => b !== num))
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-medium mb-2">Property Types</h3>
            <div className="flex flex-wrap gap-2">
              {['Single Family', 'Condo', 'Townhouse', 'Multi-Family', 'Land', 'Mobile'].map((type) => (
                <Checkbox
                  key={type}
                  id={`type-${type}`}
                  checked={propertyTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setPropertyTypes([...propertyTypes, type])
                    } else {
                      setPropertyTypes(propertyTypes.filter((t) => t !== type))
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-medium mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Pool', 'Garage', 'Central AC', 'Fireplace', 'Waterfront',
                'Mountain View', 'Gated Community', 'Smart Home', 'Solar Panels'
              ].map((amenity) => (
                <Checkbox
                  key={amenity}
                  id={`amenity-${amenity}`}
                  checked={amenities.includes(amenity)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setAmenities([...amenities, amenity])
                    } else {
                      setAmenities(amenities.filter((a) => a !== amenity))
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={() => setShowSaveSearch(true)}>
            Save Search
          </Button>
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
        </div>

        {showSaveSearch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-medium mb-4">Save Search</h3>
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Enter a name for this search"
                className="w-full border rounded-md px-3 py-2 mb-4"
              />
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setShowSaveSearch(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveSearch}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 