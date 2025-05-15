import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/shared/SectionHeader";
import { experience } from "@/data/experience";

const ExperiencePage = () => {
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
          title="Professional Experience"
          subtitle="A track record of delivering results and driving organizational excellence through strategic leadership and innovative solutions"
          highlightText="Career Journey"
        />

        <div className="max-w-5xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="mb-10"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
                <div className="h-1.5 gradient-bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                      <div className="flex items-center text-foreground/70">
                        <i className="fas fa-building text-primary mr-2"></i>
                        <span className="font-medium">{job.company}</span>
                        <span className="mx-2">•</span>
                        <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="md:ml-4 mt-4 md:mt-0">
                      <Badge className="py-1.5 px-4 bg-primary/10 text-primary border-none rounded-full">
                        <i className="far fa-calendar-alt mr-2"></i>
                        {job.period}
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-4 text-foreground/80">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3 flex-shrink-0"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
