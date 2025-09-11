import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCouncilSpotlight } from '@/lib/data/councilSpotlights'
import { Button, PlaceholderImage } from '@/components/ui'

interface CouncilDetailPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateMetadata({ params }: CouncilDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const council = getCouncilSpotlight(slug)
  
  if (!council) {
    return {
      title: 'Council Not Found - DTIMA',
    }
  }

  return {
    title: `${council.name} - Investment Opportunities - DTIMA`,
    description: council.shortDescription,
    keywords: `investment, ${council.name}, ${council.location.country}, ${council.location.region}, municipal development`,
  }
}

export default async function CouncilDetailPage({ params }: CouncilDetailPageProps) {
  const { locale, slug } = await params
  const council = getCouncilSpotlight(slug)

  if (!council) {
    notFound()
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Link 
                  href={`/${locale}/investment`}
                  className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Investment Opportunities
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {council.name}
              </h1>
              
              <div className="flex items-center text-lg text-gray-600 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{council.location.city}, {council.location.region}, {council.location.country}</span>
              </div>

              <p className="text-xl text-gray-600 mb-8">
                {council.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={`mailto:${council.contactInfo.email}`}
                  asChild
                >
                  Contact Council
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href={`tel:${council.contactInfo.phone}`}
                  asChild
                >
                  Call Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                <PlaceholderImage
                  src={council.logoUrl}
                  alt={`${council.name} logo`}
                  fill
                  fallbackText={council.name}
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  council.status === 'active' 
                    ? 'bg-green-500 text-white' 
                    : council.status === 'coming-soon'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}>
                  {council.status === 'active' ? 'Active' : 
                   council.status === 'coming-soon' ? 'Coming Soon' : 'Closed'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {formatNumber(council.keyStats.population)}
              </div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {council.keyStats.area} km²
              </div>
              <div className="text-gray-600">Area</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {council.keyStats.investmentOpportunities}
              </div>
              <div className="text-gray-600">Investment Opportunities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {council.keyStats.digitalAdoptionRate}%
              </div>
              <div className="text-gray-600">Digital Adoption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Strength Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Economic Strength
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {council.economicStrength}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {council.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investment Opportunities
              </h2>
              <ul className="space-y-3">
                {council.investmentOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Sectors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse investment opportunities across key sectors in {council.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {council.sectors.map((sector) => (
              <div key={sector.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {sector.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {sector.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opportunities</h4>
                    <ul className="space-y-1">
                      {sector.opportunities.map((opportunity, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <svg className="w-3 h-3 mr-2 mt-1 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-500">Investment Range</div>
                      <div className="font-semibold text-gray-900">{sector.investmentRange}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold text-gray-900">{sector.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Investor Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {council.investorSupport}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Future Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {council.futureVision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in {council.name}?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get in touch with our team to discuss investment opportunities and start your partnership journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{council.contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{council.contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{council.contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  variant="secondary"
                  size="md"
                  href={`mailto:${council.contactInfo.email}`}
                  asChild
                  className="w-full"
                >
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={`tel:${council.contactInfo.phone}`}
                  asChild
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={`/${locale}/investment`}
                  asChild
                  className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  View Other Councils
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
