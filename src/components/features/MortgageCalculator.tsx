'use client'

import { useState, useEffect } from 'react'
import { Slider } from '@/components/ui/Slider'

interface MortgageCalculatorProps {
  defaultPrice?: number
}

export default function MortgageCalculator({ defaultPrice = 500000 }: MortgageCalculatorProps) {
  const [homePrice, setHomePrice] = useState(defaultPrice)
  const [downPayment, setDownPayment] = useState(defaultPrice * 0.2) // 20% default
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  useEffect(() => {
    // Calculate monthly mortgage payment
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    setMonthlyPayment(monthlyPayment)
  }, [homePrice, downPayment, loanTerm, interestRate])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Mortgage Calculator
      </h2>

      <div className="space-y-6">
        {/* Home Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Price: ${homePrice.toLocaleString()}
          </label>
          <Slider
            value={[homePrice]}
            min={100000}
            max={2000000}
            step={5000}
            onValueChange={([val]) => setHomePrice(val)}
            label="Home Price"
            formatValue={(val) => `$${val.toLocaleString()}`}
          />
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment: ${downPayment.toLocaleString()} ({((downPayment / homePrice) * 100).toFixed(1)}%)
          </label>
          <Slider
            value={[downPayment]}
            min={0}
            max={homePrice}
            step={5000}
            onValueChange={([val]) => setDownPayment(val)}
            label="Down Payment"
            formatValue={(val) => `$${val.toLocaleString()} (${((val / homePrice) * 100).toFixed(1)}%)`}
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term
          </label>
          <div className="flex gap-4">
            {[15, 20, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 py-2 px-4 rounded-md ${
                  loanTerm === term
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {term} years
              </button>
            ))}
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate: {interestRate}%
          </label>
          <Slider
            value={[interestRate * 10]}
            min={25}
            max={100}
            step={1}
            onValueChange={([val]) => setInterestRate(val / 10)}
            label="Interest Rate"
            formatValue={(val) => `${(val / 10).toFixed(1)}%`}
          />
        </div>

        {/* Results */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Estimated Monthly Payment
            </h3>
            <p className="text-4xl font-bold text-primary">
              ${Math.round(monthlyPayment).toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Principal and Interest Only
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Loan Amount</p>
              <p className="font-medium">${(homePrice - downPayment).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Down Payment</p>
              <p className="font-medium">${downPayment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600">Loan Term</p>
              <p className="font-medium">{loanTerm} years</p>
            </div>
            <div>
              <p className="text-gray-600">Interest Rate</p>
              <p className="font-medium">{interestRate}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 