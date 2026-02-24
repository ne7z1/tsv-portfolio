"use client";

import Link from "next/link";
import { useState } from "react";

const NavItem = ({ href, part1, part2, w1, w2, hover1, hover2 }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 400);
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
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-8 text-white">
      <div className="w-full px-4 md:px-12 lg:px-[120px] flex justify-between items-center">
        
        {/* Логотип */}
        <Link href="/" className="hover:opacity-70 transition-opacity flex items-center shrink-0">
          <img src="/logo2.svg" alt="TSV Logo" className="h-[36px] md:h-[48px] w-auto" />
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 lg:gap-[60px] text-2xl md:text-[48px] md:leading-[60px] tracking-tight">
          
          <NavItem 
            href="#posters" 
            part1="Пост" part2="еры" 
            w1="font-black" w2="font-medium" 
            hover1="group-hover:font-medium" hover2="group-hover:font-black" 
          />
          
          <NavItem 
            href="#logos" 
            part1="Лого" part2="типы" 
            w1="font-extralight" w2="font-medium" 
            hover1="group-hover:font-medium" hover2="group-hover:font-extralight" 
          />
          
          <NavItem 
            href="#about" 
            part1="Обо" part2=" мне" 
            w1="font-black" w2="font-extralight" 
            hover1="group-hover:font-extralight" hover2="group-hover:font-black" 
          />

        </nav>

        <button className="md:hidden flex flex-col gap-[8px]">
            <span className="w-10 h-[4px] bg-white"></span>
            <span className="w-10 h-[4px] bg-white"></span>
        </button>

      </div>
    </header>
  );
}