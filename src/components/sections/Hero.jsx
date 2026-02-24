import Button from "@/components/ui/Button";
import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-xs md:px-s12 lg:px-xl">
      
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-s12">
        
        <div className="flex flex-col justify-center md:gap-l gap-m w-full lg:max-w-[640px]">
          
          <div className="flex flex-col md:gap-m gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
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

        <div className="hidden lg:flex w-full lg:w-[496px] min-h-[326px] lg:min-h-[326px] bg-[#D2D2D2] rounded-lg items-center justify-center">
          {/* СЮДА ВСТАВИТЬ ЧТО ТО */}
        </div>

      </div>
    </section>
  );
}