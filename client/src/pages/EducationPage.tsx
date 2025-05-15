import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/SectionHeader";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

const EducationPage = () => {
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
          title="Education & Professional Development"
          subtitle="Academic qualifications and continuous professional growth through certifications and specialized training"
          highlightText="Learning Journey"
        />

        <div className="max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold gradient-text mb-8 text-center"
            >
              Academic Education
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {education.map((edu, index) => (
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
                  <Card className="border-none rounded-xl shadow-md card-hover overflow-hidden h-full">
                    <div className="h-1.5 gradient-bg-primary w-full"></div>
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                          <i className="fas fa-graduation-cap text-primary text-2xl"></i>
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-3">{edu.degree}</h4>
                        <p className="text-foreground/70 mb-3">{edu.institution}</p>
                        <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                          {edu.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold gradient-text mb-8 text-center"
            >
              Certifications & Key Training
            </motion.h3>

            <Card className="border-none rounded-xl shadow-md overflow-hidden">
              <div className="h-1.5 gradient-bg-secondary w-full"></div>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <i className="fas fa-certificate text-primary"></i>
                        </div>
                      </div>
                      <div>
                        <span className="text-foreground/90 font-medium">
                          {cert.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationPage;
