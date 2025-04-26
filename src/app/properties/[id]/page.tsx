'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import MortgageCalculator from '@/components/features/MortgageCalculator'
import ContactForm from '@/components/features/ContactForm'

// This should match the properties data structure from buy/page.tsx and home page
const properties = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/property1/800/600',
    price: 750000,
    address: '123 Main St, Anytown, CA',
    beds: 4,
    baths: 3,
    sqft: 2500,
    type: 'Single Family',
    status: 'For Sale',
    yearBuilt: 2020,
    features: ['Pool', 'Garage', 'Updated Kitchen']
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/property2/800/600',
    price: 950000,
    address: '456 Oak Ave, Somewhere, CA',
    beds: 3,
    baths: 2,
    sqft: 2000,
    type: 'Townhouse',
    status: 'For Sale',
    yearBuilt: 2019,
    features: ['Balcony', 'Smart Home', 'Hardwood Floors']
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/property3/800/600',
    price: 550000,
    address: '789 Pine Rd, Anywhere, CA',
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: 'Condo',
    status: 'For Sale',
    yearBuilt: 2021,
    features: ['Gym', 'Parking', 'Security']
  }
]

interface Property {
  id: number
  imageUrl: string
  price: number
  address: string
  beds: number
  baths: number
  sqft: number
  type: string
  status: string
  yearBuilt: number
  features: string[]
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)
  const [selectedImage, setSelectedImage] = useState(property?.imageUrl || '')
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    // Find the property with the matching ID
    const foundProperty = properties.find(p => p.id === parseInt(params.id))
    setProperty(foundProperty || null)
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {property.address}
          </h1>
          <p className="text-2xl font-bold text-primary mb-4">
            ${property.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center">
              <span className="mr-1">🛏️</span>
              {property.beds} beds
            </span>
            <span className="flex items-center">
              <span className="mr-1">🚿</span>
              {property.baths} baths
            </span>
            <span className="flex items-center">
              <span className="mr-1">📏</span>
              {property.sqft.toLocaleString()} sqft
            </span>
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {property.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={property.address}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <button
                  onClick={() => setSelectedImage(property.imageUrl)}
                  className="relative h-20 rounded-lg overflow-hidden"
                  title="View main property image"
                >
                  <Image
                    src={property.imageUrl}
                    alt={property.address}
                    fill
                    className="object-cover"
                  />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center text-gray-600"
                  >
                    <span className="mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Property Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(property.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Interested in this property?
              </h2>
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors duration-200"
              >
                Schedule a Showing
              </button>
              {showContactForm && (
                <div className="mt-4">
                  <ContactForm 
                    subject={`Showing Request: ${property.address}`}
                    message={`I'm interested in scheduling a showing for ${property.address}`}
                  />
                </div>
              )}
            </div>

            {/* Mortgage Calculator */}
            <MortgageCalculator defaultPrice={property.price} />
          </div>
        </div>
      </main>
    </div>
  )
} 