import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Laptop, Users, BookOpen, Network } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      icon: <Laptop className="h-6 w-6 text-blue-600" />,
      title: "Digital Platform Development",
      description: "Creating custom digital solutions for municipal services",
      details: [
        "E-government service platforms",
        "Municipal resource management systems",
        "Citizen engagement portals",
        "Digital payment integration"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Capacity Building Programs",
      description: "Empowering municipal staff with digital skills",
      details: [
        "Digital literacy training",
        "System administration workshops",
        "Data management courses",
        "Cybersecurity awareness"
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-600" />,
      title: "Research & Development",
      description: "Advancing municipal digital transformation",
      details: [
        "Best practices research",
        "Impact assessment studies",
        "Technology trend analysis",
        "Case study development"
      ]
    },
    {
      icon: <Network className="h-6 w-6 text-orange-600" />,
      title: "Partnership Network",
      description: "Building collaborative ecosystems",
      details: [
        "Tech company partnerships",
        "Academic collaborations",
        "NGO networks",
        "Government relations"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Key Initiatives</h1>
          
          <div className="grid gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {initiative.icon}
                    {initiative.title}
                  </CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {initiative.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-600">{detail}</span>
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

export default Initiatives;