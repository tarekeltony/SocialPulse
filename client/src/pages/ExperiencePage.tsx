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
      className="py-16 bg-secondary-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Experience"
          subtitle="A track record of delivering results and driving organizational excellence"
        />

        <div className="max-w-4xl mx-auto">
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
              className="mb-8"
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                      <p className="text-lg text-foreground/80">{job.company} | {job.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {job.period}
                      </Badge>
                    </div>
                  </div>
                  <ul className="space-y-3 text-foreground/80">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex">
                        <i className="fas fa-circle-check text-primary mt-1 mr-3 flex-shrink-0"></i>
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
