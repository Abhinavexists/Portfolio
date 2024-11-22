export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  const header = document.querySelector('header');
  const headerOffset = header ? header.offsetHeight : 0;
  
  if (elem) {
    const elementPosition = elem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // 20px extra offset for visual comfort

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

