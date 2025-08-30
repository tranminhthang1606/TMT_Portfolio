'use client';

import { motion } from 'framer-motion';
import { personalInfo, education, certifications } from '@/data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, User, BookOpen } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get to know me better - my background, education, and what drives me in the world of technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants}>
            <div className="card-hover rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <User className="w-8 h-8 text-purple-400" />
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Full Name</h4>
                    <p className="text-purple-300">{personalInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Date of Birth</h4>
                    <p className="text-purple-300">{personalInfo.dateOfBirth}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-purple-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Professional Summary</h4>
                <div className="space-y-3">
                  {personalInfo.summary.map((paragraph, index) => (
                    <p key={index} className="text-white/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Education */}
            <div className="card-hover rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {education.degree}
                      </h4>
                      <p className="text-purple-300 font-semibold">
                        {education.institution}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-semibold">
                      {education.period}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {education.gpa && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span className="text-white/80">GPA: {education.gpa}</span>
                      </div>
                    )}
                    {education.description && (
                      <p className="text-white/80 text-sm">
                        {education.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-hover rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-400" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">
                        {cert.name}
                      </h4>
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-semibold">
                        {cert.year}
                      </span>
                    </div>
                    {cert.issuer && (
                      <p className="text-purple-300 text-sm">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 card-hover rounded-2xl glass">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2+ Years</h3>
              <p className="text-white/80">Professional Experience</p>
            </div>
            
            <div className="text-center p-6 card-hover rounded-2xl glass">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">8.7/10</h3>
              <p className="text-white/80">Academic Excellence</p>
            </div>
            
            <div className="text-center p-6 card-hover rounded-2xl glass">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Multiple</h3>
              <p className="text-white/80">Frameworks & Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
