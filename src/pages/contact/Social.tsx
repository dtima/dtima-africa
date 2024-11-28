import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Social = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/dtima",
      description: "Follow us for the latest updates and digital transformation insights"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/company/dtima",
      description: "Connect with our professional network and stay updated on our initiatives"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "https://facebook.com/dtima",
      description: "Join our community and participate in discussions"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://youtube.com/dtima",
      description: "Watch our success stories and educational content"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Connect With Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((platform) => (
            <Card key={platform.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {platform.icon}
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <Button
                  className="w-full"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  Follow Us on {platform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Social;