import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { Roboto, Poppins } from "next/font/google";
import { locales, type Locale } from "@/i18n/locales";

const roboto = Roboto({ subsets: ["latin"], weight: ["300","400","500","700"], variable: "--font-roboto" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-display" });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: {
    default: "BNU Tercüme — Profesyonel Çeviri",
    template: "%s | BNU Tercüme",
  },
};

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${roboto.variable} ${poppins.variable} antialiased bg-background text-foreground`}>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}


