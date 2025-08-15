"use client";
import { useState } from "react";
import ModernHero from "@/components/site/ModernHero";
import ProcessPlanning from "@/components/site/ProcessPlanning";
import NotarialProcess from "@/components/site/NotarialProcess";
import DocumentTypes from "@/components/site/DocumentTypes";
import FooterBar from "@/components/site/FooterBar";
import Logo from "@/components/site/Logo";
import Socials from "@/components/site/Socials";
import type { Locale } from "@/i18n/locales";
import { Globe } from "lucide-react";

export default function ModernLayout({ initialLang = "tr" }: { initialLang?: Locale }) {
  const [lang, setLang] = useState<Locale>(initialLang);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Ana Sayfa
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Hizmetler
              </a>
              <a href="#process" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Süreç
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                İletişim
              </a>
            </nav>

            {/* Language Switcher & Social */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                <button 
                  onClick={() => setLang("tr")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                    lang === 'tr' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                    lang === 'en' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang("ru")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                    lang === 'ru' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  RU
                </button>
              </div>
              <Socials />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <ModernHero lang={lang} />
        </section>

        {/* Project Planning Process */}
        <section id="process">
          <ProcessPlanning lang={lang} />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {lang === 'tr' ? 'Hizmetlerimiz' : lang === 'ru' ? 'Наши услуги' : 'Our Services'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {lang === 'tr' 
                  ? 'Profesyonel çeviri hizmetleri ile belgelerinizi güvenilir şekilde işleme alıyoruz.'
                  : lang === 'ru' 
                  ? 'Мы профессионально обрабатываем ваши документы с помощью надежных переводческих услуг.'
                  : 'We professionally process your documents with reliable translation services.'
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Notarial Process */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {lang === 'tr' ? 'Noter Tasdik Süreci' : lang === 'ru' ? 'Процесс нотариального заверения' : 'Notarial Certification Process'}
                  </h3>
                </div>
                <NotarialProcess lang={lang} />
              </div>

              {/* Document Types */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {lang === 'tr' ? 'Belge Türleri' : lang === 'ru' ? 'Типы документов' : 'Document Types'}
                  </h3>
                </div>
                <DocumentTypes lang={lang} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {lang === 'tr' ? 'Projenizi Başlatalım' : lang === 'ru' ? 'Начнём ваш проект' : 'Let\'s Start Your Project'}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {lang === 'tr' 
                ? 'Çeviri ihtiyaçlarınız için hemen iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır.'
                : lang === 'ru' 
                ? 'Свяжитесь с нами для ваших переводческих потребностей. Наша экспертная команда готова помочь вам.'
                : 'Contact us for your translation needs. Our expert team is ready to help you.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1">
                {lang === 'tr' ? 'İletişim' : lang === 'ru' ? 'Связаться' : 'Contact Us'}
              </button>
              <button className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
                {lang === 'tr' ? 'Portfolio' : lang === 'ru' ? 'Портфолио' : 'Portfolio'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterBar lang={lang} />
    </div>
  );
}
