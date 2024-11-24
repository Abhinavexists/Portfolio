'use client'

import { smoothScroll } from "@/components/smoothScroll";

export const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
        <a href="#home" className="nav-item" onClick={smoothScroll}>
          Home
        </a>
        <a href="#projects" className="nav-item" onClick={smoothScroll}>
          Projects
        </a>
        <a href="#about" className="nav-item" onClick={smoothScroll}>
          About
        </a>
        <a href="#contact" className="nav-item" onClick={smoothScroll}>
          Contact
        </a>
      </nav>
    </header>
  );
};

