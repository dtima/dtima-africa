import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Card component props
 * @typedef CardProps
 * @property {React.ReactNode} children - The content inside the card
 * @property {string} [className] - Additional CSS classes for the card container
 * @property {string} [title] - Card title
 * @property {React.ReactNode} [action] - Action component to render in the header (button, link, etc.)
 * @property {boolean} [noPadding=false] - Whether to remove default padding
 * @property {string} [variant='default'] - Card visual variant (default, outline, flat)
 * @property {string} [elevation='md'] - Shadow size (none, sm, md, lg)
 */
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
  variant?: 'default' | 'outline' | 'flat';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * A versatile card component for grouping related content.
 * 
 * @example
 * // Basic usage
 * <Card>
 *   <p>Card content goes here</p>
 * </Card>
 * 
 * @example
 * // With title and action
 * <Card 
 *   title="User Profile" 
 *   action={<Button variant="ghost" size="sm">Edit</Button>}
 * >
 *   <UserDetails user={user} />
 * </Card>
 * 
 * @example
 * // Different variants
 * <Card variant="outline" elevation="sm">
 *   <p>Content with outline and small shadow</p>
 * </Card>
 */
export function Card({ 
  children, 
  className,
  title,
  action,
  noPadding = false,
  variant = 'default',
  elevation = 'md',
}: CardProps) {
  // Variant classes
  const variantClasses = {
    default: 'bg-white',
    outline: 'bg-white border border-gray-200',
    flat: 'bg-gray-50',
  };
  
  // Elevation classes
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };
  
  return (
    <div 
      className={cn(
        'rounded-lg overflow-hidden', 
        variantClasses[variant],
        elevationClasses[elevation],
        className
      )}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {action && <div>{action}</div>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
    </div>
  );
} 