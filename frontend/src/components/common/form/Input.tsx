import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Input Component Props
 * @typedef InputProps
 * @property {string} [id] - The input's unique identifier
 * @property {string} [name] - The input's name attribute
 * @property {string} [type] - The input type (text, email, password, etc.)
 * @property {string} [placeholder] - Placeholder text
 * @property {string} [label] - Input label text
 * @property {string} [helperText] - Helper text displayed below the input
 * @property {string} [error] - Error message
 * @property {boolean} [disabled] - Whether the input is disabled
 * @property {boolean} [required] - Whether the input is required
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} [leftIcon] - Icon displayed at the left side of the input
 * @property {React.ReactNode} [rightIcon] - Icon displayed at the right side of the input
 */
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id?: string;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

/**
 * A reusable input component with support for icons, labels, and error states.
 * 
 * @example
 * // Basic usage
 * <Input name="email" label="Email Address" placeholder="Enter your email" />
 * 
 * @example
 * // With validation error
 * <Input 
 *   name="password" 
 *   type="password" 
 *   label="Password" 
 *   error="Password must be at least 8 characters" 
 * />
 * 
 * @example
 * // With icons
 * <Input 
 *   name="search" 
 *   leftIcon={<SearchIcon />} 
 *   rightIcon={<XIcon onClick={clearSearch} />} 
 *   placeholder="Search..." 
 * />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    id,
    name,
    type = 'text',
    placeholder,
    label,
    helperText,
    error,
    disabled = false,
    required = false,
    leftIcon,
    rightIcon,
    size = 'md',
    fullWidth = false,
    ...props
  }, ref) => {
    // Generate ID from name if no ID provided
    const inputId = id || `input-${name}`;

    // Size-specific classes
    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-5 text-lg'
    };
    
    return (
      <div className={cn('mb-4', fullWidth ? 'w-full' : '', className)}>
        {label && (
          <label 
            htmlFor={inputId}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-dtima-red ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            className={cn(
              'appearance-none block border rounded-md w-full shadow-sm focus:outline-none focus:ring-dtima-blue focus:border-dtima-blue transition',
              sizeClasses[size],
              error ? 'border-red-300' : 'border-gray-300',
              disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white',
              leftIcon ? 'pl-10' : '',
              rightIcon ? 'pr-10' : '',
              fullWidth ? 'w-full' : '',
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error || helperText ? `${inputId}-description` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p 
            id={`${inputId}-description`}
            className={cn(
              'mt-1 text-sm',
              error ? 'text-red-600' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input'; 