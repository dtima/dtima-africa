'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Database } from '@/types/supabase'; // Assuming Supabase types are defined here
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { Alert } from '@/components/ui/Alert';
import { cn } from '@/lib/utils';

// Define the shape of a testimonial, matching Supabase row + expected fields
type TestimonialType = Database['public']['Tables']['testimonials']['Row'] & {
  // Ensure these fields exist in the fetched data or type definition
  organization?: string | null;
  title?: string | null;
  image_url?: string | null;
};

// Define props for the component
interface GlobalLeadersSectionProps {
  testimonials: TestimonialType[] | null;
  isLoading?: boolean;
  error?: string | null;
  translations: {
    title: string;
    subtitle?: string;
    prevButtonAriaLabel: string; // Use descriptive ARIA labels from translations
    nextButtonAriaLabel: string;
    paginationDotAriaLabel: string; // e.g., "Go to slide {index}"
    loadingText?: string;
    errorTitle?: string; // e.g., "Error loading testimonials"
    errorText?: string;
  };
}

export function GlobalLeadersSection({ 
  testimonials,
  isLoading = false,
  error = null,
  translations 
}: GlobalLeadersSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonialsCount = testimonials?.length ?? 0;

  // Reset timeout on navigation
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
    }
  }, []);

  // Go to next slide
  const handleNext = useCallback(() => {
    resetTimeout();
    setActiveIndex((prev) => (prev + 1) % testimonialsCount);
  }, [resetTimeout, testimonialsCount]);

  // Go to previous slide
  const handlePrev = useCallback(() => {
    resetTimeout();
    setActiveIndex((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
  }, [resetTimeout, testimonialsCount]);

  // Go to specific slide (for dots)
  const goToSlide = (index: number) => {
    resetTimeout();
    setActiveIndex(index);
  };

  // Auto-advance functionality
  useEffect(() => {
    if (testimonialsCount > 1) {
        resetTimeout(); // Clear existing timers
        intervalRef.current = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => { // Cleanup on unmount or dependency change
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }
  }, [testimonialsCount, handleNext, resetTimeout]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    const sliderElement = containerRef.current;
    sliderElement?.addEventListener('keydown', handleKeyDown);

    return () => {
      sliderElement?.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  // --- Render Logic ---

  if (isLoading) {
    return (
      <section className="py-16 px-4 bg-dtima-blue-100 text-center">
        <LoadingSpinner />
        {translations.loadingText && <p className="mt-2 text-dtima-gray-600">{translations.loadingText}</p>}
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-dtima-red-100">
        <div className="container mx-auto">
          <Alert variant="error" title={translations.errorTitle || 'Error'}>
            {translations.errorText || error}
          </Alert>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null; // Or render a message indicating no testimonials
  }

  return (
    <section className="py-16 px-4 bg-dtima-blue-100 overflow-hidden" aria-labelledby="global-leaders-title">
      <div ref={containerRef} className="container mx-auto text-center relative" tabIndex={0} role="region" aria-roledescription="carousel">
        <h2 id="global-leaders-title" className="text-3xl font-bold text-dtima-black mb-4">{translations.title}</h2>
        {translations.subtitle && <p className="mb-12 text-lg text-dtima-gray-600">{translations.subtitle}</p>}
        
        <div className="relative mx-auto max-w-3xl">
            {/* Testimonial Slides (using translate for smooth transition) */}
             <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                aria-live="polite"
            >
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={testimonial.id}
                        className="w-full flex-shrink-0 px-4 flex flex-col items-center"
                        role="group" 
                        aria-roledescription="slide"
                        aria-label={`${index + 1} of ${testimonialsCount}`}
                        aria-hidden={activeIndex !== index}
                    >
                        {testimonial.image_url && (
                        <div className="mb-6 relative h-24 w-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src={testimonial.image_url}
                                alt={`Portrait of ${testimonial.name}`}
                                layout="fill"
                                objectFit="cover"
                                unoptimized // If using external URLs not configured in next.config.js
                            />
                        </div>
                        )}
                        <blockquote className="text-xl italic mb-6 text-dtima-gray-800 max-w-2xl">
                        &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="font-bold text-dtima-black">{testimonial.name}</div>
                        {(testimonial.title || testimonial.organization) && (
                            <div className="text-dtima-blue">
                                {testimonial.title}{testimonial.title && testimonial.organization && ', '}{testimonial.organization}
                            </div>
                        )}
                  </div>
                ))}
            </div>

            {/* Desktop Navigation Arrows */}    
            {testimonialsCount > 1 && (
                <>
                    <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={handlePrev}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 hidden md:inline-flex bg-white/50 hover:bg-white/80 rounded-full text-dtima-black hover:text-dtima-red"
                        aria-label={translations.prevButtonAriaLabel}
                        aria-controls="testimonial-slides"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={handleNext}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden md:inline-flex bg-white/50 hover:bg-white/80 rounded-full text-dtima-black hover:text-dtima-red"
                        aria-label={translations.nextButtonAriaLabel}
                        aria-controls="testimonial-slides"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </>
            )}
        </div>

        {/* Mobile Pagination Dots */}    
        {testimonialsCount > 1 && (
            <div className="flex justify-center space-x-2 mt-8 md:hidden" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    activeIndex === index ? 'bg-dtima-blue' : 'bg-dtima-gray-400 hover:bg-dtima-gray-500'
                    )}
                    aria-selected={activeIndex === index}
                    aria-controls={`testimonial-slide-${index}`}
                    role="tab"
                    aria-label={translations.paginationDotAriaLabel.replace('{index}', String(index + 1))}
                />
                ))}
            </div>
        )}
      </div>
    </section>
  );
} 