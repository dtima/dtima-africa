import React from 'react'
import { Metadata } from 'next'
import { CouncilCard } from '@/components/investment/CouncilCard'
import { getFeaturedCouncils, getCouncilsByCountry } from '@/lib/data/councilSpotlights'
import { Button } from '@/components/ui/Button'

interface InvestmentPageProps {
  params: Promise<{
    locale: string
  }>
}

export const metadata: Metadata = {
  title: 'Investment Opportunities - DTIMA',
  description: 'Discover investment opportunities across African municipalities. Explore council spotlights and find your next investment destination.',
  keywords: 'investment opportunities, African municipalities, council spotlights, development projects, business opportunities',
}

export default async function InvestmentPage({ params }: InvestmentPageProps) {
  const { locale } = await params
  const featuredCouncils = getFeaturedCouncils()
  const cameroonCouncils = getCouncilsByCountry('Cameroon')
  const gabonCouncils = getCouncilsByCountry('Gabon')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Investment
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {' '}Opportunities
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover transformative investment opportunities across African municipalities. 
              Partner with councils driving digital innovation and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#featured-councils"
                asChild
              >
                Explore Opportunities
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#contact"
                asChild
              >
                Get Investment Guide
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Partner Councils</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2B+</div>
              <div className="text-gray-600">Investment Potential</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2M+</div>
              <div className="text-gray-600">Citizens Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Councils Section */}
      <section id="featured-councils" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Council Spotlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most promising investment destinations across Africa. 
              Each council offers unique opportunities for sustainable development and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCouncils.map((council) => (
              <CouncilCard
                key={council.id}
                council={council}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cameroon Councils Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cameroon Investment Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse investment opportunities across Cameroon's municipalities, 
              from technology hubs to agricultural powerhouses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cameroonCouncils.map((council) => (
              <CouncilCard
                key={council.id}
                council={council}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gabon Councils Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gabon Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore sustainable development opportunities in Gabon, 
              focusing on forest-based economies and eco-tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gabonCouncils.map((council) => (
              <CouncilCard
                key={council.id}
                council={council}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Invest
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our streamlined investment process makes it easy to partner with African municipalities 
              and drive meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="opacity-90">Browse council spotlights and identify investment opportunities that align with your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="opacity-90">Reach out to council representatives and discuss your investment interests.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partner</h3>
              <p className="opacity-90">Form strategic partnerships and begin your investment journey with local support.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="opacity-90">Drive sustainable development and create lasting positive impact in communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Invest in Africa's Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in transforming African municipalities through strategic investments 
            and sustainable development partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="mailto:hello@dtima.com"
              asChild
            >
              Start Your Investment Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="tel:+237671154588"
              asChild
            >
              Call Us Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
