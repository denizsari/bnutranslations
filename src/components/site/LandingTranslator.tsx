"use client";
import Image from "next/image";
import Socials from "@/components/site/Socials";
import Logo from "@/components/site/Logo";
import CVPreviewButton from "@/components/site/CVPreviewButton";
import { Mail } from "lucide-react";
import NotarialProcess from "@/components/site/NotarialProcess";
import DocumentTypes from "@/components/site/DocumentTypes";
import FooterBar from "@/components/site/FooterBar";
import ProcessStrip from "@/components/site/ProcessStrip";
import { useEffect, useMemo, useState } from "react";
import { LOCATION, HERO_TITLE_TR, HERO_DESC_TR, HERO_CONF_TR, HERO_DESC_RU, HERO_CONF_RU } from "@/lib/constants";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";
// 3D artık arkaplanda, sağ taraftaki kutu kaldırıldı

export default function LandingTranslator() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lang, setLang] = useState<Locale>("tr");
  const [t, setT] = useState<Record<string, any> | null>(null);
  useEffect(() => {
    getDictionary(lang).then(setT);
  }, [lang]);
  const hero = useMemo(() => {
    if (lang === "ru") {
      return {
        title: "BNU Tercüme. Перевод, который работает на вас.",
        desc: HERO_DESC_RU,
        conf: HERO_CONF_RU,
      };
    }
    return { title: HERO_TITLE_TR, desc: HERO_DESC_TR, conf: HERO_CONF_TR };
  }, [lang]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="blob blue -left-40 top-10 h-[420px] w-[420px]" />
      <div className="blob green -right-40 top-40 h-[420px] w-[420px]" />

      {/* Top bar */}
      <div className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur ${scrolled ? "bg-white/80 border-b border-white/50 shadow-sm" : "bg-white/50"}`}>
        <Logo />
        <nav className="hidden gap-8 text-sm font-semibold text-gray-700 md:flex" style={{fontFamily:'var(--font-display)'}}>
          <a href="#home" className="link-underline hover:text-primary">{t?.nav?.home ?? 'Home'}</a>
          <a href="#services" className="link-underline hover:text-primary">{t?.nav?.services ?? 'Services'}</a>
          <a href="#credentials" className="link-underline hover:text-primary">{t?.nav?.credentials ?? 'Credentials'}</a>
          <a href="#contact" className="link-underline hover:text-primary">{t?.nav?.contact ?? 'Contact'}</a>
        </nav>
        <Socials />
      </div>

      {/* Hero */}
      <section id="home" className="hero-grad grid min-h-[70vh] items-center gap-6 px-4 pb-10 pt-4 md:grid-cols-2 md:gap-10 md:px-8 md:pb-20 md:pt-10">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <button onClick={() => setLang("tr")} className={`rounded-full border px-2 py-0.5 ${lang==='tr' ? 'bg-primary text-white border-primary' : ''}`}>TR</button>
            <button onClick={() => setLang("en")} className={`rounded-full border px-2 py-0.5 ${lang==='en' ? 'bg-primary text-white border-primary' : ''}`}>EN</button>
            <button onClick={() => setLang("ru")} className={`rounded-full border px-2 py-0.5 ${lang==='ru' ? 'bg-primary text-white border-primary' : ''}`}>RU</button>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl" style={{fontFamily:'var(--font-display)'}}>
            {t?.hero?.title ?? hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-700 md:text-lg">{t?.hero?.desc ?? hero.desc}</p>
          <p className="mt-2 text-sm font-medium text-gray-600">{t?.hero?.conf ?? hero.conf}</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:shadow-md">
              <span className="i-contact relative inline-block">
                <span className="absolute -left-3 top-1/2 hidden h-1 w-3 -translate-y-1/2 rounded bg-white/80 group-hover:block" />
              </span>
              <Mail className="h-4 w-4" />
              {t?.cta?.contact ?? 'Contact'}
            </a>
            <CVPreviewButton label={t?.cta?.showCv} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700">
            {["🇹🇷 Turkish","🇬🇧 English","🇩🇪 German","🇫🇷 French","🇪🇸 Spanish","🇮🇹 Italian","🇳🇱 Dutch","🇸🇦 Arabic","🇷🇺 Russian","🇯🇵 Japanese"].map((l)=> (
              <li key={l} className="rounded-full border px-3 py-1 transition hover:scale-[1.03] hover:border-primary">{l}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block" />
      </section>

      {/* Services */}
      <section id="services" className="px-8 pb-20">
        <h2 className="text-2xl font-semibold">{t?.nav?.services ?? 'Services'}</h2>
        <ProcessStrip lang={lang} />

        {/* Noter Tasdik Süreci */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>
            {t?.services?.notarialProcess ?? (lang === 'ru' ? 'Процесс нотариального заверения' : 'Noter Tasdik Süreci')}
          </h3>
          <NotarialProcess lang={lang} />
        </div>

        {/* Belge Türleri */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>
            {t?.services?.documentTypes ?? (lang === 'ru' ? 'Типы документов' : 'Belge Türleri')}
          </h3>
          <DocumentTypes lang={lang} />
        </div>
      </section>

      {/* Certifications & Education */}
      <section id="credentials" className="px-8 pb-12">
        <h2 className="text-2xl font-semibold">{t?.credentials?.title ?? 'Certifications & Education'}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="gradient-border glass-card relative p-6">
            <div className="card-blob" />
            <h3 className="text-base font-semibold">{t?.credentials?.certifications?.title ?? 'Certifications'}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {(t?.credentials?.certifications?.items ?? [
                "ATA Certified Translator (EN↔TR)",
                "SDL/Trados Advanced",
                "ISO 17100: Translation Services"
              ]).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(107,63,43,0.12)]" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="gradient-border glass-card relative p-6">
            <div className="card-blob" />
            <h3 className="text-base font-semibold">{t?.credentials?.education?.title ?? 'Education'}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {(t?.credentials?.education?.items ?? [
                "BA in Translation & Interpreting",
                "MA in Linguistics (in progress)",
                "Ongoing: Legal & Technical terminology workshops"
              ]).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact bölümü kaldırıldı; aşağıya yeni seçenekli sectionlar eklenebilir */}
      <FooterBar lang={lang} />
    </div>
  );
}


