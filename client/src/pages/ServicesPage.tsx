import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

const ServicesPage = () => {
  const serviceIcons: Record<string, string> = {
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
      className="section-padding gradient-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Consulting Services"
          subtitle="Specialized advisory services to help organizations transform, optimize, and excel in today's dynamic business environment"
          highlightText="Expert Solutions"
        />

        <div className="max-w-7xl mx-auto">
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
              >
                <Card className="h-full bg-white rounded-xl shadow-md card-hover overflow-hidden border-none">
                  <div className="h-2 gradient-bg-primary w-full"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <i className={`${serviceIcons[service.title] || 'fas fa-cogs'} text-primary text-2xl`}></i>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-6">{service.title}</h3>
                    <ul className="space-y-3 text-foreground/70">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
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
            className="mt-16 text-center"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="rounded-full py-6 px-8 gradient-bg-primary shadow-lg hover:shadow-primary/25 text-base"
              >
                <i className="fas fa-handshake mr-2"></i> Discuss Your Consulting Needs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
