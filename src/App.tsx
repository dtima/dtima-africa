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

// New pages
import Partners from "./pages/partners/Partners";
import Coverage from "./pages/coverage/Coverage";
import Councils from "./pages/councils/Councils";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} />
            <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            
            {/* About routes */}
            <Route path="/about/mission" element={<ProtectedRoute><Mission /></ProtectedRoute>} />
            <Route path="/about/initiatives" element={<ProtectedRoute><Initiatives /></ProtectedRoute>} />
            <Route path="/about/impact" element={<ProtectedRoute><Impact /></ProtectedRoute>} />
            
            {/* Activities routes */}
            <Route path="/activities/platforms" element={<ProtectedRoute><Platforms /></ProtectedRoute>} />
            <Route path="/activities/training" element={<ProtectedRoute><Training /></ProtectedRoute>} />
            
            {/* New routes */}
            <Route path="/partners" element={<ProtectedRoute><Partners /></ProtectedRoute>} />
            <Route path="/coverage" element={<ProtectedRoute><Coverage /></ProtectedRoute>} />
            <Route path="/councils" element={<ProtectedRoute><Councils /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;