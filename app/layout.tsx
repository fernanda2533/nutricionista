import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutricionista | Alimentação Sem Culpa",
  description: "Consultoria nutricional focada em saúde, bem-estar e alimentação sem culpa. Atendimento em São Paulo e online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
