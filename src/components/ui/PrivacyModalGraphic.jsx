"use client";

import { useEffect } from "react";

export default function PrivacyModalGraphic({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 md:p-8 lg:p-12"
        onClick={onClose}
      >
        <div
          className="w-full h-full max-w-4xl bg-black border-[0.5px] border-white/20 overflow-y-auto relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-24 md:pb-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-8 lg:p-12">
            <h2 className="text-btn md:text-h2 font-black uppercase tracking-tighter mb-8">
              Политика<br />конфиденциальности
            </h2>

            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p className="text-lg">
                Настоящая Политика конфиденциальности описывает, как сайт TSV (далее — «Сайт») 
                обрабатывает информацию о посетителях.
              </p>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">1. Какие данные собираются</h3>
              <p>
                Сайт автоматически собирает техническую информацию, передаваемую браузером:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-адрес</li>
                <li>тип и версия браузера</li>
                <li>операционная система</li>
                <li>дата и время посещения</li>
                <li>cookie-файлы</li>
                <li>источник перехода (реферер)</li>
              </ul>
              <p>
                Если вы отправляете сообщение через контактные ссылки (Telegram, email), 
                данные передаются непосредственно на сторонние сервисы, и их обработка 
                регулируется политиками этих сервисов.
              </p>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">2. Цели обработки данных</h3>
              <p>Собранные данные используются для:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>обеспечения работоспособности сайта</li>
                <li>анализа посещаемости и улучшения контента</li>
                <li>защиты от технических сбоев и злоумышленных действий</li>
              </ul>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">3. Cookie-файлы</h3>
              <p>
                Сайт использует файлы cookie для корректной работы и сбора аналитики. 
                Продолжая использование сайта, вы соглашаетесь на обработку cookie. 
                Вы можете отключить cookie в настройках браузера.
              </p>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">4. Передача данных третьим лицам</h3>
              <p>
                Передача данных третьим лицам не производится, за исключением случаев, 
                предусмотренных законодательством РФ.
              </p>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">5. Сроки хранения</h3>
              <p>
                Данные хранятся до достижения целей обработки, но не более 12 месяцев. 
                Cookie-файлы хранятся в соответствии с настройками вашего браузера.
              </p>

              <h3 className="text-2xl font-black uppercase tracking-tight mt-8">6. Контактная информация</h3>
              <p>
                По вопросам обработки персональных данных вы можете связаться:<br />
                Email: tsvdsg@gmail.com<br />
                Telegram: @ne7z1
              </p>

              <p className="text-sm text-white/50 pt-8">
                Дата последнего обновления: 1 апреля 2026 г.
              </p>
            </div>
          </div>

          <div className="fixed bottom-6 right-4 md:bottom-auto md:top-8 md:right-8 z-110">
            <button
              onClick={onClose}
              className="group flex items-center justify-center bg-red-600 text-white h-12 px-4 md:h-16 md:px-6 cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-95 shadow-2xl"
            >
              <span className="text-xl md:text-3xl tracking-widest font-extralight group-hover:font-black transition-all duration-300">
                ЗАК
              </span>
              <span className="text-xl md:text-3xl tracking-widest font-black group-hover:font-extralight transition-all duration-300 ml-1">
                РЫТЬ
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}