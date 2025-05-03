import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { BarChart4, Recycle, Heart, LineChart } from 'lucide-react';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'about');
  
  return {
    title: 'Impact Framework | DTIMA',
    description: 'How we measure and achieve meaningful change in African municipalities',
  };
}

export default async function ImpactFrameworkPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'about');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-green to-dtima-green-dark py-12 md:py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Impact Framework
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            How we measure and achieve meaningful change
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          At DTIMA, we believe in transparent, measurable impact. Our framework helps us track progress
          and ensure our digital initiatives create lasting positive change in African municipalities.
        </p>
        
        {/* Digital Transformation Metrics */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-8 relative z-10">
            <div className="bg-blue-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <BarChart4 className="h-10 w-10 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Digital Transformation Metrics</h2>
              <p className="text-gray-600 mt-1">Measuring the technical progress of our digital initiatives</p>
            </div>
          </div>
          
          <div className="space-y-6 pl-0 md:pl-16">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Number of services digitized</h3>
                <p className="text-gray-600 mt-1">Tracking the total count of municipal services that have been successfully transformed from manual to digital processes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Processing time reduction</h3>
                <p className="text-gray-600 mt-1">Measuring the decrease in time required to complete municipal service requests compared to pre-digital processes</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">User satisfaction rates</h3>
                <p className="text-gray-600 mt-1">Collecting feedback from both citizens and municipal staff to gauge satisfaction with digital services</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Digital literacy improvements</h3>
                <p className="text-gray-600 mt-1">Assessing the growth in digital skills and confidence among municipal employees</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sustainability Indicators */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-green-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-8 relative z-10">
            <div className="bg-green-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Recycle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-600">Sustainability Indicators</h2>
              <p className="text-gray-600 mt-1">Ensuring our digital solutions have lasting positive impact</p>
            </div>
          </div>
          
          <div className="space-y-6 pl-0 md:pl-16">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Resource utilization efficiency</h3>
                <p className="text-gray-600 mt-1">Measuring improvements in how municipal resources are allocated and used as a result of digital systems</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Cost savings achieved</h3>
                <p className="text-gray-600 mt-1">Calculating the financial benefits of digital transformation, including reduced operational costs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Environmental impact reduction</h3>
                <p className="text-gray-600 mt-1">Assessing the environmental benefits of digital processes, such as reduced paper usage and transportation needs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Long-term viability measures</h3>
                <p className="text-gray-600 mt-1">Evaluating whether municipalities can independently maintain and evolve their digital systems</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Impact Measures */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-red-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-8 relative z-10">
            <div className="bg-red-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-red-600">Social Impact Measures</h2>
              <p className="text-gray-600 mt-1">Assessing how our work improves lives and communities</p>
            </div>
          </div>
          
          <div className="space-y-6 pl-0 md:pl-16">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-red-100 text-red-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">1</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Accessibility improvements</h3>
                <p className="text-gray-600 mt-1">Measuring how digital transformation increases access to municipal services for all citizens, including those with disabilities or in remote areas</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-red-100 text-red-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">2</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Community engagement levels</h3>
                <p className="text-gray-600 mt-1">Tracking citizen participation in municipal decision-making and community initiatives through digital platforms</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-red-100 text-red-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">3</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Service delivery equity</h3>
                <p className="text-gray-600 mt-1">Assessing whether digital services are reaching all demographics and neighborhoods equally</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div className="mb-2 sm:mb-0 sm:mr-4 p-2 rounded-full bg-red-100 text-red-600 flex-shrink-0">
                <div className="h-6 w-6 flex items-center justify-center font-bold">4</div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-dtima-black">Citizen satisfaction scores</h3>
                <p className="text-gray-600 mt-1">Gathering and analyzing feedback from citizens about their experiences with digitized municipal services</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Impact Visualization */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-8 relative z-10">
            <div className="bg-purple-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <LineChart className="h-10 w-10 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-600">Impact Reporting</h2>
              <p className="text-gray-600 mt-1">Transparent communication of our results</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Annual Impact Reports</h3>
              <p className="text-gray-600">Comprehensive documentation of our progress, challenges, and achievements across all metrics</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Interactive Dashboards</h3>
              <p className="text-gray-600">Real-time visualization of key performance indicators for our municipal partners</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Case Studies</h3>
              <p className="text-gray-600">In-depth analysis of successful implementations and lessons learned</p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-dtima-black mb-3">Community Feedback Forums</h3>
              <p className="text-gray-600">Open platforms for citizens to share their experiences with digital municipal services</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-green to-dtima-green-dark text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Collaborate on Impact Measurement</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We're always looking to refine our impact measurement approach.
            Share your expertise or learn more about our methodology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/reports" 
              className="bg-white text-dtima-green font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              View Impact Reports
            </a>
            <a 
              href="/contact-us" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              Contact Our Impact Team
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 