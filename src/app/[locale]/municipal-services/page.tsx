import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface MunicipalServicesPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: MunicipalServicesPageProps): Promise<Metadata> {
  return {
    title: 'Municipal Services - DTIMA Solutions',
    description: 'Digital citizen service delivery platform for African municipalities.',
  }
}

export default async function MunicipalServicesPage({ params }: MunicipalServicesPageProps) {
  const { locale } = await params
  redirect(`/${locale}/solutions/municipal-services`)
}
