import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface NotFoundPageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function NotFound({ params }: NotFoundPageProps) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Council Not Found
          </h1>
          <p className="text-gray-600">
            The council you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link href={`/${locale}/investment`}>
            <Button variant="primary" size="lg" className="w-full">
              Back to Investment Opportunities
            </Button>
          </Link>
          
          <Link href={`/${locale}`}>
            <Button variant="outline" size="lg" className="w-full">
              Go to Homepage
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? Contact us at{' '}
            <a href="mailto:hello@dtima.com" className="text-blue-600 hover:text-blue-700">
              hello@dtima.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
