'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/data/portfolio';
import { Building, Code, Users, Calendar, Phone } from 'lucide-react';

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
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
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

                    {/* Technologies - Only show if no projects */}
                    {(!experience.projects || experience.projects.length === 0) && (
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
                    )}

                                        {/* Projects */}
                    {experience.projects && experience.projects.length > 0 && (
                      <div>
                        <h5 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          Key Projects
                        </h5>
                        <div className="space-y-6">
                          {experience.projects.map((project, projectIndex) => (
                            <div
                              key={project.id}
                              className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
                            >
                              {/* Project Header */}
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <h6 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                  </h6>
                                  <div className="flex items-center gap-4 text-sm text-white/60">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      {project.period}
                                    </span>
                                    {project.teamSize && (
                                      <span className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        {project.teamSize} members
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-2 py-1 rounded-full">
                                  #{projectIndex + 1}
                                </div>
                              </div>

                              {/* Project Description */}
                              <div className="mb-4">
                                <p className="text-sm text-white/80 leading-relaxed">
                                  {project.description}
                                </p>
                              </div>

                              {/* Project Role */}
                              {project.role && (
                                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                  <div className="text-xs font-semibold text-blue-300 mb-1">Role</div>
                                  <p className="text-sm text-white/80">{project.role}</p>
                                </div>
                              )}

                              {/* Project Technologies */}
                              <div>
                                <div className="text-xs font-semibold text-purple-300 mb-2">Technologies</div>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience References */}
                    {experience.references && experience.references.length > 0 && (
                      <div className="mt-8">
                        <h5 className="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          References
                        </h5>
                        <div className="space-y-4">
                          {experience.references.map((ref, index) => (
                            <div key={index} className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                              <div className="flex items-center justify-between mb-2">
                                <h6 className="text-lg font-semibold text-white">{ref.name}</h6>
                                <span className="text-xs text-green-400 font-semibold bg-green-500/10 px-2 py-1 rounded-full">
                                  #{index + 1}
                                </span>
                              </div>
                              <div className="text-sm text-green-300 mb-2">{ref.position}</div>
                              <a 
                                href={`tel:${ref.phone}`}
                                className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                              >
                                <Phone className="w-4 h-4" />
                                {ref.phone}
                              </a>
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
