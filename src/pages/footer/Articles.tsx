import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

const Articles = () => {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          councils (
            name,
            location
          )
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Council Articles & Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest developments and success stories from our member councils
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <p>Loading articles...</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles?.map((article) => (
              <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                {article.featured_image_url && (
                  <img 
                    src={article.featured_image_url} 
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {format(new Date(article.created_at), 'MMMM dd, yyyy')}
                  </div>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  {article.councils && (
                    <CardDescription className="text-sm font-medium text-green-600">
                      {article.councils.name}, {article.councils.location}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt || article.content.substring(0, 150) + '...'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Articles;