export const SITE_TITLE = "Profesyonel Çeviri Hizmetleri";
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


