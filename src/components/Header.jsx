import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-white/10 shadow-2xl z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Girish Saraf
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-all duration-300 relative px-4 py-2 rounded-lg hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  whileHover={{ width: 'calc(100% - 2rem)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;