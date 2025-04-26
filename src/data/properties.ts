export interface Property {
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

export const properties: Property[] = [
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