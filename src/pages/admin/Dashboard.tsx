import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Users, UserCheck, UserX } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: profiles, isLoading } = useQuery({
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
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => navigate('/admin/users/new')}>Add New User</Button>
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
              <UserX className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="text-xl font-semibold">Blocked Users</h3>
                <p className="text-2xl font-bold">
                  {profiles?.filter(p => p.role === 'blocked').length || 0}
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
                      <td className="py-3">{profile.role}</td>
                      <td className="py-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/users/${profile.id}`)}
                        >
                          Edit
                        </Button>
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