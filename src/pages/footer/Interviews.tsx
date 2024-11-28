import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Interviews = () => {
  const { data: interviews, isLoading } = useQuery({
    queryKey: ['interviews'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('interviews')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Interviews & Insights</h1>
        {isLoading ? (
          <p>Loading interviews...</p>
        ) : (
          <div className="grid gap-6">
            {interviews?.map((interview) => (
              <Card key={interview.id}>
                <CardHeader>
                  <CardTitle>{interview.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    {interview.image_url && (
                      <img
                        src={interview.image_url}
                        alt={interview.interviewee}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold">{interview.interviewee}</h3>
                      <p className="text-gray-600">{interview.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{interview.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Interviews;