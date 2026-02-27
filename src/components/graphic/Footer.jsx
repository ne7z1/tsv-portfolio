"use client";

import Link from "next/link";
import { useState } from "react";

const FooterLink = ({ href, parts, className = "", target = "_self" }) => (
  <Link 
    href={href} 
    target={target}
    className={`group flex whitespace-nowrap w-fit ${className}`}
  >
    {parts.map((p, i) => (
      <span 
        key={i} 
        className={`${p.base} ${p.hover} transition-all duration-300 ease-out`}
      >
        {p.text}
      </span>
    ))}
  </Link>
);

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = "tsvdsg@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <footer id="contacts" className="w-full bg-[var(--graphic-bg-secondary)] text-[var(--graphic-text-primary)] py-[100px] lg:py-[150px] px-4 md:px-12 lg:px-[120px] flex justify-end">
      
      <div className="flex gap-4 md:gap-8 lg:gap-12">
        
        <div className="flex flex-col items-end text-[11vw] md:text-[80px] lg:text-[110px] leading-[0.85] tracking-tight uppercase">
          
          <Link 
            href="https://t.me/ne7z1"
            target="_blank"
            className="group flex flex-col items-end mb-12 lg:mb-16 w-fit cursor-pointer"
          >
            <span className="font-extralight group-hover:font-black transition-all duration-300 ease-out">
              НАПИСАТЬ
            </span>

            <span className="flex font-extralight group-hover:font-black transition-all duration-300 ease-out">
              МНЕ
              <span className="max-w-0 overflow-hidden group-hover:max-w-[1000px] transition-[max-width] duration-[1500ms] ease-out whitespace-nowrap">
                ЕЕЕЕЕЕЕЕ
              </span>
            </span>
          </Link>

          <div className="flex whitespace-nowrap w-fit cursor-default mb-6 lg:mb-10 opacity-90">
            <span className="font-extralight">КОНТ</span>
            <span className="font-black">АКТЫ</span>
          </div>

          <FooterLink href="https://career.habr.com/ne7z1" target="_blank" parts={[
            { text: "Х", base: "font-extralight", hover: "group-hover:font-black" },
            { text: "АААА", base: "font-black", hover: "group-hover:font-extralight" },
            { text: "БР", base: "font-extralight", hover: "group-hover:font-black" }
          ]} />

          <button 
            onClick={handleCopyEmail}
            className="group relative flex whitespace-nowrap w-fit cursor-pointer"
          >
            <span 
              className={`absolute top-1/2 right-full mr-4 lg:mr-8 -translate-y-1/2 text-sm lg:text-xl font-black tracking-normal normal-case bg-white text-black px-4 py-2 transition-all duration-300 ease-out ${
                isCopied ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              СКОПИРОВАНО!
            </span>
            
            <span className="font-black group-hover:font-extralight transition-all duration-300 ease-out">
              EMAIL
            </span>
          </button>

          <FooterLink href="http://github.com/ne7z1" target="_blank" parts={[
            { text: "GIT", base: "font-extralight", hover: "group-hover:font-black" },
            { text: "HUB", base: "font-black", hover: "group-hover:font-extralight" }
          ]} />

          <FooterLink href="https://www.behance.net/alexandbezdush" target="_blank" parts={[
            { text: "BE", base: "font-extralight", hover: "group-hover:font-black" },
            { text: "HANCE", base: "font-black", hover: "group-hover:font-extralight" }
          ]} />
          
        </div>

        <div 
          className="flex justify-between items-center text-xs md:text-sm lg:text-lg font-extralight tracking-[0.2em] pt-2 pb-2 text-white/50 select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span>© 2026 TSV.</span>
          <span>ЛОМАЙ СИСТЕМУ</span>
        </div>

      </div>
    </footer>
  );
}