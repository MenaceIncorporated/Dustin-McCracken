export interface Property {
  id: string;
  imageUrl: string;
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  lat: number;
  lng: number;
  type?: string;
  status?: 'active' | 'pending' | 'sold' | 'off-market';
  yearBuilt?: number;
  features?: string[];
} 