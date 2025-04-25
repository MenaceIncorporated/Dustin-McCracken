'use client'

import Header from '@/components/layout/Header'
import VideoPlayer from '@/components/features/VideoPlayer'

// Sample program data
const programs = [
  {
    id: 1,
    title: 'First-Time Homebuyer Program',
    description: 'Learn about our specialized program designed to help first-time homebuyers navigate the market with confidence. We provide guidance on down payment assistance, credit improvement, and finding the perfect starter home.',
    videoUrl: 'https://www.youtube.com/embed/example1',
    thumbnailUrl: 'https://picsum.photos/seed/program1/800/450',
  },
  {
    id: 2,
    title: 'Investment Property Program',
    description: 'Discover how to build wealth through real estate investment. Our program covers property selection, financing options, and long-term investment strategies for both new and experienced investors.',
    videoUrl: 'https://www.youtube.com/embed/example2',
    thumbnailUrl: 'https://picsum.photos/seed/program2/800/450',
  },
  {
    id: 3,
    title: 'Luxury Home Program',
    description: 'Explore our exclusive program for luxury home buyers. We offer personalized service, access to premium properties, and expert guidance through the luxury real estate market.',
    videoUrl: 'https://www.youtube.com/embed/example3',
    thumbnailUrl: 'https://picsum.photos/seed/program3/800/450',
  },
  {
    id: 4,
    title: 'Relocation Program',
    description: 'Moving to a new area? Our relocation program provides comprehensive support, from neighborhood research to school district information, making your transition smooth and stress-free.',
    videoUrl: 'https://www.youtube.com/embed/example4',
    thumbnailUrl: 'https://picsum.photos/seed/program4/800/450',
  },
  {
    id: 5,
    title: 'Down Payment Assistance Program',
    description: 'Learn about various down payment assistance options available to qualified buyers. We\'ll help you understand the requirements and guide you through the application process.',
    videoUrl: 'https://www.youtube.com/embed/example5',
    thumbnailUrl: 'https://picsum.photos/seed/program5/800/450',
  },
]

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#E31837] mb-8">REAL ESTATE PROGRAMS</h1>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#E31837]"
              >
                <h2 className="text-2xl font-bold text-[#E31837] mb-6">{program.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <VideoPlayer
                      thumbnailUrl={program.thumbnailUrl}
                      videoUrl={program.videoUrl}
                      title={program.title}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[#666666]">{program.description}</p>
                    <p className="text-sm text-[#666666] italic">*Restrictions apply. Contact us for program details and eligibility requirements.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 