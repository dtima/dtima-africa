'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  src: string
  alt: string
  fallbackText?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt,
  fallbackText,
  className,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
}) => {
  const [imageError, setImageError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // If image failed to load, show placeholder
  if (imageError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100 text-gray-400',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <div className="text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm font-medium">
            {fallbackText || 'Image not available'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative', fill ? 'absolute inset-0' : '', className)}>
      {isLoading && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse',
            fill ? 'absolute inset-0' : ''
          )}
          style={!fill ? { width, height } : undefined}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill={fill}
        {...(!fill && width && height ? { width, height } : {})}
        sizes={sizes}
        priority={priority}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
      />
    </div>
  )
}
