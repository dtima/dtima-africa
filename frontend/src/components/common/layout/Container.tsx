import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Container component props
 * @typedef ContainerProps
 * @property {React.ReactNode} children - The content inside the container
 * @property {string} [className] - Additional CSS classes
 * @property {boolean} [fluid=false] - Whether the container should be fluid width (100%) or fixed with max-width
 * @property {string} [as='div'] - The HTML element to render as
 */
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  as?: React.ElementType;
}

/**
 * A responsive container component that centers content horizontally
 * and provides consistent padding.
 * 
 * @example
 * // Basic usage
 * <Container>
 *   <h1>Page Content</h1>
 *   <p>More content...</p>
 * </Container>
 * 
 * @example
 * // Fluid container (100% width)
 * <Container fluid>
 *   <div>Full width content</div>
 * </Container>
 * 
 * @example
 * // Render as a different element
 * <Container as="section" className="my-8">
 *   <h2>Section Title</h2>
 * </Container>
 */
export function Container({
  children,
  className,
  fluid = false,
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto px-4 w-full',
        !fluid && 'max-w-7xl',
        className
      )}
    >
      {children}
    </Component>
  );
} 