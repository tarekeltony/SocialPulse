import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import { skills } from "@/data/skills";

const SkillsPage = () => {
  const skillIcons: Record<string, string> = {
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
      className="section-padding gradient-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Core Competencies & Technical Skills"
          subtitle="The expertise I bring to every engagement, honed through years of practical experience across various industries"
          highlightText="Professional Expertise"
        />

        <div className="max-w-6xl mx-auto">
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
                <Card className="h-full border-none rounded-xl shadow-md card-hover overflow-hidden">
                  <div className="h-1.5 gradient-bg-primary w-full"></div>
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <i className={`${skillIcons[skillCategory.category] || 'fas fa-star'} text-primary text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold gradient-text">{skillCategory.category}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillCategory.skills.map((skill, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white px-3 py-2 rounded-lg shadow-sm text-foreground/90 border border-gray-100 text-sm flex items-center gap-2"
                        >
                          <i className="fas fa-check text-primary text-xs"></i>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
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
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <Card className="border-none rounded-xl shadow-md overflow-hidden">
              <div className="h-1.5 gradient-bg-secondary w-full"></div>
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <i className="fas fa-lightbulb text-accent text-2xl"></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Continuous Professional Development</h3>
                <p className="text-foreground/70 leading-relaxed">
                  I am committed to ongoing professional development and constantly expanding my skill set to stay ahead 
                  of industry trends and best practices, ensuring I deliver maximum value to each engagement.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
