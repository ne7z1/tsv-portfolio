"use client";

import Link from "next/link";

const GraphicWord = ({ text, defaultBlack = false }) => (
  <span
    className={`inline-block cursor-default select-none transition-[font-weight] duration-300 ease-out text-white
      ${defaultBlack
        ? "font-black hover:font-extralight"
        : "font-extralight hover:font-black"
      }`}
  >
    {text}
  </span>
);

export default function GraphicSection() {
  return (
    <div className="w-full relative flex flex-col justify-center min-h-[500px] lg:min-h-[600px] animate-in fade-in duration-700 font-unbounded uppercase tracking-tight py-12">

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] md:w-[45%] lg:w-[40%] aspect-[3/4] pointer-events-none">
        <img
          src="/hub/graphic-photo.webp" 
          alt="TSV Graphic"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="mix-blend-difference relative z-10 w-full flex flex-col mb-10 lg:mb-14 text-[13vw] md:text-[100px] lg:text-[140px] leading-[0.85]">
        
        <div className="flex flex-col">
          <GraphicWord text="ЛОМАЙ" defaultBlack={false} />
          <GraphicWord text="СИСТЕМУ!" defaultBlack={true} />
        </div>

        <div className="flex flex-col">
          <GraphicWord text="СОЗДАВАЙ" defaultBlack={true} />
          <GraphicWord text="ШУМ!" defaultBlack={false} />
        </div>

      </div>

      <div className="relative z-20 w-fit pointer-events-auto">
        <Link
          href="/graphic"
          className="group inline-flex items-center bg-[var(--graphic-bg-secondary)] text-white px-8 md:px-12 py-4 md:py-6 uppercase rounded-none transition-colors duration-300 ease-out"
        >
          <span className="font-extralight group-hover:font-black transition-[font-weight] duration-300 ease-out text-[24px] md:text-[32px] lg:text-[40px]">
            ПОРТ
          </span>
          <span className="font-black group-hover:font-extralight transition-[font-weight] duration-300 ease-out text-[24px] md:text-[32px] lg:text-[40px]">
            ФОЛИО
          </span>
        </Link>
      </div>

    </div>
  );
}