"use client";

import { useState, useEffect } from "react";

const brandingData = [
  { id: 1, year: "2026", name: "Wylery", type: "extrawide", thumbnail: "/works/branding/wylery.webp", fullCase: "/works/branding/wylery_Бренд.webp" },
  { id: 2, year: "2026", name: "СИТИ ГРУМ", type: "wide", thumbnail: "/works/branding/Ситигрум2.webp", fullCase: "/works/branding/Ситигрум_бренд.webp" },
  { id: 3, year: "2025", name: "Красота", type: "wide", thumbnail: "/works/branding/Красота.webp", fullCase: "/works/branding/Бренд_Красота.webp" },
];

const sizeClasses = {
  base: "col-span-1 row-span-1 aspect-square",
  wide: "col-span-1 md:col-span-2 row-span-1 aspect-square md:aspect-[2/1]",
  tall: "col-span-1 row-span-2 aspect-[1/2]",
  hero: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 aspect-square",
  extrawide: "col-span-2 md:col-span-4 row-span-1 md:row-span-2 aspect-[2/1]",
};

const BrandingCard = ({ item, onClick }) => (
  <div 
    onClick={() => onClick(item)}
    className={`${sizeClasses[item.type] || sizeClasses.base} relative group overflow-hidden bg-black cursor-pointer border-[0.5px] border-(white/10)`}
  >
    <div className="w-full h-full transition-all duration-1000 group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale">
      <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 bg-black/80 pointer-events-none">
      <span className="text-white font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter shadow-2xl">
        [ {item.year} ]
      </span>
      <span className="mt-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/80 px-4 text-center">
        {item.name}
      </span>
    </div>
  </div>
);

export default function Branding() {
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedCase]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCase(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full pb-32 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-[1px] bg-(--graphic-bg-secondary) border-[0.5px] border-white/10">
        {brandingData.map((item) => (
          <BrandingCard key={item.id} item={item} onClick={setSelectedCase} />
        ))}
      </div>

      {selectedCase && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 lg:p-12"
          onClick={() => setSelectedCase(null)}
        >
          
          <button 
            onClick={() => setSelectedCase(null)}
            className="fixed bottom-6 right-4 md:bottom-auto md:top-8 md:right-8 z-[110] group flex items-center justify-center bg-red-600 text-white h-12 px-4 md:h-16 md:px-6 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-95 shadow-2xl"
          >
            <span className="text-xl md:text-3xl tracking-widest font-extralight group-hover:font-black transition-all duration-300">
              ЗАК
            </span>
            <span className="text-xl md:text-3xl tracking-widest font-black group-hover:font-extralight transition-all duration-300 ml-1">
              РЫТЬ
            </span>
          </button>
          <div 
            className="w-full h-full max-w-[1400px] bg-black border-[0.5px] border-white/20 overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-24 md:pb-0"
            onClick={(e) => e.stopPropagation()} 
          >
             <img 
               src={selectedCase.fullCase} 
               alt={selectedCase.name} 
               className="w-full h-auto block"
             />

             <div className="w-full py-12 flex flex-col items-center justify-center bg-black border-t-[0.5px] border-white/10">
               <span className="font-mono text-xs text-white/40 uppercase tracking-[0.5em]">
                 АРХИВ [ {selectedCase.year} ]
               </span>
               <span className="font-mono text-[10px] text-white/30 mt-4">
                 КОНЕЦ КЕЙСА
               </span>
             </div>
          </div>

        </div>
      )}
    </div>
  );
}