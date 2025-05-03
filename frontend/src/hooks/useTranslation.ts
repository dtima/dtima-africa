'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Locale, defaultLocale } from '@/lib/utils/i18n';

// Define a version for cache busting
const TRANSLATION_VERSION = '1.0.0';

// Avoid circular reference by using a more specific type
type NestedRecord = Record<string, string | Record<string, string>>;
type TranslationRecord = Record<string, string | NestedRecord>;

interface UseTranslationReturn {
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Client-side hook for accessing translations
 * 
 * @param namespace The translation namespace to load
 * @returns Translation function and loading state
 * 
 * @example
 * const { t, isLoading } = useTranslation('common');
 * 
 * return (
 *   <div>
 *     {isLoading ? (
 *       <p>Loading...</p>
 *     ) : (
 *       <h1>{t('welcome')}</h1>
 *     )}
 *   </div>
 * );
 */
export function useTranslation(namespace: string): UseTranslationReturn {
  const params = useParams();
  const locale = (params?.locale as Locale) || defaultLocale;
  
  const [translations, setTranslations] = useState<TranslationRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Check if we already have these translations in localStorage
    const cacheKey = `i18n_${locale}_${namespace}_${TRANSLATION_VERSION}`;
    const cachedTranslations = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
    
    if (cachedTranslations) {
      try {
        setTranslations(JSON.parse(cachedTranslations));
        setIsLoading(false);
        return;
      } catch (e) {
        // Invalid cache, continue to fetch
        console.warn('Invalid translation cache:', e);
      }
    }
    
    async function loadTranslations() {
      try {
        setIsLoading(true);
        const module = await import(`@/locales/${locale}/${namespace}.json`);
        setTranslations(module.default);
        
        // Cache translations in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem(cacheKey, JSON.stringify(module.default));
        }
      } catch (e) {
        console.error(`Failed to load ${locale}/${namespace} translations:`, e);
        setError(e instanceof Error ? e : new Error(String(e)));
        
        // Try to load default locale translations as fallback
        if (locale !== defaultLocale) {
          try {
            const fallbackModule = await import(`@/locales/${defaultLocale}/${namespace}.json`);
            setTranslations(fallbackModule.default);
          } catch (fallbackError) {
            console.error(`Failed to load fallback translations:`, fallbackError);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
    
    loadTranslations();
  }, [locale, namespace]);
  
  // Translation function
  const t = (key: string, fallback?: string): string => {
    if (!translations) return fallback || key;
    
    // Support for nested keys with dot notation (e.g., 'header.title')
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result === undefined || result === null) return fallback || key;
      result = result[k];
    }
    
    // Return the translation, fallback, or key
    return (
      (typeof result === 'string' ? result : null) || 
      fallback || 
      key
    );
  };
  
  return { t, isLoading, error };
} 