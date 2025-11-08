import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '9606355299',
      href: 'tel:9606355299',
      color: 'blue'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'gsaraf0506@gmail.com',
      href: 'mailto:gsaraf0506@gmail.com',
      color: 'green'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'girish-saraf-546bb7257',
      href: 'https://linkedin.com/in/girish-saraf-546bb7257',
      color: 'purple'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Ballari, Karnataka',
      href: '#',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: 'bg-orange-50 text-orange-600 hover:bg-orange-100'
    };
    return colors[color];
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark via-slate-900 to-dark relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to contribute to innovative projects and grow in the tech industry. 
            Let's connect and explore opportunities together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a 
                key={index}
                href={info.href}
                className="block p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 mb-4"
                    whileHover={{ scale: 1.2, rotateZ: 10 }}

                  >
                    <div className="text-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                  </motion.div>
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-2">{info.label}</h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Ready to Start a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conversation?</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm actively seeking opportunities in <span className="text-primary font-semibold">software development</span>, <span className="text-secondary font-semibold">cybersecurity analysis</span>, 
              and <span className="text-accent font-semibold">AI engineering</span>. Let's discuss how I can contribute to your team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="mailto:gsaraf0506@gmail.com" 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-3 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={22} />
                Send Email
              </motion.a>
              <motion.a 
                href="tel:9606355299" 
                className="border-2 border-accent text-accent px-8 py-4 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 inline-flex items-center justify-center gap-3 font-semibold text-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={22} />
                Call Now
              </motion.a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;