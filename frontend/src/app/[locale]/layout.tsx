import React from 'react';
import type { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/utils/i18n';

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  
  return {
    title: {
      template: '%s | DTIMA',
      default: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
    },
    description: 'Empowering African municipalities through digital transformation',
    alternates: {
      canonical: '/',
      languages: {
        'en-US': `/${locale === defaultLocale ? '' : locale}`,
        'fr-FR': `/${locale === 'fr' ? '' : 'fr'}`,
      },
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return <>{children}</>;
} 