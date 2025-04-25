export type PropertyStatus = 'active' | 'pending' | 'sold' | 'off-market'
export type PropertyType = 'single-family' | 'multi-family' | 'condo' | 'townhouse' | 'land' | 'commercial'

export interface Property {
  id: string
  created_at: string
  updated_at: string
  title: string
  description: string | null
  price: number
  status: PropertyStatus
  type: PropertyType
  bedrooms: number | null
  bathrooms: number | null
  square_feet: number | null
  lot_size: number | null
  year_built: number | null
  address: string
  city: string
  state: string
  zip_code: string
  location: any // PostGIS geography type
  features: Record<string, any> | null
  images: string[]
  virtual_tour_url: string | null
  listed_by: string | null
}

export interface Inquiry {
  id: string
  created_at: string
  property_id: string | null
  name: string
  email: string
  phone: string | null
  message: string
  status: string
  responded_at: string | null
  responded_by: string | null
}

export interface BlogPost {
  id: string
  created_at: string
  updated_at: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  featured_image: string | null
  author_id: string
  published_at: string | null
  tags: string[]
}

export interface Program {
  id: string
  created_at: string
  updated_at: string
  name: string
  description: string
  features: Record<string, any> | null
  requirements: string[]
  active: boolean
}

export interface ContactMessage {
  id: string
  created_at: string
  name: string
  email: string
  phone: string | null
  message: string
  type: string
  status: string
  responded_at: string | null
  responded_by: string | null
}

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: Property
        Insert: Omit<Property, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Property, 'id' | 'created_at' | 'updated_at'>>
      }
      inquiries: {
        Row: Inquiry
        Insert: Omit<Inquiry, 'id' | 'created_at'>
        Update: Partial<Omit<Inquiry, 'id' | 'created_at'>>
      }
      blog_posts: {
        Row: BlogPost
        Insert: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>>
      }
      programs: {
        Row: Program
        Insert: Omit<Program, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Program, 'id' | 'created_at' | 'updated_at'>>
      }
      contact_messages: {
        Row: ContactMessage
        Insert: Omit<ContactMessage, 'id' | 'created_at'>
        Update: Partial<Omit<ContactMessage, 'id' | 'created_at'>>
      }
    }
    Functions: {
      search_properties: {
        Args: { search_query: string }
        Returns: Property[]
      }
      nearby_properties: {
        Args: { lat: number; lng: number; radius_miles: number }
        Returns: Property[]
      }
    }
    Enums: {
      property_status: PropertyStatus
      property_type: PropertyType
    }
  }
} 