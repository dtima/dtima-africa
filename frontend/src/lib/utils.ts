import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * to prevent conflicting Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Export types for localization
export type Locale = 'en' | 'fr' | 'es'; // Add other supported locales as needed

// Placeholder functions for translations
export async function getTranslations(locale: Locale, namespace: string) {
  // This would be implemented to get translations for the current locale
  return {};
}

export function createTranslator(translations: any = {}) {
  // This would be implemented to create a translator function
  return (key: string) => key;
} 