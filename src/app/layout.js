import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

// 1. Загружаем Inter для продукта
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata = {
  title: "TSV.Hub",
  description: "Портфолио цифровых систем и графики",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`scroll-smooth ${inter.variable} ${unbounded.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}