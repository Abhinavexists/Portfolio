import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  title, 
  subtitle, 
  children 
}) => {
  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
            {title}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 