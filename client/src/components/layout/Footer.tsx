import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* About */}
            <div className="md:col-span-5 lg:col-span-5">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Tarek Eltony</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                People & Culture Strategist and Organizational Development Consultant with extensive experience 
                driving HR transformation and business excellence across the GCC and Middle East.
              </p>
              <div className="flex space-x-4">
                <a
                  href="mailto:tarekeltony2010@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/tarekeltony/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="tel:+966508725419"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Phone"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Home
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      About
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/experience">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Experience
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/education">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Education
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/skills">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Skills
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      People & Culture Transformation
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Organizational Development
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Talent Management
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      HR Process Excellence
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <div className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                      Digital Transformation
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 lg:col-span-3">
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-primary">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span className="text-gray-300">Riyadh, Saudi Arabia</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-primary">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span className="text-gray-300">+966 50 872 5419</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-primary">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span className="text-gray-300 break-all">
                    tarekeltony2010@gmail.com
                  </span>
                </li>
              </ul>
              
              <Link href="/contact">
                <div className="mt-6">
                  <Button className="w-full rounded-full py-5 gradient-bg-primary">
                    Get In Touch
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="h-px bg-gray-800 my-10"></div>

          <div className="text-center">
            <p className="text-gray-500">
              &copy; {currentYear} Tarek Eltony. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
