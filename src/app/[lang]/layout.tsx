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

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const titles = {
    tr: "BNU Tercüme — Profesyonel Çeviri ve Noter Tasdik Hizmetleri",
    en: "BNU Translation — Professional Translation & Notarization Services",
    ru: "BNU Перевод — Профессиональные услуги перевода и нотариального заверения"
  };
  
  const descriptions = {
    tr: "Vize, ikamet, çalışma izni, adli ve kurumsal işlemler için uzman çeviri ve noter tasdik hizmetleri. Türkçe, İngilizce, Rusça, Almanca, Fransızca çeviri desteği. 7/24 hızlı ve güvenilir hizmet.",
    en: "Expert translation and notarization services for visa, residency, work permits, legal and corporate documents. Turkish, English, Russian, German, French translation support. 24/7 fast and reliable service.",
    ru: "Экспертные услуги перевода и нотариального заверения для виз, ВНЖ, разрешений на работу, юридических и корпоративных документов. Поддержка турецкого, английского, русского, немецкого, французского языков. Быстрое и надежное обслуживание 24/7."
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: {
      default: titles[lang] || titles.tr,
      template: `%s | BNU ${lang === 'tr' ? 'Tercüme' : lang === 'ru' ? 'Перевод' : 'Translation'}`,
    },
    description: descriptions[lang] || descriptions.tr,
    keywords: lang === 'tr' 
      ? "çeviri, tercüme, noter tasdik, profesyonel çeviri, vize çevirisi, belge çevirisi, yeminli tercüman, sertifikalı çeviri, hızlı çeviri, güvenilir çeviri"
      : lang === 'en'
      ? "translation, professional translation, notarization, certified translation, document translation, visa translation, sworn translator, fast translation, reliable translation"
      : "перевод, профессиональный перевод, нотариальное заверение, сертифицированный перевод, перевод документов, перевод для визы, присяжный переводчик, быстрый перевод",
    openGraph: {
      type: "website",
      locale: lang === 'tr' ? 'tr_TR' : lang === 'ru' ? 'ru_RU' : 'en_US',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${lang}`,
      title: titles[lang] || titles.tr,
      description: descriptions[lang] || descriptions.tr,
      siteName: `BNU ${lang === 'tr' ? 'Tercüme' : lang === 'ru' ? 'Перевод' : 'Translation'}`,
      images: [
        {
          url: '/bnu-logo.png',
          width: 1200,
          height: 630,
          alt: `BNU ${lang === 'tr' ? 'Tercüme' : lang === 'ru' ? 'Перевод' : 'Translation'} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang] || titles.tr,
      description: descriptions[lang] || descriptions.tr,
      images: ['/bnu-logo.png'],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${lang}`,
      languages: {
        'tr': '/tr',
        'en': '/en', 
        'ru': '/ru',
      },
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
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/bnu-logo.png",
    },
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${roboto.variable} ${poppins.variable} font-sans`}>
      <body className="antialiased">
        {children}
        <Analytics />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
