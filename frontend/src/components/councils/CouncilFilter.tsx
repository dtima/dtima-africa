'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Filter } from 'lucide-react';

interface FilterProps {
  countries: { name: string; code: string; count: number }[];
  selectedCountry: string | null;
  onCountryChange: (country: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function CouncilFilter({
  countries,
  selectedCountry,
  onCountryChange,
  searchQuery,
  onSearchChange,
}: FilterProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-5 mb-8">
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="font-semibold text-gray-800">Search Councils</h3>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search by council name or region..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-dtima-blue focus:border-transparent"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="font-semibold text-gray-800">Filter by Country</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 
              ${selectedCountry === null ? 'bg-dtima-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => onCountryChange(null)}
          >
            All Countries
          </button>
          
          {countries.map((country) => (
            <button
              key={country.code}
              className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 
                ${selectedCountry === country.code ? 'bg-dtima-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => onCountryChange(country.code)}
            >
              {country.code && (
                <div className="w-5 h-3.5 relative overflow-hidden rounded-sm">
                  <Image 
                    src={`/images/flags/${country.code.toLowerCase()}.svg`}
                    alt={country.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/20x14?text=Flag';
                      target.onerror = null;
                    }}
                  />
                </div>
              )}
              {country.name} <span className="text-xs opacity-80">({country.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 