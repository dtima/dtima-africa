import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/c9a09b84-ecd1-4a16-9dc5-60bf532e6897.png" 
        alt="DTIMA Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};