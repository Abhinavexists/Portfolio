'use client';
import DownloadIcon from "@/assets/icons/download.svg";
import { smoothScroll } from "@/components/smoothScroll";

export const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-3 w-full z-10 px-4">
      <div className="flex-1"></div>
      <div className="flex-1 flex justify-center">
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
      </div>
      <div className="flex-1 flex justify-end items-center">
        <nav className="p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-xl">
          <a
            href="/path/to/resume.pdf" // Ensure this is the correct path to your resume
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item flex items-center"
          >
            <span>Resume</span>
            <DownloadIcon className="size-4 ml-2" /> {/* Added margin-left */}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;