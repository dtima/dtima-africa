import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Partnerships = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership inquiry sent",
      description: "Thank you for your interest. Our team will review your inquiry and get back to you soon.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Partnership Inquiries</h1>
          <Card>
            <CardHeader>
              <CardTitle>Partner With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Join us in our mission to transform digital services in African municipalities. 
                Fill out the form below to start the conversation.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization Name</label>
                  <Input id="organization" required />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Contact Person</label>
                  <Input id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="partnership_type" className="block text-sm font-medium mb-1">Partnership Type</label>
                  <Input id="partnership_type" placeholder="e.g., Technical, Financial, Implementation" required />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">Partnership Description</label>
                  <Textarea id="description" rows={5} required />
                </div>
                <Button type="submit" className="w-full">Submit Inquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Partnerships;