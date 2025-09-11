import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSolution } from '@/lib/data/solutions'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { Button } from '@/components/ui/Button'
import { SuccessMetricCard } from '@/components/solutions/SuccessMetricCard'
import { ImplementationStepCard } from '@/components/solutions/ImplementationStepCard'

interface SolutionPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolution(slug)
  
  if (!solution) {
    return {
      title: 'Solution Not Found - DTIMA',
    }
  }

  return {
    title: `${solution.name} - DTIMA Solutions`,
    description: solution.description,
    keywords: `${solution.name}, digital solutions, African municipalities, ${solution.category.name}, local government, digital transformation`,
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale, slug } = await params
  const solution = getSolution(slug)

  if (!solution) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${solution.category.color}-100 text-${solution.category.color}-800`}>
                  <span className="mr-2">{solution.category.icon}</span>
                  {solution.category.name}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {solution.name}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
                  Get Started
                </Button>
                <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg">
                  Schedule Demo
                </Button>
              </div>
            </div>

            {/* Dynamic Visual Design */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100">
                {solution.slug === 'digital-infrastructure' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Network Grid Background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 400 300">
                          <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>
                      
                      {/* Animated Network Nodes */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => {
                          const positions = [
                            { x: '20%', y: '25%' }, { x: '80%', y: '20%' }, { x: '15%', y: '60%' }, { x: '85%', y: '65%' },
                            { x: '50%', y: '15%' }, { x: '35%', y: '80%' }, { x: '70%', y: '85%' }, { x: '60%', y: '45%' }
                          ];
                          return (
                            <div
                              key={i}
                              className="absolute w-4 h-4 bg-blue-500 rounded-full animate-pulse"
                              style={{
                                left: positions[i]?.x || '50%',
                                top: positions[i]?.y || '50%',
                                animationDelay: `${i * 0.2}s`
                              }}
                            >
                              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Central Hub */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl text-white">🏗️</span>
                        </div>
                        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {solution.slug === 'smart-city' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* City Skyline */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800 to-blue-600 opacity-80">
                        {/* Buildings */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute bottom-0 bg-blue-700 opacity-90"
                            style={{
                              left: `${i * 15 + 10}%`,
                              width: '12%',
                              height: `${60 + (i % 3) * 20}px`
                            }}
                          >
                            {/* Windows */}
                            <div className="grid grid-cols-2 gap-1 p-1 h-full">
                              {[...Array(8)].map((_, j) => (
                                <div
                                  key={j}
                                  className={`bg-yellow-300 ${j % 2 === 0 ? 'opacity-80' : 'opacity-20'} rounded-sm`}
                                ></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* IoT Connections */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 bg-green-400 rounded-full animate-pulse"
                            style={{
                              left: `${(i * 23 + 15) % 80 + 10}%`,
                              top: `${(i * 17 + 25) % 60 + 20}%`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-green-300 rounded-full animate-ping opacity-60"></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Central Smart City Icon */}
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-3xl text-white">🏙️</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {solution.slug === 'municipal-services' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Service Flow Diagram */}
                      <div className="absolute inset-0">
                        {/* Citizens */}
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-2xl text-white">👥</span>
                          </div>
                          <div className="text-center mt-2 text-sm font-medium text-purple-700">Citizens</div>
                        </div>
                        
                        {/* Digital Platform */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center shadow-xl">
                            <span className="text-3xl text-white">💻</span>
                          </div>
                          <div className="text-center mt-2 text-sm font-medium text-blue-700">Digital Platform</div>
                        </div>
                        
                        {/* Municipal Office */}
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-2xl text-white">🏛️</span>
                          </div>
                          <div className="text-center mt-2 text-sm font-medium text-green-700">Municipality</div>
                        </div>
                        
                        {/* Connecting Arrows */}
                        <div className="absolute left-24 top-1/2 transform -translate-y-1/2">
                          <div className="w-24 h-1 bg-purple-400 relative">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                          </div>
                        </div>
                        
                        <div className="absolute right-24 top-1/2 transform -translate-y-1/2">
                          <div className="w-24 h-1 bg-green-400 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-180 w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Icons */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        {['📄', '💳', '🏠', '🚗'].map((icon, i) => (
                          <div key={i} className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                            <span className="text-lg">{icon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {solution.slug === 'analytics' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Dashboard Background */}
                      <div className="absolute inset-4 bg-white rounded-lg shadow-inner opacity-90">
                        {/* Chart Elements */}
                        <div className="p-4 h-full">
                          {/* Bar Chart */}
                          <div className="absolute top-8 left-8 w-32 h-20">
                            <div className="flex items-end space-x-2 h-full">
                              {[60, 80, 45, 90, 70].map((height, i) => (
                                <div
                                  key={i}
                                  className="bg-blue-500 rounded-t animate-pulse"
                                  style={{
                                    width: '16px',
                                    height: `${height}%`,
                                    animationDelay: `${i * 0.2}s`
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Pie Chart */}
                          <div className="absolute top-8 right-8 w-20 h-20">
                            <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-spin" style={{ animationDuration: '8s' }}></div>
                            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-700">85%</span>
                            </div>
                          </div>
                          
                          {/* Line Graph */}
                          <div className="absolute bottom-8 left-8 right-8 h-16">
                            <svg className="w-full h-full" viewBox="0 0 200 60">
                              <polyline
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="3"
                                points="10,50 30,30 50,40 70,20 90,25 110,15 130,30 150,10 170,20 190,5"
                                className="animate-pulse"
                              />
                              <circle cx="190" cy="5" r="3" fill="#10B981" className="animate-ping" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Central Analytics Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                          <span className="text-2xl text-white">📊</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {solution.slug === 'ai-integration' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* AI Neural Network */}
                      <div className="absolute inset-0">
                        {/* Neural Nodes */}
                        {[...Array(15)].map((_, i) => {
                          const positions = [
                            { x: '15%', y: '20%' }, { x: '25%', y: '40%' }, { x: '35%', y: '60%' },
                            { x: '45%', y: '15%' }, { x: '55%', y: '35%' }, { x: '65%', y: '55%' }, { x: '75%', y: '75%' },
                            { x: '85%', y: '25%' }, { x: '20%', y: '80%' }, { x: '40%', y: '85%' },
                            { x: '60%', y: '10%' }, { x: '80%', y: '50%' }, { x: '30%', y: '25%' },
                            { x: '70%', y: '40%' }, { x: '50%', y: '70%' }
                          ];
                          return (
                            <div
                              key={i}
                              className="absolute w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                              style={{
                                left: positions[i % positions.length]?.x || '50%',
                                top: positions[i % positions.length]?.y || '50%',
                                animationDelay: `${i * 0.1}s`
                              }}
                            >
                              <div className="absolute inset-0 bg-purple-300 rounded-full animate-ping opacity-50"></div>
                            </div>
                          );
                        })}
                        
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-30">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                          {[...Array(20)].map((_, i) => (
                            <line
                              key={i}
                              x1={`${(i * 13 + 10) % 100}%`}
                              y1={`${(i * 19 + 15) % 100}%`}
                              x2={`${(i * 31 + 20) % 100}%`}
                              y2={`${(i * 37 + 25) % 100}%`}
                              stroke="url(#lineGradient)"
                              strokeWidth="1"
                              className="animate-pulse"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </svg>
                      </div>
                      
                      {/* Central AI Brain */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                          <span className="text-3xl text-white">🧠</span>
                        </div>
                        <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      
                      {/* AI Processing Indicators */}
                      <div className="absolute top-4 right-4 space-y-2">
                        {['Processing...', 'Analyzing...', 'Optimizing...'].map((text, i) => (
                          <div key={i} className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium text-purple-700 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Default fallback for other solutions */}
                {!['digital-infrastructure', 'smart-city', 'municipal-services', 'analytics', 'ai-integration'].includes(solution.slug) && (
                  <PlaceholderImage
                    src={solution.imageUrl}
                    alt={`${solution.name} solution`}
                    fill
                    fallbackText={solution.name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed to address the unique challenges of African municipalities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solution.features.map((feature) => (
              <div key={feature.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from municipalities that have implemented our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.successMetrics.map((metric) => (
              <SuccessMetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your municipality with measurable improvements in efficiency, cost savings, and citizen satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.benefits.map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold mb-4 ${
                  benefit.impact === 'high' ? 'bg-green-100 text-green-600' :
                  benefit.impact === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {benefit.impact === 'high' ? '🚀' : benefit.impact === 'medium' ? '📈' : '💡'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-sm text-gray-500 mb-2">Timeframe: {benefit.timeframe}</div>
                <div className="space-y-1">
                  {benefit.metrics.map((metric, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful implementation and adoption of your new digital solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.implementationSteps.map((step, index) => (
              <ImplementationStepCard 
                key={step.id} 
                step={step} 
                isActive={index === 0}
                isCompleted={index < 0}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Technical Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you need to successfully implement and operate this solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.technicalRequirements.map((requirement) => (
              <div key={requirement.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    requirement.category === 'hardware' ? 'bg-blue-100 text-blue-800' :
                    requirement.category === 'software' ? 'bg-green-100 text-green-800' :
                    requirement.category === 'network' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {requirement.category}
                  </span>
                  {requirement.isRequired && (
                    <span className="ml-2 text-xs text-red-600 font-medium">Required</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{requirement.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{requirement.description}</p>
                {requirement.alternatives && (
                  <div className="text-xs text-gray-500">
                    <div className="font-medium mb-1">Alternatives:</div>
                    {requirement.alternatives.map((alt, index) => (
                      <div key={index}>• {alt}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your municipality with {solution.name}. Our team of experts is ready to help you implement this solution and achieve measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
              Start Implementation
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 rounded-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
