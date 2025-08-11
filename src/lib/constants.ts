export const SITE_TITLE = "Profesyonel Çeviri Hizmetleri";
export const SITE_NAME = "Çevirmen";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "iletisim@ornek.com";
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+905555555555";
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


