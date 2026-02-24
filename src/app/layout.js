import "./globals.css";

export const metadata = {
  title: "TSV Portfolio",
  description: "Product and Graphic Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-bg-primary text-text-main font-sans antialiased">
        {children}
      </body>
    </html>
  );
}