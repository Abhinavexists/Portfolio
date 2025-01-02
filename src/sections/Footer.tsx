import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHuggingface, SiGmail } from "react-icons/si";

// Define an array of footer links with titles, URLs, and corresponding icons
const footerLinks = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/abhinavkumarsingh1405/",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    href: "https://github.com/Abhinavexists",
    icon: <FaGithub />,
  },
  { 
    title: "Mail",
    href: "mailto:abhinavkumarsingh2023@gmail.com",
    icon: <SiGmail />,
  },
  {
    title: "Huggingface",
    href: "https://huggingface.co/Abhinavexist",
    icon: <SiHuggingface />,
  },
];

// Footer component definition
export const Footer = () => {
  return (
    <footer className="relative -z[-10] overflow-x-clip">
      {/* Background gradient */}
      <div
        className="absolute h-[400px] w-[3000px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-500/40 md:bg-indigo-500/30 
                   [maskImage:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>

      {/* Footer container */}
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Copyright text */}
          <div className="text-white/40">
            &copy; 2024. All rights reserved.
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 transition-transform duration-300 ease-in-out transform 
                           hover:scale-105 hover:text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Icon for the link */}
                {link.icon}
                {/* Link title */}
                <span className="font-medium">{link.title}</span>
                {/* Arrow icon */}
                <ArrowUpRighticon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
