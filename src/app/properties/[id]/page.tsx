'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import MortgageCalculator from '@/components/features/MortgageCalculator'
import ContactForm from '@/components/features/ContactForm'
import { Property, properties } from '@/data/properties'

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    // Find the property with the matching ID
    const foundProperty = properties.find(p => p.id === parseInt(params.id))
    if (foundProperty) {
      setProperty(foundProperty)
    }
  }, [params.id])

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Property not found
            </h1>
            <p className="mt-2 text-gray-600">
              The property you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Property Images */}
          <div className="relative h-96">
            <Image
              src={property.imageUrl}
              alt={property.address}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                {property.status}
              </span>
            </div>
          </div>

          {/* Property Details */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  ${property.price.toLocaleString()}
                </h1>
                <p className="text-xl text-gray-600">{property.address}</p>
              </div>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                {property.type}
              </span>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">
                  {property.beds}
                </span>
                <span className="text-gray-600">Beds</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">
                  {property.baths}
                </span>
                <span className="text-gray-600">Baths</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-900">
                  {property.sqft.toLocaleString()}
                </span>
                <span className="text-gray-600">Square Feet</span>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Property Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Year Built:</span>
                  <span className="ml-2 text-gray-900">{property.yearBuilt}</span>
                </div>
                <div>
                  <span className="text-gray-600">Property Type:</span>
                  <span className="ml-2 text-gray-900">{property.type}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Features
              </h2>
              <div className="flex flex-wrap gap-2">
                {property.features.map(feature => (
                  <span
                    key={feature}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex gap-4">
              <Button 
                className="flex-1"
                onClick={() => setShowContactForm(true)}
              >
                Schedule a Tour
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowContactForm(true)}
              >
                Contact Agent
              </Button>
            </div>

            {showContactForm && (
              <div className="mt-8">
                <ContactForm onClose={() => setShowContactForm(false)} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <MortgageCalculator propertyPrice={property.price} />
        </div>
      </main>
    </div>
  )
} 