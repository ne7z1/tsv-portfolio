"use client";

import { useState, useEffect } from "react";

const postersData = [
  { id: 1, year: "2025", src: "/works/posters/p1.webp", type: "base" },
  { id: 2, year: "2025", src: "/works/posters/p2.webp", type: "base" },
  { id: 3, year: "2025", src: "/works/posters/p3.webp", type: "base" },
  { id: 4, year: "2025", src: "/works/posters/p4.webp", type: "base" },
  { id: 5, year: "2025", src: "/works/posters/p5.webp", type: "tall" },
  { id: 6, year: "2025", src: "/works/posters/p6.webp", type: "base" },
  { id: 7, year: "2025", src: "/works/posters/p7.webp", type: "base" },
  { id: 8, year: "2025", src: "/works/posters/p8.webp", type: "base" },
  { id: 9, year: "2026", src: "/works/posters/p9.webp", type: "tall" },
  { id: 10, year: "2025", src: "/works/posters/p10.webp", type: "hero" },
  { id: 11, year: "2025", src: "/works/posters/p11.webp", type: "tall" },
  { id: 12, year: "2025", src: "/works/posters/p12.webp", type: "base" },
  { id: 13, year: "2025", src: "/works/posters/p13.webp", type: "wide" },
  { id: 14, year: "2025", src: "/works/posters/p14.webp", type: "wide" },
  { id: 15, year: "2025", src: "/works/posters/p15.webp", type: "wide" },
  { id: 16, year: "2025", src: "/works/posters/p16.webp", type: "hero" },
  { id: 17, year: "2026", src: "/works/posters/p17.webp", type: "hero" },
  { id: 18, year: "2026", src: "/works/posters/p18.webp", type: "wide" },
];

const sizeClasses = {
  base: "col-span-1 row-span-1 aspect-square",
  wide: "col-span-2 row-span-1 aspect-[2/1]",
  tall: "col-span-1 row-span-2 aspect-[1/2]",
  hero: "col-span-2 row-span-2 aspect-square",
};

const PosterCard = ({ poster, onClick }) => (
  <div 
    onClick={() => onClick(poster)}
    className={`${sizeClasses[poster.type] || sizeClasses.base} relative group overflow-hidden bg-black cursor-pointer border-[0.5px] border-white/10`}
  >
    <div className="w-full h-full transition-all duration-1000 group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale">
      <img src={poster.src} alt="" className="w-full h-full object-cover" />
    </div>

    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 bg-black/60 pointer-events-none">
      <span className="text-white font-black text-4xl md:text-4xl lg:text-4xl tracking-tighter shadow-2xl">
        [ {poster.year} ]
      </span>
    </div>
  </div>
);

export default function Posters() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedPoster]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPoster(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full pb-32 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-[1px] bg-(--graphic-bg-secondary) border-[0.5px] border-white/10">
        {postersData.map((poster) => (
          <PosterCard key={poster.id} poster={poster} onClick={setSelectedPoster} />
        ))}
        
        <div className="col-span-1 row-span-1 bg-transparent opacity-5 flex items-center justify-center text-[10px]">+</div>
        <div className="col-span-1 row-span-1 bg-transparent opacity-5 flex items-center justify-center text-[10px]">+</div>
      </div>

      {selectedPoster && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 transition-opacity duration-300"
          onClick={() => setSelectedPoster(null)}
        >
          
          <button 
            onClick={() => setSelectedPoster(null)}
            className="absolute top-6 right-6 md:top-10 md:right-12 z-[110] group flex items-center justify-center bg-red-600 text-white h-12 px-4 md:h-16 md:px-6 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-95 shadow-2xl"
          >
            <span className="text-xl md:text-3xl tracking-widest font-extralight group-hover:font-black transition-all duration-300">
              ЗАК
            </span>
            <span className="text-xl md:text-3xl tracking-widest font-black group-hover:font-extralight transition-all duration-300 ml-1">
              РЫТЬ
            </span>
          </button>

          <div 
            className="relative flex flex-col items-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedPoster.src} 
              alt="Full Poster" 
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain border-[0.5px] border-white/20 shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
            />
            
            <div className="absolute -bottom-8 md:-bottom-10 right-0 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.4em]">
              АРХИВ [ {selectedPoster.year} ]
            </div>
          </div>

        </div>
      )}
    </div>
  );
}