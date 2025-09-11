'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ImpactMetric {
  value: string
  label: string
  change: string
  changeType: 'increase' | 'decrease'
  icon: string
}

interface ImpactMetricsSectionProps {
  title?: string
  subtitle?: string
  metrics?: ImpactMetric[]
}

interface AnimatedMetricProps {
  metric: ImpactMetric
  isVisible: boolean
}

const defaultProps: Required<ImpactMetricsSectionProps> = {
  title: 'Our Impact Across Africa',
  subtitle: 'Real numbers, real impact, real transformation',
  metrics: [
    {
      value: '16+',
      label: 'Partner Municipalities',
      change: 'Active partnerships',
      changeType: 'increase',
      icon: '🏛️'
    },
    {
      value: '500K+',
      label: 'Citizens Reached',
      change: 'Across 6 countries',
      changeType: 'increase',
      icon: '👥'
    },
    {
      value: '15+',
      label: 'Digital Platforms Launched',
      change: 'Fully operational',
      changeType: 'increase',
      icon: '💻'
    },
    {
      value: '6',
      label: 'Countries Active',
      change: 'Multi-national presence',
      changeType: 'increase',
      icon: '🌍'
    }
  ]
}

function AnimatedMetric({ metric, isVisible }: AnimatedMetricProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const targetValue = parseInt(metric.value.replace(/[^0-9]/g, ''))
  const suffix = metric.value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = targetValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setCount(targetValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
    return undefined
  }, [isVisible, hasAnimated, targetValue])

  return (
    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 group">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">{metric.icon}</span>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {hasAnimated ? `${count}${suffix}` : `0${suffix}`}
      </div>
      <div className="text-gray-600 mb-3">{metric.label}</div>
      <div className={cn(
        "text-sm font-medium flex items-center justify-center",
        metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
      )}>
        <span className="mr-1">
          {metric.changeType === 'increase' ? '↗' : '↘'}
        </span>
        {metric.change}
      </div>
    </div>
  )
}

export function ImpactMetricsSection(props: ImpactMetricsSectionProps) {
  const { title, subtitle, metrics } = { ...defaultProps, ...props }
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="impact"
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="impact-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16",
          isVisible ? "animate-fade-in" : "opacity-0"
        )}>
          <h2 
            id="impact-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 delay-100",
                isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <AnimatedMetric metric={metric} isVisible={isVisible} />
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className={cn(
          "mt-16 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-4 bg-blue-50 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-900">
              Real-time data from active municipalities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
