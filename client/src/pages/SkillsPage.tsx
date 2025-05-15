import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import { skills } from "@/data/skills";

const SkillsPage = () => {
  const skillIcons = {
    "Strategic Leadership & Management": "fas fa-chess",
    "HR & Organizational Development": "fas fa-users-cog",
    "Consulting & Advisory": "fas fa-briefcase",
  };

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
          title="Core Competencies & Technical Skills"
          subtitle="The expertise I bring to every engagement"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <i className={`${skillIcons[skillCategory.category] || 'fas fa-star'} text-primary text-2xl mr-3`}></i>
                      <h3 className="text-xl font-semibold text-primary">{skillCategory.category}</h3>
                    </div>
                    <ul className="space-y-2 text-foreground/80">
                      {skillCategory.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-circle text-primary text-xs mt-1.5 mr-2"></i>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
