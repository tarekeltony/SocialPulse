import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const HomePage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {profile.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-6">
              {profile.title}
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="flex items-center gap-2" size="lg">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("/api/download-cv", "_blank")}
              >
                <i className="fas fa-download mr-2"></i> Download CV
              </Button>
            </div>
            
            <div className="flex mt-8 space-x-4">
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-30 transform -translate-x-4 translate-y-4"></div>
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
