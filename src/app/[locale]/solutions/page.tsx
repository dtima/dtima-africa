import React from 'react'
import { Metadata } from 'next'
import { getAllSolutions, solutionCategories } from '@/lib/data/solutions'
import { SolutionCard } from '@/components/solutions/SolutionCard'
import { Button } from '@/components/ui/Button'

interface SolutionsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  return {
    title: 'Solutions - DTIMA',
    description: 'Comprehensive digital solutions for African municipalities. Transform your local government with our proven digital infrastructure, smart city solutions, municipal services, and data analytics platforms.',
    keywords: 'digital solutions, African municipalities, smart city, digital infrastructure, municipal services, data analytics, local government, digital transformation',
  }
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params
  const solutions = getAllSolutions()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Solutions for African Municipalities
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your municipality with our comprehensive suite of digital solutions designed specifically for African local governments. From digital infrastructure to smart city technologies, we provide the tools you need for modern governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
                Explore Solutions
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Impact Across Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions have transformed municipalities across the continent, delivering measurable results and improved citizen satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Municipalities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2.5M+</div>
              <div className="text-gray-600">Citizens Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">120+</div>
              <div className="text-gray-600">Digital Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">35%</div>
              <div className="text-gray-600">Average Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for African municipal needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our digital solutions can transform your municipality and improve citizen services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Municipality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the digital transformation journey and provide better services to your citizens. Our team of experts is ready to help you implement the right solutions for your municipality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
              Get Started Today
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
