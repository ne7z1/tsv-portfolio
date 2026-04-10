"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const BASE_PATH = "/works/product/carnavalvpn";

const caseData = {
  title: "Carnaval VPN",
  type: "UX/UI | Web Interface | 2026",

  hero: {
    image: `${BASE_PATH}/1.1 Welcome.webp`,
  },

  concept: {
    title: "Эстетика кода",
    text: "Интерфейс как оболочка безопасности. Мы отказались от визуального шума в пользу функциональной чистоты. Терминал — это не просто стиль. Это метафора полного контроля.",
    image: `${BASE_PATH}/1.2 about.webp`,
  },

  atomic: {
    title: "Атомарный дизайн",
    text: "Разработана система компонентов с четкими состояниями: статусы серверов, индикаторы нагрузки, карточки подписок и реферальная система. Каждый элемент следует строгой логике терминального интерфейса.",
    image: `${BASE_PATH}/3. Дизайн система.webp`,
  },

  landing: {
    title: "Точка доступа",
    text: "Вход в систему должен быть мгновенным. Никаких лишних шагов. Только протокол. Лендинг объединяет welcome-экран, проблемные сценарии пользователей, тарифы и статус сети в единую точку входа.",
    images: [
      `${BASE_PATH}/1.1 Welcome.webp`,
      `${BASE_PATH}/1.2 about.webp`,
      `${BASE_PATH}/1.3 Price.webp`,
      `${BASE_PATH}/1.4 Servers.webp`,
    ],
  },

  system: {
    title: "Система",
    text: "Кабинет — это центр управления. Пользователь видит только данные. Всё лишнее — скрыто. Личный кабинет объединяет подписки, реферальную программу и управление доступом в едином интерфейсе.",
    images: [
      `${BASE_PATH}/4.1 Personal acccount.webp`,
      `${BASE_PATH}/4.2 Refferal.webp`,
    ],
  },

  forms: {
    title: "Состояние входа",
    text: "Регистрация и Авторизация. Формы входа спроектированы по принципу терминала: минимальное количество полей, четкая валидация и мгновенная обратная связь через статусы [ERROR] и [SUCCESS].",
    images: [
      `${BASE_PATH}/Register.webp`,
      `${BASE_PATH}/Login.webp`,
    ],
  },

  support: {
    title: "Поддержка",
    text: "Фильтр запросов. Мы научили систему отличать сбой сети от некомпетентности. Чек-лист самодиагностики решает проблему в 80% случаев до обращения в саппорт.",
    image: `${BASE_PATH}/4.3 tech.webp`,
  },

  notifications: {
    title: "Уведомления",
    text: "SUCC — WARN — INFO — ERR. Система уведомлений с четырьмя уровнями приоритета: успешная оплата, предупреждение об истечении подписки, технические работы и ошибки оплаты с возможностью повторить.",
    image: `${BASE_PATH}/4.4 notification (все).webp`,
  },

  emptyStates: {
    title: "Сессия не найдена",
    text: "Даже пустые состояния поддерживают общую концепцию. Empty State для уведомлений и подписок выдержаны в единой стилистике терминала.",
    image404: `${BASE_PATH}/404.webp`,
    images: [
      `${BASE_PATH}/4.1.1 Personal acccount (пустое).webp`,
      `${BASE_PATH}/4.4.3 (пусто) notification.webp`,
    ],
  },

  results: [
    { value: "100%", label: "Функциональной чистоты без визуального шума" },
    { value: "80%", label: "Проблем решается самодиагностикой" },
    { value: "4", label: "Уровня приоритета уведомлений" },
    { value: "UI", label: "Терминальная эстетика в каждой детали" },
  ],
};

export default function CarnavalVpnCase() {
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

        {/* Обложка */}
        <section className="flex flex-col gap-m w-full">
          <div className="flex flex-col gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
              {caseData.title}
            </h1>
            <p className="text-h3 font-medium text-text-main/60">
              {caseData.type}
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden drop-shadow-2xl mt-4">
            <img src={caseData.hero.image} alt="Carnaval VPN Hero" className="w-full h-auto block object-cover" />
          </div>
        </section>

        {/* Эстетика кода */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center relative w-full pt-8 lg:pt-12">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.concept.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.concept.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
            <img src={caseData.concept.image} alt="Concept" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Атомарный дизайн */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.atomic.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.atomic.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.atomic.image} alt="Atomic Design" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Точка доступа — лендинг */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="w-full flex flex-col gap-8 py-8">
            {caseData.landing.images.map((img, i) => (
              <img key={i} src={img} alt={`Landing Screen ${i}`} className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            ))}
          </div>
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.landing.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.landing.text}
            </p>
          </div>
        </section>

        {/* Система — кабинет */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.system.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.system.text}
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 py-8">
            {caseData.system.images.map((img, i) => (
              <img key={i} src={img} alt={`System Screen ${i}`} className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            ))}
          </div>
        </section>

        {/* Формы входа */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.forms.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.forms.text}
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 py-8">
            {caseData.forms.images.map((img, i) => (
              <img key={i} src={img} alt={`Form Screen ${i}`} className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            ))}
          </div>
        </section>

        {/* Поддержка */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.support.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.support.text}
            </p>
          </div>
          <div className="w-full flex justify-center py-8">
            <img src={caseData.support.image} alt="Support" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Уведомления */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-center relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.notifications.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.notifications.text}
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-end py-8">
            <img src={caseData.notifications.image} alt="Notifications" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
          </div>
        </section>

        {/* Пустые состояния */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-l items-start relative w-full pt-8">
          <div className="flex flex-col gap-m w-full lg:pr-l lg:sticky lg:top-[120px]">
            <h2 className="text-h2 font-semibold text-text-main">
              {caseData.emptyStates.title}
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed">
              {caseData.emptyStates.text}
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 py-8">
            <img src={caseData.emptyStates.image404} alt="404 Page" className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            {caseData.emptyStates.images.map((img, i) => (
              <img key={i} src={img} alt={`Empty State ${i}`} className="w-full h-auto block drop-shadow-2xl rounded-xl" />
            ))}
          </div>
        </section>

        {/* Итоги */}
        <section className="flex flex-col gap-m lg:gap-l w-full pt-8 lg:pt-12">
          <div className="flex flex-col gap-s max-w-[800px]">
            <h2 className="text-h2 font-semibold text-text-main">
              Итог
            </h2>
            <p className="text-body font-normal text-text-main leading-relaxed max-w-[600px]">
              Система, а не набор экранов. Пользователь получает контроль. Саппорт получает фильтр. Бизнес — конверсию. Эстетика кода работает.
            </p>
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

        {/* Навигация */}
        <section className="flex flex-wrap items-center gap-s pt-m w-full border-t border-[#CBD5E1]/50 mt-4">
          <Button variant="secondary" href="/product#cases" className="w-full md:w-auto">
            Все проекты
          </Button>
          <Button variant="primary" href="/product/tsv" showIcon={false} className="w-full md:w-auto">
            Следующий кейс
          </Button>
        </section>

      </article>
    </main>
  );
}
