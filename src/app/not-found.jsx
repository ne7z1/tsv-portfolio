import Button from "@/components/ui/Button";

export default function ProductNotFound() {
  return (
    <main className="w-full flex-grow flex flex-col justify-center min-h-[60vh] pt-xl lg:pt-xl pb-xl">
      <div className="w-full max-w-[1440px] mx-auto px-xs md:px-s12 lg:px-xl">
        
        <div className="flex flex-col gap-m md:gap-l max-w-[600px]">
          <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-h1 leading-tight uppercase">
            ОШИБКА 404
          </h1>
          
          <p className="text-body font-normal text-text-main/80 leading-relaxed">
            Запрашиваемый объект не идентифицирован в текущей структуре <br />
            Проверьте адрес или вернитесь к списку проектов
          </p>
          
          <div className="mt-s">
            <Button variant="primary" href="/">
              ВЕРНУТЬСЯ В СИСТЕМУ
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}