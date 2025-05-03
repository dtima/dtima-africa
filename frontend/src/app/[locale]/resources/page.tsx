import React from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils/i18n';

interface ResourcesPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const commonTranslations = await getTranslations(params.locale, 'common');
  const resourcesTranslations = await getTranslations(params.locale, 'resources');
  
  const t = createTranslator(commonTranslations);
  const rt = createTranslator(resourcesTranslations);
  
  return {
    title: rt('metadata.title') || 'Resources | DTIMA',
    description: rt('metadata.description') || t('seo.defaultDescription'),
  };
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { locale } = params;
  
  // Load translations
  const commonTranslations = await getTranslations(locale, 'common');
  const resourcesTranslations = await getTranslations(locale, 'resources');
  
  const t = createTranslator(commonTranslations);
  const rt = createTranslator(resourcesTranslations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        {rt('title') || 'Resources'}
      </h1>
      
      <p className="text-lg mb-10">
        {rt('introduction') || 'Explore our collection of resources to learn more about digital transformation in African municipalities.'}
      </p>
      
      {/* News & Updates Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('news.title') || 'News & Updates'}
        </h2>
        <p className="mb-6">
          {rt('news.description') || 'Stay up to date with the latest news and updates from DTIMA.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 mb-2">January 15, 2023</p>
            <h3 className="text-xl font-bold mb-2">News Title 1</h3>
            <p className="mb-4">Brief news summary goes here...</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              {t('buttons.readMore')}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 mb-2">February 28, 2023</p>
            <h3 className="text-xl font-bold mb-2">News Title 2</h3>
            <p className="mb-4">Brief news summary goes here...</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              {t('buttons.readMore')}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-500 mb-2">March 10, 2023</p>
            <h3 className="text-xl font-bold mb-2">News Title 3</h3>
            <p className="mb-4">Brief news summary goes here...</p>
            <button className="text-blue-600 font-semibold hover:text-blue-800">
              {t('buttons.readMore')}
            </button>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('events.title') || 'Events'}
        </h2>
        <p className="mb-6">
          {rt('events.description') || 'Upcoming and past events related to digital transformation in Africa.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold p-3 rounded-lg text-center mr-4">
                <div className="text-2xl">15</div>
                <div className="text-sm">APR</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Event Title 1</h3>
                <p className="text-gray-500 mb-1">Location: Virtual</p>
                <p className="text-gray-500 mb-2">Time: 10:00 AM - 12:00 PM (UTC)</p>
                <p className="mb-4">Brief event description goes here...</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  {rt('events.register') || 'Register'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold p-3 rounded-lg text-center mr-4">
                <div className="text-2xl">22</div>
                <div className="text-sm">MAY</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Event Title 2</h3>
                <p className="text-gray-500 mb-1">Location: Nairobi, Kenya</p>
                <p className="text-gray-500 mb-2">Time: 9:00 AM - 4:00 PM (EAT)</p>
                <p className="mb-4">Brief event description goes here...</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  {rt('events.register') || 'Register'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('success.title') || 'Success Stories'}
        </h2>
        <p className="mb-6">
          {rt('success.description') || 'Stories of successful digital transformation in African municipalities.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Success stories will be displayed here */}
        </div>
      </section>
      
      {/* Articles & Insights Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('articles.title') || 'Articles & Insights'}
        </h2>
        <p className="mb-6">
          {rt('articles.description') || 'In-depth articles and insights on digital transformation in Africa.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Articles will be displayed here */}
        </div>
      </section>
      
      {/* Reports & Publications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('reports.title') || 'Reports & Publications'}
        </h2>
        <p className="mb-6">
          {rt('reports.description') || 'Download our reports and publications on digital transformation.'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex">
            <div className="bg-gray-200 h-32 w-24 flex-shrink-0 mr-4"></div>
            <div>
              <h3 className="text-xl font-bold mb-2">Report Title 1</h3>
              <p className="text-gray-500 mb-2">Published: March 2023</p>
              <p className="mb-4">Brief report description goes here...</p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {t('buttons.download')}
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex">
            <div className="bg-gray-200 h-32 w-24 flex-shrink-0 mr-4"></div>
            <div>
              <h3 className="text-xl font-bold mb-2">Report Title 2</h3>
              <p className="text-gray-500 mb-2">Published: January 2023</p>
              <p className="mb-4">Brief report description goes here...</p>
              <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                {t('buttons.download')}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Gallery Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {rt('gallery.title') || 'Media Gallery'}
        </h2>
        <p className="mb-6">
          {rt('gallery.description') || 'Photos and videos from our programs and events.'}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
          <div className="bg-gray-200 aspect-square rounded-lg"></div>
        </div>
      </section>
    </div>
  );
} 