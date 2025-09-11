import React from 'react'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Careers - DTIMA',
    description:
      'Student-focused opportunities in international development, municipal innovation, financing, and technology.'
  }
}

export default function CareersPage() {
  const tracks = [
    {
      id: 'intl-dev',
      title: 'International Development & Local Governance',
      icon: '🌍',
      audience:
        'Students in international development studies, international relations, public policy, or local development',
      focus: [
        'Program design and monitoring & evaluation (M&E)',
        'Policy research and stakeholder engagement',
        'Municipal service delivery and inclusion'
      ]
    },
    {
      id: 'financing',
      title: 'Development Financing & Local Project Finance',
      icon: '💼',
      audience:
        'Students in development finance, economics, public finance, or investment banking (emerging markets)',
      focus: [
        'Project structuring (PPP, blended finance, results-based)',
        'Financial modeling and investment memos',
        'Donor coordination and grant management'
      ]
    },
    {
      id: 'technology',
      title: 'Technology & Data for Municipal Innovation',
      icon: '🧠',
      audience:
        'Students in computer science, information systems, data analytics, or AI/ML',
      focus: [
        'Digital platforms, API integrations, security',
        'Data pipelines, dashboards, insight generation',
        'AI-assisted service delivery and automation'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -right-20 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full" />
          <div className="absolute -bottom-28 -left-10 w-72 h-72 bg-indigo-200/40 blur-3xl rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Careers at DTIMA</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl">
            Build your career at the intersection of technology, governance, and finance. Help African
            municipalities deliver modern, inclusive digital services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#tracks" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              Explore Tracks
            </a>
            <a href="#apply" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold border border-blue-200 hover:bg-blue-50 transition-colors">
              How to Apply
            </a>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((t) => (
              <div
                key={t.id}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 max-w-[85%]">{t.title}</h2>
                  <span className="text-2xl" aria-hidden>{t.icon}</span>
                </div>
                <p className="text-gray-700 mt-3">{t.audience}</p>
                <ul className="mt-5 space-y-2">
                  {t.focus.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-blue-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 md:p-10 shadow-lg">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20" aria-hidden>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="white" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to apply?</h3>
            <p className="mt-3 text-blue-50 max-w-3xl">
              Submit a resume and short statement (max 300 words) on how you would help a municipality
              digitize a public service. Include preferred track(s) and availability. Applications are
              reviewed on a rolling basis.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition-colors"
            >
              Contact DTIMA
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


