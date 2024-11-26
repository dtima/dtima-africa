import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Users, UserCheck, UserX, Shield, Settings2 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: profiles, isLoading, refetch } = useQuery({
    queryKey: ['profiles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const updateUserRole = async (userId: string, newRole: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update user role",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "User role updated successfully",
      });
      refetch();
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Settings2 className="h-6 w-6" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Total Users</h3>
                <p className="text-2xl font-bold">{profiles?.length || 0}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <UserCheck className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold">Active Users</h3>
                <p className="text-2xl font-bold">
                  {profiles?.filter(p => p.role !== 'blocked').length || 0}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Admins</h3>
                <p className="text-2xl font-bold">
                  {profiles?.filter(p => p.role === 'admin').length || 0}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Name</th>
                    <th className="text-left py-3">Role</th>
                    <th className="text-left py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {profiles?.map((profile) => (
                    <tr key={profile.id} className="border-b">
                      <td className="py-3">
                        {profile.first_name} {profile.last_name}
                      </td>
                      <td className="py-3 capitalize">{profile.role || 'User'}</td>
                      <td className="py-3">
                        <div className="flex gap-2">
                          {profile.role !== 'admin' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateUserRole(profile.id, 'admin')}
                            >
                              Make Admin
                            </Button>
                          )}
                          {profile.role === 'admin' && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateUserRole(profile.id, 'user')}
                            >
                              Remove Admin
                            </Button>
                          )}
                          {profile.role !== 'blocked' ? (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => updateUserRole(profile.id, 'blocked')}
                            >
                              Block
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateUserRole(profile.id, 'user')}
                            >
                              Unblock
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;