import React from 'react'
import { getPartnershipById } from '@/lib/data/partnerships'
import { PartnershipCategoryPage } from '@/components/partnerships/PartnershipCategoryPage'
import type { Metadata } from 'next'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Technology Partnerships - DTIMA',
    description: 'Technology partners deliver interoperable platforms, security, and implementation expertise.'
  }
}

export default async function TechnologyPage(_props: PageProps) {
  const category = getPartnershipById('technology')!
  return <PartnershipCategoryPage category={category} />
}


