'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnnouncementBannerProps {
  message?: string
  mobileMessage?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  className?: string
}

const defaultProps: Required<AnnouncementBannerProps> = {
  message: 'DTIMA is transforming municipalities across Africa with digital solutions!',
  mobileMessage: 'DTIMA is transforming municipalities across Africa!',
  ctaText: 'Learn More',
  ctaHref: '#about',
  variant: 'info',
  dismissible: true,
  className: ''
}

const variantStyles = {
  info: {
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    icon: 'bg-blue-800',
    text: 'text-white',
    border: 'border-blue-500'
  },
  success: {
    bg: 'bg-green-600',
    hover: 'hover:bg-green-700',
    icon: 'bg-green-800',
    text: 'text-white',
    border: 'border-green-500'
  },
  warning: {
    bg: 'bg-yellow-600',
    hover: 'hover:bg-yellow-700',
    icon: 'bg-yellow-800',
    text: 'text-white',
    border: 'border-yellow-500'
  },
  error: {
    bg: 'bg-red-600',
    hover: 'hover:bg-red-700',
    icon: 'bg-red-800',
    text: 'text-white',
    border: 'border-red-500'
  }
}

export function AnnouncementBanner(props: AnnouncementBannerProps) {
  const { message, mobileMessage, ctaText, ctaHref, variant, dismissible, className } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  // Check if banner was dismissed in localStorage
  useEffect(() => {
    if (dismissible) {
      const dismissed = localStorage.getItem('dtima-announcement-dismissed')
      if (dismissed) {
        setIsVisible(false)
      }
    }
  }, [dismissible])

  const handleDismiss = () => {
    if (dismissible) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsVisible(false)
        localStorage.setItem('dtima-announcement-dismissed', 'true')
      }, 300)
    }
  }

  const handleCTAClick = () => {
    // Track CTA click for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'announcement_cta_click', {
        event_category: 'engagement',
        event_label: ctaHref
      })
    }
  }

  if (!isVisible) return null

  const styles = variantStyles[variant]

  return (
    <div className={cn(
      "relative z-50",
      isAnimating ? "animate-slide-up" : "animate-slide-down",
      className
    )}>
      <div className={cn(
        "border-b",
        styles.border
      )}>
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className={cn(
                "flex p-2 rounded-lg",
                styles.icon
              )}>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </span>
              <p className={cn(
                "ml-3 font-medium truncate",
                styles.text
              )}>
                <span className="md:hidden">{mobileMessage}</span>
                <span className="hidden md:inline">{message}</span>
              </p>
            </div>
            
            <div className="flex-shrink-0 flex items-center space-x-4">
              {/* CTA Button */}
              <a
                href={ctaHref}
                onClick={handleCTAClick}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  "bg-white bg-opacity-20 hover:bg-opacity-30",
                  styles.text
                )}
              >
                {ctaText}
              </a>

              {/* Dismiss Button */}
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className={cn(
                    "flex-shrink-0 p-2 rounded-md transition-colors duration-200",
                    "hover:bg-white hover:bg-opacity-20",
                    styles.text
                  )}
                  aria-label="Dismiss announcement"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar for auto-dismiss (optional) */}
      {dismissible && (
        <div className="h-1 bg-white bg-opacity-20">
          <div 
            className={cn(
              "h-full transition-all duration-300 ease-linear",
              styles.bg
            )}
            style={{ 
              width: isAnimating ? '0%' : '100%',
              transition: isAnimating ? 'width 0.3s ease-out' : 'width 30s linear'
            }}
          />
        </div>
      )}
    </div>
  )
}

// Alternative banner with different content
export function EventAnnouncementBanner() {
  return (
    <AnnouncementBanner
      message="Join us at the African Digital Transformation Summit 2024! Register now for early bird pricing."
      mobileMessage="African Digital Transformation Summit 2024 - Register now!"
      ctaText="Register Now"
      ctaHref="#summit-2024"
      variant="success"
    />
  )
}

export function MaintenanceAnnouncementBanner() {
  return (
    <AnnouncementBanner
      message="Scheduled maintenance on Sunday, 2:00-4:00 AM UTC. Some services may be temporarily unavailable."
      mobileMessage="Scheduled maintenance on Sunday, 2:00-4:00 AM UTC."
      ctaText="View Details"
      ctaHref="#maintenance"
      variant="warning"
      dismissible={false}
    />
  )
}

export function NewFeatureAnnouncementBanner() {
  return (
    <AnnouncementBanner
      message="New: Real-time analytics dashboard now available for all municipal partners!"
      mobileMessage="New: Real-time analytics dashboard available!"
      ctaText="Try Now"
      ctaHref="#analytics"
      variant="info"
    />
  )
}
