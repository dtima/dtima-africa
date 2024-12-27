import React from 'react';
import { motion } from "framer-motion";
import { Globe, Users, Calendar, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Geographic Coverage",
    description: "Supporting municipalities across Africa"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Councils Supported",
    description: "Empowering local governance"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Events & Training",
    description: "Building digital capacity"
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Collaboration",
    description: "Fostering partnerships"
  }
];

const Features = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass-card h-full hover:scale-105 transition-transform duration-300">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;