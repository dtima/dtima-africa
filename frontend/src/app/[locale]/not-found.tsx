import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-50">
      <div className={cn(
        "max-w-md w-full bg-white shadow-lg rounded-card overflow-hidden p-6 md:p-8 space-y-6",
        "animate-fade-in"
      )}>
        {/* 404 Icon */}
        <div className="w-24 h-24 mx-auto bg-dtima-blue-100 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-dtima-blue">404</span>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-gray-600">
            We couldn't find the page you're looking for. The page might have been moved, deleted,
            or you might have entered the wrong URL.
          </p>
        </div>
        
        {/* Suggested Links */}
        <div className="pt-2 pb-2 border-t border-gray-200">
          <h2 className="text-sm font-medium text-gray-700 mb-3">You might be looking for:</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-dtima-blue hover:text-dtima-blue-dark transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-dtima-blue hover:text-dtima-blue-dark transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-dtima-blue hover:text-dtima-blue-dark transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-dtima-blue hover:text-dtima-blue-dark transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button 
            asChild 
            variant="default" 
            className="w-full sm:w-auto bg-dtima-blue hover:bg-dtima-blue-dark"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="w-full sm:w-auto"
          >
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 