import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Activity } from 'lucide-react';

const councilData = [
  {
    name: "Mbonge Council",
    region: "Southwest",
    population: 250000,
    activeProjects: 1,
    details: "106 villages, 4,000 km² area"
  },
  {
    name: "Kette Council",
    population: 76756,
    activeProjects: 1,
    details: "As of 2018"
  },
  {
    name: "Buea Council",
    region: "Southwest",
    population: 600000,
    activeProjects: 1,
    details: "100 villages, 870 km² area"
  },
  {
    name: "Garoua III Council",
    population: 64806,
    activeProjects: 1,
    details: "Strategic location near Garoua"
  },
  {
    name: "Bazou Council",
    population: 32000,
    activeProjects: 1,
    details: "Located in Ndé department"
  },
  {
    name: "Elak Council",
    activeProjects: 1,
    details: "Established in 1977"
  },
  {
    name: "Bayangam Council",
    region: "West",
    population: 20000,
    activeProjects: 1,
    details: "38 villages"
  },
  {
    name: "Olanguina Council",
    population: 2249,
    activeProjects: 1,
    details: "1,114 men, 1,135 women"
  },
  {
    name: "Wum Council",
    activeProjects: 1,
    details: "Established in 1948, 17 villages"
  },
  {
    name: "Baham Council",
    activeProjects: 1,
    details: "82 km² area, established 1962"
  },
  {
    name: "Balikumbat Council",
    region: "Northwest",
    population: 140642,
    activeProjects: 1,
    details: "320 km² area"
  },
  {
    name: "Booue Council",
    country: "Gabon",
    activeProjects: 1,
    details: "Cultural and business hub"
  },
  {
    name: "Tinto Council",
    population: 60628,
    activeProjects: 1,
    details: "3,720 km² area"
  }
];

const Coverage = () => {
  const { data: areas, isLoading } = useQuery({
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {councilData.map((council, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">{council.name}</h3>
                  <p className="text-sm text-gray-500">
                    {council.region && `${council.region} Region`}
                    {council.country && `, ${council.country}`}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Population</p>
                    <p className="font-semibold">
                      {council.population?.toLocaleString() || 'N/A'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Active Projects</p>
                    <p className="font-semibold">{council.activeProjects || 0}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">{council.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Coverage;