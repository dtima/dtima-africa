'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'academic' | 'corporate' | 'government' | 'ngo';
  description: string;
  website?: string;
  featured?: boolean;
}

const PARTNERS: Partner[] = [
  {
    id: 1,
    name: 'Tech Africa',
    logo: '/images/partners/tech-africa.png',
    type: 'corporate',
    description: 'Leading technology solutions provider across the African continent.',
    website: 'https://tech-africa.example.com',
    featured: true,
  },
  {
    id: 2,
    name: 'African Development Bank',
    logo: '/images/partners/adb.png',
    type: 'government',
    description: 'Financial institution focused on promoting economic development across Africa.',
    website: 'https://afdb.example.org',
    featured: true,
  },
  {
    id: 3,
    name: 'University of Cape Town',
    logo: '/images/partners/uct.png',
    type: 'academic',
    description: 'Premier academic institution with a strong focus on technology innovation.',
    website: 'https://uct.example.edu',
    featured: true,
  },
  {
    id: 4,
    name: 'Digital Rights Foundation',
    logo: '/images/partners/drf.png',
    type: 'ngo',
    description: 'Organization dedicated to promoting digital rights and inclusion across Africa.',
    website: 'https://drf.example.org',
    featured: true,
  },
  {
    id: 5,
    name: 'Savannah Innovations',
    logo: '/images/partners/savannah.png',
    type: 'corporate',
    description: 'Innovation hub supporting startups and digital initiatives in East Africa.',
    website: 'https://savannah.example.com',
    featured: true,
  },
  {
    id: 6,
    name: 'West African Digital Coalition',
    logo: '/images/partners/wadc.png',
    type: 'government',
    description: 'Regional body promoting digital policy harmonization across West Africa.',
    website: 'https://wadc.example.org',
    featured: true,
  },
  {
    id: 7,
    name: 'Lagos Business School',
    logo: '/images/partners/lbs.png',
    type: 'academic',
    description: 'Leading business school providing digital transformation education for executives.',
    website: 'https://lbs.example.edu',
  },
  {
    id: 8,
    name: 'African Tech Ventures',
    logo: '/images/partners/atv.png',
    type: 'corporate',
    description: 'Venture capital firm investing in transformative digital startups across Africa.',
    website: 'https://atv.example.com',
  },
  {
    id: 9,
    name: 'Pan-African Data Council',
    logo: '/images/partners/padc.png',
    type: 'government',
    description: 'Organization focused on data governance policies for African nations.',
    website: 'https://padc.example.org',
  },
  {
    id: 10,
    name: 'Digital Inclusion Network',
    logo: '/images/partners/din.png',
    type: 'ngo',
    description: 'Grassroots organization working to expand digital access to underserved communities.',
    website: 'https://din.example.org',
  },
];

type PartnerType = 'all' | 'academic' | 'corporate' | 'government' | 'ngo';

export function PartnersSection() {
  const [filter, setFilter] = useState<PartnerType>('all');
  const [hoveredPartnerId, setHoveredPartnerId] = useState<number | null>(null);
  const filterButtonsRef = useRef<HTMLDivElement>(null);
  
  // Handle horizontal scrolling of filter buttons on mobile
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (filterButtonsRef.current) {
        e.preventDefault();
        filterButtonsRef.current.scrollLeft += e.deltaY;
      }
    };
    
    const filterButtons = filterButtonsRef.current;
    if (filterButtons) {
      filterButtons.addEventListener('wheel', handleWheel);
    }
    
    return () => {
      if (filterButtons) {
        filterButtons.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  // Memoize filtered partners to avoid unnecessary recalculations
  const filteredPartners = useMemo(() => {
    return filter === 'all' 
      ? PARTNERS 
      : PARTNERS.filter(partner => partner.type === filter);
  }, [filter]);

  // Get counts for each category for the filter buttons
  const counts = useMemo(() => {
    return {
      all: PARTNERS.length,
      academic: PARTNERS.filter(p => p.type === 'academic').length,
      corporate: PARTNERS.filter(p => p.type === 'corporate').length,
      government: PARTNERS.filter(p => p.type === 'government').length,
      ngo: PARTNERS.filter(p => p.type === 'ngo').length,
    };
  }, []);

  return (
    <section 
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="partners-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Strategic Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations across sectors to drive digital transformation in Africa.
          </p>
        </div>

        {/* Filter controls */}
        <div 
          ref={filterButtonsRef}
          className="flex flex-nowrap justify-start md:justify-center mb-8 gap-2 overflow-x-auto py-2 px-1 scrollbar-hide"
          role="tablist"
          aria-label="Filter partners by type"
        >
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
            role="tab"
            aria-selected={filter === 'all'}
            id="tab-all"
            aria-controls="tabpanel-partners"
            className="touch-target whitespace-nowrap min-w-[120px]"
          >
            All Partners <span className="ml-1 text-xs">({counts.all})</span>
          </Button>
          <Button 
            variant={filter === 'academic' ? 'default' : 'outline'}
            onClick={() => setFilter('academic')}
            aria-pressed={filter === 'academic'}
            role="tab"
            aria-selected={filter === 'academic'}
            id="tab-academic"
            aria-controls="tabpanel-partners"
            className="touch-target whitespace-nowrap min-w-[120px]"
          >
            Academic <span className="ml-1 text-xs">({counts.academic})</span>
          </Button>
          <Button 
            variant={filter === 'corporate' ? 'default' : 'outline'}
            onClick={() => setFilter('corporate')}
            aria-pressed={filter === 'corporate'}
            role="tab"
            aria-selected={filter === 'corporate'}
            id="tab-corporate"
            aria-controls="tabpanel-partners"
            className="touch-target whitespace-nowrap min-w-[120px]"
          >
            Corporate <span className="ml-1 text-xs">({counts.corporate})</span>
          </Button>
          <Button 
            variant={filter === 'government' ? 'default' : 'outline'}
            onClick={() => setFilter('government')}
            aria-pressed={filter === 'government'}
            role="tab"
            aria-selected={filter === 'government'}
            id="tab-government"
            aria-controls="tabpanel-partners"
            className="touch-target whitespace-nowrap min-w-[120px]"
          >
            Government <span className="ml-1 text-xs">({counts.government})</span>
          </Button>
          <Button 
            variant={filter === 'ngo' ? 'default' : 'outline'}
            onClick={() => setFilter('ngo')}
            aria-pressed={filter === 'ngo'}
            role="tab"
            aria-selected={filter === 'ngo'}
            id="tab-ngo"
            aria-controls="tabpanel-partners"
            className="touch-target whitespace-nowrap min-w-[120px]"
          >
            NGOs <span className="ml-1 text-xs">({counts.ngo})</span>
          </Button>
        </div>

        {/* Partners grid with animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            id="tabpanel-partners"
            role="tabpanel"
            aria-labelledby={`tab-${filter}`}
            className={cn(
              "grid gap-6 mb-12",
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              filteredPartners.length === 0 && "min-h-[200px] flex items-center justify-center"
            )}
          >
            {filteredPartners.length > 0 ? (
              filteredPartners.map((partner) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "bg-white rounded-card border border-gray-200",
                    "shadow-sm transition-all duration-300", 
                    "p-6 flex flex-col items-center text-center h-full",
                    "focus-within:ring-2 focus-within:ring-dtima-blue focus-within:ring-offset-2",
                    hoveredPartnerId === partner.id ? "shadow-lg transform scale-[1.02]" : "hover:shadow-md"
                  )}
                  onMouseEnter={() => setHoveredPartnerId(partner.id)}
                  onMouseLeave={() => setHoveredPartnerId(null)}
                >
                  <div className="w-32 h-32 relative mb-4 overflow-hidden rounded-md bg-gray-50 p-2">
                    <Image
                      src={partner.logo}
                      alt=""
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/200x200?text=Partner';
                        target.onerror = null;
                      }}
                      aria-hidden="true" // Logo is decorative, name is already provided as text
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <span 
                    className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                      partner.type === 'academic' && "bg-dtima-blue-100 text-dtima-blue-800",
                      partner.type === 'corporate' && "bg-dtima-green-100 text-dtima-green-800",
                      partner.type === 'government' && "bg-purple-100 text-purple-800",
                      partner.type === 'ngo' && "bg-dtima-red-100 text-dtima-red-800"
                    )}
                  >
                    {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                  </span>
                  <p className="text-gray-600 flex-grow">{partner.description}</p>
                  
                  {partner.website && (
                    <a 
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-dtima-blue hover:text-dtima-blue-dark font-medium text-sm"
                      aria-label={`Visit ${partner.name}'s website`}
                    >
                      Visit Website <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-8">
                No partners found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Featured testimonial */}
        <div className="bg-dtima-blue-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <blockquote className="text-dtima-blue-800 italic text-lg">
                "Our partnership with DTIMA has been transformative for our municipality. The technical expertise and support provided have enabled us to implement digital solutions that truly serve our citizens."
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">Mayor Josephine Nkosi</p>
                <p className="text-gray-600">Savannah City Council</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {PARTNERS.filter(p => p.featured).slice(0, 6).map(partner => (
                <div 
                  key={partner.id} 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/120x80?text=Partner';
                        target.onerror = null;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-dtima-green hover:bg-dtima-green-dark touch-target focus:ring-2 focus:ring-dtima-green focus:ring-offset-2"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
} 