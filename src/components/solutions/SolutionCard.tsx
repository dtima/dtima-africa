import React from 'react'
import Link from 'next/link'
import { Solution } from '@/types'
import { Button } from '@/components/ui/Button'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface SolutionCardProps {
  solution: Solution
  locale: string
}

export function SolutionCard({ solution, locale }: SolutionCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Solution Image */}
      <div className="relative h-48 overflow-hidden">
        <PlaceholderImage
          src={solution.imageUrl}
          alt={`${solution.name} solution`}
          fill
          fallbackText={solution.name}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${solution.category.color}-100 text-${solution.category.color}-800`}>
            <span className="mr-2">{solution.category.icon}</span>
            {solution.category.name}
          </span>
        </div>

        {/* Featured Badge */}
        {solution.isFeatured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Solution Name and Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {solution.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {solution.shortDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {solution.features.slice(0, 3).map((feature) => (
              <span
                key={feature.id}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
              >
                <span className="mr-1">{feature.icon}</span>
                {feature.title}
              </span>
            ))}
            {solution.features.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700">
                +{solution.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Success Metrics Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Impact:</h4>
          <div className="grid grid-cols-2 gap-2">
            {solution.successMetrics.slice(0, 2).map((metric) => (
              <div key={metric.id} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">{metric.value}{metric.unit}</div>
                <div className="text-xs text-gray-600">{metric.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center text-sm">
            <span className="text-gray-600">Implementation:</span>
            <div className="font-bold text-gray-900">{solution.estimatedImplementationTime}</div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/${locale}/solutions/${solution.slug}`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  )
}
