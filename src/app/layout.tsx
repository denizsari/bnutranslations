import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "BNU Tercüme — Profesyonel Çeviri",
    template: "%s | BNU Tercüme",
  },
  description:
    "BNU Tercüme — vize–ikamet, çalışma izni, adli ve kurumsal işlemler için güvenilir çeviri ortağınız. Başvurudan hazır belgeye: çeviri, redaksiyon, terim kontrolü ve son kalite denetimi.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "BNU Tercüme — Profesyonel Çeviri",
    description:
      "Vize–ikamet, çalışma izni, adli ve kurumsal işlemler için güvenilir çeviri ortağı.",
    siteName: "BNU Tercüme",
  },
  twitter: {
    card: "summary_large_image",
    title: "BNU Tercüme — Profesyonel Çeviri",
    description:
      "Vize–ikamet, çalışma izni, adli ve kurumsal işlemler için güvenilir çeviri ortağı.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Ana layout artık yalnızca /[lang] altında kullanılıyor, burada boş döndürülür
  return (
    <html lang="tr">
      <body className={`${roboto.variable} ${poppins.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
