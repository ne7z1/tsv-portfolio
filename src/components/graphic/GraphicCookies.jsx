"use client";

import { useState, useEffect } from "react";

export default function GraphicCookies() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const isAccepted = localStorage.getItem("tsv_graphic_cookie_accepted");
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("tsv_graphic_cookie_accepted", "true");
  };

  if (!hasMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-[var(--graphic-bg-primary)] text-white font-unbounded uppercase animate-in slide-in-from-bottom-full duration-700 ease-out border-t-2 border-black/10">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] py-8 md:py-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 xl:gap-12">
        
        <div className="flex flex-col select-none cursor-default">
          <div className="flex items-center text-[10vw] md:text-[70px] lg:text-[90px] leading-[0.85] tracking-tight w-fit">
            <span className="font-black">COOKI</span>
            <span className="font-extralight">EEE</span>
            <span className="font-black">S</span>
          </div>

          <div className="flex flex-col mt-4 md:mt-6 text-[4vw] md:text-[28px] lg:text-[32px] leading-[1.1] tracking-tight">
            <span className="font-black">ТЫ ОСТАВЛЯЕШЬ СЛЕДЫ.</span>
            <div className="flex flex-wrap gap-x-2 lg:gap-x-3 mt-1">
              <span className="font-extralight">Я ИХ СОБИРАЮ,</span>
              <span className="font-black">ЧТОБЫ ХАОС БЫЛ УПРАВЛЯЕМЫМ.</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleAccept}
          className="group shrink-0 flex items-center justify-center bg-[var(--graphic-bg-secondary)] text-white px-12 py-6 md:px-16 md:py-8 rounded-none border-none outline-none w-full xl:w-auto cursor-pointer transition-all duration-300"
        >
          <span className="font-extralight group-hover:font-black transition-[font-weight] duration-200 ease-out text-[8vw] md:text-[50px] lg:text-[60px] leading-none tracking-tight">
            ЯСНО
          </span>
        </button>

      </div>
    </div>
  );
}