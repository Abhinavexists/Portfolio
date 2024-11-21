import ArrowUpRighticon from "@/assets/icons/arrow-up-right.svg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
const footerLinks = [
  {
    title: "Linkedin",
    href: "",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    href: "",
    icon: <FaGithub />,
  },
  {
    title: "Twitter",
    href: "",
    icon: <FaTwitter />,
  },
  {
    title: "Instagram",
    href: "",
    icon: <FaInstagram />,
  },
]

export const Footer = () => {
  return (
    <footer className="relative -z[-10] overflow-x-clip">
      <div className="absolute h-[400px] w-[3000px] bottom-0 left-1/2 -translate-x-1/2 bg-indigo-500/40 md:bg-indigo-500/30 [maskImage:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 ">
            &copy; 2024. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span className="font-medium ">{link.title}</span>
                <ArrowUpRighticon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};