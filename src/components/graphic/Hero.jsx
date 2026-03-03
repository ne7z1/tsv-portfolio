"use client";

import { useState, useEffect } from "react";

const lettersData = [
  { id: 'p1', char: 'П', initWeight: 900, line: 1 },
  { id: 'i1', char: 'И', initWeight: 900, line: 1 },
  { id: 'k1', char: 'К', initWeight: 200, line: 1 },
  { id: 's1', char: 'С', initWeight: 900, line: 1 },
  { id: 'e1', char: 'Е', initWeight: 900, line: 1 },
  { id: 'l1', char: 'Л', initWeight: 900, line: 1 },
  { id: 'i2', char: 'И', initWeight: 200, line: 1 },
  
  { id: 'n1', char: 'Н', initWeight: 200, line: 2 },
  { id: 'e2', char: 'Е', initWeight: 900, line: 2, spaceAfter: true },
  
  { id: 'v1', char: 'В', initWeight: 200, line: 2 },
  { id: 'r1', char: 'Р', initWeight: 900, line: 2 },
  { id: 'u1', char: 'У', initWeight: 200, line: 2 },
  { id: 't1', char: 'Т', initWeight: 900, line: 2 },
];

const subtitleSentences = [
  {
    id: 's1',
    words: [
      { id: 'sw1', text: 'Слишком', initWeight: 900 },
      { id: 'sw2', text: 'много', initWeight: 900 },
      { id: 'sw3', text: 'глянца.', initWeight: 200 },
    ],
  },
  {
    id: 's2',
    words: [
      { id: 'sw4', text: 'Пора', initWeight: 200 },
      { id: 'sw5', text: 'добавить', initWeight: 200 },
      { id: 'sw6', text: 'немного', initWeight: 200 },
      { id: 'sw7', text: 'цифровой', initWeight: 900 },
      { id: 'sw8', text: 'грязи.', initWeight: 900 },
    ],
  },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredLetterId, setHoveredLetterId] = useState(null);
  const [hoveredWordId, setHoveredWordId] = useState(null);

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

  const getWordStyle = (wordId, initialWeight) => {
    let baseWeight = initialWeight;

    if (hoveredWordId === wordId) {
        baseWeight = initialWeight === 900 ? 200 : 900;
    }
    const opacity = Math.max(0, 1 - scrollY / 300);

    return {
      fontWeight: baseWeight,
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
                className={`inline-block shrink-0 origin-center cursor-default ${
                  item.spaceAfter ? 'mr-[3vw] lg:mr-[30px]' : ''
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
    <section className="relative w-full min-h-screen flex flex-col justify-center max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] pt-[100px] pb-12 overflow-hidden font-unbounded">
      <div className="flex flex-col gap-2 w-full uppercase leading-[0.85] tracking-tight text-[12.5vw] lg:text-[150px] text-white">
        
        {renderLetterLine(line1Letters)}
        {renderLetterLine(line2Letters)}

      </div>

      <div className="mt-8 lg:mt-12 text-[20px] md:text-[24px] lg:text-[32px] text-white max-w-[800px] leading-[1.2] flex flex-col gap-y-2">
        {subtitleSentences.map((sentence) => (
          <div key={sentence.id} className="flex flex-wrap gap-x-[8px] lg:gap-x-3">
            {sentence.words.map((word) => (
              <span
                key={word.id}
                className="inline-block cursor-default select-none"
                style={getWordStyle(word.id, word.initWeight)}
                onMouseEnter={() => setHoveredWordId(word.id)}
                onMouseLeave={() => setHoveredWordId(null)}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}