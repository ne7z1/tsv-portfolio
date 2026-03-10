"use client";

import Link from "next/link";
import { useState } from "react";

const GraphicWord = ({ text, defaultBlack = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseWeight = defaultBlack ? 900 : 200;
  const targetWeight = defaultBlack ? 200 : 900;
  const currentWeight = isHovered ? targetWeight : baseWeight;

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block cursor-default select-none text-white transform-gpu"
      style={{
        fontVariationSettings: `"wght" ${currentWeight}`,
        fontWeight: currentWeight,
        transition: "font-variation-settings 0.3s ease-out, font-weight 0.3s ease-out",
        willChange: "font-variation-settings, font-weight",
      }}
    >
      {text}
    </span>
  );
};

export default function GraphicSection() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-center min-h-125 lg:min-h-150 animate-in fade-in duration-700 font-unbounded uppercase tracking-tight py-12">

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] md:w-[45%] lg:w-[40%] aspect-3/4 pointer-events-none">
        <img
          src="/hub/graphic-photo.webp" 
          alt="TSV Graphic"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="mix-blend-difference relative z-10 w-full flex flex-col mb-10 lg:mb-14 text-[13vw] md:text-[100px] lg:text-[140px] leading-[0.85] transform-gpu">
        
        <div className="flex flex-col">
          <GraphicWord text="ЛОМАЙ" defaultBlack={true} />
          <GraphicWord text="СИСТЕМУ!" defaultBlack={false} />
        </div>

        <div className="flex flex-col">
          <GraphicWord text="СОЗДАВАЙ" defaultBlack={true} />
          <GraphicWord text="ШУМ!" defaultBlack={false} />
        </div>

      </div>

      <div className="relative z-20 w-fit pointer-events-auto">
        <Link
          href="/graphic"
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          className="inline-flex items-center bg-(--graphic-bg-secondary) text-white px-8 md:px-12 py-4 md:py-6 uppercase rounded-none transition-colors duration-300 ease-out"
        >
          <span 
            className="text-[24px] md:text-[32px] lg:text-[40px] transform-gpu"
            style={{ 
              fontVariationSettings: `"wght" ${isBtnHovered ? 900 : 200}`,
              fontWeight: isBtnHovered ? 900 : 200,
              transition: "font-variation-settings 0.3s ease-out, font-weight 0.3s ease-out",
              willChange: "font-variation-settings, font-weight"
            }}
          >
            ПОРТ
          </span>
          <span 
            className="text-[24px] md:text-[32px] lg:text-[40px] transform-gpu"
            style={{ 
              fontVariationSettings: `"wght" ${isBtnHovered ? 200 : 900}`,
              fontWeight: isBtnHovered ? 200 : 900,
              transition: "font-variation-settings 0.3s ease-out, font-weight 0.3s ease-out",
              willChange: "font-variation-settings, font-weight"
            }}
          >
            ФОЛИО
          </span>
        </Link>
      </div>

    </div>
  );
}