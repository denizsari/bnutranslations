import ModernLayout from "@/components/site/ModernLayout";
import { type Locale } from "@/i18n/locales";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return <ModernLayout initialLang={lang} />;
}


