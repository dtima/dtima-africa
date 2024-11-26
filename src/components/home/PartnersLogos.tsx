import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';

export const PartnersLogos = () => {
  const { data: partners } = useQuery({
    queryKey: ['partners-logos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('display_order', { ascending: true })
        .limit(6);
      
      if (error) throw error;
      return data;
    },
  });

  if (!partners?.length) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <Card key={partner.id} className="p-4 flex items-center justify-center">
              {partner.logo_url ? (
                <img 
                  src={partner.logo_url} 
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              ) : (
                <span className="text-gray-400 text-sm text-center">{partner.name}</span>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};