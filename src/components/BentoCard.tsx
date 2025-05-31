'use client';

import React, { ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  accent?: boolean;
  hoverEffect?: boolean;
  delay?: number;
}

const BentoCard = React.memo(({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  accent = false,
  hoverEffect = true,
  delay = 0
}: BentoCardProps) => {
  const gridClasses = useMemo(() => {
    const colSpanClass = {
      1: 'col-span-1',
      2: 'col-span-1 md:col-span-2',
      3: 'col-span-1 md:col-span-2 lg:col-span-3'
    }[colSpan] || 'col-span-1';

    const rowSpanClass = {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3'
    }[rowSpan] || 'row-span-1';

    return `${colSpanClass} ${rowSpanClass}`;
  }, [colSpan, rowSpan]);

  const baseClasses = useMemo(() => cn(
    'rounded-xl overflow-hidden',
    accent ? 'bg-gradient-to-br from-indigo-500 to-sky-500' : 'bg-gray-900',
    gridClasses,
    hoverEffect ? 'hover:shadow-lg hover:shadow-indigo-500/20 transition-shadow duration-300' : '',
    className
  ), [accent, gridClasses, hoverEffect, className]);

  const animationProps = useMemo(() => ({
    initial: { opacity: 0, y: 10 }, 
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.3, 
      delay: Math.min(delay * 0.05, 0.2), 
      ease: "easeOut"
    }
  }), [delay]);

  return (
    <motion.div
      className={baseClasses}
      {...animationProps}
    >
      <div className="w-full h-full p-4">
        {children}
      </div>
    </motion.div>
  );
});

BentoCard.displayName = 'BentoCard';

export default BentoCard; 