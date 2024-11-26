export type User = {
  id: string;
  email: string;
  password_hash: string;
  role: 'viewer' | 'admin' | 'editor';
  created_at: string;
};

export type Council = {
  id: string;
  name: string;
  location: string;
  description: string | null;
  image_url: string | null;
};

export type Event = {
  id: string;
  title: string;
  description: string | null;
  date: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
};

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  author: string | null;
  published_at: string;
  image_url: string | null;
  category: 'event' | 'article' | 'announcement' | 'update';
  tags: string[];
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};