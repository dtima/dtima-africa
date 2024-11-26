import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialShare = () => {
  const shareUrl = window.location.href;
  const title = "Join DTIMA's Digital Transformation Journey";

  const share = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <div className="flex gap-4 justify-center mt-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => share('facebook')}
        className="bg-white hover:bg-blue-50"
      >
        <Facebook className="h-5 w-5 text-blue-600" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => share('twitter')}
        className="bg-white hover:bg-blue-50"
      >
        <Twitter className="h-5 w-5 text-blue-400" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => share('linkedin')}
        className="bg-white hover:bg-blue-50"
      >
        <Linkedin className="h-5 w-5 text-blue-700" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => share('email')}
        className="bg-white hover:bg-gray-50"
      >
        <Mail className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
};