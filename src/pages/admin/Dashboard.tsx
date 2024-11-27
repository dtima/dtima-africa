import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { AdminNav } from '@/components/admin/AdminNav';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Users, FileText, Bell, Newspaper } from 'lucide-react';

// Admin sub-pages
import Articles from './Articles';
import News from './News';
import UserManagement from './UserManagement';
import Announcements from './Announcements';
import Media from './Media';
import Settings from './Settings';

const DashboardOverview = () => {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [
        { count: usersCount },
        { count: articlesCount },
        { count: newsCount },
        { count: announcementsCount },
      ] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('articles').select('*', { count: 'exact', head: true }),
        supabase.from('latest_news').select('*', { count: 'exact', head: true }),
        supabase.from('announcements').select('*', { count: 'exact', head: true }),
      ]);
      
      return {
        users: usersCount || 0,
        articles: articlesCount || 0,
        news: newsCount || 0,
        announcements: announcementsCount || 0,
      };
    },
  });

  const statCards = [
    { title: 'Total Users', value: stats?.users || 0, icon: <Users className="w-8 h-8" /> },
    { title: 'Articles', value: stats?.articles || 0, icon: <FileText className="w-8 h-8" /> },
    { title: 'News Items', value: stats?.news || 0, icon: <Newspaper className="w-8 h-8" /> },
    { title: 'Active Announcements', value: stats?.announcements || 0, icon: <Bell className="w-8 h-8" /> },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div className="w-64 mr-8">
            <AdminNav />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <Routes>
              <Route index element={<DashboardOverview />} />
              <Route path="articles/*" element={<Articles />} />
              <Route path="news/*" element={<News />} />
              <Route path="users/*" element={<UserManagement />} />
              <Route path="announcements/*" element={<Announcements />} />
              <Route path="media/*" element={<Media />} />
              <Route path="settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;