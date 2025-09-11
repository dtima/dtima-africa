import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Team - DTIMA',
    description: 'Meet the leadership team guiding DTIMA\'s mission across African municipalities.'
  }
}

export default function TeamPage() {
  const members = [
    {
      id: 'gilbert-mbeh',
      name: 'Gilbert Mbeh',
      role: 'Coordinator for Africa & CTO',
      photo: '/team/Mbeh.jpg',
      bio:
        'Leads continental strategy and technology execution, aligning public–private partnerships with scalable municipal solutions.'
    },
    {
      id: 'steven-mintz',
      name: 'Steven Mintz',
      role: 'Editorial Advisor',
      photo: '/team/Steven.jpg',
      bio:
        'Provides strategic communication and stakeholder engagement guidance to amplify DTIMA\'s impact narrative.'
    }
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {members.map((m) => (
            <div key={m.id} className="bg-white rounded-xl shadow p-6 flex items-start space-x-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={m.photo} alt={m.name} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{m.name}</h2>
                <p className="text-blue-600 font-medium">{m.role}</p>
                <p className="text-gray-700 mt-2">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


