'use client'

interface FilterGroupProps {
  title: string
  children: React.ReactNode
}

export default function FilterGroup({ title, children }: FilterGroupProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-[#333333] mb-4">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
} 