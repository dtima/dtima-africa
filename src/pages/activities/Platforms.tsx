import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Laptop, Shield, Users, Gauge } from 'lucide-react';

const Platforms = () => {
  const platforms = [
    {
      icon: <Laptop className="h-6 w-6 text-blue-600" />,
      title: "Municipal Service Portal",
      description: "Centralized platform for municipal services",
      features: [
        "Online permit applications",
        "Bill payments",
        "Service requests",
        "Document submissions"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Resource Management System",
      description: "Efficient resource allocation and tracking",
      features: [
        "Asset management",
        "Inventory control",
        "Budget tracking",
        "Resource scheduling"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Citizen Engagement Platform",
      description: "Interactive community participation tools",
      features: [
        "Public consultations",
        "Community forums",
        "Event management",
        "Feedback systems"
      ]
    },
    {
      icon: <Gauge className="h-6 w-6 text-orange-600" />,
      title: "Performance Dashboard",
      description: "Real-time monitoring and analytics",
      features: [
        "Service metrics",
        "Response times",
        "Usage analytics",
        "Satisfaction ratings"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Digital Platform Development</h1>
          
          <div className="grid gap-6">
            {platforms.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {platform.icon}
                    {platform.title}
                  </CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Platforms;