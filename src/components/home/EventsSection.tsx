'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

interface EventsSectionProps {
  title?: string
  subtitle?: string
  events?: Event[]
  councils?: LocalCouncil[]
}

interface Event {
  id: string
  title: string
  shortDescription: string
  photo: string
  date: string
  location: string
  ctaText: string
  ctaLink: string
  isExternal?: boolean
  category: 'conference' | 'workshop' | 'summit' | 'training'
}

interface LocalCouncil {
  id: string
  name: string
  description: string
  photo: string
  location: string
  ctaText: string
  ctaLink: string
  isExternal?: boolean
  status: 'active' | 'coming-soon' | 'completed'
}

const defaultProps: Required<EventsSectionProps> = {
  title: 'Featured Events & Local Councils',
  subtitle: 'Stay updated with our latest events and discover active local councils across Africa',
  events: [
    {
      id: 'dtima-launch-event-2024',
      title: 'DTIMA Official Launch Event 2024',
      shortDescription: 'Landmark occasion symbolizing a significant leap forward in leveraging digital innovation and development at the municipal level across Africa.',
      photo: '/images/events/dtima-launch-2024.jpg',
      date: 'February 29, 2024',
      location: 'Yaoundé, Cameroon',
      ctaText: 'View Report',
      ctaLink: '#launch-event-report',
      isExternal: false,
      category: 'summit'
    },
    {
      id: 'dtima-february-event-2024',
      title: 'DTIMA February 8, 2024 Event',
      shortDescription: 'Discover the transformative journey of African municipalities with key stakeholders discussing digital innovation impact on governance and economic growth.',
      photo: '/images/events/dtima-feb-2024.jpg',
      date: 'February 8, 2024',
      location: 'Cameroon',
      ctaText: 'Read Report',
      ctaLink: '#february-event-report',
      isExternal: false,
      category: 'conference'
    },
    {
      id: 'municipal-tech-workshop',
      title: 'Municipal Technology Workshop',
      shortDescription: 'Hands-on training session for municipal leaders on implementing digital solutions and website management.',
      photo: '/images/events/workshop.jpg',
      date: 'November 28, 2024',
      location: 'Douala, Cameroon',
      ctaText: 'Apply Now',
      ctaLink: '#workshop-application',
      isExternal: false,
      category: 'workshop'
    }
  ],
  councils: [
    {
      id: 'mokolo-council',
      name: 'Mokolo Council',
      description: 'A vibrant municipal council in the Far North region of Cameroon, known for its diverse cultural heritage and commitment to sustainable urban development.',
      photo: '/images/councils/mokolo.jpg',
      location: 'Mokolo, Cameroon',
      ctaText: 'View Projects',
      ctaLink: '#mokolo-projects',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'elak-council',
      name: 'Elak Council',
      description: 'Established in 1977, covering 750km² with 200,000 inhabitants. Known for rich history, culture, and commitment to sustainable development.',
      photo: '/images/councils/elak.jpg',
      location: 'Elak, Cameroon',
      ctaText: 'Explore Solutions',
      ctaLink: '#elak-solutions',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'wum-council',
      name: 'Wum Council',
      description: 'A progressive council in the Northwest region, focusing on agricultural innovation and community-driven development initiatives.',
      photo: '/images/councils/wum.jpg',
      location: 'Wum, Cameroon',
      ctaText: 'Learn More',
      ctaLink: '#wum-info',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'kette-council',
      name: 'Kette Council',
      description: 'Thriving community covering 2500 km² with 76,756 inhabitants. Rich in mining, agriculture, livestock farming, trade, services, and eco-tourism.',
      photo: '/images/councils/kette.jpg',
      location: 'Kette, Cameroon',
      ctaText: 'See Impact',
      ctaLink: '#kette-impact',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'olanguina-council',
      name: 'Olanguina Council',
      description: 'A forward-thinking municipal council dedicated to digital transformation and modern governance practices.',
      photo: '/images/councils/olanguina.jpg',
      location: 'Olanguina, Cameroon',
      ctaText: 'Discover',
      ctaLink: '#olanguina-discover',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'booue-council',
      name: 'Booué Council',
      description: 'Located in Gabon, this council represents cross-border collaboration and regional development partnerships.',
      photo: '/images/councils/booue.jpg',
      location: 'Booué, Gabon',
      ctaText: 'Explore',
      ctaLink: '#booue-explore',
      isExternal: false,
      status: 'active'
    },
    {
      id: 'mbogue-council',
      name: 'Mbogue Council',
      description: 'A dynamic council committed to innovation and community empowerment through technology-driven solutions.',
      photo: '/images/councils/mbogue.jpg',
      location: 'Mbogue, Cameroon',
      ctaText: 'View Details',
      ctaLink: '#mbogue-details',
      isExternal: false,
      status: 'active'
    }
  ]
}

export function EventsSection(props: EventsSectionProps) {
  const { title, subtitle, events, councils } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'events' | 'councils'>('events')
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

  const getCategoryColor = (category: string) => {
    const colors = {
      conference: 'bg-purple-100 text-purple-800',
      workshop: 'bg-blue-100 text-blue-800',
      summit: 'bg-green-100 text-green-800',
      training: 'bg-orange-100 text-orange-800'
    }
    return colors[category as keyof typeof colors] || colors.workshop
  }

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      'coming-soon': 'bg-yellow-100 text-yellow-800',
      completed: 'bg-gray-100 text-gray-800'
    }
    return colors[status as keyof typeof colors] || colors.active
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
      aria-labelledby="events-title"
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
            id="events-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={cn(
          "flex justify-center mb-12",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '200ms' }}>
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('events')}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-200",
                activeTab === 'events'
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Featured Events
            </button>
            <button
              onClick={() => setActiveTab('councils')}
              className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-200",
                activeTab === 'councils'
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Local Councils
            </button>
          </div>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '400ms' }}>
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Event Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      getCategoryColor(event.category)
                    )}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  <Button
                    href={event.ctaLink}
                    variant="primary"
                    className="w-full"
                    {...(event.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {event.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Councils Tab */}
        {activeTab === 'councils' && (
          <div className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            isVisible ? "animate-fade-in" : "opacity-0"
          )} style={{ animationDelay: '400ms' }}>
            {councils.map((council, index) => (
              <div
                key={council.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Council Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={council.photo}
                    alt={council.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      getStatusColor(council.status)
                    )}>
                      {council.status}
                    </span>
                  </div>
                </div>

                {/* Council Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {council.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {council.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {council.location}
                  </div>

                  <Button
                    href={council.ctaLink}
                    variant="outline"
                    className="w-full"
                    {...(council.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {council.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className={cn(
          "mt-16 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '600ms' }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Get updates on upcoming events and new local council partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#newsletter" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Subscribe to Updates
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
