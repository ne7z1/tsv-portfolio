import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        
        {children}
        
      </body>
    </html>
  );
}