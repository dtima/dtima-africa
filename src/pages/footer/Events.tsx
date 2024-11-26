import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Events = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Digital Innovation Summit 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join us for our annual summit focusing on digital transformation in African municipalities.
                Network with industry leaders, participate in workshops, and learn about the latest
                technological innovations.
              </p>
              <div className="text-sm text-gray-500">
                Date: June 15-16, 2024
                <br />
                Location: Nairobi, Kenya
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Events;