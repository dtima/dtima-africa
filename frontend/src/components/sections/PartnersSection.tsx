'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Database } from '@/types/supabase'; // Assuming Supabase types are defined here
import { cn } from '@/lib/utils';

// Define the shape of a partner, matching Supabase row
type PartnerType = Database['public']['Tables']['partners']['Row'] & {
  // Ensure logo_url and name exist
};

// Define props for the component
interface PartnersSectionProps {
  partners: PartnerType[] | null;
  isLoading?: boolean; // Although not explicitly used in this simple version, keep for consistency
  error?: string | null; // Keep for consistency, maybe show an error message if needed
  translations: {
    title: string;
    subtitle?: string;
    viewAllButton: string;
    viewAllLink: string; // The destination link for the button
  };
}

export function PartnersSection({
  partners,
  isLoading = false, // Not used directly in rendering below, but good practice
  error = null, // Not used directly in rendering below
  translations
}: PartnersSectionProps) {

  // Basic loading/error handling (can be enhanced)
  if (isLoading) {
    // Optional: Render a skeleton loader for partners
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-dtima-black mb-4">{translations.title}</h2>
                {/* Add skeleton loading state here if desired */}
                <p>Loading partners...</p> 
            </div>
        </section>
    );
  }

  if (error) {
     // Optional: Render an error message
     return (
        <section className="py-16 px-4 bg-dtima-red-100">
            <div className="container mx-auto text-center">
                 <p className="text-dtima-red-dark">Error loading partners: {error}</p>
            </div>
        </section>
    );
  }

  if (!partners || partners.length === 0) {
    return null; // Don't render the section if there are no partners
  }

  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="partners-section-title">
      <div className="container mx-auto text-center">
        <h2 id="partners-section-title" className="text-3xl font-bold text-dtima-black mb-4">{translations.title}</h2>
        {translations.subtitle && <p className="mb-12 text-lg text-dtima-gray-600 max-w-3xl mx-auto">{translations.subtitle}</p>}
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center items-center p-4 bg-dtima-gray-50 rounded-lg shadow-sm hover:shadow-card transition-shadow duration-300 border border-transparent hover:border-dtima-blue/30">
              {partner.logo_url ? (
                <Image
                  src={partner.logo_url}
                  alt={partner.name || 'Partner Logo'}
                  width={150} // Adjust size as needed
                  height={75} // Adjust size as needed
                  objectFit="contain"
                  unoptimized // If using external URLs not configured in next.config.js
                />
              ) : (
                 <span className="text-dtima-gray-500">{partner.name}</span> // Fallback if no logo
              )}
            </div>
          ))}
        </div>

        {translations.viewAllLink && translations.viewAllButton && (
            <div className="mt-12">
                <Button asChild variant="secondary" size="lg"> 
                    <Link href={translations.viewAllLink}>{translations.viewAllButton}</Link>
                </Button>
            </div>
        )}
      </div>
    </section>
  );
} 