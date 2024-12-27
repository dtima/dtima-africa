import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SocialShare } from '@/components/shared/SocialShare';

const CallToAction = () => {
  return (
    <section className="section-spacing bg-primary text-white">
      <div className="container container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Digital Transformation Journey
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Partner with us to create innovative digital solutions for African municipalities.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-accent hover:text-primary"
          >
            Contact Us
          </Button>
          <SocialShare />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;