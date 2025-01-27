import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './components/auth/AuthProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';

// Page imports
import Index from './pages/Index';
import Mission from './pages/about/Mission';
import Initiatives from './pages/about/Initiatives';
import Impact from './pages/about/Impact';
import Platforms from './pages/activities/Platforms';
import Training from './pages/activities/Training';
import Partners from './pages/partners/Partners';
import Coverage from './pages/coverage/Coverage';
import Councils from './pages/councils/Councils';
import Events from './pages/footer/Events';
import Interviews from './pages/footer/Interviews';
import Newsletter from './pages/footer/Newsletter';
import Contact from './pages/contact/Contact';
import Partnerships from './pages/contact/Partnerships';
import Social from './pages/contact/Social';
import Articles from './pages/footer/Articles';
import SuccessStories from './pages/footer/SuccessStories';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <TooltipProvider>
              <BrowserRouter>
                <Routes>
                  {/* Main routes */}
                  <Route path="/" element={<Index />} />
                  
                  {/* About section */}
                  <Route path="/about/mission" element={<Mission />} />
                  <Route path="/about/initiatives" element={<Initiatives />} />
                  <Route path="/about/impact" element={<Impact />} />
                  
                  {/* Activities section */}
                  <Route path="/activities/platforms" element={<Platforms />} />
                  <Route path="/activities/training" element={<Training />} />
                  
                  {/* Main sections */}
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/coverage" element={<Coverage />} />
                  <Route path="/councils" element={<Councils />} />
                  
                  {/* Footer section */}
                  <Route path="/events" element={<Events />} />
                  <Route path="/interviews" element={<Interviews />} />
                  <Route path="/newsletter" element={<Newsletter />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  
                  {/* Contact section */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/contact/partnerships" element={<Partnerships />} />
                  <Route path="/contact/social" element={<Social />} />
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