import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary py-12 md:py-24">
      
      <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-l">
          
          {/* Левая колонка*/}
          <div className="flex flex-col gap-l w-full max-w-[640px]">
            
            <div className="flex flex-col gap-m">
              <h1 className="text-h1 font-bold text-text-main tracking-h1">
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
          <div className="w-full max-w-[496px] relative aspect-[496/374] rounded-lg overflow-hidden bg-bg-third shrink-0">
            {/* <Image src="/hero-image.jpg" alt="Hero" fill className="object-cover" priority /> */}
          </div>

        </div>
      </section>

    </main>
  );
}