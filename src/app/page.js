"use client";

import { useState } from "react";
import HubToggle from "@/components/hub/HubToggle";
import GraphicSection from "@/components/hub/GraphicSection";
import ProductSection from "@/components/hub/ProductSection";

export default function HubPage() {
  const [mode, setMode] = useState("product");

  return (
    <main 
      className={`min-h-screen w-full flex flex-col justify-center items-center transition-colors duration-700 overflow-hidden
      ${mode === "product" ? "bg-bg-primary" : "bg-[var(--graphic-bg-primary)]"}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px] flex flex-col items-center py-[100px]">
        
        <div className="mb-12 lg:mb-16">
          <img 
            src={mode === "product" ? "/Logo.svg" : "/logo2.svg"} 
            alt="TSV." 
            className="h-8 md:h-10 lg:h-12 w-auto block transition-all duration-500" 
          />
        </div>

        <div className="mb-16 lg:mb-24 w-full flex justify-center">
          <HubToggle mode={mode} setMode={setMode} />
        </div>

        <div className="w-full relative">
          {mode === "product" && <ProductSection />}
          {mode === "graphic" && <GraphicSection />}
        </div>

      </div>
    </main>
  );
}