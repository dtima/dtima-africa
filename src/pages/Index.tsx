import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from "framer-motion";
import { Globe, Users, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialShare } from '@/components/shared/SocialShare';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

// Lazy load components
const HeroSlider = React.lazy(() => import('@/components/home/HeroSlider'));
const LatestNews = React.lazy(() => import('@/components/home/LatestNews'));
const PartnersLogos = React.lazy(() => import('@/components/home/PartnersLogos'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-48 flex items-center justify-center">
    <LoadingSpinner size="large" />
  </div>
);

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Suspense fallback={<LoadingFallback />}>
          <HeroSlider />
        </Suspense>

        <section className="section-spacing bg-muted">
          <div className="container container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Geographic Coverage",
                  description: "Supporting municipalities across Africa"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Councils Supported",
                  description: "Empowering local governance"
                },
                {
                  icon: <Calendar className="h-6 w-6" />,
                  title: "Events & Training",
                  description: "Building digital capacity"
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Collaboration",
                  description: "Fostering partnerships"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 glass-card h-full hover:scale-105 transition-transform duration-300">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-secondary">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<LoadingFallback />}>
          <LatestNews />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <PartnersLogos />
        </Suspense>

        <section className="section-spacing bg-primary text-white">
          <div className="container container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Digital Transformation Journey
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Partner with us to create innovative digital solutions for African municipalities.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-accent hover:text-primary"
              >
                Contact Us
              </Button>
              <SocialShare />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;