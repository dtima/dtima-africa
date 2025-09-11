import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface DigitalInfrastructurePageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: DigitalInfrastructurePageProps): Promise<Metadata> {
  return {
    title: 'Digital Infrastructure - DTIMA Solutions',
    description: 'Essential digital foundation for modern municipal operations across Africa.',
  }
}

export default async function DigitalInfrastructurePage({ params }: DigitalInfrastructurePageProps) {
  const { locale } = await params
  redirect(`/${locale}/solutions/digital-infrastructure`)
}
