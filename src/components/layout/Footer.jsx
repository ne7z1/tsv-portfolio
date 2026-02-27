"use client";

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
        <footer id="contacts" className="bg-text-main text-bg-primary py-12 md:py-24 rounded-t-[24px] md:rounded-t-[24px">
            <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-xl">
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-l lg:gap-l mb-16 md:mb-l">
                    
                    {/* Левая колонка */}
                    <div className="flex flex-col gap-m md:gap-xl items-start w-full">
                        <h2 className="text-h2 font-semibold leading-tight">
                            Открыт к новым проектам
                        </h2>
                        <Button variant="primary" href="https://t.me/ne7z1" target="_blank" rel="noopener noreferrer">
                            Написать в Telegram
                        </Button>
                    </div>

                    {/* Правая колонка */}
                    <div className="flex flex-col gap- md:gap-m items-start w-full md:max-w-[496px]">
                        <h2 className="text-h2 font-semibold leading-tight">
                            Контакты
                        </h2>
                        <div className="flex flex-col items-start gap-m md:gap-xs">
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
                
                {/* 3. НИЖНЯЯ ЧАСТЬ */}
                <div className="w-full border-t border-bg-primary/20 pt-m flex justify-center items-center">
                    <p className="text-caption text-bg-primary/60 text-center text-left">
                    © 2026 TSV. <br />
                    Спроектировано с инженерной точностью
                    </p>
                </div>

            </div>
            
            {/* Уведомление */}
            <div 
                className={`fixed bottom-m right-m md:bottom-s12 md:right-s12 bg-btn-primary text-bg-primary px-m py-s rounded-lg shadow-xl flex items-center gap-s12 transition-all duration-300 z-50 ${
                copied ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                }`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="font-medium text-body">Email скопирован в буфер!</span>
            </div>
        </footer>
    )
}