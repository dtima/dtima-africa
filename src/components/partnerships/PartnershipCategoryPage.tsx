import React from 'react'
import Image from 'next/image'
import { PartnershipCategory } from '@/lib/data/partnerships'

interface PartnershipCategoryPageProps {
  category: PartnershipCategory
}

export const PartnershipCategoryPage: React.FC<PartnershipCategoryPageProps> = ({ category }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
          <p className="mt-3 text-lg text-gray-600">{category.subtitle}</p>
          <p className="mt-5 text-gray-700 max-w-3xl mx-auto">{category.overview}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {category.offerings.map(offering => (
            <div key={offering.id} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
              <p className="mt-2 text-gray-700">{offering.description}</p>
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                {offering.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {category.examplePartners.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Partners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.examplePartners.map((p) => (
                <div key={p.id} className="bg-white rounded-xl shadow p-6 flex flex-col">
                  {p.logoUrl && (
                    <div className="relative w-full h-24 mb-4">
                      <Image src={p.logoUrl} alt={`${p.name} logo`} fill className="object-contain" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                  <p className="mt-2 text-gray-700 flex-1">{p.brief}</p>
                  {p.website && (
                    <div className="mt-4">
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Visit Website →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


