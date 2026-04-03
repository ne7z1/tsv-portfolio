"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const BASE_PATH = "/works/product/tsv";


const caseData = {
  title: "TSV — Архитектура дуальности",
  type: "UX/UI | Web Design | 2026",

  hero: {
    subtitle: "Проектирование интерактивного хаба на стыке системной логики и графического хаоса.",
    text: "Создана платформа, способная мгновенно менять свою ДНК: от стерильного продуктового интерфейса до экспрессивного визуального шума.",
    imageLeft: `${BASE_PATH}/hero_product.webp`,   // левая часть или первое изображение
    imageRight: `${BASE_PATH}/hero_graphic.webp`,   // правая часть
  },

  concept: {
    title: "Задача и Решение",
    text: "Спроектировать платформу, способную мгновенно менять свою ДНК: от стерильного продуктового интерфейса до экспрессивного визуального шума. Решение: разработка системы, управляемой состояниями (States). Использование единой базы данных для контента и радикально разных CSS-архитектур для его отображения.",
    image: `${BASE_PATH}/toggle_switch.webp`,
  },

  identityProduct: {
    title: "Личность I — Архитектор",
    subtitle: "Стерильность и структура.",
    text: "В этом режиме интерфейс служит «тихой рамой» для контента. Акцент на типографике, больших отступах и ощущении премиальной чистоты.",
    image: `${BASE_PATH}/hub_product.webp`,
  },

  grid: {
    title: "Инженерия порядка",
    subtitle: "Система, а не случайность.",
    text: "Продуктовая часть полностью спроектирована в Figma с использованием Variables и Auto Layout. Это обеспечило 100% точность переноса системной логики в живой код.",
    image: `${BASE_PATH}/cases_product.webp`,
  },

  atomic: {
    title: "Атомарная логика",
    text: "Разработана библиотека компонентов с четкими состояниями (Default, Hover, Active). Каждый элемент следует строгой иерархии и правилам масштабирования.",
    image: `${BASE_PATH}/buttons.webp`,
  },

  // Только графика
  identityGraphic: {
    title: "Личность II — Демон",
    subtitle: "Деконструкция и Шум.",
    text: "Отказ от системных правил в пользу чистого визуала. Этот режим был рожден и доработан непосредственно внутри кода, превращая интерфейс в акт цифрового искусства.",
    image: `${BASE_PATH}/hub_graphic.webp`,
  },

  chaos: {
    title: "Управляемый хаос",
    subtitle: "Эстетика ошибки.",
    text: "В отличие от продуктовой части, графический режим — это результат экспериментов с кодом. Использование AI для генерации структуры и ручная полировка отступов для достижения идеального «сломанного» вида.",
    imageCases: `${BASE_PATH}/cases_graphic.webp`,
    imageFooter: `${BASE_PATH}/footer_graphic.webp`,
  },

  uxDuality: {
    title: "Опыт взаимодействия",
    subtitle: "Внимание к деталям.",
    text: "Даже технические страницы поддерживают общую концепцию. Пользователь никогда не покидает выбранную им «вселенную», даже сталкиваясь с системными уведомлениями.",
    image404Product: `${BASE_PATH}/404_product.webp`,
    image404Graphic: `${BASE_PATH}/404_graphic.webp`,
    imagePoliticProduct: `${BASE_PATH}/politic_product.webp`,
    imagePoliticGraphic: `${BASE_PATH}/politic_graphic.webp`,
  },

  stack: {
    title: "Инженерный подход",
    text: "Я не просто рисую интерфейсы — я оркеструю их создание. В моем арсенале: Figma (системы и переменные), понимание основ фронтенда (HTML/CSS), работа с ИИ для ускорения разработки и английский B2.",
    image: `${BASE_PATH}/about_product.webp`,
  },

  responsive: {
    title: "Адаптивность",
    subtitle: "Доступность на любых экранах.",
    text: "Система сохраняет свою дуальность и удобство использования независимо от устройства. Все тач-области и шрифты оптимизированы под мобильный UX.",
    images: [
      `${BASE_PATH}/hero_product_mobile.webp`,
      `${BASE_PATH}/hero_graphic_mobile.webp`,
    ],
  },

  results: [
    { value: "2", label: "Режима с единым контентом" },
    { value: "100%", label: "Точность переноса системной логики в код" },
    { value: "AI", label: "Ускорение разработки графической части" },
    { value: "VPS", label: "Самостоятельный деплой и хостинг" },
  ],
};

export default function TsvCase() {
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

        {/* Обложка: два изображения без подписей */}
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
              <br />
              {caseData.hero.text}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <img src={caseData.hero.imageLeft} alt="Hero Product" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            <img src={caseData.hero.imageRight} alt="Hub Graphic" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Задача и Решение (Toggle) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8 lg:pt-12">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.concept.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.concept.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
            <img src={caseData.concept.image} alt="Toggle Switch" className="w-full max-w-[400px] h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Личность I — Продукт */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.identityProduct.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.identityProduct.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.identityProduct.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.identityProduct.image} alt="Product Mode" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Инженерия порядка */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.grid.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.grid.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.grid.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
            <img src={caseData.grid.image} alt="Grid System" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Атомарная логика */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:order-2">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.atomic.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.atomic.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start py-8 lg:order-1">
            <img src={caseData.atomic.image} alt="Buttons" className="w-full max-w-[600px] h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Личность II — Демон (только графика) */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.identityGraphic.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.identityGraphic.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.identityGraphic.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.identityGraphic.image} alt="Graphic Mode" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Управляемый хаос: cases_graphic + footer_graphic */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.chaos.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.chaos.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.chaos.text}
            </p>
          </div>
          <div className="w-full flex flex-col gap-6">
            <img src={caseData.chaos.imageCases} alt="Graphic Cases" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            <img src={caseData.chaos.imageFooter} alt="Graphic Footer" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Опыт взаимодействия: 404 и политика в двух режимах */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start w-full">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.uxDuality.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.uxDuality.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.uxDuality.text}
            </p>
          </div>
          <div className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              <img src={caseData.uxDuality.image404Product} alt="404 Product" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
              <img src={caseData.uxDuality.image404Graphic} alt="404 Graphic" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={caseData.uxDuality.imagePoliticProduct} alt="Privacy Product" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
              <img src={caseData.uxDuality.imagePoliticGraphic} alt="Privacy Graphic" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            </div>
          </div>
        </section>

        {/* Стек и роль */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.stack.title}
            </h2>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.stack.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.stack.image} alt="About" className="w-full max-w-[600px] h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.responsive.title}
            </h2>
            <p className="text-h3 font-medium text-text-main/80">
              {caseData.responsive.subtitle}
            </p>
            <p className="text-body font-normal text-text-main/80 leading-relaxed">
              {caseData.responsive.text}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {caseData.responsive.images.map((img, i) => (
              <img key={i} src={img} alt="" className="w-full max-w-[320px] mx-auto h-auto block drop-shadow-2xl rounded-[32px]" />
            ))}
          </div>
        </section>

        {/* Итог */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-l">
          <h2 className="text-h2 font-semibold text-text-main">Результат</h2>
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

        {/* Навигация */}
        <section className="flex flex-wrap items-center gap-s pt-l mt-m border-t border-[#CBD5E1]/50 w-full">
          <Button variant="secondary" href="/product#cases" className="w-full md:w-auto">
            Все проекты
          </Button>
          <Button variant="primary" href="/product/vwj" showIcon={false} className="w-full md:w-auto">
            Следующий кейс
          </Button>
        </section>
      </article>
    </main>
  );
}