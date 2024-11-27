import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const AnnouncementBanner = () => {
  const [dismissedAnnouncements, setDismissedAnnouncements] = useState<string[]>([]);
  
  const { data: activeAnnouncement } = useQuery({
    queryKey: ['active-announcement'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select()
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
  });

  const isDismissed = activeAnnouncement && dismissedAnnouncements.includes(activeAnnouncement.id);

  if (!activeAnnouncement || isDismissed) {
    return null;
  }

  return (
    <Alert className="relative">
      <AlertDescription className="pr-8">
        {activeAnnouncement.content}
      </AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2"
        onClick={() => {
          setDismissedAnnouncements([...dismissedAnnouncements, activeAnnouncement.id]);
        }}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
};