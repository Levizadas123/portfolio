import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { navVariants, mobileMenuVariants } from "@/lib/motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = () => setIsMenuOpen(false);
    document.addEventListener("click", handleClickOutside);
    
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.nav 
      className={`fixed w-full z-50 px-6 lg:px-12 py-4 transition-all duration-300 top-0 left-0 ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          PORTFOLIO
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#contact">Contato</NavLink>
        </div>
        
        <button 
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Toggle menu"
        >
          <span className={`menu-line w-6 h-0.5 bg-dark block rounded-full transition-all duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}></span>
          <span className={`menu-line w-6 h-0.5 bg-dark block rounded-full transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}></span>
          <span className={`menu-line w-6 h-0.5 bg-dark block rounded-full transition-all duration-300 ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-24 left-0 w-full bg-white py-6 px-6 shadow-lg rounded-b-xl"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projetos</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Habilidades</MobileNavLink>
              <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experiência</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="font-medium hover:text-primary transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="font-medium py-2 hover:text-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
