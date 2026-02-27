"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NavItem = ({ href, part1, part2, w1, w2, hover1, hover2, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);

    if (href.startsWith('#')) {
      e.preventDefault(); 
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }

    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`group flex items-center transition-opacity duration-300 ${
        isClicked ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className={`${w1} ${hover1} transition-all duration-300 ease-out`}>
        {part1}
      </span>
      <span className={`${w2} ${hover2} transition-all duration-300 ease-out`}>
        {part2}
      </span>
    </Link>
  );
};

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileOpen) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileOpen]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[var(--graphic-bg-secondary)] text-[var(--graphic-text-primary)] z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
          isMobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-10 text-4xl tracking-tight uppercase">
          <NavItem 
            href="#about" part1="Обо" part2=" мне" 
            w1="font-black" w2="font-extralight" 
            hover1="font-extralight" hover2="font-black"
            onClick={() => setIsMobileOpen(false)} 
          />
          <NavItem 
            href="#works" part1="Раб" part2="оты" 
            w1="font-black" w2="font-extralight" 
            hover1="font-extralight" hover2="font-black"
            onClick={() => setIsMobileOpen(false)}
          />
          <NavItem 
            href="#contacts" part1="Конт" part2="акты" 
            w1="font-black" w2="font-extralight" 
            hover1="font-extralight" hover2="font-black"
            onClick={() => setIsMobileOpen(false)}
          />
        </nav>
      </div>

      <header 
        className={`fixed top-0 left-0 w-full z-50 pt-8 text-white transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-4 md:px-12 lg:px-[120px] flex justify-between items-center">
          
          <Link 
            href="/" 
            className="hover:opacity-70 transition-opacity flex items-center shrink-0"
            onClick={() => setIsMobileOpen(false)}
          >
            <img src="/logo2.svg" alt="TSV Logo" className="h-[36px] md:h-[48px] w-auto" />
          </Link>

          <nav className="hidden md:flex gap-8 lg:gap-[60px] text-2xl md:text-[48px] md:leading-[60px] tracking-tight">
            <NavItem 
              href="#about" part1="Обо" part2=" мне" 
              w1="font-black" w2="font-extralight" 
              hover1="group-hover:font-extralight" hover2="group-hover:font-black" 
            />
            <NavItem 
              href="#works" part1="Раб" part2="оты" 
              w1="font-black" w2="font-extralight" 
              hover1="group-hover:font-extralight" hover2="group-hover:font-black" 
            />
            <NavItem 
              href="#contacts" part1="Конт" part2="акты" 
              w1="font-black" w2="font-extralight" 
              hover1="group-hover:font-extralight" hover2="group-hover:font-black" 
            />
          </nav>

          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
              <span className={`absolute w-10 h-[4px] bg-white transition-transform duration-300 ease-out ${
                isMobileOpen ? "rotate-45" : "-translate-y-[8px]"
              }`}></span>
              
              <span className={`absolute w-10 h-[4px] bg-white transition-transform duration-300 ease-out ${
                isMobileOpen ? "-rotate-45" : "translate-y-[8px]"
              }`}></span>
          </button>

        </div>
      </header>
    </>
  );
}