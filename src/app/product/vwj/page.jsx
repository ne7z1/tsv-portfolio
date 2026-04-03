"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const BASE_PATH = "/works/product/vwj"; 

const caseData = {
  title: "vwj — Цифровое портфолио",
  type: "UX/UI | Web Design | 2026",
  
  hero: {
    subtitle: "Проектирование высокотехнологичной дизайн-системы для фотографа.",
    text: "Создал визуальный контент, который передает характер и атмосферу без лишних слов.",
    image: `${BASE_PATH}/hero.webp`, 
  },

  concept: {
    title: "Интерфейс как тихая рама.",
    text: "Основная задача — спроектировать платформу, где дизайн не доминирует над контентом, а служит его деликатным обрамлением. Создание ощущения «воздуха» при сохранении коммерческой эффективности.",
    image: `${BASE_PATH}/Featured Works.webp`, 
  },

  grid: {
    title: "12-колонная логика.",
    text: "Основа проекта — строгая модульная сетка. Это позволило создать асимметричную, но идеально сбалансированную раскладку «Избранного» в стиле дорогих журналов.",
    image: `${BASE_PATH}/сетка.webp`, 
  },

  atomic: {
    title: "Логика переменных и состояний.",
    text: "Разработка системы компонентов с использованием Auto Layout и Variables. Это гарантирует стабильный UX и предсказуемое поведение интерфейса при взаимодействии.",
    image: `${BASE_PATH}/Кнопки.webp`, 
  },

  services: {
    title: "Услуги и коммерческая эффективность.",
    text: "Создание универсальных карточек услуг (Индивидуальная, Групповая, Коммерческая). Кнопки «Заказать» всегда привязаны к нижней границе, независимо от объема текста, что сохраняет визуальный порядок.",
    image: `${BASE_PATH}/Services.webp`, 
  },

  tech: {
    title: "Прозрачность процесса.",
    text: "Интеграция системы тегов с описанием оборудования подчеркивает профессионализм и техническую подкованность автора.",
    image: `${BASE_PATH}/About.webp`, 
  },

  adaptive: {
    title: "Воздух на любых экранах.",
    text: "Интерфейс адаптируется под любые разрешения без потери «воздуха». Все тач-области оптимизированы под стандарты доступности.",
    images: [
      `${BASE_PATH}/Services_mob.webp`,
      `${BASE_PATH}/Featured Works_mob.webp`,
    ],
  },

  results: [
    { value: "12", label: "Колонок — основа журнальной верстки" },
    { value: "100%", label: "Компонентов собраны на переменных (Atomic Design)" },
    { value: "UX", label: "Фокус на сокращение пути до записи на съемку" },
    { value: "Воздух", label: "Не просто портфолио, а функциональный инструмент" },
  ]
};

export default function WyleryCase() {
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

        {/* обложка */}
        <section className="flex flex-col gap-m w-full">
          <div className="flex flex-col gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
              {caseData.title}
            </h1>
            <p className="text-h3 font-medium text-text-main/60">
              {caseData.type}
            </p>
            <p className="text-body font-normal text-text-main max-w-[800px] mt-2">
              <span className="font-semibold">{caseData.hero.subtitle}</span>
              <br/>
              {caseData.hero.text}
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden drop-shadow-2xl mt-4">
            <img src={caseData.hero.image} alt="vwj Hero" className="w-full h-auto block object-cover" />
          </div>
        </section>

        {/* задча */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8 lg:pt-12">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.concept.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.concept.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
             <img src={caseData.concept.image} alt="Frame vs Content" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* сетка */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center relative w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:order-2">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.grid.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.grid.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start py-8 lg:order-1">
            <img src={caseData.grid.image} alt="12 Column Grid" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* кнопки */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.atomic.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.atomic.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
             <img src={caseData.atomic.image} alt="Atomic Design Buttons" className="w-full max-w-[500px] h-auto block drop-shadow-2xl rounded-xl bg-white" />
          </div>
        </section>

        {/* услуги */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.services.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.services.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.services.image} alt="Services Cards" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* обо мне */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:order-2">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.tech.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.tech.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start py-8 lg:order-1">
             <img src={caseData.tech.image} alt="Tech Stack and About" className="w-full max-w-[500px] h-auto block drop-shadow-2xl rounded-xl bg-white" />
          </div>
        </section>

        {/* адпатив */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.adaptive.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.adaptive.text}
            </p>
          </div>
          
          <div className="w-full flex flex-col items-center lg:items-end gap-16 lg:gap-24 py-8">
            {caseData.adaptive.images.map((img, i) => (
              <img key={i} src={img} alt={`Mobile Screen ${i}`} className="max-w-[320px] w-full h-auto block drop-shadow-2xl rounded-[32px] bg-white" />
            ))}
          </div>
        </section>

        {/* Итоги */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8 lg:pt-12">
          <div className="flex flex-col gap-s max-w-[800px]">
             <h2 className="text-h2 font-semibold text-text-main">
              Инструмент, а не просто картинка.
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-m gap-x-l w-full">
            {caseData.results.map((item, index) => (
              <div key={index} className="flex flex-col gap-xs">
                <span className="text-[48px] lg:text-[64px] font-bold text-btn-primary tracking-h1 leading-none">
                  {item.value}
                </span>
                <span className="text-body font-normal text-text-main max-w-[300px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap items-center gap-s pt-m w-full border-t border-[#CBD5E1]/50 mt-4">
          <Button variant="secondary" href="/product#cases" className="w-full md:w-auto">
            Все проекты
          </Button>
          <Button variant="primary" href="/product/analyticshub" showIcon={false} className="w-full md:w-auto">
            Следующий кейс
          </Button>
        </section>

      </article>
    </main>
  );
}