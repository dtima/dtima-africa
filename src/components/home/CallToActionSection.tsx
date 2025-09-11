'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

interface CallToActionSectionProps {
  title?: string
  subtitle?: string
  primaryCTA?: CTALink
  secondaryCTA?: CTALink
  features?: string[]
  backgroundImage?: string
}

interface CTALink {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: string
}

const defaultProps: Required<CallToActionSectionProps> = {
  title: 'Ready to Transform Your Municipality?',
  subtitle: 'Join hundreds of African municipalities already benefiting from DTIMA\'s digital transformation solutions.',
  primaryCTA: {
    text: 'Get Started Today',
    href: '#contact',
    variant: 'primary',
    icon: '🚀'
  },
  secondaryCTA: {
    text: 'Schedule a Demo',
    href: '#demo',
    variant: 'outline',
    icon: '📅'
  },
  features: [
    'Free consultation and assessment',
    'Customized implementation plan',
    'Ongoing support and training',
    'Proven track record of success'
  ],
  backgroundImage: '/images/cta-background.jpg'
}

interface ContactFormProps {
  isVisible: boolean
}

function ContactForm({ isVisible }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    municipality: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        organization: '',
        role: '',
        municipality: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const roles = [
    'Mayor',
    'City Manager',
    'IT Director',
    'Development Officer',
    'Corporate Partner',
    'Investor',
    'Other'
  ]

  return (
    <div className={cn(
      "bg-white rounded-2xl shadow-2xl p-8",
      isVisible ? "animate-fade-in" : "opacity-0"
    )} style={{ animationDelay: '600ms' }}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get in Touch
        </h3>
        <p className="text-gray-600">
          Tell us about your municipality and how we can help
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
          <p className="text-gray-600 mb-4">
            We've received your message and will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your organization name"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Your Role *
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select your role</option>
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="municipality" className="block text-sm font-medium text-gray-700 mb-2">
              Municipality/City *
            </label>
            <input
              type="text"
              id="municipality"
              name="municipality"
              value={formData.municipality}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your municipality or city"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your needs *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              placeholder="Describe your municipality's current challenges and how DTIMA can help..."
            />
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">
                There was an error submitting your form. Please try again.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-lg font-medium"
            loading={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our{' '}
            <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#terms" className="text-blue-600 hover:underline">Terms of Service</a>.
          </p>
        </form>
      )}
    </div>
  )
}

export function CallToActionSection(props: CallToActionSectionProps) {
  const { title, subtitle, primaryCTA, secondaryCTA, features, backgroundImage } = { ...defaultProps, ...props }
  const [isVisible, setIsVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={cn(
            "text-white",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            <h2 
              id="cta-title"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center space-x-3",
                    isVisible ? "animate-fade-in" : "opacity-0"
                  )}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={cn(
              "flex flex-col sm:flex-row gap-4",
              isVisible ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '800ms' }}>
              <Button
                href={primaryCTA.href}
                variant={primaryCTA.variant || 'primary'}
                size="lg"
                className="group"
              >
                <span className="mr-2">{primaryCTA.icon}</span>
                {primaryCTA.text}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              
              <Button
                href={secondaryCTA.href}
                variant={secondaryCTA.variant || 'outline'}
                size="lg"
                onClick={() => setShowForm(true)}
              >
                <span className="mr-2">{secondaryCTA.icon}</span>
                {secondaryCTA.text}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className={cn(
              "mt-12 pt-8 border-t border-blue-700",
              isVisible ? "animate-fade-in" : "opacity-0"
            )} style={{ animationDelay: '1000ms' }}>
              <p className="text-blue-200 text-sm mb-4">Working with municipalities in:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="USA flag">🇺🇸</span>
                  <span>USA</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Cameroon flag">🇨🇲</span>
                  <span>Cameroon</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Tanzania flag">🇹🇿</span>
                  <span>Tanzania</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Gabon flag">🇬🇦</span>
                  <span>Gabon</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Nigeria flag">🇳🇬</span>
                  <span>Nigeria</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Senegal flag">🇸🇳</span>
                  <span>Senegal</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="Ivory Coast flag">🇨🇮</span>
                  <span>Ivory Coast</span>
                </div>
                <div className="text-blue-200 font-semibold text-center flex items-center justify-center space-x-2">
                  <span className="flag-emoji" role="img" aria-label="DRC Congo flag">🇨🇩</span>
                  <span>DRC Congo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-start-2">
            <ContactForm isVisible={isVisible} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "mt-16 text-center",
          isVisible ? "animate-fade-in" : "opacity-0"
        )} style={{ animationDelay: '1200ms' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not ready to commit?
            </h3>
            <p className="text-blue-100 mb-6">
              Download our free guide to digital transformation for African municipalities
            </p>
            <Button
              href="#guide"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              📖 Download Free Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
