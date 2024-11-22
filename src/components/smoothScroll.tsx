import React from 'react';

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): string {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  const header = document.querySelector('header');
  const headerOffset = header ? header.offsetHeight : 0;
  
  if (elem) {
    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Delay updating the active section to allow for smooth scrolling
    setTimeout(() => {
      return targetId;
    }, 100);
  }

  return targetId;
}

// Example of a React component that could use this function
export const SmoothScrollLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    smoothScroll(e);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

