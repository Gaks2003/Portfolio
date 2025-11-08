import React from 'react';
import { motion } from 'framer-motion';

const FloatingShape = ({ position, color, shape, delay = 0 }) => {
  const shapes = {
    sphere: 'rounded-full',
    box: 'rounded-xl rotate-45',
    diamond: 'rounded-lg rotate-45'
  };

  return (
    <motion.div
      className={`absolute ${shapes[shape]} opacity-30`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${position.size}px`,
        height: `${position.size}px`,
        background: `linear-gradient(135deg, ${color}40, ${color}80)`,
        boxShadow: `0 0 ${position.size}px ${color}30`,
        filter: 'blur(0.5px)'
      }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 12 + delay,
        repeat: Infinity,
        ease: 'linear',
        delay: delay
      }}
    />
  );
};

const FloatingElements = () => {
  const shapes = [
    { position: { x: 10, y: 20, size: 60 }, color: '#6366f1', shape: 'sphere', delay: 0 },
    { position: { x: 85, y: 15, size: 40 }, color: '#8b5cf6', shape: 'box', delay: 1 },
    { position: { x: 15, y: 75, size: 50 }, color: '#06b6d4', shape: 'diamond', delay: 2 }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </div>
  );
};

export default FloatingElements;