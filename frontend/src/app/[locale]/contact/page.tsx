import React from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils/i18n';

interface ContactPageProps {
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
  const contactTranslations = await getTranslations(params.locale, 'contact');
  
  const t = createTranslator(commonTranslations);
  const ct = createTranslator(contactTranslations);
  
  return {
    title: ct('metadata.title') || 'Contact Us | DTIMA',
    description: ct('metadata.description') || t('seo.defaultDescription'),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = params;
  
  // Load translations
  const commonTranslations = await getTranslations(locale, 'common');
  const contactTranslations = await getTranslations(locale, 'contact');
  
  const t = createTranslator(commonTranslations);
  const ct = createTranslator(contactTranslations);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        {ct('title') || 'Contact Us'}
      </h1>
      
      <p className="text-lg mb-10">
        {ct('introduction') || 'We\'d love to hear from you. Please use the contact form below or reach out to us directly.'}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* General Inquiries Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-3">
            {ct('general.title') || 'General Inquiries'}
          </h2>
          <p className="mb-4">
            {ct('general.description') || 'For general questions about DTIMA and our programs.'}
          </p>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> info@dtima.org
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span> +123 456 7890
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
            {ct('general.buttonText') || 'Send a Message'}
          </button>
        </div>
        
        {/* Partnership Inquiries Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-3">
            {ct('partnership.title') || 'Partnership Inquiries'}
          </h2>
          <p className="mb-4">
            {ct('partnership.description') || 'For organizations interested in partnering with DTIMA.'}
          </p>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> partnerships@dtima.org
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span> +123 456 7890
          </div>
          <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded-lg font-semibold hover:bg-green-700 transition w-full">
            {ct('partnership.buttonText') || 'Become a Partner'}
          </button>
        </div>
        
        {/* Media Inquiries Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-3">
            {ct('media.title') || 'Media Inquiries'}
          </h2>
          <p className="mb-4">
            {ct('media.description') || 'For press and media-related inquiries.'}
          </p>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> media@dtima.org
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span> +123 456 7890
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg font-semibold hover:bg-purple-700 transition w-full">
            {ct('media.buttonText') || 'Media Request'}
          </button>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-16">
        <h2 className="text-2xl font-bold mb-6">
          {ct('form.title') || 'Send Us a Message'}
        </h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {ct('form.name') || 'Your Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {ct('form.email') || 'Email Address'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              {ct('form.subject') || 'Subject'}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {ct('form.message') || 'Your Message'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {t('buttons.submit')}
            </button>
          </div>
        </form>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          {ct('newsletter.title') || 'Subscribe to Newsletter'}
        </h2>
        <p className="mb-6">
          {ct('newsletter.description') || 'Stay updated with the latest news and updates from DTIMA.'}
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder={ct('newsletter.placeholder') || 'Your email address'}
            className="px-4 py-3 rounded-lg flex-1 text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap"
          >
            {t('buttons.subscribe')}
          </button>
        </form>
      </div>
    </div>
  );
} 