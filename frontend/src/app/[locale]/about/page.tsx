import React from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils/i18n';

interface AboutPageProps {
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
  const aboutTranslations = await getTranslations(params.locale, 'about');
  
  const t = createTranslator(commonTranslations);
  const at = createTranslator(aboutTranslations);
  
  return {
    title: at('metadata.title') || 'About Us | DTIMA',
    description: at('metadata.description') || t('seo.defaultDescription'),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = params;
  
  // Load translations
  const commonTranslations = await getTranslations(locale, 'common');
  const aboutTranslations = await getTranslations(locale, 'about');
  
  const t = createTranslator(commonTranslations);
  const at = createTranslator(aboutTranslations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        {at('title') || 'About Us'}
      </h1>
      
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-6">
          {at('introduction') || 'The Digital Transformation Initiative for Municipalities in Africa (DTIMA) is dedicated to empowering African municipalities through digital technology and innovation.'}
        </p>
        
        {/* Mission & Vision Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">{at('mission.title') || 'Our Mission & Vision'}</h2>
          <p className="mb-4">{at('mission.content') || 'Mission and vision content will go here.'}</p>
        </section>
        
        {/* Impact Goals Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">{at('impact.title') || 'Impact Goals'}</h2>
          <p className="mb-4">{at('impact.content') || 'Impact goals content will go here.'}</p>
        </section>
        
        {/* Team Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">{at('team.title') || 'Our Team'}</h2>
          <p className="mb-4">{at('team.introduction') || 'Team introduction content will go here.'}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Team members will go here */}
            <div className="text-center p-4">Team member cards will go here</div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-4">{at('approach.title') || 'Our Approach'}</h2>
          <p className="mb-4">{at('approach.content') || 'Our approach content will go here.'}</p>
        </section>
      </div>
    </div>
  );
} 