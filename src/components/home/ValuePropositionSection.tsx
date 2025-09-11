'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ValueProposition {
  id?: string
  title: string
  description: string
  benefits: string[]
  icon: string
  color?: 'blue' | 'green' | 'yellow' | 'purple'
  ctaText: string
  ctaLink: string
}

interface ValuePropositionSectionProps {
  title?: string
  subtitle?: string
  propositions?: ValueProposition[]
}

interface ValuePropositionCardProps {
  proposition: ValueProposition
  isVisible: boolean
  index: number
}

const defaultProps: Required<ValuePropositionSectionProps> = {
  title: 'Value for Every Stakeholder',
  subtitle: 'Clear benefits and opportunities for different types of partners and stakeholders',
  propositions: [
    {
      title: 'For Municipalities',
      description: 'Transform your municipality in 12 months with proven digital solutions',
      benefits: [
        'Cost savings and efficiency gains',
        'Improved citizen satisfaction',
        'Streamlined service delivery',
        'Data-driven decision making'
      ],
      icon: '🏛️',
      ctaText: 'Learn More',
      ctaLink: '#municipalities'
    },
    {
      title: 'For Corporate Partners',
      description: 'Access the fastest-growing municipal technology market in Africa',
      benefits: [
        'Market access and innovation opportunities',
        'Social impact and sustainability',
        'Scalable business model',
        'Government partnership opportunities'
      ],
      icon: '🏢',
      ctaText: 'Partner With Us',
      ctaLink: '#partnership'
    },
    {
      title: 'For Development Partners',
      description: 'Scale your impact through proven, sustainable digital infrastructure',
      benefits: [
        'Proven implementation methodology',
        'Measurable outcomes and impact',
        'Local capacity building',
        'Sustainable development goals'
      ],
      icon: '🌍',
      ctaText: 'Get Involved',
      ctaLink: '#development'
    },
    {
      title: 'For Investors',
      description: 'Invest in the digital transformation of Africa\'s $50B municipal services market',
      benefits: [
        'High-growth market opportunity',
        'Social returns with financial gains',
        'Proven business model',
        'Scalable technology platform'
      ],
      icon: '💰',
      ctaText: 'Investment Info',
      ctaLink: '#investment'
    }
  ]
}

function ValuePropositionCard({ proposition, isVisible, index }: ValuePropositionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500",
        "transform hover:-translate-y-2",
        isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0">
          <div className={cn(
            "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300",
            isHovered && "scale-110 bg-blue-700"
          )}>
            <span className="text-2xl">{proposition.icon}</span>
          </div>
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{proposition.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{proposition.description}</p>
      
      <ul className="space-y-3 mb-6">
        {proposition.benefits.map((benefit, benefitIndex) => (
          <li 
            key={benefitIndex} 
            className="flex items-center text-gray-700 group"
          >
            <div className={cn(
              "w-5 h-5 text-green-500 mr-3 flex-shrink-0 transition-transform duration-300",
              isHovered && "scale-110"
            )}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="group-hover:text-gray-900 transition-colors duration-200">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      
      <a
        href={proposition.ctaLink}
        className={cn(
          "inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300",
          "group"
        )}
      >
        {proposition.ctaText}
        <svg 
          className={cn(
            "w-4 h-4 ml-2 transition-transform duration-300",
            "group-hover:translate-x-1"
          )} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}

export function ValuePropositionSection(props: ValuePropositionSectionProps) {
  const { title, subtitle, propositions } = { ...defaultProps, ...props }
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
      className="py-20 bg-gray-50 relative overflow-hidden"
      aria-labelledby="value-proposition-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full -translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 
            id="value-proposition-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {propositions.map((proposition, index) => (
            <ValuePropositionCard
              key={index}
              proposition={proposition}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className={cn(
          "mt-16 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-4 bg-blue-600 text-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-lg font-medium">Ready to get started?</span>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
