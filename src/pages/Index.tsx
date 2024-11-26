import { motion } from "framer-motion";
import { Globe, Users, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center justify-center section-spacing">
        <div className="container container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent rounded-full text-primary animate-fade-in">
              Digital Transformation Initiative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance animate-fade-up">
              Empowering African Municipalities Through Digital Innovation
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto text-balance">
              Transforming local governance across Africa with cutting-edge digital solutions and capacity building.
            </p>
            <Button size="lg" className="animate-scale-up">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-muted">
        <div className="container container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((feature, index) => (
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

      {/* Activities Section */}
      <section className="section-spacing">
        <div className="container container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent rounded-full text-primary">
              Our Activities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Driving Digital Transformation
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We focus on key areas to enable sustainable digital transformation in African municipalities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Platform Development",
                description: "Building robust digital solutions for municipal services"
              },
              {
                title: "Capacity Building",
                description: "Training and empowering municipal staff"
              },
              {
                title: "Innovation Challenges",
                description: "Fostering local tech innovation"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{activity.title}</h3>
                  <p className="text-secondary">{activity.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;