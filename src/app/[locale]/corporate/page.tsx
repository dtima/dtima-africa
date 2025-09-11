import React from 'react'
import { getPartnershipById } from '@/lib/data/partnerships'
import { PartnershipCategoryPage } from '@/components/partnerships/PartnershipCategoryPage'
import type { Metadata } from 'next'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Corporate Partnerships - DTIMA',
    description: 'Corporate partners accelerate municipal transformation via financing, renewable energy, and discounted services.'
  }
}

export default async function CorporatePage(_props: PageProps) {
  const category = getPartnershipById('corporate')!
  return <PartnershipCategoryPage category={category} />
}


