'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPostProps {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  date: string
  readTime: string
  category: string
}

export default function BlogPost({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
  category,
}: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#E31837] text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-[#666666] text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[#333333] mb-2">{title}</h2>
        <p className="text-[#666666] mb-4">{excerpt}</p>
        
        <Link
          href={`/news/${id}`}
          className="inline-flex items-center text-[#E31837] hover:text-[#CC1630] font-medium"
        >
          Read More
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </article>
  )
} 