'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Partner } from '@/types'

interface PartnershipOpportunitiesSectionProps {
  title?: string
  subtitle?: string
  partnerships?: Partnership[]
}

interface Partnership {
  id: string
  title: string
  category: 'corporate' | 'development' | 'investment' | 'technology'
  description: string
  benefits: string[]
  requirements: string[]
  investmentRange?: string
  timeline?: string
  impact: string
  icon: string
  color: string
  featured?: boolean
}

interface PartnershipCardProps {
  partnership: Partnership
  isVisible: boolean
  index: number
}

const defaultProps: Required<PartnershipOpportunitiesSectionProps> = {
  title: 'Partnership Opportunities',
  subtitle: 'Join us in transforming African municipalities through strategic partnerships',
  partnerships: [
    {
      id: 'corporate-partnership',
      title: 'Corporate Partnership',
      category: 'corporate',
      description: 'Partner with DTIMA to enhance your corporate social responsibility initiatives while driving real impact in African communities.',
      benefits: [
        'Enhanced brand reputation and visibility',
        'Access to emerging African markets',
        'Sustainable development impact',
        'Government and community relationships'
      ],
      requirements: [
        'Minimum 3-year commitment',
        'Annual investment of $500K+',
        'Alignment with SDG goals',
        'Regular impact reporting'
      ],
      investmentRange: '$500K - $5M annually',
      timeline: '3-5 years',
      impact: 'Transform 10+ municipalities',
      icon: '🏢',
      color: 'blue',
      featured: true
    },
    {
      id: 'development-partnership',
      title: 'Development Partnership',
      category: 'development',
      description: 'Collaborate with international development organizations to scale digital transformation across Africa.',
      benefits: [
        'Access to DTIMA\'s proven methodology',
        'Scalable impact across regions',
        'Technical expertise and support',
        'Monitoring and evaluation framework'
      ],
      requirements: [
        'Development sector experience',
        'Multi-country presence',
        'Technical capacity building focus',
        'Long-term sustainability approach'
      ],
      investmentRange: '$1M - $10M per program',
      timeline: '5-7 years',
      impact: 'Scale to 50+ municipalities',
      icon: '🌍',
      color: 'green',
      featured: true
    },
    {
      id: 'investment-partnership',
      title: 'Investment Partnership',
      category: 'investment',
      description: 'Invest in DTIMA\'s growth and expansion to capture the growing African digital transformation market.',
      benefits: [
        'High-growth market opportunity',
        'Proven business model',
        'Diversified revenue streams',
        'Social impact returns'
      ],
      requirements: [
        'Series A+ investment capacity',
        'Emerging market experience',
        'Technology sector focus',
        'Patient capital approach'
      ],
      investmentRange: '$2M - $20M equity',
      timeline: '5-10 years',
      impact: 'Expand to 100+ municipalities',
      icon: '💰',
      color: 'yellow',
      featured: true
    },
    {
      id: 'technology-partnership',
      title: 'Technology Partnership',
      category: 'technology',
      description: 'Leverage your technology expertise to enhance DTIMA\'s digital solutions and platform capabilities.',
      benefits: [
        'Access to African market data',
        'Product development insights',
        'Government sector expansion',
        'Innovation collaboration'
      ],
      requirements: [
        'Relevant technology expertise',
        'Government sector experience',
        'Scalable solution offering',
        'Localization capabilities'
      ],
      investmentRange: 'Technology + $200K+ annually',
      timeline: '2-4 years',
      impact: 'Enhance digital platform',
      icon: '💻',
      color: 'purple'
    }
  ]
}

function PartnershipCard({ partnership, isVisible, index }: PartnershipCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    green: 'border-green-200 bg-green-50 hover:bg-green-100',
    yellow: 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100',
    purple: 'border-purple-200 bg-purple-50 hover:bg-purple-100'
  }

  const badgeColors = {
    blue: 'bg-blue-600 text-white',
    green: 'bg-green-600 text-white',
    yellow: 'bg-yellow-600 text-white',
    purple: 'bg-purple-600 text-white'
  }

  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer",
        colorClasses[partnership.color as keyof typeof colorClasses],
        isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isExpanded ? "ring-4 ring-blue-200" : "",
        partnership.featured ? "ring-2 ring-blue-300" : ""
      )}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Featured badge */}
      {partnership.featured && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Featured Opportunity
        </div>
      )}

      <div className="flex items-start space-x-4">
        <div className="text-4xl">{partnership.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {partnership.title}
            </h3>
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              badgeColors[partnership.color as keyof typeof badgeColors]
            )}>
              {partnership.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {partnership.description}
          </p>

          {/* Investment and timeline info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {partnership.investmentRange && (
              <div className="bg-white bg-opacity-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Investment Range</div>
                <div className="font-semibold text-gray-900">{partnership.investmentRange}</div>
              </div>
            )}
            {partnership.timeline && (
              <div className="bg-white bg-opacity-50 p-3 rounded-lg">
                <div className="text-sm text-gray-500">Timeline</div>
                <div className="font-semibold text-gray-900">{partnership.timeline}</div>
              </div>
            )}
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                <ul className="space-y-1">
                  {partnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                <ul className="space-y-1">
                  {partnership.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white bg-opacity-70 p-4 rounded-lg">
                <div className="text-sm text-gray-500">Expected Impact</div>
                <div className="font-semibold text-gray-900">{partnership.impact}</div>
              </div>
            </div>
          )}

          {/* Expand/collapse indicator */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(!isExpanded)
              }}
            >
              {isExpanded ? 'Show less' : 'Learn more'}
            </button>
            <div className={cn(
              "transition-transform duration-200",
              isExpanded ? "rotate-180" : ""
            )}>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 transition-opacity duration-300",
        isHovered ? "opacity-100" : ""
      )} />
    </div>
  )
}

export function PartnershipOpportunitiesSection(props: PartnershipOpportunitiesSectionProps) {
  const { title, subtitle, partnerships } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const sectionRef = useRef<HTMLElement>(null)

  const categories = [
    { id: 'all', name: 'All Opportunities', count: partnerships.length },
    { id: 'corporate', name: 'Corporate', count: partnerships.filter(p => p.category === 'corporate').length },
    { id: 'development', name: 'Development', count: partnerships.filter(p => p.category === 'development').length },
    { id: 'investment', name: 'Investment', count: partnerships.filter(p => p.category === 'investment').length },
    { id: 'technology', name: 'Technology', count: partnerships.filter(p => p.category === 'technology').length }
  ]

  const filteredPartnerships = selectedCategory === 'all' 
    ? partnerships 
    : partnerships.filter(p => p.category === selectedCategory)

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
      aria-labelledby="partnership-opportunities-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-600 rounded-full -translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 
            id="partnership-opportunities-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category filter */}
        <div className={cn(
          "flex flex-wrap justify-center gap-4 mb-12",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '300ms' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-200",
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              )}
            >
              {category.name}
              <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Partnership cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPartnerships.map((partnership, index) => (
            <PartnershipCard
              key={partnership.id}
              partnership={partnership}
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
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Partner with DTIMA?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can work together to transform African municipalities and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Schedule a Meeting
              </a>
              <a 
                href="#partnership-guide" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Download Partnership Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
