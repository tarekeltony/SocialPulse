import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/shared/SectionHeader";
import { profile } from "@/data/profile";

const AboutPage = () => {
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
          title="About Me"
          subtitle="Learn more about my background and expertise in HR transformation and organizational development"
          highlightText="My Story"
        />

        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
            <div className="h-1.5 gradient-bg-primary w-full"></div>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-4 flex justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full gradient-bg-secondary blur-xl opacity-20 transform scale-110"></div>
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="relative rounded-2xl w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg border-4 border-white"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-8"
                >
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    {profile.title}
                  </h3>
                  <p className="text-foreground/80 mb-6 text-lg">
                    A dynamic and results-oriented professional with extensive experience 
                    driving HR transformation and business excellence across the GCC and Middle East.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-foreground/80 group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>{profile.location}</span>
                      </div>
                      <div className="flex items-center text-foreground/80 group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          <i className="fas fa-phone"></i>
                        </div>
                        <span>{profile.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-foreground/80 group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <span className="truncate">{profile.email}</span>
                      </div>
                      <div className="flex items-center text-foreground/80 group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                          <i className="fab fa-linkedin"></i>
                        </div>
                        <span>tarekeltony</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 mb-6 h-px bg-gray-100"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-foreground/80 space-y-6 text-lg leading-relaxed"
              >
                {profile.longBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 flex justify-center"
              >
                <Button 
                  size="lg"
                  className="rounded-full py-6 px-8 gap-2 gradient-bg-primary shadow-lg hover:shadow-primary/25 text-base"
                  onClick={() => window.open("/api/download-cv", "_blank")}
                >
                  <i className="fas fa-download"></i> Download Full CV
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
