import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface SmartCityPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: SmartCityPageProps): Promise<Metadata> {
  return {
    title: 'Smart City Solutions - DTIMA Solutions',
    description: 'Intelligent urban management systems for sustainable African cities.',
  }
}

export default async function SmartCityPage({ params }: SmartCityPageProps) {
  const { locale } = await params
  redirect(`/${locale}/solutions/smart-city`)
}
