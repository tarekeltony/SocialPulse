import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useMobile from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <div className="font-bold flex items-center">
              <span className="text-xl md:text-2xl gradient-text">Tarek Eltony</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="group relative py-2">
                  <div
                    className={cn(
                      "text-base font-medium",
                      location === item.path ? "nav-link-active" : "nav-link"
                    )}
                  >
                    {item.name}
                  </div>
                  {location !== item.path && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  )}
                </div>
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="rounded-full px-6 gradient-bg-primary">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <motion.div
            className={cn(
              "md:hidden overflow-hidden",
              isMobileMenuOpen ? "block" : "hidden"
            )}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium",
                      location === item.path
                        ? "gradient-bg-primary text-white"
                        : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact">
                  <Button className="w-full rounded-lg gradient-bg-primary">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
