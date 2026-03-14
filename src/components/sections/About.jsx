import Chip from "@/components/ui/Chip";

export default function About() {
  return (
    <section id="about" className="block w-full max-w-[1440px] mx-auto px-s md:px-s12 lg:px-xl">
      <div className="flex flex-col gap-m lg:gap-l">
        
        <div>
          <h2 className="text-h2 font-semibold text-text-main">
            Обо мне
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-l lg:gap-l w-full">
          
          {/* левй блок */}
          <div className="flex flex-col gap-s lg:gap-m w-full">
            <h3 className="text-h3 font-medium text-text-main">
              Инженерный подход к дизайну
            </h3>
            
            <div className="flex flex-col gap-s text-[20px] leading-[30px] font-normal text-text-main">
              <p>
                Я продуктовый дизайнер с фокусом на масштабируемые системы. Проектирую 
                интерфейсы, опираясь на логику переменных и дизайн-системы, а не на интуицию.
              </p>
              <p>
                Понимаю возможности и ограничения фронтенда. Это позволяет мне создавать
                макеты, которые легко переносятся в код и не требуют бесконечных правок на этапе разработки.
              </p>
              <p>
                Перевожу абстрактные идеи в строгие дизайн-решения. 
                Моя задача — создать систему, которая будет стабильно работать и расти вместе с бизнесом.
              </p>
            </div>
          </div>

          {/* правй блок */}
          <div className="flex flex-col gap-m lg:gap-m w-full">
            <h3 className="text-h3 font-medium text-text-main">Стек</h3>

            {/* Список категорий */}
            <div className="flex flex-col gap-xs">
              
              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Продукт и дизайн</span>
                <div className="flex flex-wrap gap-xs">
                  <Chip>Figma</Chip>
                  <Chip>UX/UI</Chip>
                  <Chip>Variables</Chip>
                  <Chip>Auto Layout</Chip>
                  <Chip>CustDev</Chip>
                  <Chip>Дизайн-системы</Chip>
                  <Chip>Прототипирование</Chip>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Фронтенд</span>
                <div className="flex flex-wrap gap-xs">
                  <Chip>HTML5</Chip>
                  <Chip>CSS3</Chip>
                  <Chip>JavaScript</Chip>
                  <Chip>React.js</Chip>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Социальные навыки</span>
                <ul className="list-disc list-inside text-body font-normal text-text-main space-y-2">
                  <li>Передача макетов в разработку</li>
                  <li>Ответственность за результат</li>
                  <li>English B2</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}