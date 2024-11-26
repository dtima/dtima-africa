import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BookOpen, Shield, Database, Network } from 'lucide-react';

const Training = () => {
  const programs = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Digital Literacy Program",
      description: "Basic to advanced digital skills training",
      modules: [
        "Computer basics",
        "Internet and email",
        "Office software",
        "Digital communication"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "System Administration",
      description: "Platform management and maintenance",
      modules: [
        "User management",
        "System configuration",
        "Troubleshooting",
        "Updates and maintenance"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Data Management",
      description: "Data handling and analysis training",
      modules: [
        "Data entry best practices",
        "Database management",
        "Data analysis",
        "Reporting tools"
      ]
    },
    {
      icon: <Network className="h-6 w-6 text-orange-600" />,
      title: "Digital Security",
      description: "Cybersecurity awareness and practices",
      modules: [
        "Password security",
        "Phishing awareness",
        "Data protection",
        "Security protocols"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Capacity Building</h1>
          
          <div className="grid gap-6">
            {programs.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {program.icon}
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.modules.map((module, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-600">{module}</span>
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

export default Training;