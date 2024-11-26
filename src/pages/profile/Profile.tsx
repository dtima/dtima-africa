import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Mail, Key } from 'lucide-react';

const Profile = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleUpdateProfile = async (data: any) => {
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user?.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p className="text-gray-600">
                    {profile?.first_name} {profile?.last_name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Key className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold">Role</h3>
                  <p className="text-gray-600">{profile?.role}</p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button onClick={() => navigate('/profile/edit')}>
                  Edit Profile
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/profile/security')}
                >
                  Security Settings
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;