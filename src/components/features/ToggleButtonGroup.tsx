'use client'

interface ToggleButtonGroupProps {
  label: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

export default function ToggleButtonGroup({
  label,
  options,
  selected,
  onChange
}: ToggleButtonGroupProps) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#666666]">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggleOption(option)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              selected.includes(option)
                ? 'bg-[#E31837] text-white'
                : 'bg-gray-100 text-[#666666] hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
} 