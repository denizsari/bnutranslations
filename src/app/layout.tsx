import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"], variable: "--font-roboto" });

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
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-background text-foreground`}> 
        <Header />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
