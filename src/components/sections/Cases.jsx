import CaseCard from "@/components/ui/CaseCard";
import Button from "@/components/ui/Button";

export default function Cases() {
  const casesData = [
    { title: "ПРОЕКТ: TSV.", tags: ["UX/UI", "Экосистема", "Сайт-портфолио", "2026"], image: "/image.webp", href: "/product/tsv"},
    { title: "Портфолио vwj", tags: ["UX/UI", "Экосистема", "Сайт-портфолио", "2026"], image: "/works/product/vwj/Обложка.webp", href: "/product/vwj"},
    { title: "AnalyticsHub", tags: ["UX/UI", "Приложение", "2026"], image: "/works/product/analyticshub/COVER.webp", href: "/product/analyticshub"},
    { title: "КосмоПицца", tags: ["UX/UI", "Приложение", "2026"], image: "/works/product/cosmopizza/Обложка.webp", href: "/product/cosmopizza"}, 
  ];

  return (
    <section id="cases" className="block w-full max-w-360 mx-auto px-s md:px-s12 lg:px-xl">
      
      <div className="flex flex-col gap-m lg:gap-l">
      
        <div>
          <h2 className="text-h2 font-semibold text-text-main">
            Проекты
          </h2>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-l lg:gap-x-m gap-y-s lg:gap-y-l">
            {casesData.map((project, index) => (
              <CaseCard 
                key={index} 
                title={project.title} 
                tags={project.tags} 
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-s">
          <Button variant="primary" href="#contacts" className="w-full md:w-70">
            Написать мне
          </Button>
          <Button variant="secondary" href="/graphic" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto" showIcon={true}>
            Портфолио графики
          </Button>
        </div>

      </div>
    </section>
  );
}