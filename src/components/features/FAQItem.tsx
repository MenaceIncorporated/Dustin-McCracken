'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FAQItemProps {
  questionNumber: number
  question: string
  answer: string
  imageUrl?: string
}

export default function FAQItem({ questionNumber, question, answer, imageUrl }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <span className="text-sm font-medium text-red-600 mb-1 block">
            Question {questionNumber}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        </div>
        <span className="text-gray-600">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      <div
        className={`transition-all duration-200 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 text-gray-600">
          <p className="mb-4">{answer}</p>
          {imageUrl && (
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={question}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 