import React from 'react';
import { Metadata } from 'next';
import { getTranslations, createTranslator, Locale } from '@/lib/utils/i18n';
import { Laptop, Shield, BarChart3, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const translations = await getTranslations(params.locale, 'activities');
  
  return {
    title: 'Capacity Building Programs | DTIMA',
    description: 'Empowering municipal staff with digital skills across African municipalities',
  };
}

export default async function CapacityBuildingPage({
  params
}: {
  params: { locale: Locale }
}) {
  const translations = await getTranslations(params.locale, 'activities');
  const t = createTranslator(translations);
  
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-dtima-green to-dtima-green-dark py-12 md:py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Capacity Building Programs
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Empowering municipal staff with digital skills to drive sustainable transformation
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Our capacity building programs ensure that municipal staff have the knowledge and skills
          needed to effectively utilize and maintain digital systems, creating sustainable digital
          transformation across African municipalities.
        </p>
        
        {/* Training Approach */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">
            Our Training Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-dtima-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-dtima-green" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Learn</h3>
              <p className="text-gray-600">
                Structured training modules designed for various skill levels, from beginners to advanced users
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-dtima-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="h-8 w-8 text-dtima-blue" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Practice</h3>
              <p className="text-gray-600">
                Hands-on exercises and real-world simulations to reinforce knowledge and build confidence
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-dtima-black mb-2">Apply</h3>
              <p className="text-gray-600">
                Guided implementation of digital tools in real municipal contexts with ongoing support
              </p>
            </div>
          </div>
        </div>
        
        {/* Training Programs */}
        <h2 className="text-3xl font-bold text-center text-dtima-black mb-12">
          Our Capacity Building Programs
        </h2>
        
        {/* Digital Literacy Program */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-dtima-blue overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-dtima-blue-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-dtima-blue-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <GraduationCap className="h-10 w-10 text-dtima-blue" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dtima-blue">Digital Literacy Program</h3>
              <p className="text-gray-600 mt-1">Basic to advanced digital skills training for municipal staff</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Computer Basics</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Hardware and software fundamentals</li>
                <li>Operating system navigation</li>
                <li>File management best practices</li>
                <li>Basic troubleshooting skills</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Internet and Email</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Web browsing and search techniques</li>
                <li>Email management and etiquette</li>
                <li>Online security fundamentals</li>
                <li>Cloud storage utilization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Office Software</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Document creation and formatting</li>
                <li>Spreadsheet data management</li>
                <li>Presentation design basics</li>
                <li>Collaborative document editing</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Digital Communication</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Video conferencing tools</li>
                <li>Instant messaging platforms</li>
                <li>Social media fundamentals</li>
                <li>Digital collaboration tools</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* System Administration */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-dtima-green overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-dtima-green-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-dtima-green-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Laptop className="h-10 w-10 text-dtima-green" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-dtima-green">System Administration</h3>
              <p className="text-gray-600 mt-1">Platform management and maintenance training for IT staff</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">User Management</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Account creation and permissions</li>
                <li>Role-based access control</li>
                <li>User onboarding and offboarding</li>
                <li>Authentication and authorization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">System Configuration</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Platform setup and customization</li>
                <li>Integration with existing systems</li>
                <li>Workflow configuration</li>
                <li>System optimization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Troubleshooting</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Common issue resolution</li>
                <li>Error diagnosis techniques</li>
                <li>Performance monitoring</li>
                <li>Support ticketing management</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Updates and Maintenance</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Patch management</li>
                <li>Backup and recovery procedures</li>
                <li>System health monitoring</li>
                <li>Update testing and deployment</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Data Management */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-10 border-l-4 border-purple-600 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-purple-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <BarChart3 className="h-10 w-10 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600">Data Management</h3>
              <p className="text-gray-600 mt-1">Data handling and analysis training for informed decision-making</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Data Entry Best Practices</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Accurate data capture techniques</li>
                <li>Standardization and consistency</li>
                <li>Quality control procedures</li>
                <li>Efficient data entry workflows</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Database Management</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Database structure principles</li>
                <li>Data organization and categorization</li>
                <li>Search and retrieval optimization</li>
                <li>Database maintenance protocols</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Data Analysis</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Basic statistical analysis</li>
                <li>Data visualization techniques</li>
                <li>Trend identification</li>
                <li>Decision-making from data</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Reporting Tools</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Report creation and customization</li>
                <li>Automated reporting setup</li>
                <li>Data presentation best practices</li>
                <li>Dashboard development</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Digital Security */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-16 border-l-4 border-amber-500 overflow-hidden relative">
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center mb-6 relative z-10">
            <div className="bg-amber-100 rounded-full p-4 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Shield className="h-10 w-10 text-amber-500" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-500">Digital Security</h3>
              <p className="text-gray-600 mt-1">Cybersecurity awareness and practices for municipal systems protection</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Password Security</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Strong password creation</li>
                <li>Password management tools</li>
                <li>Multi-factor authentication</li>
                <li>Password policy enforcement</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Phishing Awareness</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Phishing attack recognition</li>
                <li>Email security protocols</li>
                <li>Social engineering defense</li>
                <li>Reporting suspicious activity</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Data Protection</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Sensitive data handling</li>
                <li>Data classification guidelines</li>
                <li>Privacy regulations compliance</li>
                <li>Secure data sharing practices</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg text-dtima-black mb-3">Security Protocols</h4>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Incident response procedures</li>
                <li>Security policy implementation</li>
                <li>Regular security assessments</li>
                <li>Security update management</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Training Metrics */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-dtima-black mb-8">Training Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-dtima-blue mb-2">5,000+</div>
              <div className="text-gray-600">Municipal staff trained</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-dtima-green mb-2">45</div>
              <div className="text-gray-600">Municipalities covered</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-600">Satisfaction rate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">40%</div>
              <div className="text-gray-600">Efficiency improvement</div>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl text-dtima-green opacity-20 font-serif text-center mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center italic mb-6">
              The training provided by DTIMA has transformed how our municipal staff approach digital systems. 
              We've seen remarkable improvements in efficiency, confidence, and the quality of services we deliver to our citizens.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-dtima-blue-200 flex items-center justify-center mr-4">
                <span className="text-dtima-blue font-bold">JN</span>
              </div>
              <div>
                <div className="font-bold text-dtima-black">James Nkosi</div>
                <div className="text-gray-500 text-sm">IT Director, Lusaka Municipal Council</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-dtima-green to-dtima-green-dark text-white py-12 px-4 md:px-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Empower Your Municipal Team</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our capacity building programs and how we can tailor training
            to meet the specific needs of your municipality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact-us" 
              className="bg-white text-dtima-green font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Request Training Information
            </a>
            <a 
              href="/case-studies" 
              className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-white hover:bg-white/10 transition-colors"
            >
              View Training Success Stories
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 