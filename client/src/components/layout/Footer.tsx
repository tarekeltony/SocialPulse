import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Tarek Eltony</h3>
              <p className="text-secondary-300 mb-4">
                People & Culture Strategist and Organizational Development Consultant
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:tarekeltony2010@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary/90 transition-colors"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tarekeltony/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="tel:+966508725419"
                  className="text-white hover:text-primary/90 transition-colors"
                  aria-label="Phone"
                >
                  <i className="fas fa-phone text-xl"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/experience">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Experience
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/education">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Education
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/skills">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Skills
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      People & Culture Transformation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Organizational Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Talent Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      HR Process Excellence
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="text-secondary-300 hover:text-white transition-colors">
                      Digital Transformation
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-primary mt-1 mr-2"></i>
                  <span className="text-secondary-300">Riyadh, Saudi Arabia</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone text-primary mt-1 mr-2"></i>
                  <span className="text-secondary-300">+966 50 872 5419</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope text-primary mt-1 mr-2"></i>
                  <span className="text-secondary-300 break-all">
                    tarekeltony2010@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-secondary-700" />

          <div className="text-center">
            <p className="text-secondary-400">
              &copy; {currentYear} Tarek Eltony. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
