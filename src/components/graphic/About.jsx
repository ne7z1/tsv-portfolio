"use client";

import { useEffect, useRef, useState } from "react";

const HoverLine = ({ p1, p2, w1, w2, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0); 
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false); 
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;

      const startMelt = 150; 
      const endMelt = 0;   

      if (top > startMelt) {
        setProgress(0);
      } else if (top < endMelt) {
        setProgress(1);
      } else {
        setProgress((startMelt - top) / (startMelt - endMelt));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let base1 = isHovered ? (w1 === 900 ? 200 : 900) : w1;
  let base2 = isHovered ? (w2 === 900 ? 200 : 900) : (w2 || 200);

  const currentW1 = base1 - (base1 - 200) * progress;
  const currentW2 = base2 - (base2 - 200) * progress;
  const currentOpacity = isVisible ? 1 - progress : 0;

  const transitionStyle = progress === 0 
    ? `transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? delay : 0}ms, opacity 0.8s ease-out ${isVisible ? delay : 0}ms`
    : "none";

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: currentOpacity,
        transition: transitionStyle,
      }}
      className={`flex flex-wrap cursor-default ${
        isVisible ? "translate-y-0" : "translate-y-16"
      }`}
    >
      {p1 && (
        <span
          style={{ 
            fontWeight: currentW1, 
            transition: progress === 0 ? "font-weight 0.3s ease-out" : "none" 
          }}
          className="inline-block"
        >
          {p1}
        </span>
      )}
      {p2 && (
        <span
          style={{ 
            fontWeight: currentW2, 
            transition: progress === 0 ? "font-weight 0.3s ease-out" : "none" 
          }}
          className="inline-block"
        >
          {p2}
        </span>
      )}
    </div>
  );
};

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col justify-center max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] py-[100px] lg:py-[200px]"
    >
      <div className="flex flex-col uppercase text-[12vw] md:text-[80px] lg:text-[128px] leading-[1.1] lg:leading-[120px] tracking-tight">
        <HoverLine p1={"Я НЕ\u00A0"} p2="ПРОСТО" w1={900} w2={200} delay={0} />
        <HoverLine p1="РИСУЮ" w1={900} delay={100} />
        <HoverLine p1="КАРТИН" p2="КИ." w1={200} w2={900} delay={200} />
        <HoverLine p1="Я" w1={900} delay={300} />
        <HoverLine p1="ПРОЕКТ" p2="ИРУЮ" w1={200} w2={900} delay={400} />
        <HoverLine p1="ЭМО" p2="ЦИИ." w1={200} w2={900} delay={500} />
      </div>
    </section>
  );
}