'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogPostProps {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  date: string
  readTime: string
}

export default function BlogPost({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  readTime
}: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <span className="mr-1">📅</span>
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <span className="mr-1">⏱️</span>
            {readTime} read
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <Link
          href={`/news/${id}`}
          className="inline-flex items-center text-[#E31837] hover:text-[#CC1630] font-medium"
        >
          Read More
          <span className="ml-1">➡️</span>
        </Link>
      </div>
    </article>
  )
} 