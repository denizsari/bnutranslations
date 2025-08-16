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
    default: "BNU Tercüme — Profesyonel Çeviri ve Noter Tasdik Hizmetleri",
    template: "%s | BNU Tercüme",
  },
  description: "Profesyonel çeviri ve noter tasdik hizmetleri. Vize, ikamet, çalışma izni, adli ve kurumsal işlemler için uzman desteği. 7/24 hızlı ve güvenilir hizmet.",
  keywords: "çeviri, tercüme, noter tasdik, profesyonel çeviri, vize çevirisi, belge çevirisi, yeminli tercüman, sertifikalı çeviri",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "BNU Tercüme — Profesyonel Çeviri ve Noter Tasdik Hizmetleri",
    description: "Profesyonel çeviri ve noter tasdik hizmetleri. Vize, ikamet, çalışma izni, adli ve kurumsal işlemler için uzman desteği.",
    siteName: "BNU Tercüme",
    images: [
      {
        url: '/bnu-logo.png',
        width: 1200,
        height: 630,
        alt: 'BNU Tercüme Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BNU Tercüme — Profesyonel Çeviri",
    description: "Profesyonel çeviri ve noter tasdik hizmetleri. 7/24 hızlı ve güvenilir hizmet.",
    images: ['/bnu-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    languages: {
      'tr': '/',
      'en': '/en',
      'ru': '/ru',
    },
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
