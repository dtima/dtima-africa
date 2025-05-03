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
    title: 'Impact Goals | DTIMA',
    description: 'Our measurable impact goals for digital transformation in African municipalities',
  };
}

export default async function ImpactGoalsPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'about');
  const t = createTranslator(translations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-dtima-black">Impact Goals</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-6">
          At DTIMA, we believe in setting ambitious but achievable goals that drive measurable impact 
          across African municipalities. Our impact goals are designed to transform local governance 
          through digital innovation and capacity building.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-dtima-blue">Short-term Goals (2023-2025)</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-green flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Engage 100+ municipalities</p>
                <p className="text-gray-600">Establish partnerships with over 100 municipalities across 15 African countries</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-green flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Train 5,000 officials</p>
                <p className="text-gray-600">Deliver digital skills training to 5,000 municipal officials and staff</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-green flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Launch 20 digital platforms</p>
                <p className="text-gray-600">Develop and implement 20 custom digital platforms for municipal service delivery</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-dtima-blue">Long-term Goals (By 2030)</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-red flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Impact 100M+ citizens</p>
                <p className="text-gray-600">Improve service delivery for over 100 million African citizens through digital transformation</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-red flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">Establish digital hubs</p>
                <p className="text-gray-600">Create 50 municipal digital innovation hubs across the continent</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dtima-red flex items-center justify-center mt-0.5">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">30% efficiency improvement</p>
                <p className="text-gray-600">Achieve at least 30% improvement in municipal service efficiency through digital systems</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-dtima-blue-50 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-dtima-blue">How We Measure Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-black">Quantitative Metrics</h3>
            <p className="text-gray-700">We track user adoption rates, service processing times, and digital literacy scores</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-black">Qualitative Assessment</h3>
            <p className="text-gray-700">Regular feedback from municipal staff and citizens through surveys and interviews</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-dtima-black">Impact Reports</h3>
            <p className="text-gray-700">Annual comprehensive impact reports with transparent methodology and results</p>
          </div>
        </div>
      </div>
    </div>
  );
}