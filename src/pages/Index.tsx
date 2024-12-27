import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

// Lazy load components
const HeroSlider = React.lazy(() => import('@/components/home/HeroSlider'));
const Features = React.lazy(() => import('@/components/home/Features'));
const LatestNews = React.lazy(() => import('@/components/home/LatestNews'));
const PartnersLogos = React.lazy(() => import('@/components/home/PartnersLogos'));
const CallToAction = React.lazy(() => import('@/components/home/CallToAction'));

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

        <Suspense fallback={<LoadingFallback />}>
          <Features />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <LatestNews />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <PartnersLogos />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <CallToAction />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;