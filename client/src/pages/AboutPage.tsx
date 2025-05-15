import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { profile } from "@/data/profile";

const AboutPage = () => {
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
          title="About Me"
          subtitle="Learn more about my background and expertise"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 flex justify-center"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="rounded-lg w-48 h-48 object-cover shadow-md"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {profile.title}
              </h3>
              <p className="text-foreground/80 mb-4">
                A dynamic and results-oriented professional with extensive experience 
                driving HR transformation and business excellence across the GCC and Middle East.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="flex items-center text-foreground/80">
                    <i className="fas fa-map-marker-alt w-6 text-primary"></i> {profile.location}
                  </p>
                  <p className="flex items-center text-foreground/80">
                    <i className="fas fa-phone w-6 text-primary"></i> {profile.phone}
                  </p>
                </div>
                <div>
                  <p className="flex items-center text-foreground/80">
                    <i className="fas fa-envelope w-6 text-primary"></i> {profile.email}
                  </p>
                  <p className="flex items-center text-foreground/80">
                    <i className="fab fa-linkedin w-6 text-primary"></i> tarekeltony
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose max-w-none text-foreground/80"
          >
            <p className="mb-4">
              A dynamic and results-oriented People & Culture Strategist and Organizational 
              Development Consultant with extensive experience driving HR transformation 
              and business excellence across the GCC and Middle East. Proven ability to 
              architect and implement high-impact HR strategies aligned with overarching 
              business objectives, specializing in organizational design, talent optimization, 
              change leadership, and fostering high-performance cultures.
            </p>
            <p className="mb-4">
              Leverages deep regional insights and strategic thinking to deliver tangible 
              business outcomes through human capital excellence. Committed to driving 
              sustainable organizational performance by aligning people strategies with 
              business priorities, optimizing talent management frameworks, and building 
              innovative HR solutions that address complex business challenges.
            </p>
            <p>
              Recognized for exceptional stakeholder management skills, the ability to 
              navigate ambiguity, and a proven track record of successfully implementing 
              transformative HR initiatives that drive measurable business value. Combines 
              strong analytical capabilities with practical execution expertise to turn 
              strategic vision into operational reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open("/api/download-cv", "_blank")}
            >
              <i className="fas fa-download mr-2"></i> Download Full CV
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
