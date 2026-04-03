"use client";

import { useEffect } from "react";
import Button from "./Button";

export default function PrivacyModal({ isOpen, onClose }) {
  // Закрытие по Escape и блокировка скролла
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
      {/* Оверлей */}
      <div
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={onClose}
      />
      {/* Модальное окно */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] bg-bg-primary rounded-2xl shadow-2xl z-[101] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-[#CBD5E1]/50">
          <h2 className="text-h3 md:text-h2 font-semibold text-text-main">
            Политика конфиденциальности
          </h2>
          <button
            onClick={onClose}
            className="text-text-main/60 hover:text-text-main transition-colors"
            aria-label="Закрыть"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-text-main/80">
          <p className="text-body">
            Настоящая Политика конфиденциальности описывает, как сайт TSV (далее — «Сайт») 
            обрабатывает информацию о посетителях.
          </p>

          <h3 className="text-h3 font-medium text-text-main mt-4">1. Какие данные собираются</h3>
          <p>
            Сайт автоматически собирает техническую информацию, передаваемую браузером:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
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

          <h3 className="text-h3 font-medium text-text-main mt-4">2. Цели обработки данных</h3>
          <p>Собранные данные используются для:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>обеспечения работоспособности сайта</li>
            <li>анализа посещаемости и улучшения контента</li>
            <li>защиты от технических сбоев и злоумышленных действий</li>
          </ul>

          <h3 className="text-h3 font-medium text-text-main mt-4">3. Cookie-файлы</h3>
          <p>
            Сайт использует файлы cookie для корректной работы и сбора аналитики. 
            Продолжая использование сайта, вы соглашаетесь на обработку cookie. 
            Вы можете отключить cookie в настройках браузера.
          </p>

          <h3 className="text-h3 font-medium text-text-main mt-4">4. Сроки хранения</h3>
          <p>
            Данные хранятся до достижения целей обработки, но не более 12 месяцев. 
            Cookie-файлы хранятся в соответствии с настройками вашего браузера.
          </p>

          <h3 className="text-h3 font-medium text-text-main mt-4">5. Контактная информация</h3>
          <p>
            По вопросам обработки персональных данных вы можете связаться:<br />
            Email: tsvdsg@gmail.com<br />
            Telegram: @ne7z1
          </p>

          <p className="text-caption text-text-main/50 pt-4">
            Дата последнего обновления: 1 апреля 2026 г.
          </p>
        </div>
        <div className="p-6 border-t border-[#CBD5E1]/50 flex justify-end">
          <Button variant="primary" onClick={onClose}>
            Закрыть
          </Button>
        </div>
      </div>
    </>
  );
}