import React from 'react'
import { getPartnershipById } from '@/lib/data/partnerships'
import { PartnershipCategoryPage } from '@/components/partnerships/PartnershipCategoryPage'
import type { Metadata } from 'next'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Development Partnerships - DTIMA',
    description: 'Development partners scale municipal transformation with funding, M&E, and governance capacity.'
  }
}

export default async function DevelopmentPage(_props: PageProps) {
  const category = getPartnershipById('development')!
  return <PartnershipCategoryPage category={category} />
}


