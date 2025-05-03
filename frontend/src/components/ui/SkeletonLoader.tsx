'use client';

import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'line' | 'circle' | 'rect' | 'card' | 'text';
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

export function SkeletonLoader({
  variant = 'line',
  width,
  height,
  className = '',
  count = 1,
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const getStyle = () => {
    const style: React.CSSProperties = {};
    
    if (width) {
      style.width = typeof width === 'number' ? `${width}px` : width;
    }
    
    if (height) {
      style.height = typeof height === 'number' ? `${height}px` : height;
    }
    
    return style;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'circle':
        return 'rounded-full';
      case 'rect':
        return 'rounded-md';
      case 'card':
        return 'rounded-md w-full h-40';
      case 'text':
        return 'h-4 w-3/4 rounded';
      case 'line':
      default:
        return 'h-4 w-full rounded';
    }
  };

  const renderSkeleton = (key: number) => (
    <div
      key={key}
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getStyle()}
      aria-hidden="true"
    />
  );

  return (
    <>
      {Array.from({ length: count }).map((_, index) => renderSkeleton(index))}
    </>
  );
} 