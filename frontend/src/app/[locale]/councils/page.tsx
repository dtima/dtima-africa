import React from 'react';
import { Metadata } from 'next';
import { Locale, getTranslations, createTranslator } from '@/lib/utils/i18n';
import CouncilsClientPage from '@/components/councils/CouncilsClientPage';

interface CouncilsPageProps {
  params: {
    locale: Locale;
  };
}

export async function generateMetadata({ 
  params 
}: { 
  params: { locale: Locale } 
}): Promise<Metadata> {
  const commonTranslations = await getTranslations(params.locale, 'common');
  const councilsTranslations = await getTranslations(params.locale, 'councils');
  
  const t = createTranslator(commonTranslations);
  const ct = createTranslator(councilsTranslations);
  
  return {
    title: ct('metadata.title') || 'Councils & Coverage | DTIMA',
    description: ct('metadata.description') || t('seo.defaultDescription'),
  };
}

export default function CouncilsPage({ params }: CouncilsPageProps) {
  return <CouncilsClientPage params={params} />;
} 