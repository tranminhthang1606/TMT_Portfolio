'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden animated-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glow pulse-glow">
                <Image 
                  src="/avatar.jpeg" 
                  alt={`${personalInfo.name} - Profile Photo`}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90 neon-text">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Summary */}
          <motion.div variants={itemVariants} className="mb-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {personalInfo.summary[0]}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 glow"
              >
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
                {/* Email Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Click to send email
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-black/80 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                </div>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="group relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 glow"
              >
                <Phone className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
                {/* Phone Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Click to call
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-black/80 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                </div>
              </a>
              <div className="group relative flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
                {/* Location Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                    Current location
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-black/80 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 glow"
            >
              <Linkedin className="w-6 h-6" />
              {/* LinkedIn Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                  View LinkedIn Profile
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-black/80 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
              </div>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 glow"
            >
              <Github className="w-6 h-6" />
              {/* GitHub Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                  View GitHub Profile
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-black/80 border-l-2 border-l-transparent border-r-2 border-r-transparent"></div>
              </div>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
