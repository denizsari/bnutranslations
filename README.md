Profesyonel Çevirmen Web Sitesi – Next.js 15 (App Router, TypeScript, Tailwind)

Özellikler:
- Anasayfa, Hakkımda, Hizmetler, Referanslar (carousel), İletişim (RHF + Zod + API + Nodemailer), Blog (Markdown SSG)
- SEO: Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`
- Performans: `next/image`, lazy/dynamic import, shadcn/ui
- Analitik: Vercel Analytics

Kurulum:
1. Bağımlılıklar: `npm install`
2. `.env.local` oluşturun (bkz. `.env.local.example`)
3. Geliştirme: `npm run dev`

Çevresel Değişkenler (`.env.local`):
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO=
CONTACT_FROM=
```

Dağıtım: Vercel önerilir. Proje köküne `.env` değişkenlerini ekleyin ve otomatik deploy’u açın.
