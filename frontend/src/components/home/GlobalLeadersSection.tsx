'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Leader {
  id: number;
  name: string;
  title: string;
  organization: string;
  profilePic: string;
  quote: string;
  linkedIn?: string;
  twitter?: string;
  featured?: boolean;
}

const LEADERS: Leader[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Executive Director',
    organization: 'African Tech Foundation',
    profilePic: '/images/leaders/leader1.jpg',
    quote: 'Digital transformation in Africa is not just about technology adoption, but about creating sustainable solutions that address local challenges.',
    linkedIn: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/drsarahjohnson',
    featured: true,
  },
  {
    id: 2,
    name: 'James Mwangi',
    title: 'CEO',
    organization: 'Savannah Innovation Hub',
    profilePic: '/images/leaders/leader2.jpg',
    quote: 'The future of Africa lies in empowering its youth with the digital skills needed to compete in the global economy.',
    linkedIn: 'https://linkedin.com/in/jamesmwangi',
    featured: true,
  },
  {
    id: 3,
    name: 'Amina Diallo',
    title: 'Policy Advisor',
    organization: 'Pan-African Digital Initiative',
    profilePic: '/images/leaders/leader3.jpg',
    quote: 'Digital inclusion must be prioritized to ensure that transformation benefits all Africans, regardless of location or socioeconomic status.',
    twitter: 'https://twitter.com/aminadiallo',
    featured: true,
  },
  {
    id: 4,
    name: 'Dr. Kwame Osei',
    title: 'Digital Transformation Lead',
    organization: 'West African Development Bank',
    profilePic: '/images/leaders/leader4.jpg',
    quote: 'To bridge the digital divide, we must focus on both infrastructure development and digital literacy programs across rural and urban communities.',
    linkedIn: 'https://linkedin.com/in/kwameosei',
  },
  {
    id: 5,
    name: 'Ngozi Adebayo',
    title: 'Technology Policy Director',
    organization: 'Digital Rights Africa',
    profilePic: '/images/leaders/leader5.jpg',
    quote: 'As we embrace digital transformation, we must also build robust frameworks that protect data privacy and digital rights for all citizens.',
    twitter: 'https://twitter.com/ngoziadebayo',
  },
  {
    id: 6,
    name: 'Jean-Paul Mbeki',
    title: 'Smart Cities Program Director',
    organization: 'African Union Digital Commission',
    profilePic: '/images/leaders/leader6.jpg',
    quote: 'Smart city initiatives should be developed with citizen participation at their core, focusing on solving real urban challenges across African municipalities.',
    linkedIn: 'https://linkedin.com/in/jeanpaulmbeki',
  },
];

export function GlobalLeadersSection() {
  const [visibleLeaders, setVisibleLeaders] = useState<Leader[]>(LEADERS.filter(leader => leader.featured));
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  
  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleLeaders(showAll ? LEADERS.filter(leader => leader.featured) : LEADERS);
  };
  
  const featuredLeaders = LEADERS.filter(leader => leader.featured);
  const totalPages = Math.ceil(visibleLeaders.length / itemsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const displayedLeaders = visibleLeaders.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="leaders-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="leaders-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Global Leaders in African Digital Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from thought leaders who are shaping the digital future of Africa through innovation, policy, and education.
          </p>
        </div>

        <div className="relative">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            aria-live="polite"
          >
            {displayedLeaders.map((leader) => (
              <div
                key={leader.id}
                className={cn(
                  "bg-white rounded-lg shadow-md overflow-hidden",
                  "hover:shadow-xl transition-shadow duration-300",
                  "flex flex-col h-full border border-gray-200"
                )}
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={leader.profilePic}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400?text=Leader';
                      target.onerror = null;
                    }}
                    aria-hidden="true" // The image is decorative, name is provided as text
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-dtima-blue">
                    {leader.title}, {leader.organization}
                  </p>
                  <blockquote className="mt-4 text-gray-600 italic flex-grow">
                    "{leader.quote}"
                  </blockquote>
                  
                  {/* Social links */}
                  {(leader.linkedIn || leader.twitter) && (
                    <div className="mt-4 flex gap-3">
                      {leader.linkedIn && (
                        <a 
                          href={leader.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-dtima-blue transition-colors"
                          aria-label={`Visit ${leader.name}'s LinkedIn profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                      {leader.twitter && (
                        <a 
                          href={leader.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-dtima-blue transition-colors"
                          aria-label={`Visit ${leader.name}'s Twitter profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mb-8">
              <button 
                onClick={handlePrevPage}
                className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-dtima-blue focus:ring-offset-2"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">
                  {currentPage + 1} of {totalPages}
                </span>
              </div>
              <button 
                onClick={handleNextPage}
                className="p-2 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-dtima-blue focus:ring-offset-2"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={toggleShowAll}
            className="font-semibold focus:ring-2 focus:ring-dtima-blue focus:ring-offset-2"
          >
            {showAll ? 'Show Featured Leaders' : 'View All Thought Leaders'}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
} 