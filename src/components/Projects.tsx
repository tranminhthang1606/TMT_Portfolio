'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '@/data/portfolio';
import { useState } from 'react';
import { ExternalLink, Github, Users, Calendar, Code, Settings } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg glow'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative"
            >
              <div className="card-hover rounded-2xl overflow-hidden glass h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 glow"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 glow"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{project.teamSize} members</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Role */}
                  {project.role && (
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-300">Role:</span>
                      <p className="text-sm text-white/80 mt-1">{project.role}</p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-300">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>



                  {/* Action Buttons */}
                  {(project.live || project.github || project.admin) && (
                    <div className={`flex gap-3 mt-auto pt-6 ${(project.live && project.github) || (project.live && project.admin) || (project.github && project.admin) ? '' : 'justify-center'}`}>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 glow min-h-[44px] ${(project.live && project.github) || (project.live && project.admin) ? 'flex-1' : 'w-full'}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 min-h-[44px] ${(project.live && project.github) ? 'flex-1' : 'w-full'}`}
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                      {project.admin && (
                        <a
                          href={project.admin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 px-4 py-3 bg-green-500/20 backdrop-blur-sm text-green-300 rounded-lg font-semibold hover:bg-green-500/30 transition-all duration-300 border border-green-500/30 min-h-[44px] ${(project.live && project.admin) ? 'flex-1' : 'w-full'}`}
                        >
                          <Settings className="w-4 h-4" />
                          Admin Panel
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl glass">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/80 mb-6">
              Let&apos;s discuss your project and see how I can help bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 glow"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
