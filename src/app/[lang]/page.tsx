import ModernLayout from "@/components/site/ModernLayout";
import { StructuredData } from "@/components/seo/StructuredData";
import { type Locale } from "@/i18n/locales";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return (
    <>
      <StructuredData lang={lang} />
      <ModernLayout initialLang={lang} />
    </>
  );
}


