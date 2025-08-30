'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import { useState } from 'react';
import { Code, Database, Layers, Settings, Palette, Globe } from 'lucide-react';

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="w-5 h-5" />;
      case 'Frameworks':
        return <Layers className="w-5 h-5" />;
      case 'Libraries & Tools':
        return <Palette className="w-5 h-5" />;
      case 'DevOps & Tools':
        return <Settings className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Others':
        return <Globe className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const skillVariants = {
    hidden: { y: 15, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
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
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg glow'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="group relative"
            >
              <div className="card-hover rounded-xl p-6 glass border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="text-center">
                  {/* Skill Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(skill.category)}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <div className="mt-2">
                    <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
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
          <div className="inline-block p-8 rounded-2xl glass">
            <h3 className="text-2xl font-bold text-white mb-4">
              Skills Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.slice(1).map((category) => {
                const categorySkills = skills.filter(s => s.category === category);
                return (
                  <div key={category} className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {categorySkills.length}
                    </div>
                    <div className="text-white/80 text-sm">{category}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
