import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Switch } from '@/components/ui/switch';
import { Bell, Trash2, Edit } from 'lucide-react';

const Announcements = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'info',
    is_active: false,
  });

  const { data: announcements, isLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (newAnnouncement: typeof formData) => {
      const { data, error } = await supabase
        .from('announcements')
        .insert([newAnnouncement])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({
        title: "Success",
        description: "Announcement created successfully",
      });
      setFormData({
        title: '',
        content: '',
        type: 'info',
        is_active: false,
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...updateData }: { id: string } & Partial<typeof formData>) => {
      const { data, error } = await supabase
        .from('announcements')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({
        title: "Success",
        description: "Announcement updated successfully",
      });
      setEditingId(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcements'] });
      toast({
        title: "Success",
        description: "Announcement deleted successfully",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ id: editingId, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
        <Bell className="w-8 h-8 text-primary" />
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Announcement Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Announcement Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.is_active}
              onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
            />
            <span>Active</span>
          </div>
          <Button type="submit">
            {editingId ? 'Update Announcement' : 'Create Announcement'}
          </Button>
        </form>
      </Card>

      <div className="grid gap-4">
        {announcements?.map((announcement) => (
          <Card key={announcement.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{announcement.title}</h3>
                <p className="text-muted-foreground mt-2">{announcement.content}</p>
                <div className="flex items-center mt-4 space-x-2">
                  <Switch
                    checked={announcement.is_active}
                    onCheckedChange={(checked) => 
                      updateMutation.mutate({ 
                        id: announcement.id, 
                        is_active: checked 
                      })
                    }
                  />
                  <span>{announcement.is_active ? 'Active' : 'Inactive'}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setEditingId(announcement.id);
                    setFormData({
                      title: announcement.title,
                      content: announcement.content,
                      type: announcement.type,
                      is_active: announcement.is_active,
                    });
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteMutation.mutate(announcement.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;