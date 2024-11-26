import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, LineChart } from 'lucide-react';

const Mission = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mission & Vision</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Our Mission
              </CardTitle>
              <CardDescription>
                Empowering African municipalities through digital transformation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                DTIMA is dedicated to revolutionizing municipal services across Africa through innovative digital solutions. 
                We work hand-in-hand with local governments to implement sustainable, user-friendly digital platforms that enhance 
                service delivery and improve citizen engagement.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
                Our Vision
              </CardTitle>
              <CardDescription>
                A future where every African municipality leverages digital technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every municipality in Africa harnesses the power of digital technology to provide 
                efficient, transparent, and accessible services to their citizens. Through our initiatives, we aim to bridge 
                the digital divide and create smart, sustainable cities across the continent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-6 w-6 text-purple-600" />
                Strategic Goals
              </CardTitle>
              <CardDescription>
                Key objectives driving our mission forward
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Digital Infrastructure:</span>
                  Develop robust digital platforms tailored to municipal needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Capacity Building:</span>
                  Train municipal staff in digital tools and best practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Citizen Engagement:</span>
                  Improve communication between municipalities and citizens
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold">Innovation:</span>
                  Foster local tech solutions for municipal challenges
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;