import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import { properties } from '@/data/properties'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Available Properties
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Link 
              key={property.id} 
              href={`/properties/${property.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
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

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  ${property.price.toLocaleString()}
                </h2>
                <p className="text-gray-600 mb-4">{property.address}</p>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600">{property.type}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
} 