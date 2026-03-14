"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const caseData = {
  title: "AnalyticsHub",
  type: "UX/UI | Desktop App | 2026",
  
  images: {
    hero: "/works/product/analyticshub/Dashboard.webp",
    problem: "/works/product/analyticshub/Data.webp",
    solution: "/works/product/analyticshub/схема.webp",
  },

  problem: {
    title: "Устаревший подход к отчётам заставлял аналитиков ждать разработчиков днями",
    text: "Аналитики тратили до 40% рабочего времени на ручной сбор данных из Excel-файлов, CSV и разных SQL-баз. Каждый новый запрос KPI или изменение фильтра требовали участия разработчика – цикл согласования растягивался на часы, а то и дни. Бизнес не успевал реагировать на изменения рынка.",
  },

  solution: {
    title: "AnalyticsHub – единая low-code среда для работы с данными",
    text: "Я спроектировал десктоп-приложение, которое объединяет локальные файлы и удалённые SQL-базы в одном интерфейсе. Аналитик получает гибкий конструктор виджетов и отчётов без необходимости писать код.",
  },

  results: [
    { value: "До 80%", label: "Сокращение времени подготовки отчётов" },
    { value: "100%", label: "Без кода и гибкость метрик" },
    { value: "3 Клика", label: "Время настройки нового виджета" },
    { value: "5+", label: "Поддерживаемых источников данных" },
  ]
};

export default function AnalyticsHubCase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className={`w-full min-h-screen pt-[100px] lg:pt-[120px] pb-xl transition-opacity duration-700 ease-out ${mounted ? "opacity-100" : "opacity-0"}`}>
      
      <article className="w-full max-w-[1440px] mx-auto px-s md:px-s12 lg:px-xl flex flex-col gap-xl">
        
        <div className="w-full flex justify-start -mb-m lg:-mb-l">
          <Button variant="text" href="/product#cases" className="-ml-s relative z-10">
            Назад к кейсам
          </Button>
        </div>

        <section className="flex flex-col gap-m lg:gap-l w-full">
          <div className="flex flex-col gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
              {caseData.title}
            </h1>
            <p className="text-h3 font-medium text-text-main/70">
              {caseData.type}
            </p>
          </div>
          <div className="w-full bg-bg-third rounded-lg overflow-hidden">
            <img src={caseData.images.hero} alt="AnalyticsHub Cover" className="w-full h-auto block" />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.problem.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.problem.text}
            </p>
          </div>
          <div className="w-full bg-bg-third rounded-lg overflow-hidden">
             <img src={caseData.images.problem} alt="Problem UI" className="w-full h-auto block" />
          </div>
        </section>

        <section className="flex flex-col gap-m lg:gap-l w-full">
          <div className="flex flex-col gap-s ">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.solution.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.solution.text}
            </p>
          </div>
          <div className="w-full bg-bg-third rounded-lg overflow-hidden">
            <img src={caseData.images.solution} alt="Solution UI" className="w-full h-auto block" />
          </div>
        </section>

        <section className="flex flex-col gap-m lg:gap-l w-full">
          <h2 className="text-h2 font-semibold text-text-main">
            Результат
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-m gap-x-l w-full">
            {caseData.results.map((item, index) => (
              <div key={index} className="flex flex-col gap-xs">
                <span className="text-[48px] lg:text-[64px] font-bold text-btn-primary tracking-h1 leading-none">
                  {item.value}
                </span>
                <span className="text-body font-normal text-text-main">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap items-center gap-s pt-l mt-m border-t border-[#CBD5E1]/50 w-full">
          <Button variant="secondary" href="/product#cases">
            Все проекты
          </Button>
          <Button variant="primary" href="/product/cosmopizza" showIcon={false}>
            Следующий кейс
          </Button>
        </section>

      </article>
    </main>
  );
}