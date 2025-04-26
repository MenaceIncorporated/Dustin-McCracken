'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import MortgageCalculator from '@/components/features/MortgageCalculator'
import ProgramCard from '@/components/features/ProgramCard'
import EligibilityCalculator from '@/components/features/EligibilityCalculator'
import ProgramComparison from '@/components/features/ProgramComparison'

const mortgagePrograms = [
  {
    id: 'conventional',
    name: 'Conventional Loan',
    description: 'Traditional mortgage with competitive rates and flexible terms.',
    requirements: [
      'Credit score of 620 or higher',
      'Down payment as low as 3%',
      'Debt-to-income ratio under 45%',
      'Private Mortgage Insurance (PMI) required if down payment is less than 20%'
    ],
    benefits: [
      'Competitive interest rates',
      'Various term lengths available',
      'No upfront mortgage insurance fee',
      'Can be used for primary residence, second home, or investment property'
    ],
    imageUrl: 'https://picsum.photos/seed/conventional/800/400',
    typicalRate: '6.5%',
    minDownPayment: '3%',
    maxLoanAmount: '$726,200'
  },
  {
    id: 'fha',
    name: 'FHA Loan',
    description: 'Government-backed mortgage ideal for first-time homebuyers.',
    requirements: [
      'Credit score of 580 or higher for 3.5% down payment',
      'Credit score of 500-579 for 10% down payment',
      'Debt-to-income ratio under 50%',
      'Must be primary residence'
    ],
    benefits: [
      'Lower credit score requirements',
      'Lower down payment options',
      'More flexible debt-to-income ratios',
      'Available to first-time and repeat buyers'
    ],
    imageUrl: 'https://picsum.photos/seed/fha/800/400',
    typicalRate: '6.75%',
    minDownPayment: '3.5%',
    maxLoanAmount: '$472,030'
  },
  {
    id: 'va',
    name: 'VA Loan',
    description: 'Exclusive mortgage benefit for veterans and service members.',
    requirements: [
      'Must be veteran, active duty, or eligible surviving spouse',
      'Valid Certificate of Eligibility (COE)',
      'Satisfactory credit score (usually 620 or higher)',
      'Must be primary residence'
    ],
    benefits: [
      'No down payment required',
      'No private mortgage insurance',
      'Competitive interest rates',
      'Limited closing costs'
    ],
    imageUrl: 'https://picsum.photos/seed/va/800/400',
    typicalRate: '6.25%',
    minDownPayment: '0%',
    maxLoanAmount: '$726,200'
  },
  {
    id: 'usda',
    name: 'USDA Loan',
    description: 'Zero-down-payment mortgage for rural home buyers.',
    requirements: [
      'Property must be in USDA-eligible rural area',
      'Income cannot exceed 115% of area median',
      'Credit score of 640 or higher recommended',
      'Must be primary residence'
    ],
    benefits: [
      'No down payment required',
      'Lower mortgage insurance rates',
      'Flexible credit requirements',
      'Can finance closing costs'
    ],
    imageUrl: 'https://picsum.photos/seed/usda/800/400',
    typicalRate: '6.75%',
    minDownPayment: '0%',
    maxLoanAmount: 'Varies by county'
  },
  {
    id: 'jumbo',
    name: 'Jumbo Loan',
    description: 'Mortgage for luxury and high-cost area properties.',
    requirements: [
      'Credit score of 700 or higher typically required',
      'Down payment of 10-20%',
      'Debt-to-income ratio under 43%',
      'Significant cash reserves'
    ],
    benefits: [
      'Finance luxury properties',
      'Competitive rates for qualified buyers',
      'Various term options',
      'Interest-only options available'
    ],
    imageUrl: 'https://picsum.photos/seed/jumbo/800/400',
    typicalRate: '7.0%',
    minDownPayment: '10%',
    maxLoanAmount: '$2,000,000+'
  }
]

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [showEligibility, setShowEligibility] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [programsToCompare, setProgramsToCompare] = useState<string[]>([])

  const toggleProgramComparison = (programId: string) => {
    setProgramsToCompare(prev => {
      if (prev.includes(programId)) {
        return prev.filter(id => id !== programId)
      }
      if (prev.length < 3) {
        return [...prev, programId]
      }
      return prev
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mortgage Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our various mortgage programs designed to meet your unique needs.
            Whether you're a first-time homebuyer or a veteran, we have options for you.
          </p>
          {programsToCompare.length > 0 && (
            <div className="mt-6">
              <button
                onClick={() => setShowComparison(true)}
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Compare Selected Programs ({programsToCompare.length})
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mortgagePrograms.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
              isSelected={selectedProgram === program.id}
              isCompared={programsToCompare.includes(program.id)}
              onSelect={() => setSelectedProgram(program.id)}
              onToggleCompare={() => toggleProgramComparison(program.id)}
              onCheckEligibility={() => {
                setSelectedProgram(program.id)
                setShowEligibility(true)
              }}
            />
          ))}
        </div>

        {showEligibility && selectedProgram && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <EligibilityCalculator
              programId={selectedProgram}
              onClose={() => setShowEligibility(false)}
            />
          </div>
        )}

        {showComparison && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
              <ProgramComparison
                programs={mortgagePrograms.filter(p => programsToCompare.includes(p.id))}
                onClose={() => {
                  setShowComparison(false)
                  setProgramsToCompare([])
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Calculate Your Monthly Payment
          </h2>
          <MortgageCalculator />
        </div>
      </main>
    </div>
  )
} 