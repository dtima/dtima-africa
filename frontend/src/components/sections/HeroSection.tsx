'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocalizedRoute } from '@/lib/client-utils';

// Fallback images for each slide theme
const FALLBACK_IMAGES = {
  governance: 'https://placehold.co/1200x800/228BE6/FFFFFF?text=Digital+Governance',
  smartCity: 'https://placehold.co/1200x800/12B886/FFFFFF?text=Smart+City+Solutions',
  capacityBuilding: 'https://placehold.co/1200x800/15AABF/FFFFFF?text=Capacity+Building',
  collaboration: 'https://placehold.co/1200x800/7950F2/FFFFFF?text=Collaborative+Innovation',
  inclusion: 'https://placehold.co/1200x800/FA5252/FFFFFF?text=Digital+Inclusion',
};

interface SlideContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  fallbackSrc: string;
  ctaLink: string;
  ctaText: string;
  secondaryCtaLink?: string;
  secondaryCtaText?: string;
}

const SLIDES: SlideContent[] = [
  {
    id: 1,
    title: "Digital Transformation for African Municipalities",
    subtitle: "Empowering Local Governments",
    description: "Building sustainable digital infrastructure for effective governance, transparent services, and connected communities across Africa.",
    imageSrc: "/images/hero/digital-governance.jpg",
    fallbackSrc: FALLBACK_IMAGES.governance,
    ctaLink: "/programs",
    ctaText: "Explore Programs",
    secondaryCtaLink: "/partners",
    secondaryCtaText: "Partner With Us"
  },
  {
    id: 2,
    title: "Smart City Solutions",
    subtitle: "Urban Innovation",
    description: "Implementing data-driven technologies to create efficient, resilient and responsive urban environments for African municipalities.",
    imageSrc: "/images/hero/smart-city.jpg",
    fallbackSrc: FALLBACK_IMAGES.smartCity,
    ctaLink: "/activities/digital-platforms",
    ctaText: "View Solutions"
  },
  {
    id: 3,
    title: "Capacity Building Programs",
    subtitle: "Cultivating Digital Skills",
    description: "Developing essential digital competencies among municipal staff to effectively leverage technology for public service delivery.",
    imageSrc: "/images/hero/capacity-building.jpg",
    fallbackSrc: FALLBACK_IMAGES.capacityBuilding,
    ctaLink: "/activities/capacity-building",
    ctaText: "Join Training"
  },
  {
    id: 4,
    title: "Collaborative Innovation",
    subtitle: "Ecosystem Partnership",
    description: "Creating synergies between governments, tech innovators, academia and communities to solve pressing municipal challenges.",
    imageSrc: "/images/hero/collaboration.jpg",
    fallbackSrc: FALLBACK_IMAGES.collaboration,
    ctaLink: "/activities/innovation-challenges",
    ctaText: "View Initiatives"
  },
  {
    id: 5,
    title: "Digital Inclusion for All",
    subtitle: "Bridging Digital Divides",
    description: "Ensuring all citizens have access to digital services regardless of location, economic status, or technical proficiency.",
    imageSrc: "/images/hero/digital-inclusion.jpg",
    fallbackSrc: FALLBACK_IMAGES.inclusion,
    ctaLink: "/about/impact-goals",
    ctaText: "See Our Impact"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const { locale } = useParams();
  const getLocalizedRoute = useLocalizedRoute();
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  
  // Detect reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

  // Memoize navigation functions
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && currentSlide !== index) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, currentSlide]);

  // Auto-advance slides, pause when user interacting
  useEffect(() => {
    // Don't auto-advance if user prefers reduced motion
    if (prefersReducedMotion || isUserInteracting) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isUserInteracting, prefersReducedMotion, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'BUTTON') return;
      
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section 
      className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-gradient-to-tr from-dtima-blue-900 to-dtima-blue-700"
      onMouseEnter={() => setIsUserInteracting(true)}
      onMouseLeave={() => setIsUserInteracting(false)}
      onFocus={() => setIsUserInteracting(true)}
      onBlur={() => setIsUserInteracting(false)}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "border border-white/10",
                i % 7 === 0 && "bg-dtima-green-500/20",
                i % 11 === 0 && "bg-dtima-blue-300/20"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Slides */}
      <div 
        ref={slidesContainerRef}
        className="relative w-full h-full"
        role="region"
        aria-label="Featured slides"
        aria-roledescription="carousel"
      >
        {SLIDES.map((slide, index) => (
          <div 
            key={slide.id} 
            id={`slide-${index}`}
            role="tabpanel"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
            aria-hidden={index !== currentSlide}
            className={cn(
              "absolute inset-0 flex items-center transition-all duration-500 ease-in-out",
              prefersReducedMotion 
                ? "transition-opacity" 
                : "transition-all transform",
              index === currentSlide 
                ? "opacity-100 z-10 translate-x-0" 
                : index < currentSlide 
                  ? "opacity-0 z-0 -translate-x-full" 
                  : "opacity-0 z-0 translate-x-full",
              // Disable transform for reduced motion preference
              prefersReducedMotion && index !== currentSlide && "translate-x-0"
            )}
          >
            {/* Background Image with fallback handling */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-dtima-blue-900/70 backdrop-blur-sm z-10"></div>
              <div className="absolute inset-0 flex">
                <Image 
                  src={slide.imageSrc} 
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index <= 1 ? "eager" : "lazy"}
                  sizes="100vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = slide.fallbackSrc;
                    target.onerror = null;
                  }}
                  aria-hidden="true" // Decorative image, content described in text
                />
              </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-20 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2 text-white">
                <div className="space-y-6 max-w-xl">
                  <h2 className="text-sm md:text-base uppercase tracking-wider text-dtima-green-300 font-medium">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-dtima-blue-200">
                    {slide.title}
                  </h1>
                  <p className="text-md md:text-lg text-gray-100 max-w-md leading-relaxed backdrop-blur-sm bg-dtima-blue-900/30 p-4 rounded-lg shadow-lg border border-white/10">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-3">
                    <Button 
                      asChild 
                      variant="default" 
                      size="lg" 
                      className="bg-dtima-green hover:bg-dtima-green-dark text-white"
                    >
                      <Link href={getLocalizedRoute(slide.ctaLink)}>
                        {slide.ctaText}
                      </Link>
                    </Button>
                    {slide.secondaryCtaText && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="border-white text-white hover:bg-white/10"
                      >
                        <Link href={getLocalizedRoute(slide.secondaryCtaLink || '')}>
                          {slide.secondaryCtaText}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block w-full md:w-1/2 relative h-72 md:h-96">
                {/* Futuristic 3D element or illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 relative">
                    <div className={cn(
                      "absolute inset-0 rounded-full bg-gradient-to-tr from-dtima-blue-500/30 to-dtima-green-500/30 blur-xl",
                      !prefersReducedMotion && "animate-pulse"
                    )}></div>
                    <div className="absolute inset-0 rounded-xl bg-dtima-blue-900/40 backdrop-blur-md border border-white/20 shadow-xl transform rotate-12 scale-75"></div>
                    <div className="absolute inset-0 rounded-xl bg-dtima-blue-900/40 backdrop-blur-md border border-white/20 shadow-xl transform -rotate-12 scale-75"></div>
                    <div className="absolute inset-0 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden">
                      {/* Visual indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 relative">
                          <div className={cn(
                            "absolute inset-0 bg-dtima-green-500 rounded-full opacity-30",
                            !prefersReducedMotion && "animate-ping"
                          )}></div>
                          <div className="absolute inset-0 bg-dtima-green-400 rounded-full scale-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center space-y-4">
        {/* Slide indicators */}
        <div 
          className="flex space-x-3"
          role="tablist"
          aria-label="Select a slide to show"
        >
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dtima-blue-900",
                "rounded-full",
                // Larger touch targets on mobile
                "w-4 h-4 md:w-3 md:h-3",
                // Active state has different size and color
                index === currentSlide 
                  ? "bg-dtima-green-400 w-10 md:w-8" 
                  : "bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              aria-controls={`slide-${index}`}
              role="tab"
            />
          ))}
        </div>
        
        {/* Prev/Next buttons */}
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dtima-blue-900"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dtima-blue-900"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Status indicator - helps screen reader users know the state */}
        <div className="sr-only" aria-live="polite">
          Showing slide {currentSlide + 1} of {SLIDES.length}
        </div>
      </div>
    </section>
  );
} 