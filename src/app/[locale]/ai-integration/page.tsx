import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface AIIntegrationPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: AIIntegrationPageProps): Promise<Metadata> {
  return {
    title: 'Municipal AI Integration - DTIMA Solutions',
    description: 'Structured AI implementation framework for transparent and effective municipal governance.',
  }
}

export default async function AIIntegrationPage({ params }: AIIntegrationPageProps) {
  const { locale } = await params
  redirect(`/${locale}/solutions/ai-integration`)
}
