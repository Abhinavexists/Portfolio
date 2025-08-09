import React from 'react';

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): string {
  const linkElement = e.currentTarget as HTMLAnchorElement;
  const url = new URL(linkElement.href, window.location.href);
  const targetId = url.hash.replace('#', '');
  const elem = document.getElementById(targetId);
  const isSamePath = url.pathname === window.location.pathname;
  const header = document.querySelector('header');
  const headerOffset = header ? header.offsetHeight : 0;

  // Only intercept default navigation when the target element exists on the same page
  if (isSamePath && elem) {
    e.preventDefault();
    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
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

