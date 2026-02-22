"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastSrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        setIsScrolled(currentScrollY > 20);

        if (window.innerWidth < 768) {
            if (currentScrollY > lastSrollY && currentScrollY > 80) {
                setIsVisible(false);
                setIsMenuOpen(false);
            } else {
                setIsVisible(true);
            }
        } else {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [lastSrollY]);

return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent" 
      }`}
    >
      {/* Главный контейнер */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] h-[80px] flex justify-between items-center">
        
        {/* Логотип */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img src="/Logo.svg" alt="TSV Logo" className="h-[24px] w-auto" />
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex gap-m items-center">
            <Button variant="text" href="#about">Обо мне</Button>
            <Button variant="text" href="#about">Кейсы</Button>
            <Button variant="text" href="#about">Контакты</Button>
        </nav>

        {/* Мобильная кнопка Бургер */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-[6px]"
          aria-label="Toggle menu"
        >
          {/* Три полоски бургера, которые превращаются в крестик при открытии */}
          <span className={`block w-6 h-[2px] bg-text-main rounded-full transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-text-main rounded-full transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-text-main rounded-full transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </button>
      </div>

      {/* Мобильное выпадающее меню */}
      <div
        className={`md:hidden absolute top-[80px] left-0 w-full bg-bg-primary border-b border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[300px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Button variant="text" href="#about" onClick={() => setIsMenuOpen(false)}>Обо мне</Button>
          <Button variant="text" href="#cases" onClick={() => setIsMenuOpen(false)}>Кейсы</Button>
          <Button variant="text" href="#contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Button>
        </div>
      </div>
    </header>
  );
}