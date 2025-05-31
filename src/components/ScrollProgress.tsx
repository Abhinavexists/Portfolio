'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollPercentage(scrolled);
      setIsVisible(winScroll > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getProgressColor = () => {
    if (scrollPercentage < 30) return 'from-blue-500 to-blue-600';
    if (scrollPercentage < 60) return 'from-blue-500 to-indigo-600';
    if (scrollPercentage < 90) return 'from-indigo-500 to-purple-600';
    return 'from-purple-500 to-pink-600';
  };
  
  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <motion.div 
        className={`h-full bg-gradient-to-r ${getProgressColor()} origin-left`}
        style={{ 
          scaleX,
          height: isHovered ? '6px' : '2px',
          boxShadow: isVisible 
            ? `0 0 ${isHovered ? '15px' : '8px'} rgba(59, 130, 246, ${isHovered ? '0.7' : '0.5'})` 
            : 'none',
          transition: 'height 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        }}
      />
      
      {isHovered && (
        <div 
          className="absolute top-7 right-5 bg-gray-900/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out'
          }}
        >
          {Math.round(scrollPercentage)}%
        </div>
      )}
    </div>
  );
};

export default ScrollProgress; 