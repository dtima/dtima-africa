import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { FileText, BarChart3, Users, Database } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'activities');
  
  return {
    title: 'Digital Platform Development | DTIMA',
    description: 'Custom digital solutions for municipal services in African municipalities',
  };
}

export default async function DigitalPlatformsPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'activities');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-blue to-dtima-blue-dark py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Digital Platform Development
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Creating custom digital solutions for municipal services across Africa
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our digital platforms empower African municipalities to modernize service delivery, 
          improve operational efficiency, and enhance citizen engagement through tailored solutions.
        </p>
        
        {/* Platform Preview */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16 overflow-hidden relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              {/* Mock platform header */}
              <div className="bg-dtima-blue-dark px-6 py-4 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="flex-1 text-center text-white text-sm">DTIMA Municipal Portal</div>
              </div>
              {/* Mock platform content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="h-8 bg-gray-100 rounded-md w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-20 bg-dtima-blue-100 rounded-md flex items-center justify-center">
                        <div className="h-10 w-10 bg-dtima-blue-200 rounded-md"></div>
                      </div>
                      <div className="h-20 bg-dtima-green-100 rounded-md flex items-center justify-center">
                        <div className="h-10 w-10 bg-dtima-green-200 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-100 rounded-md w-1/2"></div>
                      <div className="h-40 bg-gray-100 rounded-md"></div>
                      <div className="flex justify-end">
                        <div className="h-8 w-32 bg-dtima-blue rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
              An example of our municipal service portal interface
            </div>
          </div>
        </div>
        
        {/* Platform Types */}
        <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
          Our Digital Platform Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Municipal Service Portal */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-dtima-blue-100 rounded-lg mr-4">
                  <FileText className="h-8 w-8 text-dtima-blue" />
                </div>
                <h3 className="text-2xl font-bold text-dtima-blue">Municipal Service Portal</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Centralized platforms for municipalities to offer digital services to citizens,
                streamlining processes and improving accessibility.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Online Permit Applications</h4>
                  <p className="text-gray-600 text-sm">Digital submission and tracking of municipal permits</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Bill Payments</h4>
                  <p className="text-gray-600 text-sm">Secure online payment system for municipal fees and taxes</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Service Requests</h4>
                  <p className="text-gray-600 text-sm">Digital submission and tracking of municipal service requests</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Document Submissions</h4>
                  <p className="text-gray-600 text-sm">Online document upload and management system</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resource Management System */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-dtima-green-100 rounded-lg mr-4">
                  <Database className="h-8 w-8 text-dtima-green" />
                </div>
                <h3 className="text-2xl font-bold text-dtima-green">Resource Management System</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Efficient tools for tracking, allocating, and optimizing municipal resources
                to improve operational effectiveness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Asset Management</h4>
                  <p className="text-gray-600 text-sm">Digital tracking and management of municipal assets</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Inventory Control</h4>
                  <p className="text-gray-600 text-sm">Real-time inventory tracking and management system</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Budget Tracking</h4>
                  <p className="text-gray-600 text-sm">Comprehensive budget monitoring and reporting tools</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Resource Scheduling</h4>
                  <p className="text-gray-600 text-sm">Optimized allocation of municipal resources and staff</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Citizen Engagement Platform */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600">Citizen Engagement Platform</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Interactive platforms fostering two-way communication between municipalities and citizens,
                enhancing participation and transparency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Public Consultations</h4>
                  <p className="text-gray-600 text-sm">Online platforms for gathering public input on municipal matters</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Community Forums</h4>
                  <p className="text-gray-600 text-sm">Digital spaces for community discussion and engagement</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Event Management</h4>
                  <p className="text-gray-600 text-sm">Tools for organizing and promoting municipal events</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Feedback Systems</h4>
                  <p className="text-gray-600 text-sm">Mechanisms for collecting and responding to citizen feedback</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Performance Dashboard */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] border border-gray-100">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-100 rounded-lg mr-4">
                  <BarChart3 className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-amber-500">Performance Dashboard</h3>
              </div>
              
              <p className="text-gray-600 mb-8">
                Real-time monitoring and analytics tools providing insights into municipal service
                performance and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Service Metrics</h4>
                  <p className="text-gray-600 text-sm">Comprehensive tracking of key municipal service metrics</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Response Times</h4>
                  <p className="text-gray-600 text-sm">Monitoring and optimization of service response times</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Usage Analytics</h4>
                  <p className="text-gray-600 text-sm">Insights into how citizens are using digital municipal services</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dtima-black mb-2">Satisfaction Ratings</h4>
                  <p className="text-gray-600 text-sm">Tracking citizen satisfaction with municipal services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Story */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">Success Story</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 relative h-56 md:h-auto md:w-48">
                  <div className="absolute inset-0 bg-dtima-blue-200 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-dtima-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">KG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-dtima-blue font-semibold tracking-wide uppercase mb-1">Case Study</div>
                  <h3 className="text-xl font-bold text-dtima-black mb-2">Kigali Municipal Services Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Our team implemented a comprehensive digital services platform for the city of Kigali, 
                    transforming how citizens interact with municipal services and drastically improving 
                    efficiency in service delivery.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dtima-blue">35%</div>
                      <div className="text-sm text-gray-500">Processing time reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dtima-green">42</div>
                      <div className="text-sm text-gray-500">Services digitized</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">92%</div>
                      <div className="text-sm text-gray-500">User satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-500">1.2M</div>
                      <div className="text-sm text-gray-500">Citizens served</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <a 
                      href="/case-studies/kigali"
                      className="text-dtima-blue hover:text-dtima-blue-dark font-medium"
                    >
                      Read full case study →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-blue to-dtima-blue-dark text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Digitize Your Municipal Services?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Partner with DTIMA to develop custom digital platforms that transform service delivery
            and operational efficiency in your municipality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-dtima-blue font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Request a Consultation
            </a>
            <a 
              href="/case-studies" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 