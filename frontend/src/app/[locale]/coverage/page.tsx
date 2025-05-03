import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Locale, getTranslations, createTranslator } from '@/lib/utils';
import { MapPin, Users, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coverage Areas | DTIMA',
  description: 'Explore the regions and municipalities where DTIMA operates across Africa',
};

interface Location {
  id: number;
  name: string;
  region: string;
  country: string;
  population: string;
  activeProjects: number;
  coordinates: {
    x: number;
    y: number;
  };
}

// In a real application, this data would come from an API
const LOCATIONS: Location[] = [
  {
    id: 1,
    name: 'Dakar',
    region: 'Dakar Region',
    country: 'Senegal',
    population: '3.8M',
    activeProjects: 5,
    coordinates: { x: 22, y: 42 }
  },
  {
    id: 2,
    name: 'Douala',
    region: 'Littoral',
    country: 'Cameroon',
    population: '2.5M',
    activeProjects: 3,
    coordinates: { x: 47, y: 52 }
  },
  {
    id: 3,
    name: 'Libreville',
    region: 'Estuaire',
    country: 'Gabon',
    population: '0.8M',
    activeProjects: 2,
    coordinates: { x: 42, y: 60 }
  },
  {
    id: 4,
    name: 'Lagos',
    region: 'Lagos State',
    country: 'Nigeria',
    population: '15.4M',
    activeProjects: 7,
    coordinates: { x: 37, y: 47 }
  },
  {
    id: 5,
    name: 'Nairobi',
    region: 'Nairobi County',
    country: 'Kenya',
    population: '4.4M',
    activeProjects: 4,
    coordinates: { x: 67, y: 58 }
  },
  {
    id: 6,
    name: 'Accra',
    region: 'Greater Accra',
    country: 'Ghana',
    population: '2.5M',
    activeProjects: 3,
    coordinates: { x: 30, y: 50 }
  }
];

interface CoveragePageProps {
  params: {
    locale: Locale;
  };
}

export default function CoveragePage({ params }: CoveragePageProps) {
  const { locale } = params;

  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-blue-dark py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Coverage Areas
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Our digital transformation initiatives span across multiple regions in Africa
          </p>
        </div>
      </section>

      {/* Map section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-8 relative">
            {/* Interactive Map */}
            <div className="relative w-full aspect-[2/1] bg-white rounded-lg overflow-hidden mb-8">
              <div className="absolute inset-0">
                <Image 
                  src="/images/africa-map-background.svg" 
                  alt="Map of Africa" 
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Location Pins */}
                {LOCATIONS.map((location) => (
                  <div 
                    key={location.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group"
                    style={{ 
                      left: `${location.coordinates.x}%`, 
                      top: `${location.coordinates.y}%` 
                    }}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-dtima-green rounded-full animate-ping absolute opacity-75"></div>
                      <div className="w-4 h-4 bg-dtima-green rounded-full relative z-10">
                        <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 transition-opacity duration-300 whitespace-nowrap">
                          {location.name}, {location.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.map((location) => (
                <div 
                  key={location.id} 
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-dtima-blue-100 rounded-full mr-3">
                        <MapPin className="h-5 w-5 text-dtima-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                        <p className="text-gray-600">
                          {location.region}, {location.country}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <div className="mr-2 text-gray-500">
                          <Users className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Population
                          </div>
                          <div className="text-base font-semibold">
                            {location.population}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="mr-2 text-gray-500">
                          <Activity className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            Active Projects
                          </div>
                          <div className="text-base font-semibold">
                            {location.activeProjects}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats and impact section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Across Africa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-dtima-blue mb-2">6</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-dtima-green mb-2">24</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-dtima-blue mb-2">150+</div>
              <div className="text-gray-600">Municipal Partners</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-dtima-green mb-2">5M+</div>
              <div className="text-gray-600">Citizens Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 