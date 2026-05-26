import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Compass } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#profile" },
    { name: "Brand Vision", href: "#vision" },
    { name: "Experiences", href: "#experience" },
    { name: "Expertise", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/80 ballet-blur border-b border-[#D9C3B0]/30 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logotype */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <Compass className="w-5 h-5 text-[#1C1C1C] transition-transform duration-500 group-hover:rotate-45" />
          <span className="font-display font-semibold tracking-widest text-sm text-[#1C1C1C]">
            KIM EUNJI
          </span>
          <span className="h-4 w-[1px] bg-[#D9C3B0] hidden sm:inline-block"></span>
          <span className="text-xs font-serif italic text-neutral-500 hidden sm:inline-block">
            LIVRHYCO CEO
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-12">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xs font-display tracking-widest font-medium text-[#1C1C1C]/80 hover:text-[#1C1C1C] transition-colors relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1C1C1C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1C1C1C] p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#FAF8F5] border-b border-[#D9C3B0]/40 shadow-lg py-6 px-10 flex flex-col space-y-4 md:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-display tracking-widest text-[#1C1C1C]/80 hover:text-[#1C1C1C] font-medium py-2 border-b border-stone-100"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
