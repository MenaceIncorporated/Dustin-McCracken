import React from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/outline'

export default function FeatureCardsSection() {
  const features = [
    {
      id: 'buy',
      title: 'Buy With Us',
      image: '/images/buy-with-us.jpg', // Replace with your image
      link: '/buy',
      color: 'primary',
    },
    {
      id: 'sell',
      title: 'Sell With Us',
      image: '/images/sell-with-us.jpg', // Replace with your image
      link: '/sell',
      color: 'secondary',
    },
    {
      id: 'agent',
      title: 'Find an Agent',
      image: '/images/find-agent.jpg', // Replace with your image
      link: '/agents',
      color: 'tertiary',
    },
    {
      id: 'offers',
      title: 'Cash Offers',
      image: '/images/cash-offers.jpg', // Replace with your image
      link: '/instant-offer',
      color: 'white',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="heading-1">
            With <span className="text-primary">Dustin</span>, Possibility{' '}
            <span className="heading-1-emphasis">Becomes Reality</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link 
              key={feature.id}
              href={feature.link}
              className={`feature-card-${feature.color} p-6 md:p-8 h-96 flex flex-col`}
            >
              <div className="mt-4 mb-8">
                <h3 className="feature-card-title">{feature.title}</h3>
              </div>
              
              <div className="feature-card-image relative flex-grow">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="feature-card-icon">
                <PlusIcon className="h-5 w-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 