'use client'

import { useState } from 'react'
import Image from 'next/image'

interface StepContainerProps {
  stepNumber: number
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
}

export default function StepContainer({
  stepNumber,
  title,
  description,
  imageUrl,
  videoUrl
}: StepContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#E31837] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">{stepNumber}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">{title}</h3>
            <p className="text-[#666666] mb-6">{description}</p>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#E31837] font-medium flex items-center hover:text-[#CC1630] transition-colors duration-200"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <span className="text-gray-600 ml-2">
                {isExpanded ? '▲' : '▼'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200">
          <div className="p-8">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            
            {videoUrl && (
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  src={videoUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 