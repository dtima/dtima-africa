import React from 'react'
import Link from 'next/link'
import { CouncilSpotlight } from '@/types'
import { Button, PlaceholderImage } from '@/components/ui'

interface CouncilCardProps {
  council: CouncilSpotlight
  locale: string
}

export const CouncilCard: React.FC<CouncilCardProps> = ({ council, locale }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-white flex items-center justify-center">
        <PlaceholderImage
          src={council.logoUrl}
          alt={`${council.name} logo`}
          fill
          fallbackText={council.name}
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            council.status === 'active' 
              ? 'bg-green-500 text-white' 
              : council.status === 'coming-soon'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-500 text-white'
          }`}>
            {council.status === 'active' ? 'Active' : 
             council.status === 'coming-soon' ? 'Coming Soon' : 'Closed'}
          </span>
        </div>

        {/* Featured Badge */}
        {council.isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {council.name}
          </h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{council.location.city}, {council.location.country}</span>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">
            {council.shortDescription}
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {formatNumber(council.keyStats.population)}
            </div>
            <div className="text-xs text-gray-500">Population</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {council.keyStats.investmentOpportunities}
            </div>
            <div className="text-xs text-gray-500">Opportunities</div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights</h4>
          <ul className="space-y-1">
            {council.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <svg className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Investment Sectors */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Investment Sectors</h4>
          <div className="flex flex-wrap gap-1">
            {council.sectors.slice(0, 3).map((sector) => (
              <span
                key={sector.id}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
              >
                <span className="mr-1">{sector.icon}</span>
                {sector.name}
              </span>
            ))}
            {council.sectors.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                +{council.sectors.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100">
          <Link href={`/${locale}/investment/councils/${council.slug}`}>
            <Button
              variant="primary"
              size="md"
              className="w-full group-hover:bg-blue-700 transition-colors"
            >
              View Council Details
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none" />
    </div>
  )
}
