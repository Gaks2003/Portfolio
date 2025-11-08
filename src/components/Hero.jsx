import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import FloatingElements from './FloatingElements';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-dark via-slate-900 to-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient bg-[length:400%_400%]"></div>
      <FloatingElements />
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              whileHover={{ scale: 1.05 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:400%_400%]">Girish Saraf</span>
            </motion.h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Computer Science Graduate passionate about <span className="text-accent font-semibold">Software Development</span>, 
              <span className="text-primary font-semibold">Cybersecurity Analysis</span>, and <span className="text-secondary font-semibold">AI Engineering</span>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <motion.a 
                href="mailto:gsaraf0506@gmail.com" 
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
              <motion.a 
                href="tel:9606355299" 
                className="flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 font-semibold backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>
            <div className="flex justify-center lg:justify-start gap-6">
              <motion.a 
                href="https://linkedin.com/in/girish-saraf-546bb7257" 
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:text-primary transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:gsaraf0506@gmail.com" 
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:text-accent transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Girish Saraf" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;