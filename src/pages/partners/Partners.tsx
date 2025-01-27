import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Globe2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Partners = () => {
  const { data: partners, isLoading, error } = useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner size="large" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
            <AlertDescription>
              Error loading partners: {error.message}
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Working together with leading organizations to drive digital transformation in African municipalities
          </p>
        </div>

        {partners && partners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  {partner.logo_url ? (
                    <img
                      src={partner.logo_url}
                      alt={partner.name}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <Globe2 className="w-16 h-16 text-gray-400" />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {partner.partnership_type || 'Strategic Partner'}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {partner.description || 'Collaborating for digital transformation in African municipalities.'}
                </p>
                
                {partner.website_url && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(partner.website_url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No partners found.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Partners;