import Button from "@/components/ui/Button";

export default function SelectionHub() {
  return (
    <main className="w-full min-h-screen bg-bg-primary flex flex-col items-center justify-center gap-12 p-4">
      
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-h2 md:text-h1 font-bold text-text-main tracking-tight">
          TSV.
        </h1>
        <p className="text-body text-text-main/70">
          Выберите направление
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Ведет на наш старый добрый Product */}
        <Button variant="secondary" href="/product">
          Product Design
        </Button>
        
        {/* Ведет на новую горячую страницу Графики */}
        <Button variant="primary" href="/graphic">
          Graphic Design
        </Button>
      </div>

    </main>
  );
}