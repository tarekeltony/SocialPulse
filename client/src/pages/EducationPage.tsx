import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education & Professional Development"
          subtitle="Academic qualifications and professional certifications"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold text-primary mb-6"
              >
                Academic Education
              </motion.h3>

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
                  className="mb-6"
                >
                  <Card className="bg-secondary-50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <i className="fas fa-graduation-cap text-primary text-2xl"></i>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-foreground">{edu.degree}</h4>
                          <p className="text-foreground/80">{edu.institution}</p>
                          <p className="text-muted-foreground mt-1">{edu.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-semibold text-primary mb-6"
              >
                Certifications & Key Training
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-secondary-50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {certifications.map((cert, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-certificate text-primary mt-1 mr-3"></i>
                          <span className="text-foreground/80">
                            {cert.name}
                            {cert.inProgress && (
                              <span className="text-primary italic ml-1">(In Progress)</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationPage;
