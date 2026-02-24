"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0); 
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 20);

            if (window.innerWidth < 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
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
    }, [lastScrollY]);

    return (
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } ${
            isMenuOpen
              ? "bg-bg-primary shadow-md" 
              : isScrolled
              ? "bg-bg-primary/70 backdrop-blur-md shadow-md"
              : "bg-transparent" 
          }`}
        >
          <div className="w-full max-w-[1440px] mx-auto px-s md:px-s12 lg:px-xl h-[80px] flex justify-between items-center">
            
            {/* Логотип */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img src="/Logo.svg" alt="TSV Logo" className="h-m w-auto" />
            </Link>

            {/* Десктопное меню */}
            <nav className="hidden md:flex gap-xs items-center">
                <Button variant="text" href="#about" className="text-caption font-medium">Обо мне</Button>
                <Button variant="text" href="#cases" className="text-caption font-medium">Кейсы</Button>
                <Button variant="text" href="#contacts" className="text-caption font-medium">Контакты</Button>
                <Button variant="text" href="/graphic" className="text-caption font-medium">Графика</Button>
            </nav>

            {/* Мобильная кнопка Бургер */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 outline-none focus:outline-none active:outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label="Toggle menu"
            >
              {/* Бургер */}
              <span className={`absolute h-[2px] w-6 bg-text-main rounded-full transition-all duration-200 ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}></span>
              <span className={`absolute h-[2px] w-6 bg-text-main rounded-full transition-all duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute h-[2px] w-6 bg-text-main rounded-full transition-all duration-200 ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}></span>
            </button>
          </div>

          {/* Мобильное меню */}
          <div
            className={`md:hidden absolute top-[80px] left-0 w-full bg-bg-primary transition-all duration-200 overflow-hidden ${
              isMenuOpen ? "max-h-[300px] opacity-100 py-s shadow-md" : "max-h-0 opacity-0 py-0"
            }`}
          >
            <div className="flex flex-col items-center gap-s">
              <Button variant="text" href="#about" onClick={() => setIsMenuOpen(false)} className="text-caption font-medium">Обо мне</Button>
              <Button variant="text" href="#cases" onClick={() => setIsMenuOpen(false)} className="text-caption font-medium">Кейсы</Button>
              <Button variant="text" href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-caption font-medium">Контакты</Button>
              <Button variant="text" href="/graphic" onClick={() => setIsMenuOpen(false)} className="text-caption font-medium">Графика</Button>
            </div>
          </div>
        </header>
    );
}