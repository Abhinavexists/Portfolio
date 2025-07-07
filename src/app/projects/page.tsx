'use client';

import React from 'react';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import GithubIcon from '@/assets/icons/Github.svg';
import ArrowUpIcon from '@/assets/icons/arrow-up-right.svg';
import { ArrowLeft } from 'lucide-react';
import NeuNet from '@/assets/images/NeuNet.png';
import Brieflet from '@/assets/images/Brieflet.png';
import ArrowSense from '@/assets/images/ArrowSense.png';
import Wasserstoff from '@/assets/images/Wasserstoff.png';
import FinWell from '@/assets/images/FinWell.png';
import StockBoard from '@/assets/images/StockBoard.png';
import WaveletTransforms from '@/assets/images/Wavelet.png';
import Koala from '@/assets/images/Koala.png';

const allProjects = [
  {
    company: "Python, NumPy, Matplotlib, Plotly",
    year: "2024",
    title: "NeuNet",
    results: [
      { title: "Implemented a fully connected neural network with backpropagation" },
      { title: "Achieved 92% accuracy on synthetic spiral dataset" },
      { title: "Introduced dynamic learning rate decay and accuracy evaluation" }
    ],
    link: { url: "https://github.com/Abhinavexists/NeuNet", target: "_blank" },
    liveLink: "https://abhinavexists.github.io/NeuNet/index.html",
    image: NeuNet,
    featured: true
  },
  {
    company: "React, TypeScript, FastAPI, Python, Langchain, ChromaDB, PostgreSQL",
    year: "2025",
    title: "Wasserstoff",
    results: [
      { title: "Identify common themes across multiple document sources" },
      { title: "Provide multi-level citations (document, paragraph, sentence level)" },
      { title: "Built chatbot-style interface for document research queries" }
    ],
    link: { url: "https://github.com/Abhinavexists/wasserstoff", target: "_blank" },
    liveLink: "https://wasserstofftask-production.up.railway.app/",
    image: Wasserstoff,
    featured: true
  },
  {
    company: "Python, Gemini AI, CrewAI, Multi-agent Systems, Financial APIs",
    year: "2025",
    title: "FinWell",
    results: [
      { title: "Multi-agent financial analysis with collaborative AI agents" },
      { title: "Comprehensive stock market analysis and risk assessment" },
      { title: "Technical and fundamental analysis with automated reporting" }
    ],
    link: { url: "https://github.com/Abhinavexists/FinWell", target: "_blank" },
    liveLink: "https://github.com/Abhinavexists/FinWell",
    image: FinWell,
    featured: true
  },
  
  // Additional Projects
  {
    company: "Python, OpenCV",
    year: "2023",
    title: "ArrowSense",
    results: [
      { title: "Real-time video processing for arrow shape detection" },
      { title: "Implemented adjustable HSV thresholds for fine-tuning detection" },
      { title: "Highlighted detected arrows with bounding boxes and contours" }
    ],
    link: { url: "https://github.com/Abhinavexists/ArrowDetection", target: "_blank" },
    liveLink: "https://arrowdetection.onrender.com/",
    image: ArrowSense,
    featured: false
  },
  {
    company: "Web Development, Financial Data, Real-time Analytics",
    year: "2024",
    title: "StockBoard",
    results: [
      { title: "Real-time stock market data visualization dashboard" },
      { title: "Interactive charts and financial analytics" },
      { title: "Portfolio tracking and performance metrics" },
      { title: "Responsive design with modern UI/UX" }
    ],
    link: { url: "https://github.com/Abhinavexists/StockBoard", target: "_blank" },
    liveLink: "https://stock-board-jet.vercel.app/",
    image: StockBoard,
    featured: false
  },
  {
    company: "Python, Machine Learning, Data Science",
    year: "2024",
    title: "Koala",
    results: [
      { title: "Advanced machine learning framework and utilities" },
      { title: "Streamlined data processing and model training pipeline" },
      { title: "Comprehensive evaluation and visualization tools" },
      { title: "Modular design for extensible ML workflows" }
    ],
    link: { url: "https://github.com/Abhinavexists/Koala", target: "_blank" },
    liveLink: "https://github.com/Abhinavexists/Koala",
    image: Koala,
    featured: false
  },
  {
    company: "Python, Flask, PyWavelets, OpenCV, NumPy",
    year: "2024",
    title: "Wavelet Transforms",
    results: [
      { title: "Advanced image denoising using multiple wavelet transform methods" },
      { title: "Implemented VisuShrink, BayesShrink, and SureShrink algorithms" },
      { title: "Web interface with drag-and-drop functionality" },
      { title: "Color space processing in RGB and YCbCr formats" }
    ],
    link: { url: "https://github.com/Abhinavexists/Wavelet-Transforms", target: "_blank" },
    liveLink: "https://github.com/Abhinavexists/Wavelet-Transforms",
    image: WaveletTransforms,
    featured: false
  },
  {
    company: "Python, Flask, PyTorch, Transformers, scikit-learn, NLTK, PyPDF2",
    year: "2024",
    title: "Brieflet",
    results: [
      { title: "Automated domain classification of research papers" },
      { title: "Generated concise, informative summaries for research papers" },
      { title: "Extracted key sections like abstract, introduction, methodology, results, and conclusion" }
    ],
    link: { url: "https://github.com/Abhinavexists/brieflet", target: "_blank" },
    liveLink: "https://github.com/Abhinavexists/brieflet",
    image: Brieflet,
    featured: false
  },
  {
    company: "Python, MCP, Gemini AI, Weather APIs",
    year: "2024",
    title: "MCP Server",
    results: [
      { title: "Implemented Model Context Protocol server-client architecture" },
      { title: "Integrated with National Weather Service API for real-time data" },
      { title: "Natural language interface powered by Google's Gemini AI" },
      { title: "Command-line tool for US weather data access" }
    ],
    link: { url: "https://github.com/Abhinavexists/MCP_Server", target: "_blank" },
    liveLink: "https://github.com/Abhinavexists/MCP_Server",
    image: NeuNet,
    featured: false
  }
];

const ProjectsPage = () => {
  const featuredProjects = allProjects.filter(project => project.featured);
  const additionalProjects = allProjects.filter(project => !project.featured);

  return (
    <div className="bg-gray-950 text-white antialiased font-serif min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 lg:pt-40 lg:pb-28"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                <ArrowLeft className="size-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </a>
            </motion.div>
            
            <SectionHeader
              eyebrow="Complete Portfolio"
              title="All My Projects"
              description="Explore my complete collection of projects, from machine learning models to web applications. Each project represents a step in my journey as a developer."
            />
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text text-center">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              My most impactful and technically challenging projects
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-20">
            {featuredProjects.map((project, projectIndex) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + projectIndex * 0.1 }}
              >
                <Card
                  className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-indigo-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                        {project.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4" />
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-sm md:text-base text-white/50 items-center transition-all duration-300 ease-in-out hover:translate-x-1"
                          >
                            <CheckCircleIcon className="size-5 md:size-6 text-indigo-400 flex-shrink-0" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                        <a href={project.link.url} className="inline-block w-full sm:w-auto">
                          <button className="bg-white text-gray-950 h-12 w-full px-4 sm:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <span>Github</span>
                            <GithubIcon className="size-5" />
                          </button>
                        </a>
                        <a href={project.liveLink} className="inline-block w-full sm:w-auto">
                          <button className="bg-indigo-500 text-white h-12 w-full px-4 sm:px-6 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>Website</span>
                            <ArrowUpIcon className="size-5" />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="relative overflow rounded-lg mt-8 lg:mt-0 lg:pl-16">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto lg:absolute lg:h-full lg:w-auto lg:max-w-none transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="pb-20 lg:pb-28">
        <div className="container">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text text-center">
              Additional Projects
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              More projects showcasing different technologies and approaches
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalProjects.map((project, projectIndex) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + projectIndex * 0.1 }}
              >
                <Card className="h-full p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-indigo-400 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text mb-2">
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                      <p className="text-sm text-indigo-400 mb-3">{project.company}</p>
                      <ul className="flex flex-col gap-2 mb-6">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-sm text-white/50 items-start"
                          >
                            <CheckCircleIcon className="size-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <a href={project.link.url} className="flex-1">
                        <button className="bg-white text-gray-950 h-10 w-full px-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 text-sm">
                          <GithubIcon className="size-4" />
                          <span>Github</span>
                        </button>
                      </a>
                      <a href={project.liveLink} className="flex-1">
                        <button className="bg-indigo-500 text-white h-10 w-full px-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600 text-sm">
                          <ArrowUpIcon className="size-4" />
                          <span>Live</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage; 