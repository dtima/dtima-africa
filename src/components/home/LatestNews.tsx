import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    title: "Fostering Economic Growth: Digital Summit 2024",
    date: "2024-02-29",
    description: "Join key speakers including Charlie Martial NGOUNOU, Josefina Correa Gutierrez, and Gilbert Mbeh at the DTIMA Digital Summit focused on unleashing African municipalities' potential.",
    image: "/lovable-uploads/5705d4f3-4b6c-4e03-89d3-41e7244e5eb0.png"
  },
  {
    title: "Garoua City Launches Digital Identity Initiative",
    date: "2024-02-25",
    description: "The iconic 'I Love Garoua City' landmark symbolizes the municipality's commitment to digital transformation and community engagement.",
    image: "/lovable-uploads/700a006d-6cba-4274-a800-136908f4c3d0.png"
  },
  {
    title: "Invest in Garoua III: Partnership Opportunities",
    date: "2024-02-20",
    description: "Discover collaboration possibilities in agriculture, renewable energy, infrastructure, entrepreneurship, business services, and community development at the upcoming DTIMA event.",
    image: "/lovable-uploads/a0b8c28d-1bc1-4131-b640-36c8e9d5cfd3.png"
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