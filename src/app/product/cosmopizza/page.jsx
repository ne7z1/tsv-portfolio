"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const BASE_PATH = "/works/product/cosmopizza"; 

const caseData = {
  title: "КосмоПицца",
  type: "UX/UI | Mobile App | 2026",
  
  hero: {
    subtitle: "Разработка интеллектуальной системы доставки для космического бренда.",
    text: "Акцент на автоматизации данных и премиальном визуальном опыте.",
  },

  concept: {
    title: "Дизайн, управляемый данными.",
    text: "Основная задача — спроектировать масштабируемое приложение, где дизайн управляется данными, а не просто отрисован вручную.",
    image: `${BASE_PATH}/1. Каталог.webp`,
  },

  engineering: {
    title: "Figma Variables и 130+ комбинаций товаров.",
    text: "Внедрение продвинутой системы переменных для управления контентом и логикой приложения.",
    images: [
      `${BASE_PATH}/2. Список товаров.webp`,
      `${BASE_PATH}/3. Карточка товара.webp`,
    ],
  },

  math: {
    title: "Инженерия дизайна и динамическая логика.",
    text: "Математическая модель суммирования топингов через Сonditional Logic и автоматический расчет цены, веса и БЖУ в зависимости от размера (25/30/35 см).",
    video: `${BASE_PATH}/Варианты.mp4`,
  },

  visual: {
    title: "Визуальное разнообразие и читаемость.",
    bullets: [
      { label: "Типографика", text: "Использование шрифта SF Pro для идеальной читаемости интерфейса." },
      { label: "Цвета", text: "Глубокий космический фон (#0B0B1A) и неоновый фиолетовый (#7861FF) для акцентов." },
      { label: "Ассеты", text: "Более 25 уникальных графических ассетов, созданных для проекта." },
    ],
    // Ассеты вставляются как есть, без теней
    image: `${BASE_PATH}/ассеты1.webp`,
  },

  states: {
    title: "Проработка пользовательского опыта.",
    bullets: [
      { label: "Upsell", text: "Внедрена логика дополнительных продаж для увеличения среднего чека." },
      { label: "States", text: "Экраны «Заказ оформлен» и «Тут еще более пусто» (пустая корзина)." },
    ],
    images: [
      `${BASE_PATH}/4. Корзина.webp`,
      `${BASE_PATH}/4.1 Корзина - пусто.webp`,
      `${BASE_PATH}/5. Оформление заказа.webp`,
      `${BASE_PATH}/Заказ оформлен.webp`, // Этот файл будет отрендерен без теней
    ],
  },

  results: [
    { value: "130+", label: "Комбинаций товаров под управлением переменных" },
    { value: "100%", label: "Автоматизация расчета цены и БЖУ" },
    { value: "7+", label: "Видов пицц с мгновенным переключением контента" },
    { value: "Живая", label: "Дизайн-система, готова к интеграции с API" },
  ]
};

export default function CosmoPizzaCase() {
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
        <section className="flex flex-col gap-m lg:gap-l w-full">
          <div className="flex flex-col gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
              {caseData.title}
            </h1>
            <p className="text-h3 font-medium text-text-main/70">
              {caseData.type}
            </p>
            <p className="text-body font-normal text-text-main/80 max-w-[800px] mt-2">
              <span className="font-semibold text-text-main">{caseData.hero.subtitle}</span>
              <br/>
              {caseData.hero.text}
            </p>
          </div>
        </section>

        {/* концепция */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.concept.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.concept.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
             <img src={caseData.concept.image} alt="Data Driven UI" className="max-w-[320px] w-full h-auto block drop-shadow-2xl rounded-[32px]" />
          </div>
        </section>

        {/* интерактивность */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full">
          <div className="flex flex-col gap-s w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.engineering.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.engineering.text}
            </p>
          </div>
          <div className="w-full flex flex-col items-center lg:items-end gap-16 lg:gap-24 py-8">
            {caseData.engineering.images.map((img, i) => (
              <img key={i} src={img} alt={`Long Screen ${i}`} className="max-w-[320px] w-full h-auto block drop-shadow-2xl rounded-[32px]" />
            ))}
          </div>
        </section>

        {/* математика */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:order-2">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.math.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.math.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8 lg:order-1">
             <div className="max-w-[320px] w-full drop-shadow-2xl rounded-[52px] overflow-hidden bg-transparent">
               <video 
                  src={caseData.math.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto block scale-[1.01]"
               />
             </div>
          </div>
        </section>

        {/* ассеты */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l w-full items-center">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.visual.title}
            </h2>
            <div className="flex flex-col gap-4">
              {caseData.visual.bullets.map((bullet, i) => (
                <p key={i} className="text-body font-normal text-text-main/80 leading-relaxed">
                  <span className="font-semibold text-text-main">{bullet.label}:</span> {bullet.text}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end py-8">
            <img src={caseData.visual.image} alt="Visual Assets" className="w-full max-w-[500px] h-auto block" />
          </div>
        </section>

        {/* краевые состояния */}
        <section className="flex flex-col gap-m lg:gap-l w-full">
          <div className="flex flex-col gap-m max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.states.title}
            </h2>
            <div className="flex flex-col gap-2">
              {caseData.states.bullets.map((bullet, i) => (
                <p key={i} className="text-body font-normal text-text-main/80 leading-relaxed">
                  <span className="font-semibold text-text-main">{bullet.label}:</span> {bullet.text}
                </p>
              ))}
            </div>
          </div>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            {caseData.states.images.map((img, i) => {
              const isRawAsset = img.includes("Заказ оформлен");
              
              return (
                <div key={i} className="flex justify-center items-center">
                  <img 
                    src={img} 
                    alt={`State Screen ${i}`} 
                    className={`w-full h-auto block ${isRawAsset ? '' : 'max-w-[280px] lg:max-w-full drop-shadow-2xl rounded-[32px]'}`} 
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* итог */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-l">
          <h2 className="text-h2 font-semibold text-text-main">
            Итог работы
          </h2>
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

        <section className="flex flex-wrap items-center gap-s pt-l mt-m border-t border-[#CBD5E1]/50 w-full">
          <Button variant="secondary" href="/product#cases" className="w-full md:w-auto">
            Все проекты
          </Button>
          <Button variant="primary" href="/product/carnavalvpn" showIcon={false} className="w-full md:w-auto">
            Следующий кейс
          </Button>
        </section>

      </article>
    </main>
  );
}