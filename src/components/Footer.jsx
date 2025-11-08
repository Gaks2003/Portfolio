import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-dark via-slate-900 to-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Girish Saraf</h3>
            <p className="text-gray-300">Computer Science Graduate</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © 2024 Girish Saraf. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;