import Button from "@/components/ui/Button";
import Image from "next/image";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 lg:pt-40 pb-12 lg:pb-24">
      
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">

        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 lg:gap-l">
          
          {/* Левая колонка*/}
          <div className="flex flex-col gap-6 w-full max-w-[640px] p-4 lg:p-m">
            
            <div className="flex flex-col gap-m">
              <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1">
                UX/UI & PRODUCT<br />DESIGNER
              </h1>
              <p className="text-body font-normal text-text-main max-w-[480px]">
                Создаю интерфейсы, которые снижают когнитивную нагрузку и приносят прибыль бизнесу
              </p>
            </div>
            
            <div className="flex flex-wrap gap-s">
              <Button variant="primary" href="#cases">
                Кейсы
              </Button>
              <Button variant="secondary" href="#contacts">
                Контакты
              </Button>
            </div>

          </div>

          {/* =Правая колонка */}
          <div className="hidden lg:block w-full max-w-[496px] p-4 lg:p-m">
            <div className="w-full h-full bg-bg-third rounded-2xl flex items-center justify-center">
              <span className="text-text-main/50 text-center px-4"></span>
            </div>
          </div>

        </div>
      </section>
      <About />

    </main>
  );
}