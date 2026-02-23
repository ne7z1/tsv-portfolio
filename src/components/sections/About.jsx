import Chip from "@/components/ui/Chip";

export default function About() {
  return (
    <section id="about" className="bg-bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 py-16 lg:p-[120px]">
        
        <h2 className="text-h2 font-semibold text-text-main p-4 lg:p-m">
          Обо мне
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-l w-full">
          
          {/* левый блок */}
          <div className="flex flex-col gap-6 lg:gap-m p-4 lg:p-m w-full">
            <h3 className="text-h3 font-medium text-text-main">
              Инженерный подход к дизайну
            </h3>
            
            <div className="flex flex-col gap-4 text-[20px] leading-[30px] font-normal text-text-main">
              <p>
                Я продуктовый дизайнер с аналитическим бэкграундом. Проектирую интерфейсы, 
                опираясь на архитектуру данных и CustDev, а не на интуицию.
              </p>
              <p>
                Опыт работы со статистикой научил меня принимать решения на основе цифр. 
                Я понимаю, как работают базы данных и бэкенд, поэтому говорю с разработчиками на одном языке
                и учитываю технические ограничения еще на этапе сбора требований.
              </p>
              <p>
                Помогаю бизнесу и стартапам переводить абстрактные идеи в строгие макеты и понятные ТЗ, 
                превращая хаос в масштабируемые продукты.
              </p>
            </div>
          </div>

          {/* Правй блок*/}
          <div className="flex flex-col gap-m p-m w-full">
            <h3 className="text-h3 font-medium text-text-main">Стек</h3>

            {/* Список категорий */}
            <div className="flex flex-col gap-xs">
              
              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Продукт и дизайн</span>
                <div className="flex flex-wrap gap-xs">
                  <Chip>Figma</Chip>
                  <Chip>UX/UI</Chip>
                  <Chip>CustDev</Chip>
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
                <span className="text-body font-normal text-text-main">Аналитика и данные</span>
                <div className="flex flex-wrap gap-xs">
                  <Chip>Python</Chip>
                  <Chip>Pandas</Chip>
                  <Chip>SQL</Chip>
                  <Chip>PowerBI</Chip>
                  <Chip>Excel</Chip>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Технологии</span>
                <div className="flex flex-wrap gap-xs">
                  <Chip>Архитектура ПО</Chip>
                  <Chip>ООП</Chip>
                  <Chip>Docker</Chip>
                  <Chip>C# / C++</Chip>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <span className="text-body font-normal text-text-main">Soft Skills</span>
                <ul className="list-disc list-inside text-body font-normal text-text-main space-y-xs    ">
                  <li>Перевод бизнес-требований в код</li>
                  <li>Автономность</li>
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