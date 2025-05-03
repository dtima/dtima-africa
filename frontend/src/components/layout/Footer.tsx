'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = {
  about: [
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
  ],
  programs: [
    { label: 'Digital Platform Development', href: '/programs/digital-platform-development' },
    { label: 'Capacity Building', href: '/programs/capacity-building' },
    { label: 'Digital Content Creation', href: '/programs/digital-content-creation' },
    { label: 'Local Innovation Challenge', href: '/programs/local-innovation-challenge' },
  ],
  resources: [
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reports', href: '/resources/reports' },
    { label: 'Toolkits', href: '/resources/toolkits' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/dtima', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/dtima', icon: 'linkedin' },
  { label: 'Facebook', href: 'https://facebook.com/dtimaafrica', icon: 'facebook' },
  { label: 'YouTube', href: 'https://youtube.com/c/dtimaafrica', icon: 'youtube' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              {/* Logo placeholder - in production this would be an actual logo */}
              <div className="relative h-10 w-10 mr-2 bg-blue-600 text-white rounded-md flex items-center justify-center font-bold text-xl">
                DT
              </div>
              <span className="font-bold text-xl text-white">
                DTIMA
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Digital Transformation Initiative for Municipalities in Africa. Empowering 
              municipalities across Africa through digital transformation and capacity building.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    {getSocialIcon(social.icon)}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright and legal links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DTIMA. All rights reserved.
          </p>
          
          <ul className="flex flex-wrap justify-center space-x-4 text-sm">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function getSocialIcon(icon: string) {
  switch (icon) {
    case 'twitter':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
      
    case 'linkedin':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
      
    case 'facebook':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.645c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.902 10.126-5.866 10.126-11.854z" />
        </svg>
      );
      
    case 'youtube':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
      
    default:
      return <span className="h-5 w-5" />;
  }
} 