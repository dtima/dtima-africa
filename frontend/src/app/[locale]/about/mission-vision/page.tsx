import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'about');
  
  return {
    title: 'Mission & Vision | DTIMA',
    description: 'Our mission and vision for digital transformation in African municipalities',
  };
}

export default async function MissionVisionPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'about');
  const t = createTranslator(translations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-dtima-black">Mission & Vision</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-dtima-blue">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          To empower African municipalities through digital transformation, enhancing their capacity 
          to deliver efficient services, promote transparent governance, and foster sustainable 
          development for the benefit of their citizens.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-dtima-blue">Our Vision</h2>
        <p className="text-gray-700">
          A future where African municipalities leverage digital technologies to become smart, 
          resilient, and inclusive communities that provide high-quality services, enable citizen 
          participation, and drive local economic development.
        </p>
      </div>
      
      <div className="bg-gray-50 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-dtima-blue">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Innovation</h3>
            <p className="text-gray-700">Embracing new technologies and approaches to solve municipal challenges</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Inclusion</h3>
            <p className="text-gray-700">Ensuring digital solutions are accessible to all citizens regardless of background</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Collaboration</h3>
            <p className="text-gray-700">Working together with municipalities, citizens, and partners for collective impact</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Sustainability</h3>
            <p className="text-gray-700">Creating solutions that are environmentally, financially, and operationally sustainable</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Transparency</h3>
            <p className="text-gray-700">Promoting open governance and accountability in municipal operations</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-red">Excellence</h3>
            <p className="text-gray-700">Committing to high-quality, impactful work in everything we do</p>
          </div>
        </div>
      </div>
    </div>
  );
} 