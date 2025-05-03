import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';

// Store a single instance of the Supabase client
let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null;

/**
 * Gets or creates a Supabase client for client components
 * 
 * This function implements a singleton pattern to ensure
 * only one client instance is created for the browser.
 * 
 * @returns A client component Supabase client
 */
export function getSupabaseBrowser() {
  try {
    // Check if Supabase environment variables are set
    if (
      typeof window !== 'undefined' && 
      (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    ) {
      console.error('Supabase environment variables are not configured');
      return null;
    }
    
    // Create the client if it doesn't exist
    if (!supabaseClient) {
      supabaseClient = createClientComponentClient<Database>();
    }
    
    return supabaseClient;
  } catch (error) {
    console.error('Error initializing browser Supabase client:', error);
    return null;
  }
}

/**
 * Get data safely from Supabase in the browser with proper error handling
 * 
 * @param queryFn Function that uses the Supabase client to query data
 * @returns The result data or null if there was an error
 */
export async function getBrowserDataSafely<T>(
  queryFn: (supabase: ReturnType<typeof getSupabaseBrowser>) => Promise<{ data: T | null, error: any }>
): Promise<T | null> {
  try {
    const supabase = getSupabaseBrowser();
    if (!supabase) return null;
    
    const { data, error } = await queryFn(supabase);
    
    if (error) {
      console.error('Supabase browser query error:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching browser data:', error);
    return null;
  }
} 