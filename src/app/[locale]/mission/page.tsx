import React from 'react'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Mission - DTIMA',
    description:
      'DTIMA accelerates digital transformation for African municipalities through secure, scalable solutions and partnerships.'
  }
}

export default function MissionPage() {
  const pillars = [
    {
      icon: '👥',
      title: 'Citizen-first Services',
      desc: 'Design inclusive, accessible digital services with measurable outcomes and feedback loops.'
    },
    {
      icon: '🧩',
      title: 'Interoperable Platforms',
      desc: 'Secure, standards-based architectures that reduce vendor lock-in and improve data quality.'
    },
    {
      icon: '🎓',
      title: 'Capacity Building',
      desc: 'Upskill municipal teams and institutionalize good governance for long-term ownership.'
    },
    {
      icon: '💡',
      title: 'Sustainable Financing',
      desc: 'Mobilize capital with PPPs and results-based models to scale proven solutions.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-28 -right-10 w-80 h-80 bg-indigo-200/40 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Our Mission</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            DTIMA partners with African municipalities to modernize public services, strengthen
            institutions, and expand inclusive economic opportunity through secure, scalable, and
            interoperable digital solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/en/solutions" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition-colors">Explore Solutions</a>
            <a href="/en/partnerships" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold border border-indigo-200 hover:bg-indigo-50 transition-colors">Partner With Us</a>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">How We Create Impact</h2>
              <p className="mt-3 text-gray-700">
                We unite technology, governance, and finance to deliver sustainable results. From
                identity systems and service portals to data analytics and AI assistance, our programs
                help municipalities serve citizens better, faster, and more transparently.
              </p>
              <p className="mt-3 text-gray-700">
                Our methodology emphasizes co-creation with municipal teams, adherence to security and
                privacy best practices, and rigorous monitoring and evaluation.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Program Pillars</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((p) => (
                  <li key={p.title} className="rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="text-xl" aria-hidden>{p.icon}</span>
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                    <div className="mt-3">
                      <div className="font-semibold text-gray-900">{p.title}</div>
                      <div className="text-gray-700 text-sm mt-1">{p.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold">Let’s build digital municipalities together</h3>
            <p className="mt-3 text-blue-50 max-w-3xl">
              Whether you are a municipal leader, development partner, or technology provider, DTIMA offers
              a proven pathway to deploy impactful, secure, and sustainable digital solutions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="/en/partnerships" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition-colors">Partnerships</a>
              <a href="/en/careers" className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


