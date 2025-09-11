'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { CTALink, HeroVisual } from '@/types'

interface HeroSectionProps {
  headline?: string
  subheadline?: string
  primaryCTA?: CTALink
  secondaryCTA?: CTALink
  heroVisual?: HeroVisual
}

interface MapPoint {
  id: string
  name: string
  country: string
  progress: number
  x: number
  y: number
}

const defaultProps: Required<HeroSectionProps> = {
  headline: 'Empowering African Municipalities Through Digital Transformation',
  subheadline: 'Building sustainable, efficient, and citizen-centric local governments across Africa',
  primaryCTA: {
    text: 'Explore Our Impact',
    href: '#impact',
    variant: 'primary'
  },
  secondaryCTA: {
    text: 'Partner With Us',
    href: '#partnership',
    variant: 'outline'
  },
  heroVisual: {
    type: 'map',
    src: '/images/africa-map.svg',
    alt: 'Interactive map of Africa showing DTIMA coverage',
    width: 800,
    height: 600
  }
}

const mapPoints: MapPoint[] = [
  { id: 'yaounde', name: 'Yaoundé', country: 'Cameroon', progress: 92, x: 52, y: 62 },
  { id: 'libreville', name: 'Libreville', country: 'Gabon', progress: 85, x: 50, y: 65 },
  { id: 'abidjan', name: 'Abidjan', country: 'Ivory Coast', progress: 78, x: 42, y: 62 },
  { id: 'dakar', name: 'Dakar', country: 'Senegal', progress: 88, x: 35, y: 50 },
  { id: 'dar_es_salaam', name: 'Dar es Salaam', country: 'Tanzania', progress: 75, x: 68, y: 70 },
  { id: 'gaborone', name: 'Gaborone', country: 'Botswana', progress: 82, x: 58, y: 78 },
  { id: 'kinshasa', name: 'Kinshasa', country: 'DRC Congo', progress: 70, x: 54, y: 68 },
  { id: 'lagos', name: 'Lagos', country: 'Nigeria', progress: 85, x: 45, y: 60 }
]

export function HeroSection(props: HeroSectionProps) {
  const { headline, subheadline, primaryCTA, secondaryCTA, heroVisual } = { ...defaultProps, ...props }
  const [activePoint, setActivePoint] = useState<string | null>(null)
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

  const handlePointClick = (pointId: string) => {
    setActivePoint(activePoint === pointId ? null : pointId)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const x = (i * 17.3) % 100; // Spread particles evenly
          const y = (i * 23.7) % 100; // Different multiplier for variety
          const delay = (i * 0.1) % 2; // Staggered delays
          const duration = 2 + (i % 3) * 0.5; // 2-3.5s duration
          
          return (
            <div
              key={i}
              className={cn(
                "absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce-gentle",
                "top-[var(--y)] left-[var(--x)]"
              )}
              style={{
                '--x': `${x}%`,
                '--y': `${y}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={cn(
            "space-y-8 text-center lg:text-left",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            <h1 
              id="hero-headline"
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant={primaryCTA.variant || 'primary'} 
                size="lg"
                href={primaryCTA.href}
                className="touch-target"
              >
                {primaryCTA.text}
              </Button>
              <Button 
                variant={secondaryCTA.variant || 'outline'} 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-blue-900 touch-target"
                href={secondaryCTA.href}
              >
                {secondaryCTA.text}
              </Button>
            </div>
          </div>
          
          {/* Interactive Africa Map */}
          <div className={cn(
            "relative",
            isVisible ? "animate-slide-in" : "opacity-0 translate-x-full"
          )}>
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-2xl border border-blue-200">
              {/* Map Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-blue-100 rounded-xl opacity-30"></div>
              </div>
              
              {/* Interactive Points */}
              {mapPoints.map((point) => (
                <button
                  key={point.id}
                  onClick={() => handlePointClick(point.id)}
                  className={cn(
                    "absolute transform -translate-x-1/2 -translate-y-1/2 group",
                    "focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                  )}
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`
                  }}
                  aria-label={`${point.name}, ${point.country} - ${point.progress}% digital transformation progress`}
                >
                  {/* Pulse animation */}
                  <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  
                  {/* Main point */}
                  <div className={cn(
                    "relative w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg",
                    "transition-all duration-300 group-hover:scale-125",
                    activePoint === point.id && "bg-yellow-500 scale-125"
                  )}></div>
                  
                  {/* Tooltip */}
                  <div className={cn(
                    "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2",
                    "bg-white text-gray-900 text-sm rounded-lg shadow-lg border border-gray-200",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "pointer-events-none whitespace-nowrap z-10"
                  )}>
                    <div className="font-semibold">{point.name}</div>
                    <div className="text-xs text-gray-600">{point.country}</div>
                    <div className="text-xs text-blue-600 font-medium">{point.progress}% Complete</div>
                  </div>
                </button>
              ))}
              
              {/* Progress Legend */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                <div className="text-xs font-medium text-gray-700 mb-2">Digital Transformation Progress</div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xs text-gray-600">Active Municipalities</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Selected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
