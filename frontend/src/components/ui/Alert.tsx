'use client';

import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantStyles = {
  success: {
    container: 'bg-green-50 border-green-500 text-green-800',
    icon: 'text-green-500',
  },
  error: {
    container: 'bg-red-50 border-red-500 text-red-800',
    icon: 'text-red-500',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-500 text-yellow-800',
    icon: 'text-yellow-500',
  },
  info: {
    container: 'bg-blue-50 border-blue-500 text-blue-800',
    icon: 'text-blue-500',
  },
};

export function Alert({
  children,
  variant = 'info',
  title,
  icon,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`border-l-4 p-4 rounded-r-md flex items-start ${styles.container} ${className}`}
      role="alert"
    >
      {icon && <div className={`mr-3 flex-shrink-0 ${styles.icon}`}>{icon}</div>}
      <div className="flex-grow">
        {title && <p className="font-semibold mb-1">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className={`ml-auto -mx-1.5 -my-1.5 p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.icon} rounded-md`}
          onClick={onDismiss}
          aria-label="Dismiss"
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
} 