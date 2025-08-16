export function StructuredData({ lang }: { lang: 'tr' | 'en' | 'ru' }) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}#organization`,
    "name": lang === 'tr' ? "BNU Tercüme" : lang === 'en' ? "BNU Translation" : "BNU Перевод",
    "description": lang === 'tr' 
      ? "Profesyonel çeviri ve noter tasdik hizmetleri"
      : lang === 'en'
      ? "Professional translation and notarization services"
      : "Профессиональные услуги перевода и нотариального заверения",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${lang}`,
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/bnu-logo.png`,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/bnu-logo.png`,
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": lang === 'tr' ? "Türkiye" : lang === 'en' ? "Turkey" : "Турция"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": lang === 'tr' ? "Çeviri Hizmetleri" : lang === 'en' ? "Translation Services" : "Услуги перевода",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'tr' ? "Noter Tasdikli Çeviri" : lang === 'en' ? "Notarized Translation" : "Нотариально заверенный перевод",
            "description": lang === 'tr' 
              ? "Vize ve resmi işlemler için noter tasdikli çeviri hizmeti"
              : lang === 'en'
              ? "Notarized translation service for visa and official procedures"
              : "Услуга нотариального перевода для виз и официальных процедур"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": lang === 'tr' ? "Yeminli Tercümanlık" : lang === 'en' ? "Sworn Translation" : "Присяжный перевод",
            "description": lang === 'tr' 
              ? "Yasal işlemler için yeminli tercüman hizmeti"
              : lang === 'en'
              ? "Sworn translator service for legal procedures"
              : "Услуги присяжного переводчика для юридических процедур"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": lang === 'tr' ? "müşteri hizmetleri" : lang === 'en' ? "customer service" : "служба поддержки",
      "availableLanguage": ["Turkish", "English", "Russian", "German", "French"]
    },
    "openingHours": ["Mo-Su 00:00-24:00"],
    "sameAs": []
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}#website`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${lang}`,
    "name": lang === 'tr' ? "BNU Tercüme" : lang === 'en' ? "BNU Translation" : "BNU Перевод",
    "publisher": {
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/${lang}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "inLanguage": lang === 'tr' ? "tr-TR" : lang === 'en' ? "en-US" : "ru-RU"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
