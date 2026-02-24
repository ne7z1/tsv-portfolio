import CaseCard from "@/components/ui/CaseCard";
import Button from "@/components/ui/Button";

export default function Cases() {
  const casesData = [
    { title: "AnalyticsHub", tags: ["UX/UI", "Desktop App", "2026"], image: "/COVER.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
    { title: "W.I.P", tags: ["W.I.P"], image: "/image.png"},
  ];

  return (
    <section id="cases" className="block w-full max-w-[1440px] mx-auto px-s md:px-s12 lg:px-xl">
      
      <div className="flex flex-col gap-m lg:gap-l">
      
        <div>
          <h2 className="text-h2 font-semibold text-text-main">
            Кейсы
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
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-s">
          <Button variant="primary" href="#contacts">
            Написать мне
          </Button>
          <Button variant="secondary" href="/graphic" target="_blank" rel="noopener noreferrer" showIcon={true}>
            Портфолио графики
          </Button>
        </div>

      </div>
    </section>
  );
}