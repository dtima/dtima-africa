'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Locale } from '@/lib/utils/i18n';
import { COUNCILS } from '@/data/councils';
import { CouncilCard } from '@/components/councils/CouncilCard';
import { CouncilFilter } from '@/components/councils/CouncilFilter';
import { MapPin, Map, Globe } from 'lucide-react';

interface CouncilsClientPageProps {
  params: {
    locale: Locale;
  };
}

export default function CouncilsClientPage({ params }: CouncilsClientPageProps) {
  const { locale } = params;
  const searchParams = useSearchParams();
  
  // State for filtering
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get council ID from URL if present
  useEffect(() => {
    const councilId = searchParams.get('council');
    if (councilId) {
      // Find the council
      const council = COUNCILS.find(c => c.id === councilId);
      if (council) {
        // Set the country filter to match the council's country
        setSelectedCountry(council.countryCode);
      }
    }
  }, [searchParams]);
  
  // Get unique countries and count
  const countries = useMemo(() => {
    const countryMap = COUNCILS.reduce((acc, council) => {
      if (!acc[council.countryCode]) {
        acc[council.countryCode] = {
          name: council.country,
          code: council.countryCode,
          count: 0
        };
      }
      acc[council.countryCode].count++;
      return acc;
    }, {} as Record<string, { name: string; code: string; count: number }>);
    
    return Object.values(countryMap);
  }, []);
  
  // Filter councils based on country and search query
  const filteredCouncils = useMemo(() => {
    return COUNCILS.filter(council => {
      // Filter by country if selected
      if (selectedCountry && council.countryCode !== selectedCountry) {
        return false;
      }
      
      // Filter by search query if provided
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          council.name.toLowerCase().includes(searchLower) ||
          council.region.toLowerCase().includes(searchLower) ||
          council.country.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    });
  }, [selectedCountry, searchQuery]);
  
  return (
    <main>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-purple py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Participating Councils
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Discover our network of municipalities spearheading digital transformation across Africa
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
    
      <div className="container mx-auto px-4 py-12">
        {/* Statistics summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
            <div className="w-12 h-12 bg-dtima-blue/10 rounded-full flex items-center justify-center mr-4">
              <Globe className="h-6 w-6 text-dtima-blue" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{countries.length}</div>
              <div className="text-gray-500">Countries</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
            <div className="w-12 h-12 bg-dtima-green/10 rounded-full flex items-center justify-center mr-4">
              <MapPin className="h-6 w-6 text-dtima-green" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{COUNCILS.length}</div>
              <div className="text-gray-500">Councils</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
            <div className="w-12 h-12 bg-dtima-purple/10 rounded-full flex items-center justify-center mr-4">
              <Map className="h-6 w-6 text-dtima-purple" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">300k+</div>
              <div className="text-gray-500">Citizens Impacted</div>
            </div>
          </div>
        </div>
        
        {/* Coverage Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Coverage Map</h2>
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Explore our network of participating councils across Africa. Our digital transformation 
                initiatives are helping to modernize municipal governance and improve service delivery 
                in these regions.
              </p>
              
              <div className="aspect-[16/9] bg-gray-100 rounded-lg relative overflow-hidden">
                {/* Interactive map placeholder - would be replaced with actual map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Africa map placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <svg viewBox="0 0 800 800" className="w-full h-full">
                          {/* Simplified Africa continent shape */}
                          <path 
                            d="M400,150 C500,150 550,200 600,250 C650,300 700,400 700,500 C700,600 650,650 600,700 C550,750 500,750 400,750 C300,750 250,700 200,650 C150,600 100,550 100,450 C100,350 150,300 200,250 C250,200 300,150 400,150 Z" 
                            fill="#f0f9ff" 
                            stroke="#0284c7" 
                            strokeWidth="2"
                          />
                          
                          {/* Council locations clusters by country */}
                          {/* These would be actual council locations in a real implementation */}
                          {/* Cameroon cluster */}
                          <circle cx="450" cy="450" r="18" fill="#3b82f6" opacity="0.7" />
                          <circle cx="470" cy="440" r="14" fill="#3b82f6" opacity="0.7" />
                          <circle cx="430" cy="460" r="16" fill="#3b82f6" opacity="0.7" />
                          <circle cx="445" cy="475" r="12" fill="#3b82f6" opacity="0.7" />
                          <circle cx="465" cy="460" r="10" fill="#3b82f6" opacity="0.7" />
                          
                          {/* Gabon cluster */}
                          <circle cx="420" cy="500" r="15" fill="#22c55e" opacity="0.7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm text-xs">
                      <div className="grid gap-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-dtima-blue mr-2"></div>
                          <span>Cameroon</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-dtima-green mr-2"></div>
                          <span>Gabon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Council Filtering and Listing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Find a Council</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CouncilFilter 
                countries={countries}
                selectedCountry={selectedCountry}
                onCountryChange={setSelectedCountry}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>
            
            <div className="lg:col-span-3">
              {filteredCouncils.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCouncils.map(council => (
                    <CouncilCard key={council.id} council={council} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 mb-4">No councils found matching your criteria.</p>
                  <button 
                    className="text-dtima-blue hover:text-dtima-blue-dark font-medium"
                    onClick={() => {
                      setSelectedCountry(null);
                      setSearchQuery('');
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="bg-dtima-blue/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in joining our network?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Is your municipality ready to embark on a digital transformation journey? 
            Connect with us to explore how your council can become part of our network.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-dtima-blue hover:bg-dtima-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
} 