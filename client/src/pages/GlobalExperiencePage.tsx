import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import WorldMap from "@/components/shared/WorldMap";

const GlobalExperiencePage = () => {
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
          title="Global Experience"
          subtitle="Explore my international consulting work and cross-cultural experience"
          highlightText="World Impact"
        />

        <div className="max-w-6xl mx-auto">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <div className="h-1.5 gradient-bg-primary w-full"></div>
            <CardContent className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Throughout my career, I've had the privilege of collaborating with organizations across 
                  multiple continents, bringing strategic HR and management consulting expertise to diverse 
                  business environments. This international experience has equipped me with a unique 
                  cross-cultural perspective and the ability to implement effective solutions in various 
                  market contexts.
                </p>
              </motion.div>

              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Countries I've Worked With</h3>
              
              <WorldMap />
              
              <div className="mt-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">Why Global Experience Matters</h3>
                  <p className="text-foreground/80 max-w-3xl mx-auto">
                    My international consulting experience allows me to bring diverse perspectives and best 
                    practices from around the world to every project. By understanding cultural nuances and 
                    regional business practices, I help organizations implement solutions that are both 
                    globally informed and locally relevant.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalExperiencePage;