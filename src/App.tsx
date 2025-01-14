import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider, createHelmetContext } from 'react-helmet-async';
import { AuthProvider } from './components/auth/AuthProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Events from './pages/footer/Events';
import Interviews from './pages/footer/Interviews';
import Newsletter from './pages/footer/Newsletter';

const queryClient = new QueryClient();
const helmetContext = createHelmetContext();

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TooltipProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/interviews" element={<Interviews />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;