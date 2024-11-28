import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const SuccessStories = () => {
  const { data: stories, isLoading } = useQuery({
    queryKey: ['success-stories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Success Stories</h1>
        {isLoading ? (
          <p>Loading success stories...</p>
        ) : (
          <div className="grid gap-6">
            {stories?.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">{story.municipality}</h3>
                  </div>
                  {story.image_url && (
                    <img
                      src={story.image_url}
                      alt={story.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  <p className="text-gray-600 mb-4">{story.content}</p>
                  {story.impact_metrics && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold mb-2">Impact Metrics</h4>
                      <ul className="list-disc list-inside">
                        {Object.entries(story.impact_metrics).map(([key, value]) => (
                          <li key={key} className="text-gray-600">
                            {key}: {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SuccessStories;