import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    title: "Digital Innovation Summit 2024",
    date: "2024-03-15",
    description: "Join us for our annual summit on digital transformation in African municipalities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "New Partnership Announcement",
    date: "2024-03-10",
    description: "DTIMA partners with leading tech companies to accelerate digital transformation.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Success Story: Smart City Initiative",
    date: "2024-03-05",
    description: "How one municipality transformed its services through digital innovation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const NewsCard = ({ item }: { item: typeof newsItems[0] }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 transition-opacity duration-300",
            imageLoaded ? "opacity-0" : "opacity-100"
          )}
        />
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar className="h-4 w-4" />
          <time>{new Date(item.date).toLocaleDateString()}</time>
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </Card>
  );
};

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in digital transformation across African municipalities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;