import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { GlobalLeadersSection as HomeGlobalLeadersSection } from '@/components/home/GlobalLeadersSection';
import { PartnersSection as HomePartnersSection } from '@/components/home/PartnersSection';

// Loading skeleton for hero section
function HeroSkeleton() {
  return (
    <div className="w-full h-[85vh] min-h-[600px] bg-gradient-to-tr from-dtima-blue-900 to-dtima-blue-700 animate-pulse flex items-center justify-center">
      <LoadingSpinner size="lg" className="text-white" />
    </div>
  );
}

// Loading skeleton for CTA section
function CTASkeleton() {
  return (
    <div className="w-full py-16 px-4 bg-dtima-green animate-pulse">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="h-10 w-3/4 max-w-md bg-white/20 rounded-lg"></div>
        <div className="h-6 w-1/2 max-w-sm bg-white/20 rounded-lg"></div>
        <div className="h-12 w-40 bg-white/20 rounded-lg mt-4"></div>
      </div>
    </div>
  );
}

// Loading skeleton for sections
function SectionSkeleton() {
  return (
    <div className="w-full py-16 px-4 bg-white animate-pulse">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        <div className="h-8 w-1/2 bg-gray-200 rounded-lg"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-64 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const homeTranslations = await getTranslations(params.locale, 'home');
  
  // Base URL for canonical and alternate URLs
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dtima-africa.org';
  
  return {
    title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
    description: 'Empowering African municipalities through digital transformation, innovative governance solutions, and capacity building programs.',
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
        'es': `${baseUrl}/es`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${params.locale}`,
      title: 'Digital Transformation Initiative for Municipalities in Africa',
      description: 'Empowering African municipalities through digital transformation and innovative solutions',
      siteName: 'DTIMA',
      images: [
        {
          url: `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'DTIMA - Digital Transformation for African Municipalities',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
      description: 'Empowering African municipalities through digital transformation',
      site: '@dtima_africa',
      creator: '@dtima_africa',
    },
  };
}

// Structured data for organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digital Transformation Initiative for Municipalities in Africa',
  alternateName: 'DTIMA',
  url: 'https://dtima-africa.org',
  logo: 'https://dtima-africa.org/images/logo.png',
  sameAs: [
    'https://twitter.com/dtima_africa',
    'https://facebook.com/dtimafrica',
    'https://linkedin.com/company/dtima-africa'
  ],
  description: 'A pan-African initiative focused on empowering municipalities through digital transformation and technology.',
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;

  return (
    <main>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      {/* Hero Section with suspense fallback */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      
      {/* Custom Partners Section with suspense fallback */}
      <Suspense fallback={<SectionSkeleton />}>
        <HomePartnersSection />
      </Suspense>
      
      {/* Custom Global Leaders Section with suspense fallback */}
      <Suspense fallback={<SectionSkeleton />}>
        <HomeGlobalLeadersSection />
      </Suspense>

      {/* Call to Action */}
      <Suspense fallback={<CTASkeleton />}>
        <section className="py-16 px-4 bg-dtima-green text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Municipality?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our initiative and be part of the digital transformation movement across Africa.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-dtima-green focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dtima-green"
            >
              <Link href={`/${locale}/join-us`}>Get Started</Link>
            </Button>
          </div>
        </section>
      </Suspense>
    </main>
  );
} 