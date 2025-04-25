interface Property {
  id: number
  price: number
  address: string
  beds: number
  baths: number
  type: string
  lat: number
  lng: number
}

interface SearchFilters {
  query: string
  priceRange: [number, number]
  beds: number[]
  baths: number[]
  propertyTypes: string[]
}

export function searchProperties(properties: Property[], filters: SearchFilters): Property[] {
  return properties.filter(property => {
    // Search query matching
    const queryMatch = filters.query === '' || 
      property.address.toLowerCase().includes(filters.query.toLowerCase()) ||
      property.type.toLowerCase().includes(filters.query.toLowerCase())

    // Price range matching
    const priceMatch = property.price >= filters.priceRange[0] && 
      property.price <= filters.priceRange[1]

    // Bedrooms matching
    const bedsMatch = filters.beds.length === 0 || 
      filters.beds.includes(property.beds)

    // Bathrooms matching
    const bathsMatch = filters.baths.length === 0 || 
      filters.baths.includes(property.baths)

    // Property type matching
    const typeMatch = filters.propertyTypes.length === 0 || 
      filters.propertyTypes.includes(property.type)

    return queryMatch && priceMatch && bedsMatch && bathsMatch && typeMatch
  })
} 