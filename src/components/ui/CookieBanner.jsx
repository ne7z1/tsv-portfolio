"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50); 
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsAnimating(false); 

    setTimeout(() => {
      localStorage.setItem("cookieConsent", "true");
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-s left-s right-s md:bottom-m md:right-m md:left-auto z-[9999] transition-all duration-500 ease-out transform
        ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
      `}
    >
      <div className="flex flex-row items-center justify-between gap-m bg-bg-secondary border border-[#CBD5E1]/50 rounded-lg p-s md:p-m shadow-2xl">
        
        <div className="flex flex-col gap-1">
          <span className="text-h3 md:text-h2 font-bold text-text-main leading-none">
            Cookies
          </span>
          <span className="text-caption md:text-body font-normal text-text-main/80 leading-tight">
            Используются для обеспечения стабильной работы системы и анализа взаимодействия
          </span>
        </div>

        <div className="shrink-0">
          <Button variant="primary" onClick={handleAccept}>
            ОК
          </Button>
        </div>

      </div>
    </div>
  );
}