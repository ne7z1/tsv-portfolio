"use client";

import { useState, useEffect } from "react";

const lettersData = [
  { id: 'g1', char: 'G', initWeight: 900, line: 1 },
  { id: 'r1', char: 'R', initWeight: 900, line: 1 },
  { id: 'a1', char: 'A', initWeight: 200, line: 1 },
  { id: 'p1', char: 'P', initWeight: 900, line: 1 },
  { id: 'h1', char: 'H', initWeight: 900, line: 1 },
  { id: 'i1', char: 'I', initWeight: 900, line: 1 },
  { id: 'c1', char: 'C', initWeight: 200, line: 1 },
  
  { id: 'a2', char: 'A', initWeight: 200, line: 2 },
  { id: 'r2', char: 'R', initWeight: 900, line: 2 },
  { id: 't2', char: 'T', initWeight: 200, line: 2, spaceAfter: true},
  { id: 'w2', char: 'W', initWeight: 900, line: 2 },
  { id: 'o2', char: 'O', initWeight: 200, line: 2 },
  { id: 'r3', char: 'R', initWeight: 900, line: 2 },
  { id: 'k2', char: 'K', initWeight: 200, line: 2 },
  { id: 's2', char: 'S', initWeight: 900, line: 2 },
];


export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredLetterId, setHoveredLetterId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLetterStyle = (letterId, initialWeight) => {
    let baseWeight = initialWeight;
    
    if (hoveredLetterId === letterId) {
        baseWeight = initialWeight === 900 ? 200 : 900;
    }

    const finalWeight = Math.max(200, baseWeight - scrollY * 3);
    const opacity = Math.max(0, 1 - scrollY / 300);

    return {
      fontWeight: finalWeight,
      opacity: opacity,
      transition: "font-weight 0.2s ease-out, opacity 0.3s ease-out",
    };
  };

  const line1Letters = lettersData.filter(l => l.line === 1);
  const line2Letters = lettersData.filter(l => l.line === 2);

  const renderLetterLine = (letters) => (
    <div className="flex items-center whitespace-nowrap select-none">
        {letters.map((item) => (
            <span
                key={item.id}
                className={`inline-block shrink-0 origin-center hover:text-white/90 ${
                  item.spaceAfter ? 'mr-[4vw] lg:mr-[50px]' : ''
                }`}
                style={getLetterStyle(item.id, item.initWeight)}
                onMouseEnter={() => setHoveredLetterId(item.id)}
                onMouseLeave={() => setHoveredLetterId(null)}
            >
                {item.char}
            </span>
        ))}
    </div>
  );


  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] pt-[100px] pb-12 overflow-hidden">
      <h1 className="flex flex-col gap-2 w-full uppercase leading-[0.85] tracking-tight text-[12.5vw] lg:text-[150px]">
        
        {renderLetterLine(line1Letters)}
        
        {renderLetterLine(line2Letters)}

      </h1>
    </section>
  );
}