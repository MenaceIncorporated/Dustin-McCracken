'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  thumbnailUrl: string
  videoUrl: string
  title: string
}

export default function VideoPlayer({ thumbnailUrl, videoUrl, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors duration-200"
            aria-label={`Play ${title}`}
          >
            <Play className="h-16 w-16 text-white" />
          </button>
        </div>
      ) : (
        <iframe
          src={`${videoUrl}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
} 