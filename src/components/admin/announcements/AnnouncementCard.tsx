import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Edit, Trash2 } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: {
    id: string;
    title: string;
    content: string;
    is_active: boolean;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleActive: (id: string, checked: boolean) => void;
}

export const AnnouncementCard = ({ 
  announcement, 
  onEdit, 
  onDelete, 
  onToggleActive 
}: AnnouncementCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">{announcement.title}</h3>
          <p className="text-muted-foreground mt-2">{announcement.content}</p>
          <div className="flex items-center mt-4 space-x-2">
            <Switch
              checked={announcement.is_active}
              onCheckedChange={(checked) => onToggleActive(announcement.id, checked)}
            />
            <span>{announcement.is_active ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onEdit(announcement.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(announcement.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};