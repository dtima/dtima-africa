import React from 'react';
import { footerLinks } from './nav-config';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              {section.description ? (
                <p className="text-gray-400">{section.description}</p>
              ) : (
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DTIMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};