import React, { useState, useEffect } from 'react';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';
import { AnnouncementBanner } from '../announcements/AnnouncementBanner';
import { cn } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const Layout = ({ 
  children, 
  title = "DTIMA Digital Hub", 
  description = "Digital Transformation for African Municipalities",
  keywords = "DTIMA, Digital Transformation, African Municipalities",
  image = "/og-image.png"
}: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <AnnouncementBanner />
        <header
          className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          )}
        >
          <MainNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </header>
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;