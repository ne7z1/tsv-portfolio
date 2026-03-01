"use client";

import Posters from "./Works/Posters";
import Branding from "./Works/Branding";
import Logos from "./Works/Logos";

import { useState, useEffect, useRef } from "react";

// Твой компонент вкладок с крутым ховер-эффектом (оставил как есть)
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
    const observerOptions = { 
      root: null, 
      rootMargin: "-49% 0px -49% 0px", 
      threshold: 0 
    };
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id.replace("-section", ""));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (logosRef.current) observer.observe(logosRef.current);
    if (brandingRef.current) observer.observe(brandingRef.current);
    if (postersRef.current) observer.observe(postersRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="works" className="relative w-full bg-[var(--graphic-bg-secondary)]">

      <section className="w-full text-[var(--graphic-text-primary)] flex relative">
        
        <div className="flex-1 flex flex-col items-center pl-4 md:pl-12 lg:pl-[120px] pr-4 lg:pr-12">
          
          <div id="logos-section" ref={logosRef} className="w-full min-h-screen pt-[150px]">
            <Logos />
          </div>
          
          <div id="branding-section" ref={brandingRef} className="w-full min-h-screen pt-[100px]">
            <Branding />
          </div>
          
          <div id="posters-section" ref={postersRef} className="w-full min-h-screen pt-[100px]">
            <Posters />
          </div>
          
        </div>
        
        <div className="sticky top-0 h-screen w-fit flex items-center justify-end pr-4 md:pr-12 lg:pr-[120px] pointer-events-none z-40">
          <div className="flex items-stretch h-fit py-8 pointer-events-auto">
            <div className="w-[2px] md:w-[4px] bg-white mr-4 md:mr-8 shrink-0"></div>
            <nav className="flex uppercase tracking-widest text-white" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "clamp(16px, 3.5vh, 40px)", gap: "clamp(16px, 4vh, 64px)" }}>
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