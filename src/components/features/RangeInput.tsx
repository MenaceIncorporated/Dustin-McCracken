'use client'

interface RangeInputProps {
  label: string
  minValue: number
  maxValue: number
  onMinChange: (value: number) => void
  onMaxChange: (value: number) => void
  minPlaceholder?: string
  maxPlaceholder?: string
  currency?: boolean
}

export default function RangeInput({
  label,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minPlaceholder = 'Min',
  maxPlaceholder = 'Max',
  currency = false
}: RangeInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#666666]">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            {currency && (
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]">$</span>
            )}
            <input
              type="number"
              value={minValue || ''}
              onChange={(e) => onMinChange(Number(e.target.value))}
              placeholder={minPlaceholder}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
            />
          </div>
        </div>
        <span className="text-[#666666]">to</span>
        <div className="flex-1">
          <div className="relative">
            {currency && (
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]">$</span>
            )}
            <input
              type="number"
              value={maxValue || ''}
              onChange={(e) => onMaxChange(Number(e.target.value))}
              placeholder={maxPlaceholder}
              className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 