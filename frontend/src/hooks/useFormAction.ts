'use client';

import { useState, useCallback } from 'react';

/**
 * Generic type for form actions
 */
type ActionFunction<TData, TResult> = (data: TData) => Promise<TResult>;

/**
 * Hook return type
 */
interface UseFormActionReturn<TData, TResult> {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  result: TResult | null;
  execute: (data: TData) => Promise<TResult>;
  reset: () => void;
}

/**
 * Custom hook for handling form submissions with server actions
 * 
 * @param action Server action function to execute
 * @param options Optional configuration options
 * @returns State and methods for handling the form submission
 * 
 * @example
 * const { execute, isSubmitting, error, result } = useFormAction(submitContactForm);
 * 
 * const handleSubmit = async (event) => {
 *   event.preventDefault();
 *   const formData = new FormData(event.target);
 *   const result = await execute({
 *     name: formData.get('name'),
 *     email: formData.get('email'),
 *     // ...other fields
 *   });
 *   
 *   if (result.success) {
 *     // Handle success
 *   }
 * };
 */
export function useFormAction<TData, TResult>(
  action: ActionFunction<TData, TResult>,
  options?: {
    onSuccess?: (result: TResult) => void;
    onError?: (error: string) => void;
  }
): UseFormActionReturn<TData, TResult> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TResult | null>(null);
  
  const execute = useCallback(
    async (data: TData): Promise<TResult> => {
      setIsSubmitting(true);
      setError(null);
      
      try {
        const actionResult = await action(data);
        setResult(actionResult);
        setIsSuccess(true);
        options?.onSuccess?.(actionResult);
        return actionResult;
      } catch (err) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : 'An unexpected error occurred';
        
        setError(errorMessage);
        options?.onError?.(errorMessage);
        throw err;
      } finally {
        setIsSubmitting(false);
      }
    },
    [action, options]
  );
  
  const reset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
    setResult(null);
  }, []);
  
  return {
    isSubmitting,
    isSuccess,
    error,
    result,
    execute,
    reset,
  };
} 