import type { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

/**
 * Creates a Supabase client for server components
 * 
 * This function handles Supabase client creation with proper error handling.
 * It provides a consistent way to create a client with the correct database types.
 * 
 * @returns A server component Supabase client
 */
export function getSupabaseServer() {
  try {
    // Check if Supabase environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Supabase environment variables are not configured');
      return null;
    }
    
    // Create Supabase client
    const cookieStore = cookies();
    return createServerComponentClient<Database>({ cookies: () => cookieStore });
  } catch (error) {
    console.error('Error initializing Supabase client:', error);
    return null;
  }
}

/**
 * Get data safely from Supabase with proper error handling
 * 
 * @param queryFn Function that uses the Supabase client to query data
 * @returns The result data or null if there was an error
 */
export async function getDataSafely<T>(
  queryFn: (supabase: ReturnType<typeof getSupabaseServer>) => Promise<{ data: T | null, error: any }>
): Promise<T | null> {
  try {
    const supabase = getSupabaseServer();
    if (!supabase) return null;
    
    const { data, error } = await queryFn(supabase);
    
    if (error) {
      console.error('Supabase query error:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
} 