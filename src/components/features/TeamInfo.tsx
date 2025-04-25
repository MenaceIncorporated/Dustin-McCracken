'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  imageUrl: string
  bio: string
}

interface TeamInfoProps {
  teamMember: TeamMember
}

export default function TeamInfo({ teamMember }: TeamInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden">
        <Image
          src={teamMember.imageUrl}
          alt={teamMember.name}
          fill
          className="object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-[#333333] text-center mb-2">
        {teamMember.name}
      </h3>
      <p className="text-[#E31837] text-center mb-4">{teamMember.role}</p>
      
      <p className="text-[#666666] mb-6">{teamMember.bio}</p>
      
      <div className="flex justify-center space-x-4">
        <a
          href="#"
          className="text-[#666666] hover:text-[#E31837] transition-colors duration-200"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-[#666666] hover:text-[#E31837] transition-colors duration-200"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-[#666666] hover:text-[#E31837] transition-colors duration-200"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="text-[#666666] hover:text-[#E31837] transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
} 