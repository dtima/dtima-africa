import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import { getFeaturedTestimonials, getTestimonialsByCategory } from '@/lib/data/testimonials'

export const TestimonialsSection: React.FC = () => {
  const featuredTestimonials = getFeaturedTestimonials()
  const expertTestimonials = getTestimonialsByCategory('expert')
  const municipalTestimonials = getTestimonialsByCategory('municipal')
  const governmentTestimonials = getTestimonialsByCategory('government')

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Others Have To Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from experts, municipal leaders, and government officials who have witnessed 
            and endorsed the transformative impact of DTIMA across African municipalities.
          </p>
        </div>

        {/* Expert Insights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Expert Insights & Assessments
            </h3>
            <p className="text-gray-600">
              Leading experts share their perspectives on DTIMA's potential impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Municipal Leadership */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Municipal Leadership Testimonials
            </h3>
            <p className="text-gray-600">
              Mayors and municipal leaders share their vision for digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {municipalTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Government Support */}
        {governmentTestimonials.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Government Support & Endorsement
              </h3>
              <p className="text-gray-600">
                Official government representatives express their commitment to digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governmentTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  className="hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Join the Digital Transformation Journey
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Be part of the movement that's transforming African municipalities through 
            innovative digital solutions. Connect with us to learn how your municipality 
            can benefit from DTIMA's comprehensive approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/investment"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Investment Opportunities
            </a>
            <a
              href="/en/solutions"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              View Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}