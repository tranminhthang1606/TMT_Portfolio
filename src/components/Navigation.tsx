'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, FolderOpen } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navigation Menu */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {item.icon}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              
              {/* Enhanced Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg border border-white/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </motion.div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 right-6 z-40 lg:hidden"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
