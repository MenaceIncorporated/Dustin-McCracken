'use client'

import Header from '@/components/layout/Header'
import SearchBar from '@/components/layout/SearchBar'
import PropertyCard from '@/components/features/PropertyCard'
import HomeValueForm from '@/components/features/HomeValueForm'
import InstantOfferForm from '@/components/features/InstantOfferForm'
import FAQItem from '@/components/features/FAQItem'
import StepContainer from '@/components/features/StepContainer'

const featuredProperties = [
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
    yearBuilt: 2020
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
    yearBuilt: 2019
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
    yearBuilt: 2021
  }
]

const sellingSteps = [
  {
    stepNumber: 1,
    title: "Get Your Home's Value",
    description: "Receive an instant estimate of your home's worth based on recent sales and market data.",
    imageUrl: "https://picsum.photos/seed/step1/800/600"
  },
  {
    stepNumber: 2,
    title: "Choose Your Selling Option",
    description: "Explore multiple ways to sell - traditional listing, instant offer, or buy before you sell.",
    imageUrl: "https://picsum.photos/seed/step2/800/600"
  },
  {
    stepNumber: 3,
    title: "Maximize Your Profit",
    description: "Our team will guide you through the process to ensure you get the best possible outcome.",
    imageUrl: "https://picsum.photos/seed/step3/800/600"
  }
]

const faqs = [
  {
    questionNumber: 1,
    question: "What's my home really worth?",
    answer: "Our instant home value estimator uses the latest market data, recent sales, and property details to give you an accurate estimate. For a more detailed valuation, our experts can provide a comprehensive market analysis.",
    imageUrl: "https://picsum.photos/seed/faq1/800/600"
  },
  {
    questionNumber: 2,
    question: "Should I sell now or wait?",
    answer: "The best time to sell depends on various factors including market conditions, your personal circumstances, and your financial goals. Our team can help you analyze your situation and make an informed decision.",
    imageUrl: "https://picsum.photos/seed/faq2/800/600"
  }
]

export default function Home() {
  const handleInstantOffer = (data: any) => {
    console.log('Instant offer data:', data)
    // Handle instant offer submission
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-white mb-8">
            Search properties, get instant home value estimates, or request an instant offer
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onClick={() => console.log('Property clicked:', property.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selling Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Multiple Ways to Sell
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Choose the option that works best for you
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get an Instant Home Value
              </h3>
              <HomeValueForm />
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Request an Instant Offer
              </h3>
              <InstantOfferForm onSubmit={handleInstantOffer} />
            </div>
          </div>

          <div className="space-y-8">
            {sellingSteps.map((step) => (
              <StepContainer key={step.stepNumber} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Get answers to common questions about selling your home
          </p>
          
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.questionNumber} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
