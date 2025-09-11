'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface PartnersSectionProps {
  title?: string
  subtitle?: string
  partners?: Partner[]
}

interface Partner {
  id: string
  name: string
  logo: string
  alt: string
  website?: string
}

const defaultProps: Required<PartnersSectionProps> = {
  title: 'Development and Solution Partners',
  subtitle: 'Strategic partnerships driving digital transformation across Africa',
  partners: [
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      logo: '/solution-partners/Google-Cloud.jpg',
      alt: 'Google Cloud logo',
      website: 'https://cloud.google.com'
    },
    {
      id: 'pushncare',
      name: 'PushNcare',
      logo: '/solution-partners/logo.jpg',
      alt: 'PushNcare logo',
      website: 'https://pushncare.com'
    },
    {
      id: 'pushnchat',
      name: 'PushNchat',
      logo: '/solution-partners/logo.svg',
      alt: 'PushNchat logo',
      website: 'https://pushnchat.com'
    }
  ]
}

export function PartnersSection(props: PartnersSectionProps) {
  const { title, subtitle, partners } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [partners.length])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
      aria-labelledby="partners-title"
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
            id="partners-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={cn(
                "group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500",
                isVisible ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-square flex items-center justify-center p-4">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
              </div>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Visit ${partner.name} website`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className={cn(
          "text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '800ms' }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h3>
            <p className="text-gray-600 mb-6">
              Join our network of technology partners and help transform African municipalities.
            </p>
            <a 
              href="#partnership" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Partner With Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
