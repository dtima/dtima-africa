'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SuccessStory {
  id: string
  title: string
  municipality: string
  country: string
  description: string
  metrics: {
    before: string
    after: string
    improvement: string
  }
  imageUrl: string
  videoUrl?: string
  testimonial: string
  author: string
  role: string
}

interface SuccessStoriesSectionProps {
  title?: string
  subtitle?: string
  stories?: SuccessStory[]
}

interface SuccessStoryCardProps {
  story: SuccessStory
  isReversed: boolean
  isVisible: boolean
  index: number
}

const defaultProps: Required<SuccessStoriesSectionProps> = {
  title: 'Success Stories',
  subtitle: 'Real-world impact and transformation stories from municipalities across Africa',
  stories: [
    {
      id: 'cameroon-digital',
      title: 'Cameroon Digital Transformation',
      municipality: 'Douala',
      country: 'Cameroon',
      description: 'Douala transformed its municipal services through comprehensive digital infrastructure, improving citizen satisfaction and operational efficiency.',
      metrics: {
        before: '3 weeks',
        after: '3 hours',
        improvement: '90% faster'
      },
      imageUrl: '/images/success-stories/cameroon.jpg',
      videoUrl: '/videos/cameroon-transformation.mp4',
      testimonial: 'DTIMA helped us revolutionize how we serve our citizens. The results have been transformative.',
      author: 'Mayor Roger Mbassa',
      role: 'Mayor of Douala'
    },
    {
      id: 'gabon-efficiency',
      title: 'Gabon Service Efficiency',
      municipality: 'Libreville',
      country: 'Gabon',
      description: 'Libreville streamlined its municipal services, reducing processing times and improving citizen satisfaction.',
      metrics: {
        before: '4 days',
        after: '24 hours',
        improvement: '83% faster'
      },
      imageUrl: '/images/success-stories/gabon.jpg',
      videoUrl: '/videos/gabon-efficiency.mp4',
      testimonial: 'DTIMA\'s approach to digital transformation has revolutionized our service delivery.',
      author: 'Mayor Rose Christiane Ossouka',
      role: 'Mayor of Libreville'
    }
  ]
}

function SuccessStoryCard({ story, isReversed, isVisible, index }: SuccessStoryCardProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className={cn(
      "grid lg:grid-cols-2 gap-12 items-center",
      isReversed ? 'lg:grid-flow-col-dense' : '',
      isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    )} style={{ animationDelay: `${index * 300}ms` }}>
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              {story.country}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900">{story.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{story.metrics.before}</div>
              <div className="text-sm text-gray-500">Before</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{story.metrics.after}</div>
              <div className="text-sm text-gray-500">After</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{story.metrics.improvement}</div>
              <div className="text-sm text-gray-500">Improvement</div>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r-lg">
            <p className="text-gray-700 italic leading-relaxed">"{story.testimonial}"</p>
            <footer className="mt-3">
              <cite className="text-sm text-gray-600 font-medium">
                {story.author}, {story.role}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
      
      <div className={isReversed ? 'lg:col-start-1' : ''}>
        <div className="relative group">
          <div className={cn(
            "w-full h-80 rounded-2xl shadow-lg overflow-hidden transition-all duration-500",
            "group-hover:shadow-2xl group-hover:scale-105"
          )}>
            {story.videoUrl && !isVideoPlaying ? (
              <div className="relative w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${story.imageUrl})` }}
                />
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-2xl hover:bg-opacity-40 transition-colors duration-200 group"
                  aria-label="Play video testimonial"
                >
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            ) : (
              <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            )}
          </div>
          
          {/* Success badge */}
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Success Story
          </div>
        </div>
      </div>
    </div>
  )
}

export function SuccessStoriesSection(props: SuccessStoriesSectionProps) {
  const { title, subtitle, stories } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="success-stories-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-600 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 
            id="success-stories-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-16">
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={story.id}
              story={story}
              isReversed={index % 2 === 1}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className={cn(
          "mt-16 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '1200ms' }}>
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-lg font-medium">Want to see more success stories?</span>
            <a 
              href="#case-studies" 
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
