import React from 'react'
import { CaseStudy } from '@/types'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Case Study Image */}
      <div className="relative h-48 overflow-hidden">
        <PlaceholderImage
          src={caseStudy.imageUrl}
          alt={`${caseStudy.municipality} case study`}
          fill
          fallbackText={caseStudy.municipality}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800">
            📍 {caseStudy.municipality}, {caseStudy.country}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {caseStudy.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {caseStudy.description}
        </p>

        {/* Challenge */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge:</h4>
          <p className="text-sm text-gray-600 line-clamp-2">{caseStudy.challenge}</p>
        </div>

        {/* Key Results */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
          <div className="space-y-1">
            {caseStudy.results.slice(0, 3).map((result, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                {result}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-xs text-gray-500">Before</div>
              <div className="text-sm font-medium text-gray-700">{caseStudy.metrics.before}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">After</div>
              <div className="text-sm font-medium text-gray-700">{caseStudy.metrics.after}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Improvement</div>
              <div className="text-sm font-medium text-green-600">{caseStudy.metrics.improvement}</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="border-l-4 border-blue-500 pl-4 mb-4">
          <blockquote className="text-sm text-gray-600 italic mb-2">
            "{caseStudy.testimonial}"
          </blockquote>
          <div className="text-sm font-medium text-gray-900">
            {caseStudy.author}
          </div>
          <div className="text-xs text-gray-500">
            {caseStudy.role}
          </div>
        </div>
      </div>
    </div>
  )
}
