'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useLocalizedRoute } from '@/lib/client-utils';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const getLocalizedRoute = useLocalizedRoute();
  
  // Log the error to an error reporting service
  useEffect(() => {
    console.error('Page error:', error);
    
    // Here you would typically send to an error reporting service
    // Example: errorReportingService.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 md:p-8 space-y-6">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-dtima-red" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        
        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
          <p className="text-gray-600">
            We're sorry, but we encountered an unexpected error.
          </p>
          
          {/* Only show error details in development */}
          {process.env.NODE_ENV !== 'production' && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md text-left">
              <p className="text-sm font-medium text-gray-800">Error details:</p>
              <p className="mt-1 text-sm text-gray-600 font-mono whitespace-pre-wrap break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="mt-2 text-xs text-gray-500">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button 
            onClick={reset} 
            variant="default" 
            className="w-full sm:w-auto bg-dtima-blue hover:bg-dtima-blue-dark"
          >
            Try again
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="w-full sm:w-auto"
          >
            <Link href={getLocalizedRoute('/')}>
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 