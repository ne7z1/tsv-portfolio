import { Unbounded } from "next/font/google";
import Header from "@/components/graphic/Header";
import GraphicCookies from "@/components/graphic/GraphicCookies";
import Footer from "@/components/graphic/Footer";

export const metadata = {
  title: "TSV.Графика",
  description: "Портфолио графики",
};

const unbounded = Unbounded({ 
  subsets: ["cyrillic", "latin"],
  display: 'swap',
});

export default function GraphicLayout({ children }) {
  return (
    <div className={`${unbounded.className} bg-[var(--graphic-bg-primary)] text-[var(--graphic-text-primary)] min-h-screen selection:bg-[var(--graphic-text-primary)] selection:text-[var(--graphic-bg-primary)] cursor-retro`}>
      <Header />
      {children}
      <Footer />
      <GraphicCookies />
    </div>
  );
}