import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Activity } from 'lucide-react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

const Coverage = () => {
  const { data: areas, isLoading, error } = useQuery({
    queryKey: ['coverage-areas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('coverage_areas')
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
          <h1 className="text-4xl font-bold mb-4">Coverage Areas</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our digital transformation initiatives span across multiple regions in Africa
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="large" />
          </div>
        )}

        {error && (
          <div className="text-center text-red-600">
            <p>Error loading coverage areas: {error.message}</p>
          </div>
        )}

        {areas && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Card key={area.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{area.name}</h3>
                    <p className="text-sm text-gray-500">
                      {area.region && `${area.region}, `}{area.country}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Population</p>
                      <p className="font-semibold">
                        {area.population?.toLocaleString() || 'N/A'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Active Projects</p>
                      <p className="font-semibold">{area.active_projects || 0}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Coverage;