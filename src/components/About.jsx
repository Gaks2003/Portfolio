import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark via-slate-900 to-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Passionate Computer Science graduate with expertise in software development, 
            cybersecurity, and AI engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="text-center p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 w-fit mx-auto mb-4">
              <Target className="w-12 h-12 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">Objective</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Seeking entry-level position to leverage programming and problem-solving skills 
              while contributing to innovative technology solutions
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 border border-secondary/30 group-hover:border-secondary/60 transition-all duration-300 w-fit mx-auto mb-4">
              <GraduationCap className="w-12 h-12 text-secondary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-secondary transition-colors">Education</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              B.E. Computer Science & Engineering<br />
              CGPA: 8.4/10 (80.48%)<br />
              RYMEC, Ballari
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 group-hover:border-accent/60 transition-all duration-300 w-fit mx-auto mb-4">
              <Award className="w-12 h-12 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent transition-colors">Experience</h3>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
              Cybersecurity Intern at Suprmentr<br />
              4 months (Sep 2024 - Feb 2025)<br />
              Security tools & research
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Machine Learning with Python - Tech Fortune',
              'Python Basics - EC COUNCIL',
              'Cloud Computing - EC COUNCIL',
              'Cybersecurity Analyst - TATA Company'
            ].map((cert, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-sm text-gray-200 group-hover:text-white transition-colors font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;