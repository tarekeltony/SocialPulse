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
      className="hero-section overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              People & Culture Expert
            </span>
            
            <h1 className="mb-6">
              <span className="gradient-text font-bold">Tarek Eltony</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6">
              {profile.title}
            </h2>
            
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Helping organizations transform their culture, optimize talent, and 
              achieve operational excellence through strategic HR initiatives and 
              people-centered solutions.
            </p>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
              <Link href="/contact">
                <Button className="w-full md:w-auto rounded-full text-base px-8 py-6 gradient-bg-primary shadow-lg hover:shadow-primary/25" size="lg">
                  <i className="fas fa-envelope mr-2"></i>
                  Get In Touch
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full md:w-auto rounded-full text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/5"
                onClick={() => window.open("/api/download-cv", "_blank")}
              >
                <i className="fas fa-download mr-2"></i> Download CV
              </Button>
            </div>
            
            <div className="flex mt-10 space-x-6">
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Phone"
              >
                <i className="fas fa-phone"></i>
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
              <div className="absolute inset-0 rounded-full gradient-bg-secondary blur-3xl opacity-20 transform scale-110"></div>
              <div className="absolute inset-0 rounded-full gradient-bg-primary blur-xl opacity-20 transform scale-105 translate-x-4 -translate-y-4"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl w-72 h-72 md:w-96 md:h-96">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
