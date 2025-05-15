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
      className="section-padding gradient-bg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's discuss how I can help your organization excel through strategic HR initiatives and transformative solutions"
          highlightText="Connect With Me"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none rounded-xl shadow-md overflow-hidden h-full">
                <div className="h-1.5 gradient-bg-primary w-full"></div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold gradient-text mb-8">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-foreground mb-1.5">Email</h4>
                        <a
                          href={`mailto:${profile.email}`}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          {profile.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-foreground mb-1.5">Phone</h4>
                        <p className="text-foreground/80">
                          Saudi Arabia:{" "}
                          <a
                            href={`tel:${profile.phone}`}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {profile.phone}
                          </a>
                        </p>
                        <p className="text-foreground/80 mt-1">
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
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-foreground mb-1.5">Location</h4>
                        <p className="text-foreground/80">{profile.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-foreground mb-1.5">LinkedIn</h4>
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

                  <div className="mt-10 pt-10 border-t border-gray-100">
                    <h3 className="text-xl font-bold gradient-text mb-4">Schedule a Consultation</h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      Interested in discussing how I can help your organization? Let's schedule a call to explore potential collaboration opportunities.
                    </p>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Button className="rounded-full px-6 py-2.5 gradient-bg-secondary gap-2 font-medium">
                        <i className="fas fa-calendar-alt"></i> Schedule a Call
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-none rounded-xl shadow-md overflow-hidden">
                <div className="h-1.5 gradient-bg-primary w-full"></div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold gradient-text mb-8">Send a Message</h3>
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
