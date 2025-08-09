"use client";
import React, { useRef, lazy, Suspense, useEffect } from 'react';
import BentoCard from '@/components/BentoCard';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Mail, Code, BookText, Clock, ListPlus } from 'lucide-react';

const MemoryGame = lazy(() => import('@/components/MemoryGame'));
const GithubContributions = lazy(() => import('@/components/GithubContributions'));
const ContactForm = lazy(() => import('@/components/ContactForm'));

const LoadingCard = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full flex items-center justify-center bg-gray-800/30 rounded-lg animate-pulse">
    <div className="text-gray-400 text-sm">{children}</div>
  </div>
);

export const GameSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "200px 0px", // start loading a bit before it enters the viewport
    amount: 0.05,
  });

  // Warm up lazy-loaded chunks on idle so they are ready by the time user scrolls here
  useEffect(() => {
    const id = setTimeout(() => {
      import('@/components/MemoryGame');
      import('@/components/GithubContributions');
      import('@/components/ContactForm');
    }, 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="py-20 lg:py-28" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text">
            Before You Leave
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have some fun with the memory game, check out my GitHub contributions, or drop me a message!
          </p>
        </div>

        {isInView && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,_auto)]">
            <BentoCard colSpan={2} rowSpan={2} delay={0}>
              <Suspense fallback={<LoadingCard>Loading Memory Game...</LoadingCard>}>
                <MemoryGame />
              </Suspense>
            </BentoCard>
            
            <BentoCard colSpan={2} rowSpan={1} delay={1}>
              <Suspense fallback={<LoadingCard>Loading GitHub Data...</LoadingCard>}>
                <GithubContributions />
              </Suspense>
            </BentoCard>
            
            <BentoCard colSpan={2} rowSpan={2} delay={2}>
              <Suspense fallback={<LoadingCard>Loading Contact Form...</LoadingCard>}>
                <ContactForm />
              </Suspense>
            </BentoCard>
            
            {/* Coming Soon Feature Card - No lazy loading needed */}
            <BentoCard colSpan={1} rowSpan={1} delay={3}>
              <div className="h-full flex flex-col items-center justify-center text-center relative p-4">
                <div className="text-indigo-400 mb-3">
                  <ListPlus className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">More Features</h3>
                <p className="text-sm text-gray-400">New interactive elements coming soon</p>
              </div>
            </BentoCard>
            
            <BentoCard delay={4} accent>
              <div className="h-full flex flex-col justify-center items-center text-center p-2">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect!</h3>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-white/70">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-md">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-xs text-white/70">Years Coding</div>
                  </div>
                </div>
                <a
                  href="mailto:abhinavkumarsingh2023@gmail.com"
                  className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </div>
            </BentoCard>
          </div>
        )}
        
        {!isInView && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,_auto)]">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`
                  rounded-xl bg-gray-900 overflow-hidden animate-pulse
                  ${index === 0 ? 'col-span-1 md:col-span-2 row-span-2' : ''}
                  ${index === 1 ? 'col-span-1 md:col-span-2 row-span-1' : ''}
                  ${index === 2 ? 'col-span-1 md:col-span-2 row-span-2' : ''}
                  ${index === 3 ? 'col-span-1 row-span-1' : ''}
                  ${index === 4 ? 'col-span-1 row-span-1' : ''}
                `}
              >
                <div className="w-full h-full p-4 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Loading...</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameSection;

