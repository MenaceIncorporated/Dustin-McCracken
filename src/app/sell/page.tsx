'use client'

import Header from '@/components/layout/Header'
import StepContainer from '@/components/features/StepContainer'

// Sample step data
const steps = [
  {
    id: 1,
    title: "Initial Consultation & Market Analysis",
    description: "We begin with a comprehensive consultation to understand your goals and timeline. Our team conducts a detailed market analysis to determine the optimal pricing strategy for your property.",
    imageUrl: "https://picsum.photos/seed/sell1/800/600",
    videoUrl: "https://www.youtube.com/embed/example1"
  },
  {
    id: 2,
    title: "Property Preparation & Staging",
    description: "Our experts help prepare your home for sale, including professional photography, virtual tours, and strategic staging to showcase your property's best features.",
    imageUrl: "https://picsum.photos/seed/sell2/800/600",
    videoUrl: "https://www.youtube.com/embed/example2"
  },
  {
    id: 3,
    title: "Marketing & Showings",
    description: "We implement a comprehensive marketing strategy across multiple channels, including MLS, social media, and targeted advertising. Our team coordinates showings and open houses to maximize exposure.",
    imageUrl: "https://picsum.photos/seed/sell3/800/600",
    videoUrl: "https://www.youtube.com/embed/example3"
  },
  {
    id: 4,
    title: "Offer Review & Negotiation",
    description: "We carefully review all offers and provide expert guidance on negotiations. Our team works to secure the best possible terms while keeping your goals in mind.",
    imageUrl: "https://picsum.photos/seed/sell4/800/600",
    videoUrl: "https://www.youtube.com/embed/example4"
  },
  {
    id: 5,
    title: "Closing & Moving Forward",
    description: "We guide you through the closing process, ensuring all paperwork is completed accurately and on time. Our support continues even after closing to ensure a smooth transition.",
    imageUrl: "https://picsum.photos/seed/sell5/800/600",
    videoUrl: "https://www.youtube.com/embed/example5"
  }
]

export default function SellPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#E31837] mb-4">
            5 PROVEN STEPS TO SELLING YOUR HOME
          </h1>
          <p className="text-xl text-[#666666] max-w-3xl">
            Our proven process has helped hundreds of homeowners achieve their real estate goals. 
            With an average sale price 5% above market value, we're committed to maximizing your return.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step) => (
              <StepContainer
                key={step.id}
                stepNumber={step.id}
                title={step.title}
                description={step.description}
                imageUrl={step.imageUrl}
                videoUrl={step.videoUrl}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Ready to Start Your Home Selling Journey?
            </h2>
            <p className="text-[#666666] mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss your goals and learn how we can help you achieve the best possible outcome.
            </p>
            <button className="bg-[#E31837] text-white px-8 py-3 rounded-md font-medium hover:bg-[#CC1630] transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 