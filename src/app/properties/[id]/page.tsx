'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import MortgageCalculator from '@/components/features/MortgageCalculator'
import ContactForm from '@/components/features/ContactForm'

// Mock data - in a real app, this would come from an API
const property = {
  id: 1,
  imageUrl: 'https://picsum.photos/seed/property1/1200/800',
  additionalImages: [
    'https://picsum.photos/seed/property1-2/800/600',
    'https://picsum.photos/seed/property1-3/800/600',
    'https://picsum.photos/seed/property1-4/800/600',
  ],
  price: 750000,
  address: '123 Main St, Anytown, CA',
  beds: 4,
  baths: 3,
  sqft: 2500,
  type: 'Single Family',
  status: 'For Sale',
  yearBuilt: 2020,
  features: [
    'Pool',
    'Garage',
    'Updated Kitchen',
    'Central Air',
    'Hardwood Floors',
    'Fireplace',
    'Walk-in Closets',
    'Master Suite',
    'Patio'
  ],
  description: `
    Beautiful single-family home in a prime location. This stunning property features an open floor plan,
    gourmet kitchen with stainless steel appliances, and hardwood floors throughout. The spacious master
    suite includes a walk-in closet and luxurious bathroom. The backyard offers a private pool and patio
    perfect for entertaining.
    
    Recent updates include a new roof, HVAC system, and kitchen appliances. Located in a highly-rated
    school district and close to shopping, dining, and major highways.
  `,
  details: {
    'Property Type': 'Single Family',
    'Year Built': '2020',
    'Heating': 'Central',
    'Cooling': 'Central',
    'Parking': '2 Car Garage',
    'Lot Size': '0.25 Acres',
    'School District': 'Anytown USD',
    'HOA': 'None'
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(property.imageUrl)
  const [showContactForm, setShowContactForm] = useState(false)

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
                {property.additionalImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative h-20 rounded-lg overflow-hidden"
                    title={`View property image ${index + 2}`}
                  >
                    <Image
                      src={img}
                      alt={`${property.address} - ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
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