import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BarChart, PieChart, AreaChart } from 'recharts';
import { Activity, Users, Building2, TrendingUp } from 'lucide-react';

const Impact = () => {
  const impactData = {
    municipalities: 45,
    citizensServed: "2.5M+",
    digitalServices: 120,
    efficiencyGain: "35%"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Impact Goals</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  Municipalities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">{impactData.municipalities}</p>
                <p className="text-gray-600">Partner municipalities</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-green-600" />
                  Citizens Served
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">{impactData.citizensServed}</p>
                <p className="text-gray-600">Total population reached</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-purple-600" />
                  Digital Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600">{impactData.digitalServices}</p>
                <p className="text-gray-600">Services digitized</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                  Efficiency Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600">{impactData.efficiencyGain}</p>
                <p className="text-gray-600">Average improvement</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Impact Framework</CardTitle>
              <CardDescription>
                How we measure and achieve meaningful change
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Digital Transformation Metrics</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Number of services digitized</li>
                    <li>Processing time reduction</li>
                    <li>User satisfaction rates</li>
                    <li>Digital literacy improvements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Sustainability Indicators</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Resource utilization efficiency</li>
                    <li>Cost savings achieved</li>
                    <li>Environmental impact reduction</li>
                    <li>Long-term viability measures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Social Impact Measures</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Accessibility improvements</li>
                    <li>Community engagement levels</li>
                    <li>Service delivery equity</li>
                    <li>Citizen satisfaction scores</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Impact;