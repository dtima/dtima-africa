import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface AnnouncementFormData {
  title: string;
  content: string;
  type: string;
  is_active: boolean;
}

interface AnnouncementFormProps {
  formData: AnnouncementFormData;
  setFormData: (data: AnnouncementFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
}

export const AnnouncementForm = ({ formData, setFormData, onSubmit, isEditing }: AnnouncementFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
        {isEditing ? 'Update Announcement' : 'Create Announcement'}
      </Button>
    </form>
  );
};