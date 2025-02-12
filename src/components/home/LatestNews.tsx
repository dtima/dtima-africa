import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

const NewsCard = ({ item }: { item: any }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 transition-opacity duration-300",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar className="h-4 w-4" />
          <time>{new Date(item.date).toLocaleDateString()}</time>
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </Card>
  );
};

const LatestNews = () => {
  const { data: newsItems, isLoading, error } = useQuery({
    queryKey: ['latest-news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('latest_news')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>Error loading news: {error.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in digital transformation across African municipalities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems?.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;