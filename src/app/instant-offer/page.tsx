'use client'

import { useState } from 'react'
import InstantOfferForm from '@/components/features/InstantOfferForm'
import { CheckCircle2, Clock, DollarSign, Home } from 'lucide-react'
import Header from '@/components/layout/Header'
import FAQItem from '@/components/features/FAQItem'
import Image from 'next/image'

const faqs = [
  {
    question: "What is an Instant Offer?",
    answer: "An Instant Offer is a cash offer for your home based on its current market value, condition, and location. We use advanced algorithms and local market data to provide you with a competitive offer within 24 hours, allowing you to sell your home quickly and hassle-free.",
    imageUrl: "https://picsum.photos/seed/faq1/800/600"
  },
  {
    question: "How does the Instant Offer process work?",
    answer: "Our Instant Offer process is simple: 1) Submit your property details through our online form, 2) Receive a preliminary offer within 24 hours, 3) Schedule a quick home inspection to verify the property's condition, 4) Get your final offer, and 5) Close on your timeline, typically within 14-30 days.",
    imageUrl: "https://picsum.photos/seed/faq2/800/600"
  },
  {
    question: "What types of homes qualify for an Instant Offer?",
    answer: "Most single-family homes, townhouses, and condos built after 1960 in good condition qualify for our Instant Offer program. The property should be owner-occupied or vacant, and free of major structural issues or significant damage.",
    imageUrl: "https://picsum.photos/seed/faq3/800/600"
  },
  {
    question: "Are there any fees or obligations?",
    answer: "There are no upfront fees to receive an Instant Offer, and you're under no obligation to accept it. If you choose to proceed with our offer, standard closing costs will apply, which we'll clearly outline in your offer details.",
    imageUrl: "https://picsum.photos/seed/faq4/800/600"
  },
  {
    question: "How is the offer price determined?",
    answer: "Our offer prices are determined using advanced algorithms that analyze recent sales data, current market conditions, property details, location, and estimated repair costs. We aim to provide competitive offers that reflect true market value while accounting for our costs and a modest service fee.",
    imageUrl: "https://picsum.photos/seed/faq5/800/600"
  },
  {
    question: "What happens after I accept the offer?",
    answer: "After accepting the offer, we'll schedule a home inspection to verify the property's condition. Once the inspection is complete, we'll provide a final offer. If you accept, we'll move forward with closing, which typically takes 14-30 days. You'll have the flexibility to choose your closing date within this timeframe.",
    imageUrl: "https://picsum.photos/seed/faq6/800/600"
  }
]

export default function InstantOffer() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (data: any) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://picsum.photos/seed/instant-offer/1920/1080"
            alt="Instant Offer Hero"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get an Instant Offer on Your Home
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Skip the hassle of traditional home selling. Get a competitive cash offer within 24 hours and close on your timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Get Your Offer Now
            </button>
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tell us about your property
            </h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Thank you for your submission!
                </h3>
                <p className="text-gray-600">
                  We'll review your property details and get back to you with an offer within 24 hours.
                </p>
              </div>
            ) : (
              <InstantOfferForm onSubmit={handleSubmit} />
            )}
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Instant Offer?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Fair Cash Offer
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Receive a competitive cash offer based on current market conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Quick Process
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Get an offer in minutes and close on your timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      No Repairs Needed
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Sell your home as-is, no matter the condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-medium">
                    1
                  </span>
                  <span className="ml-4 text-gray-600">
                    Fill out the form with your property details
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-medium">
                    2
                  </span>
                  <span className="ml-4 text-gray-600">
                    Receive your instant cash offer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-medium">
                    3
                  </span>
                  <span className="ml-4 text-gray-600">
                    Accept the offer and close on your timeline
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our Instant Offer program
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                questionNumber={index + 1}
                question={faq.question}
                answer={faq.answer}
                imageUrl={faq.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your Instant Offer?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Skip the traditional home selling process and get a competitive cash offer today.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
} 