'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'

interface FormData {
  address: string
  propertyType: string
  beds: number
  baths: number
  sqft: number
  yearBuilt: number
  recentUpdates: string[]
  condition: string
  name: string
  email: string
  phone: string
}

const propertyTypes = ['Single Family', 'Condo', 'Townhouse', 'Multi-Family']
const conditions = ['Excellent', 'Good', 'Fair', 'Needs Work']
const updates = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'New Roof',
  'New HVAC',
  'New Windows',
  'New Flooring',
  'Updated Electrical',
  'Updated Plumbing'
]

export default function InstantHomeValuePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    address: '',
    propertyType: '',
    beds: 3,
    baths: 2,
    sqft: 2000,
    yearBuilt: 2000,
    recentUpdates: [],
    condition: '',
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUpdateToggle = (update: string) => {
    setFormData(prev => ({
      ...prev,
      recentUpdates: prev.recentUpdates.includes(update)
        ? prev.recentUpdates.filter(u => u !== update)
        : [...prev.recentUpdates, update]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // For now, just move to the final step
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get Your Home's Value Instantly
          </h1>

          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map(stepNumber => (
                <div
                  key={stepNumber}
                  className={`flex items-center ${
                    stepNumber < 4 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Property Location</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your property address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-label="Select property type"
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    name="beds"
                    id="beds"
                    value={formData.beds}
                    onChange={handleInputChange}
                    min="1"
                    aria-label="Number of bedrooms"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="baths" className="block text-sm font-medium text-gray-700 mb-1">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    name="baths"
                    id="baths"
                    value={formData.baths}
                    onChange={handleInputChange}
                    min="1"
                    step="0.5"
                    aria-label="Number of bathrooms"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="sqft" className="block text-sm font-medium text-gray-700 mb-1">
                    Square Feet
                  </label>
                  <input
                    type="number"
                    name="sqft"
                    id="sqft"
                    value={formData.sqft}
                    onChange={handleInputChange}
                    min="100"
                    aria-label="Square footage"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-1">
                    Year Built
                  </label>
                  <input
                    type="number"
                    name="yearBuilt"
                    id="yearBuilt"
                    value={formData.yearBuilt}
                    onChange={handleInputChange}
                    min="1800"
                    max={new Date().getFullYear()}
                    aria-label="Year built"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Property Condition</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Condition
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {conditions.map(condition => (
                      <button
                        key={condition}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, condition }))}
                        className={`px-4 py-2 rounded-lg border ${
                          formData.condition === condition
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recent Updates (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {updates.map(update => (
                      <button
                        key={update}
                        type="button"
                        onClick={() => handleUpdateToggle(update)}
                        className={`px-4 py-2 rounded-lg border ${
                          formData.recentUpdates.includes(update)
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {update}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h2>
                <p className="text-gray-600">
                  We'll analyze your property details and send you a comprehensive value report shortly.
                </p>
              </div>

              <Button
                onClick={() => window.location.reload()}
                className="w-full md:w-auto"
              >
                Get Another Estimate
              </Button>
            </div>
          )}

          {step < 4 && (
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={
                    (step === 1 && (!formData.address || !formData.propertyType)) ||
                    (step === 2 && (!formData.beds || !formData.baths || !formData.sqft || !formData.yearBuilt))
                  }
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.condition}
                >
                  Get Estimate
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 