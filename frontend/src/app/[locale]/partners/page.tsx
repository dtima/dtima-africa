import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Globe, Filter, Building, GraduationCap, Landmark, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'partners');
  
  return {
    title: 'Our Partners | DTIMA',
    description: 'Explore our network of partners across Africa driving digital transformation in municipalities',
  };
}

export default async function PartnersPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'partners');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-purple py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Partner Network
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Connecting expertise across Africa to transform municipal governance
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Interactive Map Section */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-16">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dtima-black mb-6">
              Partner Ecosystem Map
            </h2>
            
            <p className="text-gray-700 mb-8 max-w-3xl">
              Our diverse network of partners spans 20+ countries across Africa, bringing together 
              technology innovators, academic institutions, government bodies, and civil society 
              organizations to drive meaningful digital transformation in municipalities.
            </p>
            
            {/* Map Controls */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Globe className="h-4 w-4 text-dtima-blue mr-2" />
                <span className="text-sm font-medium">45+ Partners</span>
              </div>
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Landmark className="h-4 w-4 text-amber-500 mr-2" />
                <span className="text-sm font-medium">20+ Countries</span>
              </div>
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Building className="h-4 w-4 text-dtima-green mr-2" />
                <span className="text-sm font-medium">12 Technology Companies</span>
              </div>
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                <GraduationCap className="h-4 w-4 text-dtima-purple mr-2" />
                <span className="text-sm font-medium">8 Academic Institutions</span>
              </div>
              <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Heart className="h-4 w-4 text-dtima-red mr-2" />
                <span className="text-sm font-medium">10 NGOs</span>
              </div>
            </div>
            
            {/* Interactive Map */}
            <div className="relative overflow-hidden rounded-lg mb-8">
              <div className="aspect-[16/9] bg-gray-100 relative">
                {/* Map visualization - this would be replaced with an actual interactive map component */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    {/* Africa map placeholder - in a real implementation, this would be replaced with an SVG map or mapping library */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 relative">
                        <svg viewBox="0 0 800 800" className="w-full h-full">
                          {/* Simplified Africa continent shape */}
                          <path 
                            d="M400,150 C500,150 550,200 600,250 C650,300 700,400 700,500 C700,600 650,650 600,700 C550,750 500,750 400,750 C300,750 250,700 200,650 C150,600 100,550 100,450 C100,350 150,300 200,250 C250,200 300,150 400,150 Z" 
                            fill="#f0f9ff" 
                            stroke="#0284c7" 
                            strokeWidth="2"
                          />
                          
                          {/* West Africa cluster */}
                          <circle cx="250" cy="400" r="15" fill="#3b82f6" opacity="0.7" />
                          <circle cx="280" cy="380" r="10" fill="#3b82f6" opacity="0.7" />
                          <circle cx="290" cy="420" r="12" fill="#3b82f6" opacity="0.7" />
                          
                          {/* East Africa cluster */}
                          <circle cx="500" cy="450" r="18" fill="#22c55e" opacity="0.7" />
                          <circle cx="520" cy="420" r="14" fill="#22c55e" opacity="0.7" />
                          <circle cx="540" cy="460" r="10" fill="#22c55e" opacity="0.7" />
                          
                          {/* Southern Africa cluster */}
                          <circle cx="450" cy="650" r="16" fill="#a855f7" opacity="0.7" />
                          <circle cx="480" cy="630" r="12" fill="#a855f7" opacity="0.7" />
                          <circle cx="420" cy="660" r="14" fill="#a855f7" opacity="0.7" />
                          
                          {/* North Africa cluster */}
                          <circle cx="350" cy="250" r="13" fill="#f97316" opacity="0.7" />
                          <circle cx="380" cy="230" r="15" fill="#f97316" opacity="0.7" />
                          <circle cx="320" cy="260" r="11" fill="#f97316" opacity="0.7" />
                          
                          {/* Central Africa cluster */}
                          <circle cx="400" cy="450" r="17" fill="#ec4899" opacity="0.7" />
                          <circle cx="430" cy="430" r="13" fill="#ec4899" opacity="0.7" />
                          <circle cx="380" cy="470" r="15" fill="#ec4899" opacity="0.7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-sm text-xs">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-dtima-blue mr-2"></div>
                          <span>Technology</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-dtima-green mr-2"></div>
                          <span>Academic</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                          <span>Government</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-dtima-red mr-2"></div>
                          <span>NGO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50">
                  <span className="text-lg font-bold">+</span>
                </button>
                <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50">
                  <span className="text-lg font-bold">-</span>
                </button>
              </div>
            </div>
            
            {/* Filter Controls */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <h3 className="font-semibold text-gray-700">Filter Partners</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-dtima-blue text-white text-sm font-medium">
                  All Partners
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  Technology
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  Academic
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  Government
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  NGOs
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  East Africa
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  West Africa
                </button>
                <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                  Southern Africa
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
            Featured Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technology Partner */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="h-4 bg-dtima-blue"></div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Building className="h-10 w-10 text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dtima-black text-center mb-2">AfriTech Solutions</h3>
                <div className="text-sm text-dtima-blue font-medium text-center mb-4">Technology Partner</div>
                
                <p className="text-gray-600 mb-6 text-center">
                  Providing cutting-edge cloud infrastructure and digital identity solutions
                  for municipal service delivery platforms across East Africa.
                </p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div>
                    <div className="font-medium">Location</div>
                    <div>Nairobi, Kenya</div>
                  </div>
                  <div>
                    <div className="font-medium">Partnership Since</div>
                    <div>2019</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/partners/afritech-solutions"
                    className="inline-flex items-center text-dtima-blue hover:text-dtima-blue-dark"
                  >
                    View Partner Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Academic Partner */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="h-4 bg-dtima-green"></div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dtima-black text-center mb-2">University of Cape Town</h3>
                <div className="text-sm text-dtima-green font-medium text-center mb-4">Academic Partner</div>
                
                <p className="text-gray-600 mb-6 text-center">
                  Conducting research on data governance frameworks and training next-generation
                  digital governance experts for African municipalities.
                </p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div>
                    <div className="font-medium">Location</div>
                    <div>Cape Town, South Africa</div>
                  </div>
                  <div>
                    <div className="font-medium">Partnership Since</div>
                    <div>2020</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/partners/uct"
                    className="inline-flex items-center text-dtima-green hover:text-dtima-green-dark"
                  >
                    View Partner Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* NGO Partner */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="h-4 bg-dtima-red"></div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Heart className="h-10 w-10 text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-dtima-black text-center mb-2">Digital Rights Coalition</h3>
                <div className="text-sm text-dtima-red font-medium text-center mb-4">NGO Partner</div>
                
                <p className="text-gray-600 mb-6 text-center">
                  Ensuring digital inclusion and accessibility in municipal digital transformation
                  initiatives across West African communities.
                </p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div>
                    <div className="font-medium">Location</div>
                    <div>Accra, Ghana</div>
                  </div>
                  <div>
                    <div className="font-medium">Partnership Since</div>
                    <div>2021</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/partners/digital-rights-coalition"
                    className="inline-flex items-center text-dtima-red hover:text-dtima-red-dark"
                  >
                    View Partner Profile <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/partners/directory"
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View Full Partner Directory <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Impact Metrics */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">
            Partnership Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-dtima-blue mb-2">45+</div>
              <div className="text-gray-600">Active partnerships</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-dtima-green mb-2">32</div>
              <div className="text-gray-600">Municipalities served</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-dtima-purple mb-2">18</div>
              <div className="text-gray-600">Joint projects completed</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">5.2M</div>
              <div className="text-gray-600">Citizens impacted</div>
            </div>
          </div>
        </div>
        
        {/* Partnership Spotlight */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/5 bg-dtima-blue relative">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="mb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Partnership Spotlight</h3>
                  <p className="text-white/80">
                    Highlighting our most impactful collaborations
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-dtima-black mb-1">
                    Kigali Smart City Initiative
                  </h3>
                  <div className="text-gray-500">
                    A collaboration between DTIMA, Rwanda ICT Chamber & Kigali Municipality
                  </div>
                </div>
                <div className="bg-dtima-blue/10 text-dtima-blue px-3 py-1 rounded-full text-sm font-medium">
                  Active
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                This multi-stakeholder partnership is transforming Kigali into a model for smart
                city implementation in Africa, with robust digital infrastructure for municipal
                services, citizen engagement, and urban management.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                  <div className="font-medium">2021 - 2025</div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Impact Reach</div>
                  <div className="font-medium">1.2 million citizens</div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href="/case-studies/kigali-smart-city"
                  className="inline-flex items-center text-dtima-blue hover:text-dtima-blue-dark font-medium"
                >
                  View Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Become a Partner CTA */}
        <div className="text-center bg-gradient-to-r from-dtima-blue to-dtima-purple text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Partner Network</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Are you passionate about transforming municipal governance through digital innovation?
            Explore partnership opportunities with DTIMA and help build the future of African cities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-dtima-blue font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Become a Partner
            </a>
            <a 
              href="/partnership-framework" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              Learn About Our Approach
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 