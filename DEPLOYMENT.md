# BNU Translation - Vercel Deployment Guide

## 🚀 Vercel'e Deployment Adımları

### 1. Vercel Account Setup
1. https://vercel.com adresine git
2. GitHub hesabınla giriş yap
3. "Import Project" seç

### 2. Repository Import
1. `denizsari/bnutranslations` repository'sini seç
2. Project settings:
   - Framework: **Next.js**
   - Root directory: `./` (default)
   - Build command: `npm run build` (default)
   - Output directory: `.next` (default)

### 3. Environment Variables
Production'da aşağıdaki environment variable'ı set et:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

(Vercel otomatik olarak domain verecek, o domain'i kullan)

### 4. Domain Configuration (Opsiyonel)
- Custom domain eklemek istersen Vercel dashboard'dan ayarlayabilirsin
- Domain DNS ayarlarını Vercel'in verdiği şekilde yapılandır

### 5. Deploy
1. "Deploy" butonuna tık
2. Build process tamamlanacak
3. Live site linki verilecek

## 📋 Pre-deployment Checklist ✅

- ✅ SEO metadata (TR/EN/RU)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap & robots.txt
- ✅ Error pages (404/500/loading)
- ✅ Image optimization
- ✅ Professional design
- ✅ Responsive layout
- ✅ Performance optimization
- ✅ Git repository ready
- ✅ Environment config

## 🎯 Post-deployment Tasks

1. **SSL Certificate**: Vercel otomatik sağlar
2. **Performance Check**: Google PageSpeed Insights test et
3. **SEO Validation**: Google Search Console'a ekle
4. **Analytics Setup**: Google Analytics ekle (opsiyonel)
5. **Domain Setup**: Custom domain (opsiyonel)

## 🔧 Production URL Update
Deploy tamamlandıktan sonra `.env.local` dosyasını güncelle:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.vercel.app
```

## 📱 Test Checklist
- [ ] Ana sayfa loading
- [ ] Dil değişimi (TR/EN/RU)
- [ ] Mobile responsive
- [ ] Meta tags görünüyor
- [ ] Sitemap erişilebilir (/sitemap.xml)
- [ ] Robots.txt aktif (/robots.txt)
- [ ] Error pages çalışıyor

---

**Ready for deployment!** 🚀
