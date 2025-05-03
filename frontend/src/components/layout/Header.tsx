'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// Main navigation items
const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
    dropdown: [
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Impact Goals', href: '/about#goals' },
      { label: 'Key Initiatives', href: '/about#initiatives' },
    ]
  },
  { 
    label: 'Activities', 
    href: '/activities',
    dropdown: [
      { label: 'Digital Platform Development', href: '/activities/platform-development' },
      { label: 'Capacity Building', href: '/activities/capacity-building' },
      { label: 'Innovation Challenges', href: '/activities/innovation' },
      { label: 'Partnerships', href: '/activities/partnerships' },
    ]
  },
  { label: 'Partners', href: '/partners' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Councils', href: '/councils' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white shadow-md py-2' // changed to always be white to match screenshots
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* DTIMA logo - using a placeholder that matches the green dots in the screenshot */}
          <div className="relative h-12 w-12 mr-2">
            <div className="flex flex-wrap w-10 h-10">
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full m-0.5"></span>
            </div>
          </div>
          <span className="font-bold text-xl text-gray-900">
            <span className="text-gray-900">DTI</span>
            <span className="text-red-600">M</span>
            <span className="text-gray-900">A</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.href} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="font-medium text-gray-800 hover:text-blue-600 transition-colors flex items-center"
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={item.href}
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/sign-in"
            className="font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            Sign In
          </Link>
          
          <Button
            variant="default"
            size="default"
            className="bg-green-600 hover:bg-green-700"
          >
            <Link href="/join-us">
              Join Us
            </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-900"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left text-gray-800 font-medium py-2 flex items-center justify-between"
                      >
                        {item.label}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="pl-4 mt-1 border-l-2 border-gray-200">
                          {item.dropdown.map((dropdownItem) => (
                            <Link 
                              key={dropdownItem.href} 
                              href={dropdownItem.href}
                              className="block py-2 text-gray-700 hover:text-blue-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className="text-gray-800 font-medium py-2 hover:text-blue-600 transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link 
                  href="/sign-in"
                  className="block text-green-600 font-medium py-2 hover:text-green-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                
                <Button
                  variant="default"
                  size="sm"
                  className="mt-3 w-full bg-green-600 hover:bg-green-700"
                >
                  <Link 
                    href="/join-us" 
                    className="w-full text-center block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 