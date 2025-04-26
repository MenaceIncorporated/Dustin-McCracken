'use client'

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
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full bg-gray-200"></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{teamMember.name}</h3>
            <p className="text-sm text-gray-500">{teamMember.role}</p>
            <p className="text-sm text-gray-600 mt-2">{teamMember.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
