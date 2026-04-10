"use client";

import { useState } from "react";
import CaseCard from "@/components/ui/CaseCard";
import Button from "@/components/ui/Button";

export default function Cases() {
  const casesData = [
    { title: "ПРОЕКТ: TSV.", tags: ["UX/UI", "Web", "2026"], image: "/works/product/tsv/Cover.webp", href: "/product/tsv"},
    { title: "Портфолио vwj", tags: ["UX/UI", "Web", "2026"], image: "/works/product/vwj/Обложка.webp", href: "/product/vwj"},
    { title: "AnalyticsHub", tags: ["UX/UI", "Desktop", "2026"], image: "/works/product/analyticshub/COVER.webp", href: "/product/analyticshub"},
    { title: "КосмоПицца", tags: ["UX/UI", "Mobile", "2026"], image: "/works/product/cosmopizza/Обложка.webp", href: "/product/cosmopizza"}, 
    { title: "CarnavalVPN", tags: ["UX/UI", "Web", "2026"], image: "/works/product/carnavalvpn/Cover.webp", href: "/product/carnavalvpn"},
  ];

  const types = ["Все", "Web", "Desktop", "Mobile"];
  const [activeType, setActiveType] = useState("Все");

  const filteredCases = casesData.filter(project => {
    if (activeType !== "Все" && !project.tags.includes(activeType)) return false;
    return true;
  });

  return (
    <section id="cases" className="block w-full max-w-360 mx-auto px-s md:px-s12 lg:px-xl">
      <div className="mb-6 lg:mb-16">
        <h2 className="text-h2 font-semibold text-text-main">Проекты</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-3 py-1 text-caption font-medium rounded-lg transition-all duration-200 ${
              activeType === type
                ? "bg-btn-primary text-btn-primary-text shadow-md"
                : "bg-transparent text-text-main/70 hover:text-text-main border border-[#CBD5E1]/50"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {filteredCases.length === 0 ? (
          <p className="text-body text-text-main/70">Нет проектов по выбранному фильтру</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-l lg:gap-x-m gap-y-s lg:gap-y-m">
            {filteredCases.map((project, index) => (
              <CaseCard 
                key={index} 
                title={project.title} 
                tags={project.tags} 
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-s mt-6 lg:mt-16">
        <Button variant="primary" href="#contacts" className="w-full md:w-70">
          Написать мне
        </Button>
        <Button variant="secondary" href="/graphic" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto" showIcon={true}>
          Портфолио графики
        </Button>
      </div>
    </section>
  );
}