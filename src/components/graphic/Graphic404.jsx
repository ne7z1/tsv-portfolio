"use client";

import Link from "next/link";

export default function Graphic404() {
  return (
    // Главный контейнер (фон страницы красный)
    <main className="relative w-full min-h-screen bg-[var(--graphic-bg-primary)] flex flex-col justify-center items-center overflow-hidden font-unbounded uppercase tracking-tight z-0 py-20">

      {/* === СЛОЙ 1: ТИПОГРАФИКА (Z-10, ВЕСЬ ТЕКСТ `#FFFFFF`) === */}
      {/* Мы используем NORMAL blend, текст лежит ПОД цифрами */}
      <div className="relative z-10 w-full max-w-[1440px] px-4 md:px-12 lg:px-[120px] flex flex-col items-center select-none cursor-default">

        {/* 1. ТУПИК */}
        <h1 className="text-white font-black text-[12vw] md:text-[80px] lg:text-[120px] leading-none animate-in slide-in-from-top-10 fade-in duration-700 ease-out">
          ТУПИК
        </h1>

        {/* 🔥 GAP 64px между ТУПИК и ТЕКСТОМ */}
        <div className="h-[64px] w-full" />

        {/* 2. ТЕКСТОВЫЙ БЛОК (В центре, `text-white`) */}
        <div className="w-full flex flex-col items-center text-center text-[5vw] md:text-[32px] lg:text-[40px] leading-[1.15] text-white animate-in fade-in duration-1000 delay-300">
          
          <div className="flex flex-wrap gap-x-2 justify-center">
            <span className="font-extralight">ТЫ ЗАШЕЛ</span>
            <span className="font-black">СЛИШКОМ ДАЛЕКО.</span>
          </div>
          
          <div className="flex flex-wrap gap-x-2 justify-center">
            <span className="font-extralight">ЗДЕСЬ</span>
            <span className="font-black">НИЧЕГО НЕТ.</span>
          </div>
          
          <div className="flex flex-wrap gap-x-2 justify-center">
            <span className="font-extralight">ВОЗВРАЩАЙСЯ,</span>
            <span className="font-black">ПОКА НЕ ПОЗДНО.</span>
          </div>

        </div>

        {/* 🔥 GAP 64px между ТЕКСТОМ и НАЗАД */}
        <div className="h-[64px] w-full" />

        {/* 3. НАЗАД (Правое выравнивание) */}
        <div className="w-full flex justify-end animate-in slide-in-from-bottom-10 fade-in duration-700 ease-out">
          <Link 
            href="/graphic" 
            className="group flex items-center text-[12vw] md:text-[90px] lg:text-[130px] leading-none cursor-pointer border-none outline-none text-white"
          >
            {/* Текст #FFFFFF с анимацией жирности */}
            <span className="font-extralight group-hover:font-black transition-[font-weight] duration-200 ease-out">
              НА
            </span>
            <span className="font-black group-hover:font-extralight transition-[font-weight] duration-200 ease-out">
              ЗАД
            </span>
          </Link>
        </div>

      </div>

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white mix-blend-difference font-black leading-none pointer-events-none select-none z-20"
        style={{ fontSize: "clamp(150px, 45vw, 650px)" }}
      >
        404
      </div>

    </main>
  );
}