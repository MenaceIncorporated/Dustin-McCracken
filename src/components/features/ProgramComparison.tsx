'use client'

import { Button } from '@/components/ui/button'

interface Program {
  id: string
  name: string
  description: string
  requirements: string[]
  benefits: string[]
  typicalRate: string
  minDownPayment: string
  maxLoanAmount: string
}

interface ProgramComparisonProps {
  programs: Program[]
  onClose: () => void
}

export default function ProgramComparison({ programs, onClose }: ProgramComparisonProps) {
  const comparisonCategories = [
    {
      name: 'Basic Information',
      items: [
        { label: 'Typical Rate', key: 'typicalRate' },
        { label: 'Minimum Down Payment', key: 'minDownPayment' },
        { label: 'Maximum Loan Amount', key: 'maxLoanAmount' }
      ]
    },
    {
      name: 'Requirements',
      key: 'requirements',
      type: 'list'
    },
    {
      name: 'Benefits',
      key: 'benefits',
      type: 'list'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Compare Mortgage Programs
        </h2>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-50 border-b"></th>
              {programs.map((program) => (
                <th
                  key={program.id}
                  className="text-left p-4 bg-gray-50 border-b min-w-[250px]"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {program.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {program.description}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonCategories.map((category) => (
              <>
                <tr key={`${category.name}-header`}>
                  <td
                    colSpan={programs.length + 1}
                    className="text-lg font-semibold text-gray-900 p-4 bg-gray-50 border-b"
                  >
                    {category.name}
                  </td>
                </tr>
                {category.type === 'list' ? (
                  <tr key={category.key}>
                    <td className="p-4 border-b"></td>
                    {programs.map((program) => (
                      <td key={program.id} className="p-4 border-b">
                        <ul className="list-disc list-inside space-y-2">
                          {(program[category.key as keyof Program] as string[]).map((item: string, index: number) => (
                            <li key={index} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                ) : (
                  category.items?.map((item) => (
                    <tr key={item.key}>
                      <td className="p-4 border-b font-medium text-gray-700">
                        {item.label}
                      </td>
                      {programs.map((program) => (
                        <td key={program.id} className="p-4 border-b text-gray-600">
                          {program[item.key as keyof Program]}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>
          Note: Rates and terms are subject to change and may vary based on credit score,
          down payment, and other factors. Contact us for personalized quotes.
        </p>
      </div>
    </div>
  )
} 