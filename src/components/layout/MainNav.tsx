'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

interface MainNavProps {
  locale?: string
  className?: string
}

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  external?: boolean
}

const getNavigationItems = (locale: string): NavItem[] => [
  {
    label: 'Solutions',
    href: `/${locale}/solutions`,
    children: [
      { label: 'All Solutions', href: `/${locale}/solutions` },
      { label: 'Digital Infrastructure', href: `/${locale}/digital-infrastructure` },
      { label: 'Smart City Solutions', href: `/${locale}/smart-city` },
      { label: 'Municipal Services', href: `/${locale}/municipal-services` },
      { label: 'Data Analytics', href: `/${locale}/analytics` },
      { label: 'Municipal AI Integration', href: `/${locale}/ai-integration` }
    ]
  },
  // Success Stories - DISABLED - Future Implementation
  // TODO: Re-enable Success Stories navigation in future release
  {
    label: 'Investment',
    href: `/${locale}/investment`,
    children: [
      { label: 'Council Spotlights', href: `/${locale}/investment` },
      { label: 'Investment Guide', href: `/${locale}/investment#guide` },
      { label: 'Partnership Opportunities', href: '#partnerships' },
      { label: 'Contact Investment Team', href: `/${locale}/investment#contact` }
    ]
  },
  {
    label: 'Partnerships',
    href: `/${locale}/corporate`,
    children: [
      { label: 'Corporate Partners', href: `/${locale}/corporate` },
      { label: 'Development Partners', href: `/${locale}/development` },
      { label: 'Technology Partners', href: `/${locale}/technology` }
    ]
  },
  {
    label: 'About',
    href: `/${locale}/mission`,
    children: [
      { label: 'Our Mission', href: `/${locale}/mission` },
      { label: 'Team', href: `/${locale}/team` },
      { label: 'Careers', href: `/${locale}/careers` }
    ]
  },
  // Resources - DISABLED - Future Implementation
  // TODO: Re-enable Resources navigation in future release
]

interface DropdownMenuProps {
  items: NavItem[]
  isOpen: boolean
  onClose: () => void
}

function DropdownMenu({ items, isOpen, onClose }: DropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigationItems: NavItem[]
}

function MobileMenu({ isOpen, onClose, navigationItems }: MobileMenuProps) {
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set())

  const toggleSubmenu = (label: string) => {
    const newOpenSubmenus = new Set(openSubmenus)
    if (newOpenSubmenus.has(label)) {
      newOpenSubmenus.delete(label)
    } else {
      newOpenSubmenus.add(label)
    }
    setOpenSubmenus(newOpenSubmenus)
  }

  return (
    <div className={cn(
      "fixed inset-0 z-50 lg:hidden",
      isOpen ? "block" : "hidden"
    )}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img 
              src="/images/logo.jpg" 
              alt="DTIMA Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-900">DTIMA</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className="flex items-center justify-between w-full py-3 text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                    <svg 
                      className={cn(
                        "w-5 h-5 transition-transform duration-200",
                        openSubmenus.has(item.label) ? "rotate-180" : ""
                      )} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSubmenus.has(item.label) && (
                    <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
                      {item.children.map((child, index) => (
                        <Link
                          key={index}
                          href={child.href}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="space-y-4">
            <Button href="#contact" variant="primary" className="w-full">
              Get Started
            </Button>
            <Button href="#demo" variant="outline" className="w-full">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MainNav({ locale = 'en', className }: MainNavProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navigationItems = getNavigationItems(locale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
        className
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <img 
                src="/images/logo.jpg" 
                alt="DTIMA Logo" 
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-gray-900">DTIMA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        className="flex items-center space-x-1 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <span>{item.label}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        onMouseLeave={closeDropdown}
                        className="absolute top-full left-0 mt-2"
                      >
                        <DropdownMenu
                          items={item.children}
                          isOpen={activeDropdown === item.label}
                          onClose={closeDropdown}
                        />
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button href="#demo" variant="outline" size="sm">
                Schedule Demo
              </Button>
              <Button href="#contact" variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
