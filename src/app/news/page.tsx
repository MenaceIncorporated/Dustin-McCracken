'use client'

import Header from '@/components/layout/Header'
import BlogPost from '@/components/features/BlogPost'
import { TrendingUp, Home, DollarSign, MapPin } from 'lucide-react'

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Market Update: Spring 2024 Real Estate Trends',
    excerpt: 'Discover the latest trends in the real estate market as we enter the spring season. From pricing shifts to inventory changes, we break down what buyers and sellers need to know.',
    imageUrl: 'https://picsum.photos/seed/news1/800/600',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Market Update'
  },
  {
    id: 2,
    title: 'First-Time Homebuyer Guide: 2024 Edition',
    excerpt: 'Everything you need to know about buying your first home in 2024. We cover down payment assistance programs, credit requirements, and tips for a successful purchase.',
    imageUrl: 'https://picsum.photos/seed/news2/800/600',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Buying Guide'
  },
  {
    id: 3,
    title: 'Investment Properties: Where to Look in 2024',
    excerpt: 'Expert analysis of the best areas for real estate investment this year. Learn about emerging markets and proven strategies for building your investment portfolio.',
    imageUrl: 'https://picsum.photos/seed/news3/800/600',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Investment'
  },
  {
    id: 4,
    title: 'Luxury Market Report: Q1 2024',
    excerpt: 'An in-depth look at the luxury real estate market in the first quarter of 2024. We analyze price trends, inventory levels, and buyer preferences in the high-end market.',
    imageUrl: 'https://picsum.photos/seed/news4/800/600',
    date: 'March 1, 2024',
    readTime: '7 min read',
    category: 'Luxury Market'
  }
]

// Sample market stats
const marketStats = [
  { icon: TrendingUp, label: 'Average Home Price', value: '$450,000' },
  { icon: Home, label: 'Active Listings', value: '1,234' },
  { icon: DollarSign, label: 'Price per Sq Ft', value: '$275' },
  { icon: MapPin, label: 'Days on Market', value: '45' }
]

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#E31837] mb-8">REAL ESTATE NEWS</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <BlogPost key={post.id} {...post} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Market Stats */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#E31837] mb-6">Market Statistics</h2>
                <div className="space-y-4">
                  {marketStats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                      <stat.icon className="h-6 w-6 text-[#E31837] mr-3" />
                      <div>
                        <p className="text-sm text-[#666666]">{stat.label}</p>
                        <p className="text-lg font-semibold text-[#333333]">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#E31837] mb-4">Stay Updated</h2>
                <p className="text-[#666666] mb-4">Subscribe to our newsletter for the latest market updates and insights.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31837]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#E31837] text-white py-2 px-4 rounded-md hover:bg-[#CC1630] transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 