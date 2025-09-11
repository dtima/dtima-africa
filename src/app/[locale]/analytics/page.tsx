import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface AnalyticsPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: AnalyticsPageProps): Promise<Metadata> {
  return {
    title: 'Data Analytics - DTIMA Solutions',
    description: 'Data-driven decision making platform for African municipalities.',
  }
}

export default async function AnalyticsPage({ params }: AnalyticsPageProps) {
  const { locale } = await params
  redirect(`/${locale}/solutions/analytics`)
}
