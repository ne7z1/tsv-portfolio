import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import { Inter } from "next/font/google";

export const metadata = {
  title: "TSV.UX/UI",
  description: "Портфолио цифровых систем",
};

const inter = Inter({ 
  subsets: ["cyrillic", "latin"],
  display: 'swap',
});

export default function ProductLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </>
  );
}