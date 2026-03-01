"use client"; 
import { useState, useEffect } from "react";


const logosData = [
  { id: 1, year: "2026", name: "Wylery | Фото & Видео", src: "/works/logos/wylery.webp", type: "big" },
  { id: 2, year: "2026", name: "СИТИ ГРУМ | Груминг салон", src: "/works/logos/СИТИГРУM.webp", type: "big" },
  { id: 7, year: "2026", name: "AnalyticHUB | BI-инструмент", src: "/works/logos/Ahub.webp", type: "extrawide" },
  { id: 3, year: "2025", name: "TSV.", src: "/works/logos/TSV.webp", type: "base" },
  { id: 4, year: "2025", name: "КРАСОТА | Салон красоты", src: "/works/logos/Красота.webp", type: "base" },
  { id: 5, year: "2025", name: "NEO VYBE | Музкальное приложение", src: "/works/logos/NeoVybe.webp", type: "base" },
  { id: 6, year: "2025", name: "WHY ME | Приложение для знакомств", src: "/works/logos/WhyMe.webp", type: "base" },
];

const sizeClasses = {
  base: "col-span-1 row-span-1 aspect-square",
  wide: "col-span-1 md:col-span-2 row-span-1 aspect-square md:aspect-[2/1]",
  big:  "col-span-1 md:col-span-2 row-span-1 md:row-span-2 aspect-square",
  extrawide: "col-span-2 md:col-span-4 row-span-1 md:row-span-2 aspect-[2/1]",
};

const LogoCard = ({ logo, onClick }) => (
  <div 
    onClick={() => onClick(logo)}
    className={`${sizeClasses[logo.type] || sizeClasses.base} relative group overflow-hidden bg-black cursor-pointer border-[0.5px] border-white/10`}
  >
    <div className="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:opacity-20 group-hover:grayscale">
      <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 bg-black/80 pointer-events-none">
      <span className="text-white font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter">[ {logo.year} ]</span>
      <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/70 text-center px-2">{logo.name}</span>
    </div>
  </div>
);

export default function Logos() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  useEffect(() => {
    if (selectedLogo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedLogo]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedLogo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full pb-32 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-[1px] bg-(--graphic-bg-secondary) border-[0.5px] border-white/10">
        
        {logosData.map((logo) => (
          <LogoCard key={logo.id} logo={logo} onClick={setSelectedLogo} />
        ))}

      </div>

      {selectedLogo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 transition-opacity duration-300"
          onClick={() => setSelectedLogo(null)}
        >
          
          <button 
            onClick={() => setSelectedLogo(null)}
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
              src={selectedLogo.src} 
              alt={selectedLogo.name} 
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain border-[0.5px] border-white/20 shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]" 
            />
            
            <div className="absolute -bottom-8 md:-bottom-10 right-0 flex flex-col items-end">
               <span className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.4em]">
                 АРХИВ [ {selectedLogo.year} ]
               </span>
               <span className="font-mono text-[10px] md:text-xs text-white/60 uppercase tracking-widest mt-1">
                 {selectedLogo.name}
               </span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}