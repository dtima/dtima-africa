import React from 'react'
import { SuccessMetric } from '@/types'

interface SuccessMetricCardProps {
  metric: SuccessMetric
}

export function SuccessMetricCard({ metric }: SuccessMetricCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'efficiency':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'cost':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'satisfaction':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'adoption':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'transparency':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'efficiency':
        return '⚡'
      case 'cost':
        return '💰'
      case 'satisfaction':
        return '😊'
      case 'adoption':
        return '📈'
      case 'transparency':
        return '🔍'
      default:
        return '📊'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(metric.category)}`}>
          <span className="mr-2">{getCategoryIcon(metric.category)}</span>
          {metric.category.charAt(0).toUpperCase() + metric.category.slice(1)}
        </div>
        <div className="text-sm text-gray-500">{metric.timeframe}</div>
      </div>

      {/* Metric Value */}
      <div className="text-center mb-4">
        <div className="text-4xl font-bold text-gray-900 mb-1">
          {metric.value}
          <span className="text-lg text-gray-600 ml-1">{metric.unit}</span>
        </div>
        <div className="text-sm font-medium text-gray-700">{metric.title}</div>
      </div>

      {/* Improvement */}
      <div className="text-center mb-4">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          metric.improvement.startsWith('+') 
            ? 'bg-green-100 text-green-800' 
            : metric.improvement.startsWith('-')
            ? 'bg-red-100 text-red-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {metric.improvement} improvement
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-600 text-center leading-relaxed">
        {metric.description}
      </div>
    </div>
  )
}
