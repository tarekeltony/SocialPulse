import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactForm from "@/components/shared/ContactForm";
import { profile } from "@/data/profile";

const ContactPage = () => {
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
          title="Get In Touch"
          subtitle="Let's discuss how I can help your organization excel"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-foreground">Email</h4>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-foreground">Phone</h4>
                    <p className="text-foreground/80">
                      Saudi Arabia:{" "}
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </p>
                    <p className="text-foreground/80">
                      Egypt:{" "}
                      <a
                        href="tel:+201099600992"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        +20 109 960 0992
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-foreground">Location</h4>
                    <p className="text-foreground/80">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-foreground">LinkedIn</h4>
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      linkedin.com/in/tarekeltony
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Schedule a Consultation</h3>
                <p className="text-foreground/80 mb-4">
                  Interested in discussing how I can help your organization? Let's schedule a call to explore potential collaboration.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button className="gap-2">
                    <i className="fas fa-calendar-alt"></i> Schedule a Call
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">Send a Message</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
