import Hero from "@/components/graphic/Hero";
import About from "@/components/graphic/About";
import Footer from "@/components/graphic/Footer";
import Works from "@/components/graphic/Works";

export default function GraphicPage() {
  return (
    <main className="w-full">

      <Hero />
      
      <About />

      <Works />

      <Footer />

    </main>
  );
}