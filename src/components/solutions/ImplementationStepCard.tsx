import React from 'react'
import { ImplementationStep } from '@/types'

interface ImplementationStepCardProps {
  step: ImplementationStep
  isActive?: boolean
  isCompleted?: boolean
}

export function ImplementationStepCard({ step, isActive = false, isCompleted = false }: ImplementationStepCardProps) {
  const getStatusColor = () => {
    if (isCompleted) return 'bg-green-500 text-white'
    if (isActive) return 'bg-blue-500 text-white'
    return 'bg-gray-200 text-gray-600'
  }

  const getStatusIcon = () => {
    if (isCompleted) return '✅'
    if (isActive) return '🔄'
    return '⏳'
  }

  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${
      isActive ? 'border-blue-500 shadow-blue-100' : 
      isCompleted ? 'border-green-500 shadow-green-100' : 
      'border-gray-200'
    }`}>
      {/* Step Number and Status */}
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold ${getStatusColor()}`}>
          {step.order}
        </div>
        <div className="flex items-center text-sm font-medium text-gray-600">
          <span className="mr-2">{getStatusIcon()}</span>
          {step.duration}
        </div>
      </div>

      {/* Step Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {step.title}
      </h3>

      {/* Step Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {step.description}
      </p>

      {/* Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements:</h4>
        <div className="space-y-1">
          {step.requirements.map((requirement, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
              {requirement}
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Deliverables:</h4>
        <div className="space-y-1">
          {step.deliverables.map((deliverable, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
              {deliverable}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      {isActive && (
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  )
}
