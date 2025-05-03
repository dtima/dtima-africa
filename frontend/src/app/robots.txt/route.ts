import { NextResponse } from 'next/server';

/**
 * Dynamic robots.txt generator
 */
export function GET() {
  // Base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dtima-africa.org';
  
  // Generate robots.txt content
  const robotsContent = `
# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`.trim();

  // Return response
  return new NextResponse(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 