import type { Metadata } from 'next'
import { MainNav } from '@/components/layout/MainNav'
import { Footer } from '@/components/layout/Footer'
import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner'

export const metadata: Metadata = {
  title: 'DTIMA - Digital Transformation Initiative for Municipalities in Africa',
  description: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <MainNav locale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  )
}
