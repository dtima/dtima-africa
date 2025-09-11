import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function SolutionNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Solution Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The solution you're looking for doesn't exist or may have been moved. 
            Explore our available solutions below.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/solutions">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg">
              View All Solutions
            </Button>
          </Link>
          
          <Link href="/">
            <Button className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-lg">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
