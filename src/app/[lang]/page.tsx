import LandingTranslator from "@/components/site/LandingTranslator";
import { type Locale } from "@/i18n/locales";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return (
    <div className="px-0 md:px-4 py-0">
      <LandingTranslator initialLang={lang} />
    </div>
  );
}


