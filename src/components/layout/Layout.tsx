import React, { useState } from 'react';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';
import { Footer } from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileNav isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;