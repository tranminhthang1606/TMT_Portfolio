'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import { useState } from 'react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const categories = ['All', ...Array.from(new Set(skills.map(skill => skill.category)))];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My technical skills and expertise across various technologies and frameworks
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg glow'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="card-hover rounded-2xl p-6 glass"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-purple-300">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
                <motion.div
                  custom={skill.level}
                  variants={progressVariants}
                  className="h-full skill-bar rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full"></div>
                </motion.div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{skill.category}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20) 
                          ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                          : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {skills.filter(s => s.level >= 90).length}
              </div>
              <div className="text-white/80">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {skills.filter(s => s.level >= 80 && s.level < 90).length}
              </div>
              <div className="text-white/80">Advanced Level</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {skills.filter(s => s.level >= 70 && s.level < 80).length}
              </div>
              <div className="text-white/80">Intermediate Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
