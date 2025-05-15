import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

const ServicesPage = () => {
  const serviceIcons = {
    "People & Culture Transformation": "fas fa-users",
    "Organizational Development & Change Leadership": "fas fa-sitemap",
    "Talent Management & Performance Optimization": "fas fa-user-tie",
    "HR Process Excellence & Policy Design": "fas fa-file-contract",
    "Strategic Planning & Business Advisory": "fas fa-chart-line",
    "AI, Automation & Digital Transformation": "fas fa-robot",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Consulting Services"
          subtitle="Specialized advisory services to help organizations transform, optimize, and excel in today's dynamic business environment"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-secondary-50 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <i className={`${serviceIcons[service.title] || 'fas fa-cogs'} text-primary text-4xl`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-primary text-center mb-4">{service.title}</h3>
                    <ul className="space-y-2 text-foreground/80">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-primary mt-1 mr-2"></i>
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <i className="fas fa-handshake"></i> Discuss Your Consulting Needs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
