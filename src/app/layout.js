import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata = {
  title: "TSV | UX/UI & Product Designer",
  description: "Портфолио продуктового дизайнера. Создаю интерфейсы, которые приносят прибыль бизнесу.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        
        <Header />

        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
      </body>
    </html>
  );
}