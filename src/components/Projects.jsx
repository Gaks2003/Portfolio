import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, MousePointer, Image, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Online Result Management System',
      description: 'Web application for managing student results with secure authentication and responsive design',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      features: ['User Authentication', 'Database Optimization', 'Responsive UI', 'Role-based Access'],
      icon: <Shield className="w-8 h-8" />,
      color: 'blue',
      github: 'https://github.com/Gaks2003/Student-Online-Result-Management.git'
    },
    {
      title: 'Virtual Mouse Control Using Hand Gestures',
      description: 'Computer vision application that tracks hand movements to control cursor with 90% accuracy',
      technologies: ['Python', 'OpenCV', 'MediaPipe'],
      features: ['Real-time Processing', '90% Accuracy', 'Various Lighting Conditions', 'Minimal Latency'],
      icon: <MousePointer className="w-8 h-8" />,
      color: 'green',
      github: 'https://github.com/Gaks2003/Virtual-Mouse-Control-Using-Hand-Gestures.git'
    },
    {
      title: 'STEGANOX - Steganographic Tool',
      description: 'Secure data hiding tool using LSB technique with encryption for additional security',
      technologies: ['Python', 'PIL', 'STEGANO'],
      features: ['LSB Technique', 'Encryption Layer', 'Multiple Formats', 'CLI Interface'],
      icon: <Image className="w-8 h-8" />,
      color: 'purple',
      github: 'https://github.com/Gaks2003/Steganox-.git'
    },
    {
      title: 'Password Strength Tester',
      description: 'Advanced tool to evaluate password security with real-time feedback and recommendations',
      technologies: ['Python', 'RegEx', 'Cryptography', 'Tkinter'],
      features: ['Entropy Analysis', 'Pattern Detection', 'Dictionary Attack Prevention', 'Real-time Feedback'],
      icon: <Lock className="w-8 h-8" />,
      color: 'orange',
      github: 'https://github.com/Gaks2003/Password-Strength-Analyzer.git'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    };
    return colors[color];
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark via-slate-900 to-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Showcase of innovative projects demonstrating technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-primary group-hover:text-white transition-colors">
                  {project.icon}
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="bg-slate-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-200 border border-white/20 hover:border-primary/50 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="text-gray-300 flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;