import CaseCard from "@/components/ui/CaseCard";
import Button from "@/components/ui/Button";

export default function Cases() {
  // Временные данные для наших 4-х карточек
  const casesData = [
    { title: "AnalyticsHub", tags: ["UX/UI", "Desktop App", "2026"], image: "/COVER.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
  ];

  return (
    <section id="cases" className="bg-bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 py-16 lg:p-xl">
        
        <div className="flex flex-col gap-s12 lg:gap-l">
          
          <div className="p-4 lg:p-m">
            <h2 className="text-h2 font-semibold text-text-main">
              Кейсы
            </h2>
          </div>

          <div className="p-4 lg:p-m">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-m gap-y-s12 lg:gap-y-l">
              {casesData.map((project, index) => (
                <CaseCard 
                  key={index} 
                  title={project.title} 
                  tags={project.tags} 
                  image={project.image}
                />
              ))}
            </div>
          </div>

          <div className="p-4 lg:p-m flex flex-wrap gap-s">
            <Button variant="primary" href="#contacts">
              Написать мне
            </Button>
            <Button variant="secondary" href="/graphic" target="_blank" rel="noopener noreferrer" showIcon={true}>
              TSV / Graphic
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}