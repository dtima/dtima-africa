import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Building, GraduationCap, Landmark, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'activities');
  
  return {
    title: 'Partnerships | DTIMA',
    description: 'Collaborating with diverse organizations to transform African municipalities through digital innovation',
  };
}

export default async function PartnershipsPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'activities');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-purple to-purple-700 py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Partnerships
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Building collaborative ecosystems for municipal digital transformation
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          At DTIMA, we believe that transformative digital change requires strong collaborations 
          across sectors. Our partnerships bring together governments, tech companies, academic 
          institutions, and civil society organizations to create sustainable digital solutions 
          for African municipalities.
        </p>
        
        {/* Partnership Types */}
        <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
          Our Partnership Network
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Technology Partners */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="h-3 bg-dtima-blue"></div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-dtima-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <Building className="h-8 w-8 text-dtima-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dtima-blue">Technology Partners</h3>
                  <p className="text-gray-600 mt-1">Collaborations with technology providers to create innovative municipal solutions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">What We Offer</h4>
                  <ul className="text-gray-600 space-y-1 list-disc pl-5">
                    <li>Testing grounds for new technologies in real municipal contexts</li>
                    <li>Access to a network of African municipalities</li>
                    <li>Co-development opportunities for public service technologies</li>
                    <li>Knowledge sharing and localization support</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Featured Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Tech Partner 1</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Tech Partner 2</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Tech Partner 3</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Tech Partner 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Academic Collaborations */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="h-3 bg-dtima-green"></div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-dtima-green-100 rounded-lg mr-4 flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-dtima-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dtima-green">Academic Collaborations</h3>
                  <p className="text-gray-600 mt-1">Research partnerships with universities and educational institutions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">What We Offer</h4>
                  <ul className="text-gray-600 space-y-1 list-disc pl-5">
                    <li>Applied research opportunities in municipal digital transformation</li>
                    <li>Student internship and project opportunities</li>
                    <li>Access to real-world data and use cases</li>
                    <li>Joint funding opportunities for digital governance research</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Featured Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Academic Partner 1</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Academic Partner 2</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Academic Partner 3</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Academic Partner 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Government Relations */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="h-3 bg-amber-500"></div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-amber-100 rounded-lg mr-4 flex-shrink-0">
                  <Landmark className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-500">Government Relations</h3>
                  <p className="text-gray-600 mt-1">Productive relationships with national and regional government entities</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">What We Offer</h4>
                  <ul className="text-gray-600 space-y-1 list-disc pl-5">
                    <li>Technical assistance for digital governance initiatives</li>
                    <li>Support for municipal digital transformation strategies</li>
                    <li>Capacity building for government IT departments</li>
                    <li>Digital policy development support</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Featured Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Gov Partner 1</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Gov Partner 2</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Gov Partner 3</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Gov Partner 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* NGO Networks */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="h-3 bg-dtima-red"></div>
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="h-8 w-8 text-dtima-red" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dtima-red">NGO Networks</h3>
                  <p className="text-gray-600 mt-1">Strategic alliances with non-governmental organizations for greater impact</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">What We Offer</h4>
                  <ul className="text-gray-600 space-y-1 list-disc pl-5">
                    <li>Digital tools for community engagement and program delivery</li>
                    <li>Technical support for digital inclusion initiatives</li>
                    <li>Access to municipal networks for program implementation</li>
                    <li>Joint grant applications for digital development projects</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Featured Partners</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">NGO Partner 1</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">NGO Partner 2</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">NGO Partner 3</div>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center h-16">
                      <div className="w-full h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">NGO Partner 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Success Stories */}
        <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
          Partnership Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Success Story 1 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dtima-blue/90 to-dtima-blue-dark/90 flex items-center justify-center">
                <div className="text-white text-xl font-bold">Digital ID System</div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-sm text-gray-500 mb-1">Tech Partnership</div>
              <h3 className="text-xl font-bold text-dtima-black mb-3">SecureID + Nairobi City County</h3>
              <p className="text-gray-600 mb-4">
                Collaborating with a leading digital identity provider to create a secure,
                efficient municipal identification system for improved service delivery.
              </p>
              <div className="mt-auto pt-4">
                <div className="flex justify-end">
                  <a 
                    href="/case-studies/digital-id"
                    className="text-dtima-blue hover:text-dtima-blue-dark font-medium flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Story 2 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dtima-green/90 to-dtima-green-dark/90 flex items-center justify-center">
                <div className="text-white text-xl font-bold">Municipal Data Program</div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-sm text-gray-500 mb-1">Academic Partnership</div>
              <h3 className="text-xl font-bold text-dtima-black mb-3">University of Cape Town + DTIMA</h3>
              <p className="text-gray-600 mb-4">
                A research partnership developing data governance frameworks and 
                analytics capabilities for South African municipalities.
              </p>
              <div className="mt-auto pt-4">
                <div className="flex justify-end">
                  <a 
                    href="/case-studies/data-program"
                    className="text-dtima-green hover:text-dtima-green-dark font-medium flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Story 3 */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/90 to-amber-600/90 flex items-center justify-center">
                <div className="text-white text-xl font-bold">Digital Inclusion</div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-sm text-gray-500 mb-1">NGO Partnership</div>
              <h3 className="text-xl font-bold text-dtima-black mb-3">Digital Rights Coalition + Accra</h3>
              <p className="text-gray-600 mb-4">
                Working with civil society to ensure digital municipal services
                are accessible to all citizens, including vulnerable populations.
              </p>
              <div className="mt-auto pt-4">
                <div className="flex justify-end">
                  <a 
                    href="/case-studies/digital-inclusion"
                    className="text-amber-500 hover:text-amber-600 font-medium flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Map */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">
            Our Partnership Reach
          </h2>
          
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 mb-2">Map Visualization</div>
              <div className="font-bold text-dtima-black">45+ Partners across 20 African Countries</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-dtima-blue">12</div>
              <div className="text-gray-500 text-sm">Technology Partners</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-dtima-green">8</div>
              <div className="text-gray-500 text-sm">Academic Institutions</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-amber-500">15</div>
              <div className="text-gray-500 text-sm">Government Entities</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-dtima-red">10</div>
              <div className="text-gray-500 text-sm">NGO Partners</div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl text-purple-600 opacity-20 font-serif text-center mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic mb-6">
              Our partnership with DTIMA has allowed us to deploy our technology in contexts we couldn't have 
              reached on our own. Their deep understanding of municipal needs and strong local relationships 
              have been invaluable to creating solutions that truly work in African contexts.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-dtima-blue-200 flex items-center justify-center mr-4">
                <span className="text-dtima-blue font-bold">MM</span>
              </div>
              <div>
                <div className="font-bold text-dtima-black">Maya Mbeki</div>
                <div className="text-gray-500 text-sm">CTO, AfriTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-purple to-purple-700 text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a DTIMA Partner</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join our network of partners committed to transforming African municipalities 
            through digital innovation. Together, we can create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-dtima-purple font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </a>
            <a 
              href="/partnership-framework" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              View Partnership Framework
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 