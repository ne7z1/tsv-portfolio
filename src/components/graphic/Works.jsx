"use client";

import { useState, useEffect, useRef } from "react";

const GalleryIntro = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollDistance = rect.height - windowHeight;
      let currentProgress = -rect.top / scrollDistance;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      setProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntroVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const posters = [
    { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop", initRot: -15, flyX: -120, flyY: -100 },
    { src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop", initRot: 10, flyX: 120, flyY: -80 },
    { src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop", initRot: -5, flyX: -100, flyY: 120 },
    { src: "https://images.unsplash.com/photo-1506744626753-1fa44df31c78?q=80&w=600&auto=format&fit=crop", initRot: 20, flyX: 150, flyY: 100 },
    { src: "https://images.unsplash.com/photo-1561214115-f2f114bc5921?q=80&w=600&auto=format&fit=crop", initRot: -25, flyX: -180, flyY: 20 },
  ];

  return (
    <div ref={containerRef} className="h-[250vh] w-full relative bg-[var(--graphic-bg-secondary)] z-30">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--graphic-bg-secondary)]">
    
        <div
          ref={contentRef}
          className={`w-full h-full flex flex-col transition-all duration-1000 ease-out ${
            isIntroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="w-full flex justify-end px-4 md:px-12 lg:px-[120px] pt-[10vh] md:pt-[15vh] shrink-0">
            <h2 className="text-[12vw] md:text-[80px] lg:text-[140px] leading-none text-[var(--graphic-text-primary)] pointer-events-none">
              <span className="font-extralight">ГАЛ</span>
              <span className="font-black">ЕРЕЯ</span>
            </h2>
          </div>

          <div className="flex-1 w-full flex items-center justify-center pb-[10vh]">
            <div className="relative w-[250px] h-[350px] md:w-[350px] md:h-[500px]">
              {posters.map((p, i) => (
                <div
                  key={i}
                  className="absolute inset-0 shadow-2xl transition-transform duration-75 ease-out"
                  style={{
                    transform: `
                      translate(${p.flyX * progress}vw, ${p.flyY * progress}vh) 
                      rotate(${p.initRot + (p.flyX * progress * 0.2)}deg)
                      scale(${1 + progress * 0.5})
                    `,
                    opacity: 1 - progress * 1.5,
                    zIndex: 10 - i
                  }}
                >
                  <img src={p.src} alt="Poster" className="w-full h-full object-cover rounded-md" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const TabItem = ({ id, part1, part2, hover1, hover2, activeTab, onClick }) => {
  const isActive = activeTab === id;
  return (
    <button onClick={() => onClick(id)} className="group flex cursor-pointer focus:outline-none">
      {isActive ? (
        <span className="font-black group-hover:font-extralight transition-all duration-300 ease-out">{part1}{part2}</span>
      ) : (
        <>
          <span className={`font-extralight ${hover1} transition-all duration-300 ease-out`}>{part1}</span>
          <span className={`font-extralight ${hover2} transition-all duration-300 ease-out`}>{part2}</span>
        </>
      )}
    </button>
  );
};

export default function Works() {
  const [activeTab, setActiveTab] = useState("logos");
  const logosRef = useRef(null);
  const brandingRef = useRef(null);
  const postersRef = useRef(null);

  const handleTabClick = (id) => {
    setActiveTab(id);
    const refs = { logos: logosRef, branding: brandingRef, posters: postersRef };
    if (refs[id]?.current) refs[id].current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-30% 0px -30% 0px", threshold: 0 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveTab(entry.target.id.replace("-section", ""));
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (logosRef.current) observer.observe(logosRef.current);
    if (brandingRef.current) observer.observe(brandingRef.current);
    if (postersRef.current) observer.observe(postersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="works">
      <GalleryIntro />
      <section className="w-full bg-[var(--graphic-bg-secondary)] text-[var(--graphic-text-primary)] flex relative z-10 [clip-path:inset(0)]">
        <div className="flex-1 flex flex-col items-center pl-4 md:pl-12 lg:pl-[120px] pr-4 lg:pr-12">
          
          <div id="logos-section" ref={logosRef} className="w-full min-h-screen flex items-center justify-center py-[100px]">
            <div className="w-full h-[60vh] border border-white/20 border-dashed rounded-2xl flex items-center justify-center">
              <span className="font-extralight text-2xl md:text-5xl opacity-30 uppercase tracking-widest text-center">Слайдер логотипов</span>
            </div>
          </div>
          
          <div id="branding-section" ref={brandingRef} className="w-full min-h-screen flex items-center justify-center py-[100px]">
            <div className="w-full h-[60vh] border border-white/20 border-dashed rounded-2xl flex items-center justify-center">
              <span className="font-extralight text-2xl md:text-5xl opacity-30 uppercase tracking-widest text-center">Кейсы брендинга</span>
            </div>
          </div>
          
          <div id="posters-section" ref={postersRef} className="w-full min-h-screen flex items-center justify-center py-[100px]">
            <div className="w-full h-[60vh] border border-white/20 border-dashed rounded-2xl flex items-center justify-center">
              <span className="font-extralight text-2xl md:text-5xl opacity-30 uppercase tracking-widest text-center">Сетка постеров</span>
            </div>
          </div>
          
        </div>
        
        <div className="sticky top-0 h-screen w-fit flex items-center justify-end pr-4 md:pr-12 lg:pr-[120px]">
          <div className="flex items-stretch h-fit py-8">
            <div className="w-[2px] md:w-[4px] bg-white mr-4 md:mr-8 shrink-0"></div>
            <nav className="flex uppercase tracking-widest" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "clamp(16px, 3.5vh, 40px)", gap: "clamp(16px, 4vh, 64px)" }}>
              <TabItem id="posters" activeTab={activeTab} onClick={handleTabClick} part1="ПОСТ" part2="ЕРЫ" hover1="group-hover:font-black" hover2="group-hover:font-extralight" />
              <TabItem id="branding" activeTab={activeTab} onClick={handleTabClick} part1="БРЕН" part2="ДИНГ" hover1="group-hover:font-black" hover2="group-hover:font-extralight" />
              <TabItem id="logos" activeTab={activeTab} onClick={handleTabClick} part1="ЛОГО" part2="ТИПЫ" hover1="group-hover:font-black" hover2="group-hover:font-extralight" />
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}