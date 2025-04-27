'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/Slider'

interface EligibilityCalculatorProps {
  programId: string
  onClose: () => void
}

export default function EligibilityCalculator({
  programId,
  onClose
}: EligibilityCalculatorProps) {
  const [annualIncome, setAnnualIncome] = useState(75000)
  const [monthlyDebts, setMonthlyDebts] = useState(2000)
  const [creditScore, setCreditScore] = useState(700)
  const [downPayment, setDownPayment] = useState(50000)
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [dti, setDti] = useState(0)
  const [ltv, setLtv] = useState(0)
  const [estimatedHomePrice, setEstimatedHomePrice] = useState(500000)
  const [result, setResult] = useState<{
    eligible: boolean
    reasons: string[]
    recommendations: string[]
    metrics: {
      dti: number
      ltv: number
      piti: number
      maxLoanAmount: number
    }
  } | null>(null)

  const calculateEligibility = () => {
    const monthlyIncomeCalc = annualIncome / 12
    setMonthlyIncome(monthlyIncomeCalc)

    const dtiCalc = (monthlyDebts / monthlyIncomeCalc) * 100
    setDti(dtiCalc)

    const ltvCalc = ((estimatedHomePrice - downPayment) / estimatedHomePrice) * 100
    setLtv(ltvCalc)

    // Estimate PITI (Principal, Interest, Taxes, Insurance)
    const interestRate = 0.065 // 6.5% typical rate
    const loanAmount = estimatedHomePrice - downPayment
    const monthlyRate = interestRate / 12
    const numberOfPayments = 30 * 12
    const principal = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const taxes = (estimatedHomePrice * 0.012) / 12 // Estimate 1.2% annual property tax
    const insurance = (estimatedHomePrice * 0.005) / 12 // Estimate 0.5% annual insurance
    const pmi = ltvCalc > 80 ? (loanAmount * 0.007) / 12 : 0 // PMI if LTV > 80%
    const piti = principal + taxes + insurance + pmi

    let eligible = true
    const reasons: string[] = []
    const recommendations: string[] = []

    switch (programId) {
      case 'conventional':
        if (creditScore < 620) {
          eligible = false
          reasons.push('Credit score below 620')
          recommendations.push('Work on improving your credit score')
        } else if (creditScore < 680) {
          recommendations.push('Consider improving credit score for better rates')
        }

        if (dtiCalc > 45) {
          eligible = false
          reasons.push('Debt-to-income ratio above 45%')
          recommendations.push('Focus on reducing monthly debt obligations')
        } else if (dtiCalc > 36) {
          recommendations.push('Consider reducing debt for better terms')
        }

        if (ltvCalc > 97) {
          eligible = false
          reasons.push('Down payment too low (LTV > 97%)')
          recommendations.push('Increase down payment to at least 3%')
        } else if (ltvCalc > 80) {
          recommendations.push('Increase down payment to 20% to avoid PMI')
        }

        if ((piti / monthlyIncomeCalc) * 100 > 28) {
          recommendations.push('Housing payment may be high relative to income')
        }
        break

      case 'fha':
        if (creditScore < 500) {
          eligible = false
          reasons.push('Credit score below 500')
          recommendations.push('Work on improving your credit score')
        } else if (creditScore < 580) {
          if (ltvCalc > 90) {
            eligible = false
            reasons.push('Credit score below 580 requires 10% down payment')
            recommendations.push('Increase down payment to 10% or improve credit score')
          }
        }

        if (dtiCalc > 50) {
          eligible = false
          reasons.push('Debt-to-income ratio above 50%')
          recommendations.push('Focus on reducing monthly debt obligations')
        } else if (dtiCalc > 43) {
          recommendations.push('Consider reducing debt for better terms')
        }

        if (ltvCalc > 96.5) {
          eligible = false
          reasons.push('Down payment too low (LTV > 96.5%)')
          recommendations.push('Increase down payment to at least 3.5%')
        }
        break

      case 'va':
        if (creditScore < 620) {
          recommendations.push('Credit score below recommended 620')
        }

        if (dtiCalc > 41) {
          recommendations.push('Debt-to-income ratio above recommended 41%')
        }
        break

      case 'usda':
        if (creditScore < 640) {
          recommendations.push('Credit score below recommended 640')
        }

        if (annualIncome > 125000) {
          eligible = false
          reasons.push('Income exceeds USDA limits')
        }

        if (dtiCalc > 41) {
          recommendations.push('Debt-to-income ratio above recommended 41%')
        }
        break

      case 'jumbo':
        if (creditScore < 700) {
          eligible = false
          reasons.push('Credit score below 700')
          recommendations.push('Work on improving your credit score')
        }

        if (dtiCalc > 43) {
          eligible = false
          reasons.push('Debt-to-income ratio above 43%')
          recommendations.push('Focus on reducing monthly debt obligations')
        }

        if (ltvCalc > 90) {
          eligible = false
          reasons.push('Down payment too low (LTV > 90%)')
          recommendations.push('Increase down payment to at least 10%')
        }

        if (downPayment < 100000) {
          recommendations.push('Consider larger down payment for better terms')
        }
        break
    }

    setResult({
      eligible,
      reasons,
      recommendations,
      metrics: {
        dti: dtiCalc,
        ltv: ltvCalc,
        piti: piti,
        maxLoanAmount: estimatedHomePrice - downPayment
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">
          Check Your Eligibility
        </h3>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Income: ${annualIncome.toLocaleString()}
          </label>
          <Slider
            value={annualIncome}
            min={30000}
            max={500000}
            step={1000}
            onChange={setAnnualIncome}
            label="Annual Income"
            formatValue={(val) => `$${val.toLocaleString()}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Debts: ${monthlyDebts.toLocaleString()}
          </label>
          <Slider
            value={monthlyDebts}
            min={0}
            max={10000}
            step={100}
            onChange={setMonthlyDebts}
            label="Monthly Debts"
            formatValue={(val) => `$${val.toLocaleString()}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Credit Score: {creditScore}
          </label>
          <Slider
            value={creditScore}
            min={300}
            max={850}
            step={10}
            onChange={setCreditScore}
            label="Credit Score"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Home Price: ${estimatedHomePrice.toLocaleString()}
          </label>
          <Slider
            value={estimatedHomePrice}
            min={100000}
            max={2000000}
            step={10000}
            onChange={setEstimatedHomePrice}
            label="Estimated Home Price"
            formatValue={(val) => `$${val.toLocaleString()}`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment: ${downPayment.toLocaleString()} ({((downPayment / estimatedHomePrice) * 100).toFixed(1)}%)
          </label>
          <Slider
            value={downPayment}
            min={0}
            max={estimatedHomePrice}
            step={5000}
            onChange={setDownPayment}
            label="Down Payment"
            formatValue={(val) => `$${val.toLocaleString()} (${((val / estimatedHomePrice) * 100).toFixed(1)}%)`}
          />
        </div>
      </div>

      <Button onClick={calculateEligibility} className="w-full">
        Calculate Eligibility
      </Button>

      {result && (
        <div className="space-y-6">
          <div className={`p-4 rounded-lg ${
            result.eligible ? 'bg-green-50' : 'bg-red-50'
          }`}>
            <h4 className={`font-semibold ${
              result.eligible ? 'text-green-800' : 'text-red-800'
            } mb-2`}>
              {result.eligible ? 'You may be eligible!' : 'You may not be eligible'}
            </h4>
            
            {result.reasons.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-2">Key Findings:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {result.reasons.map((reason, index) => (
                    <li key={index} className="text-red-700">
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700">DTI Ratio</p>
                <p className={`text-lg ${result.metrics.dti > 43 ? 'text-red-600' : 'text-green-600'}`}>
                  {result.metrics.dti.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">LTV Ratio</p>
                <p className={`text-lg ${result.metrics.ltv > 80 ? 'text-yellow-600' : 'text-green-600'}`}>
                  {result.metrics.ltv.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Est. Monthly Payment</p>
                <p className="text-lg text-gray-900">
                  ${Math.round(result.metrics.piti).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Max Loan Amount</p>
                <p className="text-lg text-gray-900">
                  ${result.metrics.maxLoanAmount.toLocaleString()}
                </p>
              </div>
            </div>

            {result.recommendations.length > 0 && (
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Recommendations:</h5>
                <ul className="list-disc list-inside space-y-1">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="text-blue-700">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600">
            Note: This is a preliminary assessment based on the information provided.
            Final eligibility will be determined during the formal application process.
            Contact us for a more detailed evaluation.
          </p>
        </div>
      )}
    </div>
  )
} 