import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Database, GraduationCap, MessagesSquare, Lightbulb } from 'lucide-react';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'about');
  
  return {
    title: 'Strategic Goals | DTIMA',
    description: 'The key objectives driving our mission to transform African municipalities through digital innovation',
  };
}

export default async function StrategicGoalsPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'about');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-purple py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Strategic Goals
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Key objectives driving our mission forward
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our strategic goals guide our initiatives and partnerships across Africa, ensuring 
          focused, sustainable impact in municipal digital transformation.
        </p>
        
        {/* Strategic Goals Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Digital Infrastructure */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="h-4 bg-dtima-blue"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-dtima-blue-100 rounded-lg mr-4">
                  <Database className="h-8 w-8 text-dtima-blue" />
                </div>
                <h2 className="text-2xl font-bold text-dtima-blue">Digital Infrastructure</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Develop robust digital platforms tailored to municipal needs, creating the technological foundation 
                for improved service delivery and operational efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-blue text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Implement customized e-government platforms in 45+ municipalities</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-blue text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Develop integrated resource management systems for efficient allocation</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-blue text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Create secure digital payment infrastructure for municipal services</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-blue text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Establish data centers with disaster recovery capabilities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Capacity Building */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="h-4 bg-dtima-green"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-dtima-green-100 rounded-lg mr-4">
                  <GraduationCap className="h-8 w-8 text-dtima-green" />
                </div>
                <h2 className="text-2xl font-bold text-dtima-green">Capacity Building</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Train municipal staff in digital tools and best practices, empowering local governments 
                to effectively utilize and maintain their digital systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-green text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Deliver comprehensive digital literacy training programs to 5,000+ staff</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-green text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Conduct specialized system administration workshops for IT personnel</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-green text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Establish ongoing mentorship programs for sustainable skill development</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-dtima-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-green text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Create train-the-trainer programs for ongoing knowledge transfer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Citizen Engagement */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="h-4 bg-dtima-red"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <MessagesSquare className="h-8 w-8 text-dtima-red" />
                </div>
                <h2 className="text-2xl font-bold text-dtima-red">Citizen Engagement</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Improve communication between municipalities and citizens, fostering transparency, 
                participation, and responsive governance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-red text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Deploy interactive citizen portals with feedback mechanisms</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-red text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Implement digital public consultation platforms for policy development</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-red text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Create accessible mobile interfaces for wide-reaching engagement</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-dtima-red text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Establish digital town hall platforms for public discussions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Innovation */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="h-4 bg-amber-500"></div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  <Lightbulb className="h-8 w-8 text-amber-500" />
                </div>
                <h2 className="text-2xl font-bold text-amber-500">Innovation</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                Foster local tech solutions for municipal challenges, encouraging homegrown 
                innovation and context-specific approaches to digital transformation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-amber-500 text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Launch municipal innovation challenges to source local solutions</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-amber-500 text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Establish innovation hubs in partnership with local universities</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-amber-500 text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Support tech startups focused on municipal service improvement</p>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-amber-500 text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Create open-source municipal software repositories for collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dtima-black mb-8 text-center">Implementation Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-[-0.5px]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Short-term goals */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="flex md:justify-end md:w-1/2 md:pr-8 pb-2 md:pb-0 order-2 md:order-1">
                  <div className="bg-white shadow-md rounded-lg p-5 md:max-w-sm">
                    <h3 className="text-xl font-bold text-dtima-blue mb-3">Short-term (1-2 Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-dtima-green mr-2">✓</span>
                        <span>Launch digital platforms in 15 pilot municipalities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-green mr-2">✓</span>
                        <span>Train initial cohort of 1,000 municipal staff</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-green mr-2">✓</span>
                        <span>Establish baseline metrics for impact measurement</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-dtima-blue flex items-center justify-center transform translate-x-[-50%] md:translate-x-[-50%]">
                  <span className="text-white font-bold">1</span>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-1/2 md:ml-8 order-1 md:order-2">
                  <div className="text-xl font-semibold text-dtima-blue mb-1">Phase One</div>
                  <div className="text-gray-600">2023-2024</div>
                </div>
              </div>
              
              {/* Mid-term goals */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="pl-16 md:pl-0 md:w-1/2 md:pr-8 order-1 md:text-right">
                  <div className="text-xl font-semibold text-dtima-green mb-1">Phase Two</div>
                  <div className="text-gray-600">2025-2026</div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-dtima-green flex items-center justify-center transform translate-x-[-50%] md:translate-x-[-50%]">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="order-2 md:w-1/2 md:ml-8">
                  <div className="bg-white shadow-md rounded-lg p-5 md:max-w-sm">
                    <h3 className="text-xl font-bold text-dtima-green mb-3">Mid-term (3-4 Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Scale to 100+ municipalities across multiple countries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Establish regional digital innovation hubs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Launch municipal digital transformation network</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Long-term goals */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="flex md:justify-end md:w-1/2 md:pr-8 pb-2 md:pb-0 order-2 md:order-1">
                  <div className="bg-white shadow-md rounded-lg p-5 md:max-w-sm">
                    <h3 className="text-xl font-bold text-dtima-red mb-3">Long-term (5+ Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Achieve digital transformation in 200+ municipalities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Establish African municipal digital standards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-dtima-blue mr-2">•</span>
                        <span>Create pan-African municipal digital alliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-dtima-red flex items-center justify-center transform translate-x-[-50%] md:translate-x-[-50%]">
                  <span className="text-white font-bold">3</span>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-1/2 md:ml-8 order-1 md:order-2">
                  <div className="text-xl font-semibold text-dtima-red mb-1">Phase Three</div>
                  <div className="text-gray-600">2027-2030</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-blue-dark to-dtima-purple text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us in Achieving These Goals</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Partner with DTIMA to be part of the digital transformation movement 
            in African municipalities. Together, we can create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/partners" 
              className="bg-white text-dtima-blue-dark font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Become a Partner
            </a>
            <a 
              href="/contact-us" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 