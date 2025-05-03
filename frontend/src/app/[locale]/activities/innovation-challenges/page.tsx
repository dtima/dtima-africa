import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Lightbulb, Trophy, Calendar, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'activities');
  
  return {
    title: 'Innovation Challenges | DTIMA',
    description: 'Fostering local tech solutions for municipal challenges across Africa',
  };
}

export default async function InnovationChallengesPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'activities');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Innovation Challenges
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Fostering local tech solutions for municipal challenges across Africa
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our innovation challenges bring together tech entrepreneurs, developers, municipal staff, 
          and citizens to co-create solutions for local municipal challenges. By harnessing local 
          talent and knowledge, we develop contextually appropriate digital solutions that drive 
          meaningful change.
        </p>
        
        {/* Current Challenge */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-16">
          <div className="bg-amber-500 px-6 py-3">
            <div className="text-white uppercase tracking-wider text-sm font-bold">Current Challenge</div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-dtima-black">
                Water Resource Management Innovation Challenge 2023
              </h2>
              <div className="mt-2 md:mt-0 flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-500">Deadline: December 15, 2023</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Seeking innovative digital solutions to help municipalities better monitor, manage,
              and conserve water resources. Selected projects will receive funding, mentorship,
              and pilot implementation opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-dtima-black mb-2">Challenge Focus</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Water leakage detection</li>
                  <li>Consumption monitoring</li>
                  <li>Quality monitoring</li>
                  <li>Distribution optimization</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-dtima-black mb-2">Prizes</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>$25,000 for winning solution</li>
                  <li>$10,000 for runners-up</li>
                  <li>6-month incubation program</li>
                  <li>Pilot implementations in 3 municipalities</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-dtima-black mb-2">Eligibility</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Open to innovators across Africa</li>
                  <li>Teams of 2-5 members</li>
                  <li>Prototype or concept required</li>
                  <li>Open-source technologies preferred</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="/activities/innovation-challenges/water-management"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
            How Our Innovation Challenges Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dtima-blue flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="w-16 h-16 bg-dtima-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <Lightbulb className="h-8 w-8 text-dtima-blue" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Problem Definition</h3>
              <p className="text-gray-600">
                We work with municipalities to identify and clearly define pressing challenges that can benefit from digital innovation
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-xl p-6 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-dtima-green flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="w-16 h-16 bg-dtima-green-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <Users className="h-8 w-8 text-dtima-green" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Challenge Launch</h3>
              <p className="text-gray-600">
                We announce the challenge, provide detailed briefs, and invite innovators to submit their solution concepts
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-xl p-6 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Selection & Support</h3>
              <p className="text-gray-600">
                Selected teams receive funding, mentorship, and technical support to develop their solutions
              </p>
            </div>
            
            <div className="bg-white shadow-md rounded-xl p-6 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl">4</div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                <Calendar className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Implementation</h3>
              <p className="text-gray-600">
                Winning solutions are piloted in real municipal environments with ongoing evaluation and refinement
              </p>
            </div>
          </div>
        </div>
        
        {/* Past Challenges */}
        <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
          Past Innovation Challenges
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Waste Management Challenge */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dtima-green-dark to-dtima-green flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-sm font-medium uppercase tracking-wider mb-2">2022 Challenge</div>
                  <div className="text-white text-2xl font-bold">Waste Management</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                This challenge focused on digital solutions for improving municipal waste collection,
                recycling, and management systems.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500">Winning Solution</div>
                  <div className="font-bold text-dtima-black">TrashTrack</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-bold text-dtima-black">EcoTech Nairobi</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-dtima-black mb-2">Key Outcomes</h4>
                <ul className="text-gray-600 space-y-1 list-disc pl-5">
                  <li>30% improvement in waste collection efficiency</li>
                  <li>15% increase in recycling rates</li>
                  <li>Implemented in 5 municipalities</li>
                </ul>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href="/case-studies/trash-track"
                  className="text-dtima-green hover:text-dtima-green-dark font-medium flex items-center"
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Citizen Engagement Challenge */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dtima-blue-dark to-dtima-blue flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-sm font-medium uppercase tracking-wider mb-2">2021 Challenge</div>
                  <div className="text-white text-2xl font-bold">Citizen Engagement</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                This challenge sought innovative digital platforms to enhance communication between
                municipalities and citizens, improving participation and service delivery.
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500">Winning Solution</div>
                  <div className="font-bold text-dtima-black">CityVoice</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-bold text-dtima-black">TechForAll Ghana</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-dtima-black mb-2">Key Outcomes</h4>
                <ul className="text-gray-600 space-y-1 list-disc pl-5">
                  <li>40% increase in citizen participation</li>
                  <li>25% faster response to service requests</li>
                  <li>Implemented in 7 municipalities</li>
                </ul>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href="/case-studies/city-voice"
                  className="text-dtima-blue hover:text-dtima-blue-dark font-medium flex items-center"
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Innovation Hubs */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">
            Our Innovation Hubs
          </h2>
          
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            We've established innovation hubs across Africa to nurture local tech talent and
            facilitate collaboration between municipalities, developers, and citizens.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-dtima-blue relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Lagos Hub</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Established</div>
                  <div className="font-medium">2021</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Partners</div>
                  <div className="font-medium">Lagos Tech University, Lagos Municipality</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Focus Areas</div>
                  <div className="font-medium">Urban Mobility, Waste Management</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-dtima-green relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Nairobi Hub</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Established</div>
                  <div className="font-medium">2020</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Partners</div>
                  <div className="font-medium">iHub Kenya, Nairobi City Council</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Focus Areas</div>
                  <div className="font-medium">Water Resources, Public Health</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-amber-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Accra Hub</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Established</div>
                  <div className="font-medium">2022</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-500">Partners</div>
                  <div className="font-medium">Ghana Tech Lab, Accra Metropolitan Assembly</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Focus Areas</div>
                  <div className="font-medium">Citizen Engagement, Revenue Collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl text-amber-500 opacity-20 font-serif text-center mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic mb-6">
              The DTIMA innovation challenge provided us with not just funding, but mentorship and access 
              to municipal partners that helped us refine our solution to truly meet local needs. Today, 
              our platform is helping multiple municipalities better serve their citizens.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-dtima-blue-200 flex items-center justify-center mr-4">
                <span className="text-dtima-blue font-bold">OA</span>
              </div>
              <div>
                <div className="font-bold text-dtima-black">Oluwaseun Adeyemi</div>
                <div className="text-gray-500 text-sm">Founder, TechForAll Ghana</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Innovate With Us?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Whether you're a municipality facing challenges or a tech innovator with solutions,
            we invite you to join our innovation ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-amber-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Propose a Challenge
            </a>
            <a 
              href="/activities/innovation-challenges/water-management" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              Apply to Current Challenge
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 