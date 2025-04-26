'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'

const sellingOptions = [
  {
    title: 'Traditional Sale',
    description: 'List your home on the market with our expert agents',
    benefits: [
      'Maximum market exposure',
      'Professional marketing & staging',
      'Negotiation support',
      'Full service experience'
    ],
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Instant Cash Offer',
    description: 'Get a competitive cash offer within 24 hours',
    benefits: [
      'Close in as little as 7 days',
      'No repairs needed',
      'No showings or open houses',
      'No commission fees'
    ],
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
]

const sellingSteps = [
  {
    title: 'Prepare Your Home',
    description: 'Get your home ready for the market with our preparation checklist and staging tips.',
    link: '/news/maximizing-home-value-improvements'
  },
  {
    title: 'Price Your Home',
    description: 'Get an instant home value estimate and pricing recommendations based on market data.',
    link: '/instant-home-value'
  },
  {
    title: 'List Your Home',
    description: 'Choose your selling option and let us handle the marketing and showings.',
    link: '/contact'
  },
  {
    title: 'Close the Deal',
    description: 'Our team will guide you through negotiations and closing procedures.',
    link: '/contact'
  }
]

const resources = [
  {
    title: 'Home Value Estimator',
    description: 'Get an instant estimate of your home\'s current market value',
    link: '/instant-home-value',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Instant Cash Offer',
    description: 'Get a competitive cash offer for your home within 24 hours',
    link: '/instant-offer',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Selling Tips',
    description: 'Read our latest articles on maximizing your home\'s value',
    link: '/news',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
      </svg>
    )
  },
  {
    title: 'Contact an Agent',
    description: 'Connect with one of our experienced real estate agents',
    link: '/contact',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Modern home interior"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Sell Your Home?
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Choose the selling option that works best for you. Whether you want to list on the market or get an instant cash offer, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/instant-home-value">
                  <Button size="lg">
                    Get Your Home Value
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Talk to an Agent
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Selling Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Selling Option
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sellingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
                >
                  <div className="mb-6">{option.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-primary mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={index === 0 ? '/contact' : '/instant-offer'}
                    className="block"
                  >
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selling Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Your Home Selling Journey
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sellingSteps.map((step, index) => (
                <Link
                  key={index}
                  href={step.link}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Seller Resources
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards selling your home today.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/instant-home-value">
                <Button variant="secondary" size="lg">
                  Get Your Home Value
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 