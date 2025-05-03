'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Returns the current locale from URL params
 * Memoized to prevent unnecessary recalculations
 */
export function useLocale() {
  const params = useParams();
  return useMemo(() => (params?.locale as string) || 'en', [params?.locale]);
}

/**
 * Returns a function to generate localized route paths
 * The resulting function is memoized to prevent unnecessary recreations
 */
export function useLocalizedRoute() {
  const locale = useLocale();
  
  return useMemo(() => {
    /**
     * Generate a localized route path
     * @param path - The path to localize
     * @returns Localized path with locale prefix
     */
    return (path: string) => {
      // Handle root path special case
      if (path === '/') {
        return `/${locale}`;
      }
      
      // Ensure path starts with a slash
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      return `/${locale}${normalizedPath}`;
    };
  }, [locale]); // Only recreate when locale changes
} 