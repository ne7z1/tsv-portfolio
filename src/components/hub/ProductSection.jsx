"use client";

import Button from "@/components/ui/Button";

export default function ProductSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 animate-in fade-in duration-700">
      
      <div className="flex flex-col items-start w-full max-w-[600px]">
        <h1 className="text-h2 md:text-h1 lg:text-h1 font-bold text-text-main leading-[1.1] tracking-h1 mb-l">
          Проектировщик<br />
          <span className="whitespace-nowrap">цифровых систем.</span>
        </h1>
        <Button variant="primary" href="/product" className="w-full md:w-auto">
          Портфолио
        </Button>
      </div>

      <div className="w-full max-w-[420px] shrink-0">
        <div className="w-full aspect-[4/5] bg-bg-third rounded-2xl overflow-hidden shadow-xl border border-black/5">
          <img 
            src="/hub/product-photo.webp"
            alt="TSV Product" 
            className="w-full h-full object-cover block" 
          />
        </div>
      </div>

    </div>
  );
}