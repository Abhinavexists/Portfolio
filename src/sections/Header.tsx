'use client';

import { useState } from 'react';
import DownloadIcon from "@/assets/icons/download.svg";
import { Menu, X } from 'lucide-react';
import { smoothScroll } from "@/components/smoothScroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface NavClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleNavClick = (e: NavClickEvent) => {
    smoothScroll(e);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-3 w-full z-10 px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
            <a href="#home" className="nav-item" onClick={handleNavClick}>
              Home
            </a>
            <a href="#projects" className="nav-item" onClick={handleNavClick}>
              Projects
            </a>
            <a href="#about" className="nav-item" onClick={handleNavClick}>
              About
            </a>
            <a href="#contact" className="nav-item" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <nav className="p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
            <a
              href="https://drive.google.com/file/d/1P2_SJR922YIMCZdgoYLyuLwCz8zQaFut/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item flex items-center"
            >
              <span>Resume</span>
              <DownloadIcon className="size-4 ml-2" />
            </a>
          </nav>
        </div>
      </div>

       {/* Mobile Navigation */}
       <div className="md:hidden flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 transition-colors duration-300 ease-in-out hover:bg-white/20"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
          <a
            href="https://drive.google.com/file/d/1P2_SJR922YIMCZdgoYLyuLwCz8zQaFut/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item flex items-center"
          >
            <span>Resume</span>
            <DownloadIcon className="size-4 ml-2" />
          </a>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-blue/95 backdrop-blur-lg
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <nav className={`
          flex flex-col items-center gap-6 pt-20
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'}
        `}>
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`
                text-l font-semibold w-64 text-center py-3 px-6
                rounded-lg bg-white/10 backdrop-blur-md
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                hover:bg-white/20
              `}
              style={{
                transitionDelay: `${(['Home', 'Projects', 'About', 'Contact'].indexOf(item) * 50)}ms`
              }}
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

