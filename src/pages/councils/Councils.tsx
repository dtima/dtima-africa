import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Building2, MapPin } from 'lucide-react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

const Councils = () => {
  const { data: councils, isLoading, error } = useQuery({
    queryKey: ['councils'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('councils')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Municipal Councils</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working with local governments to implement digital solutions
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="large" />
          </div>
        )}

        {error && (
          <div className="text-center text-red-600">
            <p>Error loading councils: {error.message}</p>
          </div>
        )}

        {councils && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councils.map((council) => (
              <Card key={council.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {council.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={council.image_url}
                      alt={council.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{council.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {council.location}
                      </div>
                    </div>
                  </div>
                  
                  {council.description && (
                    <p className="text-gray-600">
                      {council.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Councils;