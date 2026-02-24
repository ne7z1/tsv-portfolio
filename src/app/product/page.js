import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg-primary pt-xl pb-xl space-y-l lg:space-y-xl">
      
      <Hero />
      <Cases />
      <About />

    </main>
  );
}