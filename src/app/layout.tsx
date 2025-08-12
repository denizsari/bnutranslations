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
    default: "Profesyonel Çeviri Hizmetleri",
    template: "%s | Profesyonel Çeviri Hizmetleri",
  },
  description:
    "Profesyonel çeviri hizmetleri: teknik, akademik, ticari ve edebi metinlerde uzman desteği. Türkçe-İngilizce başta olmak üzere çok dilli çözüm.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Profesyonel Çeviri Hizmetleri",
    description:
      "Profesyonel çeviri hizmetleri: teknik, akademik, ticari ve edebi metinlerde uzman desteği.",
    siteName: "Çevirmen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profesyonel Çeviri Hizmetleri",
    description:
      "Profesyonel çeviri hizmetleri: teknik, akademik, ticari ve edebi metinlerde uzman desteği.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${roboto.variable} ${poppins.variable} antialiased bg-background text-foreground`}> 
        <main className="min-h-screen">{children}</main>
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
