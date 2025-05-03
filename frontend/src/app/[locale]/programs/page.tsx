import React from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils/i18n';

interface ProgramsPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const commonTranslations = await getTranslations(params.locale, 'common');
  const programsTranslations = await getTranslations(params.locale, 'programs');
  
  const t = createTranslator(commonTranslations);
  const pt = createTranslator(programsTranslations);
  
  return {
    title: pt('metadata.title') || 'Programs | DTIMA',
    description: pt('metadata.description') || t('seo.defaultDescription'),
  };
}

export default async function ProgramsPage({ params }: ProgramsPageProps) {
  const { locale } = params;
  
  // Load translations
  const commonTranslations = await getTranslations(locale, 'common');
  const programsTranslations = await getTranslations(locale, 'programs');
  
  const t = createTranslator(commonTranslations);
  const pt = createTranslator(programsTranslations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        {pt('title') || 'Our Programs'}
      </h1>
      
      <p className="text-lg mb-10">
        {pt('introduction') || 'DTIMA offers a range of programs designed to drive digital transformation across African municipalities.'}
      </p>
      
      {/* Digital Platform Development Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {pt('digitalPlatform.title') || 'Digital Platform Development'}
        </h2>
        <p className="mb-6">
          {pt('digitalPlatform.description') || 'We help municipalities develop and implement digital platforms to improve service delivery and engagement.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-2">
              {pt('digitalPlatform.services.municipal.title') || 'Municipal Service Portals'}
            </h3>
            <p>
              {pt('digitalPlatform.services.municipal.description') || 'Description of municipal service portals here.'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-2">
              {pt('digitalPlatform.services.resource.title') || 'Resource Management Systems'}
            </h3>
            <p>
              {pt('digitalPlatform.services.resource.description') || 'Description of resource management systems here.'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-2">
              {pt('digitalPlatform.services.citizen.title') || 'Citizen Engagement Platforms'}
            </h3>
            <p>
              {pt('digitalPlatform.services.citizen.description') || 'Description of citizen engagement platforms here.'}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-2">
              {pt('digitalPlatform.services.performance.title') || 'Performance Dashboards'}
            </h3>
            <p>
              {pt('digitalPlatform.services.performance.description') || 'Description of performance dashboards here.'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Capacity Building Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {pt('capacityBuilding.title') || 'Capacity Building'}
        </h2>
        <p className="mb-6">
          {pt('capacityBuilding.description') || 'We provide training and skills development to municipal staff and communities.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Capacity building programs listed here */}
        </div>
      </section>
      
      {/* Digital Content Creation Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {pt('digitalContent.title') || 'Digital Content Creation'}
        </h2>
        <p className="mb-6">
          {pt('digitalContent.description') || 'We help municipalities create digital content to enhance their online presence.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Digital content creation services listed here */}
        </div>
      </section>
      
      {/* Local Innovation Challenge Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {pt('innovation.title') || 'Local Innovation Challenge'}
        </h2>
        <p className="mb-6">
          {pt('innovation.description') || 'We support local innovation through challenges and funding opportunities.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Innovation challenge details listed here */}
        </div>
      </section>
    </div>
  );
} 