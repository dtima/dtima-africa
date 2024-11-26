import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Mail, Key, Edit2, Save } from 'lucide-react';

const Profile = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: profile?.first_name || '',
    last_name: profile?.last_name || '',
  });

  const handleUpdateProfile = async () => {
    const { error } = await supabase
      .from('profiles')
      .update(formData)
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
      setIsEditing(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Profile Settings</h1>
              <Button
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <User className="h-5 w-5 text-gray-500" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Name</h3>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Input
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        placeholder="First Name"
                      />
                      <Input
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        placeholder="Last Name"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      {profile?.first_name} {profile?.last_name}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Key className="h-5 w-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-gray-600 capitalize">{profile?.role || 'User'}</p>
                </div>
              </div>

              {isEditing && (
                <div className="pt-4">
                  <Button onClick={handleUpdateProfile} className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;