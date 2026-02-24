import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg-primary pt-[160px] pb-[120px] space-y-[64px] lg:space-y-[120px]">
      
      <Hero />
      <Cases />
      <About />

    </main>
  );
}