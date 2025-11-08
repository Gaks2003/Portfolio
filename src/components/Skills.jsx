import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming Languages',
      skills: ['Python (Intermediate)', 'Java (Intermediate)', 'SQL (Basic)'],
      color: 'blue'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      skills: ['Prompt Engineering', 'ML Algorithms', 'Data Analysis'],
      color: 'purple'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'green'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: ['MySQL', 'OpenCV', 'MediaPipe', 'Git'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark via-slate-900 to-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Comprehensive skill set spanning multiple domains of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-primary group-hover:text-white transition-colors">
                  {category.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    className="text-gray-300 text-sm flex items-center gap-2 group-hover:text-gray-200 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;