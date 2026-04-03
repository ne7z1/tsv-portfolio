"use client";

import { useState } from "react";

const AnimatedSplitButton = ({ left, right, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const leftWeight = isHovered ? 900 : 200;
  const rightWeight = isHovered ? 200 : 900;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group flex items-center justify-center flex-1
        transition-all duration-200
        ${isActive 
          ? "bg-(--graphic-bg-primary) text-white rounded-none" 
          : "text-white"
        }
        px-4 md:px-6 py-3 text-[18px] md:text-[32px] font-unbounded leading-none
      `}
      style={{ lineHeight: 1 }}
    >
      <span
        style={{
          fontVariationSettings: `"wght" ${leftWeight}`,
          fontWeight: leftWeight,
          transition: "font-variation-settings 0.2s ease-out, font-weight 0.2s ease-out",
          willChange: "font-variation-settings, font-weight",
        }}
      >
        {left}
      </span>
      <span
        style={{
          fontVariationSettings: `"wght" ${rightWeight}`,
          fontWeight: rightWeight,
          transition: "font-variation-settings 0.2s ease-out, font-weight 0.2s ease-out",
          willChange: "font-variation-settings, font-weight",
        }}
      >
        {right}
      </span>
    </button>
  );
};

export default function HubToggle({ mode, setMode }) {
  return (
    <div
      className={`
        mx-auto w-full transition-all duration-500 ease-in-out
        ${mode === "product"
          ? "w-auto md:max-w-[400px] bg-bg-secondary rounded-2xl shadow-sm"
          : "w-full md:w-[626px] bg-(--graphic-bg-secondary)"
        }
        p-3
      `}
    >
      <div
        className={`
          flex items-center gap-4
          ${mode === "product" ? "h-[52px]" : ""}
        `}
      >
        {mode === "product" ? (
          <>
            <button
              onClick={() => setMode("product")}
              className="flex-1 h-full rounded-lg bg-btn-primary text-btn-primary-text text-[16px] md:text-[18px] font-semibold shadow-lg flex items-center justify-center transition-all duration-200 whitespace-nowrap"
            >
              Продукт
            </button>
            <button
              onClick={() => setMode("graphic")}
              className="flex-1 h-full rounded-lg border-[2px] border-transparent font-semibold text-[16px] md:text-[18px] text-btn-secondary-text flex items-center justify-center transition-all duration-200 hover:border-btn-secondary-border hover:bg-btn-secondary-hover hover:text-btn-secondary-hover-text whitespace-nowrap"
            >
              Графика
            </button>
          </>
        ) : (
          <>
            <AnimatedSplitButton
              left="Про"
              right="дукт"
              onClick={() => setMode("product")}
              isActive={false}
            />
            <AnimatedSplitButton
              left="Гра"
              right="фика"
              onClick={() => setMode("graphic")}
              isActive={true}
            />
          </>
        )}
      </div>
    </div>
  );
}