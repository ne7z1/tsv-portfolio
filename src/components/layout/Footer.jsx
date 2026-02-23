"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";

export default function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("tsvdsg@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2500);
    }

    return(
        <footer id="contacts" className="bg-text-main text-bg-primary py-s12 md:py-m rounded-t-[32px] md:rounded-t-[16px]">
            {/* контейнер */}
            <div className="max-w-[1440px] mx-auto px-4 lg:px-xl pt-16 lg:pt-xl pb-8 lg:pb-l">
                {/* сетка на два колоннки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-l mb-16 md:mb-24">
                    {/* левая колонка */}
                    <div className="flex flex-col gap-s md:gap-m items-start w-full max-w-[640px] p-4 lg:p-m">
                        <h2 className="text-h2 font-semibold leading-tight">
                            Открыт к новым проектам
                        </h2>
                        <Button variant="primary" href="https://t.me/ne7z1" target="_blank" rel="noopener noreferrer">
                        Написать в Telegram
                        </Button>
                    </div>

                    {/* Правая колонка */}
                    <div className="flex flex-col gap-s md:gap-m items-start w-full max-w-[496px] shrink-0 p-4 lg:p-m">
                        <h2 className="text-h2 font-semibold leading-tight">
                            Контакты
                        </h2>
                        <div className="flex flex-col items-start gap-xs">
                            <Button 
                              variant="text" 
                              href="https://career.habr.com/ne7z1" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="!p-0 !text-h3 !font-medium !text-bg-primary hover:!text-bg-primary"
                            >
                                ХАБР
                            </Button>
                            <Button 
                              variant="text" 
                              href="https://www.behance.net/alexandbezdush" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="!p-0 !text-h3 !font-medium !text-bg-primary hover:!text-bg-primary"
                            >
                                Behance
                            </Button>
                            <Button 
                              variant="text" 
                              href="http://github.com/ne7z1" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="!p-0 !text-h3 !font-medium !text-bg-primary hover:!text-bg-primary"
                            >
                                GitHub
                            </Button>
                            <Button 
                              variant="text" 
                              onClick={handleCopyEmail}
                              className="!p-0 !text-h3 !font-medium !text-bg-primary hover:!text-bg-primary"
                            >
                                tsvdsg@gmail.com
                            </Button>
                        </div>
                    </div>

                </div>
                {/* нижняя часть */}
                <div className="w-full border-t border-bg-primary/20 pt-8 flex justify-center items-center">
                    <p className="text-caption text-bg-primary/60 text-center text-left">
                    © 2026 TSV. <br />
                    Спроектировано с инженерной точностью
                    </p>
                </div>

            </div>
            {/* Уведомление */}
            <div 
                className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 bg-btn-primary text-bg-primary px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 transition-all duration-300 z-50 ${
                copied ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                }`}
            >
                {/* Иконка галочки */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="font-medium text-body">Email скопирован в буфер!</span>
            </div>
        </footer>
    )
}