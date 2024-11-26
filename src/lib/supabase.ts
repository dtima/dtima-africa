import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ismqoohxdhxwbuskluwl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzbXFvb2h4ZGh4d2J1c2tsdXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MDkxMjYsImV4cCI6MjA0ODE4NTEyNn0.DVMbz83bfv2nZb2-NM9SCI4B46k1s7Akv1DiZSzJax0';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Utility functions for data fetching
export const fetchFeaturedNews = async () => {
  const { data, error } = await supabase
    .from('latest_news')
    .select('*')
    .eq('is_featured', true)
    .order('published_at', { ascending: false })
    .limit(5);

  if (error) throw error;
  return data;
};

export const fetchNewsByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from('latest_news')
    .select('*')
    .eq('category', category)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const insertNewsItem = async (newsItem: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('latest_news')
    .insert([newsItem])
    .select();

  if (error) throw error;
  return data;
};