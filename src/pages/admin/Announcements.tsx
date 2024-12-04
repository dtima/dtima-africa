import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnnouncementForm } from '@/components/admin/announcements/AnnouncementForm';
import { AnnouncementCard } from '@/components/admin/announcements/AnnouncementCard';
import { AnnouncementSkeleton } from '@/components/admin/announcements/AnnouncementSkeleton';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { useAnnouncements } from '@/hooks/useAnnouncements';

const Announcements = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'info',
    is_active: false,
  });

  const {
    announcements,
    isLoading,
    createMutation,
    updateMutation,
    deleteMutation,
  } = useAnnouncements();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ id: editingId, ...formData });
      setEditingId(null);
    } else {
      createMutation.mutate(formData);
    }
    setFormData({
      title: '',
      content: '',
      type: 'info',
      is_active: false,
    });
  };

  const handleEdit = (id: string) => {
    const announcement = announcements?.find(a => a.id === id);
    if (announcement) {
      setEditingId(id);
      setFormData({
        title: announcement.title,
        content: announcement.content,
        type: announcement.type,
        is_active: announcement.is_active || false,
      });
    }
  };

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
          <Bell className="w-8 h-8 text-primary" />
        </div>

        <Card className="p-6">
          <AnnouncementForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            isEditing={!!editingId}
          />
        </Card>

        <div className="grid gap-4">
          {isLoading ? (
            <>
              <AnnouncementSkeleton />
              <AnnouncementSkeleton />
              <AnnouncementSkeleton />
            </>
          ) : announcements?.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">
              No announcements found
            </Card>
          ) : (
            announcements?.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                onEdit={handleEdit}
                onDelete={(id) => deleteMutation.mutate(id)}
                onToggleActive={(id, checked) => 
                  updateMutation.mutate({ id, is_active: checked })
                }
              />
            ))
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Announcements;