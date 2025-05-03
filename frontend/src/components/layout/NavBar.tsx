'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Activity, 
  Users, 
  MapPin, 
  Building2, 
  LogIn, 
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useLocalizedRoute } from '@/lib/client-utils';

// Define types for dropdown items
type DropdownItem = {
  href: string;
  label: string;
};

// Define navigation items structure with icons
const createNavItems = (getLocalizedRoute: (path: string) => string) => [
  { 
    href: getLocalizedRoute('/'), 
    label: 'Home',
    icon: Home
  },
  { 
    label: 'About Us', 
    icon: Info,
    dropdown: [
      { href: getLocalizedRoute('/about/mission-vision'), label: 'Mission & Vision' },
      { href: getLocalizedRoute('/about/impact-goals'), label: 'Impact Goals' },
      { href: getLocalizedRoute('/about/key-initiatives'), label: 'Key Initiatives' },
    ] 
  },
  { 
    label: 'Activities', 
    icon: Activity,
    dropdown: [
      { href: getLocalizedRoute('/activities/digital-platforms'), label: 'Digital Platform Development' },
      { href: getLocalizedRoute('/activities/capacity-building'), label: 'Capacity Building' },
      { href: getLocalizedRoute('/activities/innovation-challenges'), label: 'Innovation Challenges' },
      { href: getLocalizedRoute('/activities/partnerships'), label: 'Partnerships' },
    ] 
  },
  { 
    href: getLocalizedRoute('/partners'), 
    label: 'Partners',
    icon: Users
  },
  { 
    href: getLocalizedRoute('/coverage'), 
    label: 'Coverage',
    icon: MapPin
  },
  { 
    href: getLocalizedRoute('/councils'), 
    label: 'Councils',
    icon: Building2
  },
];

const NavItem = ({ item, isMobile = false }: { item: any; isMobile?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = 'dropdown' in item && item.dropdown && item.dropdown.length > 0;
  const Icon = item.icon;

  const handleMouseEnter = () => !isMobile && hasDropdown && setIsOpen(true);
  const handleMouseLeave = () => !isMobile && hasDropdown && setIsOpen(false);
  const handleClick = () => isMobile && hasDropdown && setIsOpen(!isOpen);

  return (
    <div 
      className={cn("relative", isMobile ? "w-full" : "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-dtima-black hover:bg-gray-100 hover:text-dtima-green focus:outline-none focus:bg-gray-100",
          isMobile ? "" : "bg-transparent"
        )}
        aria-haspopup={hasDropdown}
        aria-expanded={isOpen}
      >
        {hasDropdown ? (
          <>
            <div className="flex items-center">
              <Icon className="h-5 w-5 mr-2 text-gray-500" aria-hidden="true" />
              <span>{item.label}</span>
            </div>
            <ChevronDown 
              className={cn("ml-1 h-4 w-4 transition-transform duration-200", isOpen ? "transform rotate-180" : "")} 
              aria-hidden="true" 
            />
          </>
        ) : (
          <Link href={item.href || '#'} className="flex items-center w-full text-left">
            <Icon className="h-5 w-5 mr-2 text-gray-500" aria-hidden="true" />
            <span>{item.label}</span>
          </Link> 
        )}
      </button>

      {hasDropdown && isOpen && (
        <div className={cn(
          "absolute z-10 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
          isMobile ? "relative w-full shadow-none ring-0" : "left-0 w-56"
        )}>
          <div className={cn("py-1", isMobile ? "pl-4" : "")} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {(item.dropdown as DropdownItem[]).map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block px-4 py-2 text-sm text-dtima-black hover:bg-gray-100 hover:text-dtima-green"
                role="menuitem"
                onClick={() => isMobile && setIsOpen(false)} // Close dropdown on mobile click
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const getLocalizedRoute = useLocalizedRoute();
  const navItems = createNavItems(getLocalizedRoute);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={getLocalizedRoute('/')} className="flex-shrink-0 flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image 
                  src="/images/logo.svg" 
                  alt="DTIMA Logo" 
                  width={40} 
                  height={40}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none'; // Hide if logo is missing
                  }}
                />
              </div>
              <div className="h-8 font-bold text-dtima-black">
                DTIMA
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavItem key={item.label || item.href} item={item} />
            ))}
            <div className="ml-4 flex items-center space-x-2">
              <Button 
                variant="ghost" 
                asChild 
                className="flex items-center text-dtima-black hover:text-dtima-green focus:text-dtima-green"
              >
                <Link href={getLocalizedRoute('/sign-in')} className="flex items-center">
                  <LogIn className="h-5 w-5 mr-1.5" aria-hidden="true" />
                  <span>Sign In</span>
                </Link>
              </Button>
              <Button 
                asChild 
                className="flex items-center bg-dtima-green hover:bg-dtima-green-dark"
              >
                <Link href={getLocalizedRoute('/join-us')} className="flex items-center">
                  <UserPlus className="h-5 w-5 mr-1.5" aria-hidden="true" />
                  <span>Join Us</span>
                </Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dtima-black hover:text-dtima-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dtima-green"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-t border-gray-200 shadow-lg z-40" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navItems.map((item) => (
              <NavItem key={item.label || item.href} item={item} isMobile={true} />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3 px-5">
             <Button 
               variant="ghost" 
               asChild 
               className="w-full text-left flex items-center text-dtima-black hover:text-dtima-green focus:text-dtima-green mb-2"
             >
               <Link href={getLocalizedRoute('/sign-in')} className="flex items-center">
                 <LogIn className="h-5 w-5 mr-1.5" aria-hidden="true" />
                 <span>Sign In</span>
               </Link>
             </Button>
             <Button 
               asChild 
               className="w-full flex items-center bg-dtima-green hover:bg-dtima-green-dark"
             >
               <Link href={getLocalizedRoute('/join-us')} className="flex items-center">
                 <UserPlus className="h-5 w-5 mr-1.5" aria-hidden="true" />
                 <span>Join Us</span>
               </Link>
             </Button>
          </div>
        </div>
      )}
    </header>
  );
} 