import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedNews, fetchNewsByCategory } from '@/lib/supabase';
import type { NewsItem } from '@/types/database.types';

export const useNews = () => {
  const featuredNews = useQuery<NewsItem[]>({
    queryKey: ['featuredNews'],
    queryFn: fetchFeaturedNews,
  });

  const getNewsByCategory = (category: string) => {
    return useQuery<NewsItem[]>({
      queryKey: ['news', category],
      queryFn: () => fetchNewsByCategory(category),
    });
  };

  return {
    featuredNews,
    getNewsByCategory,
  };
};