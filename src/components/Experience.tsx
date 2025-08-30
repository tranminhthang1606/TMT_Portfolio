'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/data/portfolio';
import { Calendar, MapPin, Building, Code } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Work Experience
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My professional journey and experience working with various companies and technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center glow">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="card-hover rounded-2xl p-8 glass">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">
                          {experience.position}
                        </h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full font-semibold">
                          {experience.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">
                        {experience.company}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {experience.projects && experience.projects.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-purple-300 mb-3">
                          Key Projects
                        </h5>
                        <div className="space-y-4">
                          {experience.projects.map((project) => (
                            <div
                              key={project.id}
                              className="p-4 bg-white/5 rounded-lg border border-white/10"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-white">
                                  {project.title}
                                </h6>
                                <span className="text-xs text-white/60">
                                  {project.period}
                                </span>
                              </div>
                              <p className="text-sm text-white/70 mb-2">
                                {project.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-white/60">
                                {project.teamSize && (
                                  <span>Team: {project.teamSize} members</span>
                                )}
                                <span>Role: {project.role}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {experiences.length}
              </div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {experiences.reduce((acc, exp) => acc + (exp.projects?.length || 0), 0)}
              </div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                2+
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
