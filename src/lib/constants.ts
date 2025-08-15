export const SITE_TITLE = "BNU Tercüme | Profesyonel Çeviri";
export const SITE_NAME = "bnutranslations";
export const DISPLAY_NAME = process.env.NEXT_PUBLIC_DISPLAY_NAME || "Mikey";
export const LOCATION = process.env.NEXT_PUBLIC_LOCATION || "İstanbul, Türkiye";
export const CTA_URL = process.env.NEXT_PUBLIC_CTA_URL || "#";
export const CV_URL = process.env.NEXT_PUBLIC_CV_URL || "#";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "iletisim@ornek.com";
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+905555555555";
export const PHONE_NUMBER =
  process.env.NEXT_PUBLIC_PHONE_NUMBER || "+90 555 555 55 55";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const NAV_ITEMS = [
  { href: "/", label: "Anasayfa" },
  { href: "/about", label: "Hakkımda" },
  { href: "/services", label: "Hizmetler" },
  { href: "/testimonials", label: "Referanslar" },
  { href: "/contact", label: "İletişim" },
  { href: "/blog", label: "Blog" },
] as const;


// Hero kopyaları (TR/RU)
export const HERO_TITLE_TR =
  "BNU Tercüme. Sizin için çalışan çeviri.";
export const HERO_DESC_TR =
  "BNU Tercüme — vize–ikamet, çalışma izni, adli ve kurumsal işlemler için güvenilir çeviri ortağınız. Başvurudan hazır belgeye: çeviri, redaksiyon, terim kontrolü ve son kalite denetimi. Gizlilik, doğruluk ve net teslim tarihleri — güvencemizdir. Her adımda kişisel uzman desteği.";
export const HERO_CONF_TR =
  "Noterliklerle çalışma tecrübesi • Akkuyu NGS saha deneyimi • 7/24 destek";

export const HERO_DESC_RU =
  "«BNU Tercüme» — надёжный партнёр по переводам для виз, ВНЖ, РНР, судебных и корпоративных дел. От заявки до готового документа: перевод, редактура, терминологическая сверка и финальный контроль качества. Конфиденциальность, точность и чёткие сроки — гарантируем. Персональный менеджер на каждом шаге.";
export const HERO_CONF_RU =
  "Опыт работы с нотариусами • Опыт на площадке АЭС «Аккую» • Поддержка 24/7";


