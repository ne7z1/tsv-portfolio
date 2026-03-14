import Button from "@/components/ui/Button";
import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <section className="w-full max-w-360 mx-auto px-s md:px-s12 lg:px-xl">
      
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-s12">
        
        <div className="flex flex-col justify-center md:gap-l gap-m w-full lg:max-w-160">
          
          <div className="flex flex-col md:gap-m gap-s">
            <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight">
              UX/UI & PRODUCT<br />ДИЗАЙНЕР
            </h1>
            <p className="text-body font-normal text-text-main max-w-120">
              Создаю интерфейсы, которые снижают когнитивную нагрузку и приносят прибыль бизнесу
            </p>
          </div>
          
          <div className="flex flex-wrap gap-s">
            <Button variant="primary" href="#cases">
              Проекты
            </Button>
            <Button variant="secondary" href="#contacts">
              Контакты
            </Button>
          </div>

        </div>

        <div className="hidden lg:flex w-full lg:w-124 min-h-81.5 lg:min-h-81.5 rounded-lg items-center justify-center overflow-hidden">
          <img 
            src="/hub/product-photo.webp" 
            alt="UX/UI Дизайнер" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}