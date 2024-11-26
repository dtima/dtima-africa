import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/profile/Profile";

// About pages
import Mission from "./pages/about/Mission";
import Initiatives from "./pages/about/Initiatives";
import Impact from "./pages/about/Impact";

// Activities pages
import Platforms from "./pages/activities/Platforms";
import Training from "./pages/activities/Training";

// Main pages
import Partners from "./pages/partners/Partners";
import Coverage from "./pages/coverage/Coverage";
import Councils from "./pages/councils/Councils";

// Footer pages
import Events from "./pages/footer/Events";
import Articles from "./pages/footer/Articles";
import Newsletter from "./pages/footer/Newsletter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/initiatives" element={<Initiatives />} />
            <Route path="/about/impact" element={<Impact />} />
            <Route path="/activities/platforms" element={<Platforms />} />
            <Route path="/activities/training" element={<Training />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/councils" element={<Councils />} />
            
            {/* Footer routes */}
            <Route path="/events" element={<Events />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/newsletter" element={<Newsletter />} />
            
            {/* Protected routes */}
            <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} />
            <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;