import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 lg:pt-40 pb-12 lg:pb-24">
      
      {/* Лендинг */}
      <Hero />
      
      {/* Кейсы */}
      <Cases />

      {/* Обо мне */}
      <About />

    </main>
  );
}