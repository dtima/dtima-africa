import React from 'react'
import Image from 'next/image'
import { Testimonial } from '@/lib/data/testimonials'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className
}) => {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-lg p-6 h-full flex flex-col',
      'hover:shadow-xl transition-shadow duration-300',
      className
    )}>
      {/* Quote */}
      <div className="flex-1 mb-6">
        <div className="text-4xl text-blue-600 mb-4">"</div>
        <blockquote className="text-gray-700 text-lg leading-relaxed italic">
          {testimonial.quote}
        </blockquote>
        <div className="text-4xl text-blue-600 text-right mt-2">"</div>
      </div>

      {/* Author Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.imageUrl}
            alt={`${testimonial.name} - ${testimonial.title}`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-lg">
            {testimonial.name}
          </h4>
          <p className="text-blue-600 font-medium text-sm">
            {testimonial.title}
          </p>
          <p className="text-gray-600 text-sm">
            {testimonial.organization}
          </p>
          {testimonial.location && (
            <p className="text-gray-500 text-xs mt-1">
              {testimonial.location}
            </p>
          )}
        </div>
      </div>

      {/* Bio Section */}
      {testimonial.bio && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div 
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{ __html: testimonial.bio }}
          />
        </div>
      )}

      {/* Website Link */}
      {testimonial.website && (
        <div className="mt-4 flex justify-end">
          <a
            href={testimonial.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            Visit Website
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        </div>
      )}

      {/* Category Badge */}
      <div className="mt-4 flex justify-end">
        <span className={cn(
          'px-3 py-1 rounded-full text-xs font-medium',
          testimonial.category === 'expert' && 'bg-blue-100 text-blue-800',
          testimonial.category === 'municipal' && 'bg-green-100 text-green-800',
          testimonial.category === 'government' && 'bg-purple-100 text-purple-800'
        )}>
          {testimonial.category === 'expert' && 'Expert Opinion'}
          {testimonial.category === 'municipal' && 'Municipal Leader'}
          {testimonial.category === 'government' && 'Government Official'}
        </span>
      </div>
    </div>
  )
}
