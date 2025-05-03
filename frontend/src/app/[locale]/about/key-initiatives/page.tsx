import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Laptop, Users, Book, Network } from 'lucide-react';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'about');
  
  return {
    title: 'Key Initiatives | DTIMA',
    description: 'Discover the key initiatives driving digital transformation in African municipalities',
  };
}

export default async function KeyInitiativesPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'about');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-blue-dark py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Key Initiatives
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Transforming African municipalities through innovative digital programs
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our initiatives focus on sustainable digital transformation that empowers local governments 
          and improves service delivery for African citizens.
        </p>
        
        {/* Digital Platform Development */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-dtima-blue overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-dtima-blue-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-dtima-blue-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Laptop className="h-10 w-10 text-dtima-blue" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dtima-blue">Digital Platform Development</h2>
              <p className="text-gray-600 mt-1">Creating custom digital solutions for municipal services</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">E-government service platforms</h3>
              <p className="text-gray-600">Comprehensive digital platforms enabling municipalities to offer online services to citizens</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Municipal resource management systems</h3>
              <p className="text-gray-600">Efficient tools for tracking, allocating, and optimizing municipal resources</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Citizen engagement portals</h3>
              <p className="text-gray-600">Interactive platforms fostering two-way communication between governments and citizens</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Digital payment integration</h3>
              <p className="text-gray-600">Secure payment systems enabling efficient revenue collection and service fee payments</p>
            </div>
          </div>
        </div>
        
        {/* Capacity Building Programs */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-dtima-green overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-dtima-green-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-dtima-green-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Users className="h-10 w-10 text-dtima-green" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dtima-green">Capacity Building Programs</h2>
              <p className="text-gray-600 mt-1">Empowering municipal staff with digital skills</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Digital literacy training</h3>
              <p className="text-gray-600">Foundational digital skills for all levels of municipal staff</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">System administration workshops</h3>
              <p className="text-gray-600">Technical training for IT staff maintaining municipal digital platforms</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Data management courses</h3>
              <p className="text-gray-600">Skills for effective data collection, analysis, and utilization</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Cybersecurity awareness</h3>
              <p className="text-gray-600">Critical security training to protect municipal digital infrastructure</p>
            </div>
          </div>
        </div>
        
        {/* Research & Development */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-dtima-purple overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-purple-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Book className="h-10 w-10 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-600">Research & Development</h2>
              <p className="text-gray-600 mt-1">Advancing municipal digital transformation</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Best practices research</h3>
              <p className="text-gray-600">Identifying and documenting effective approaches to municipal digital transformation</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Impact assessment studies</h3>
              <p className="text-gray-600">Measuring and analyzing the effects of digital initiatives on municipal services</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Technology trend analysis</h3>
              <p className="text-gray-600">Tracking emerging technologies with potential applications in municipal contexts</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Case study development</h3>
              <p className="text-gray-600">Creating detailed analyses of successful municipal digital transformation projects</p>
            </div>
          </div>
        </div>
        
        {/* Partnership Network */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-amber-500 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-amber-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Network className="h-10 w-10 text-amber-500" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-amber-500">Partnership Network</h2>
              <p className="text-gray-600 mt-1">Building collaborative ecosystems</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Tech company partnerships</h3>
              <p className="text-gray-600">Collaborations with technology providers to create innovative municipal solutions</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Academic collaborations</h3>
              <p className="text-gray-600">Research partnerships with universities and educational institutions</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">NGO networks</h3>
              <p className="text-gray-600">Strategic alliances with non-governmental organizations for greater impact</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Government relations</h3>
              <p className="text-gray-600">Productive relationships with national and regional government entities</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-blue to-dtima-blue-dark text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Digital Transformation Journey</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Partner with DTIMA to accelerate digital transformation in your municipality
            and deliver better services to your citizens.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-dtima-blue font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/case-studies" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 