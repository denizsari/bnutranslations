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
import { Globe, Award, Zap } from "lucide-react";

export default function ModernLayout({ initialLang = "tr" }: { initialLang?: Locale }) {
  const [lang, setLang] = useState<Locale>(initialLang);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Modern Header - Inspired by the design */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area - styled like the original design */}
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Navigation - Clean and minimal like the design */}
            <nav className="hidden md:flex items-center gap-10">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Anasayfa' : lang === 'ru' ? 'Главная' : 'HOME'}
              </a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Hizmetler' : lang === 'ru' ? 'Услуги' : 'SERVICES'}
              </a>
              <a href="#process" className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Yetkinlikler' : lang === 'ru' ? 'Сертификации' : 'ABOUT'}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'İletişim' : lang === 'ru' ? 'Контакты' : 'CONTACT'}
              </a>
            </nav>

            {/* Right side - Language switcher and social icons */}
            <div className="flex items-center gap-6">
              {/* Language Switcher - styled like the original */}
              <div className="flex items-center gap-1 bg-amber-50 rounded-full p-1 border border-amber-200">
                <button 
                  onClick={() => setLang("tr")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'tr' 
                      ? 'bg-amber-600 text-white shadow-sm' 
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => setLang("en")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'en' 
                      ? 'bg-amber-600 text-white shadow-sm' 
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang("ru")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'ru' 
                      ? 'bg-amber-600 text-white shadow-sm' 
                      : 'text-amber-700 hover:text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  RU
                </button>
              </div>
              
              {/* Globe icon for international services */}
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-amber-600" />
                <Socials />
              </div>
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

        {/* Services Section - Inspired by the warm, professional look */}
        <section id="services" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {lang === 'tr' ? 'Noter Tasdik Süreci' : lang === 'ru' ? 'Процесс нотариального заверения' : 'Notarial Certification Process'}
                    </h3>
                    <p className="text-amber-600 text-sm font-medium">
                      {lang === 'tr' ? 'Resmi Belge İşlemleri' : lang === 'ru' ? 'Официальные документы' : 'Official Document Processing'}
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50/50 rounded-2xl p-6">
                  <NotarialProcess lang={lang} />
                </div>
              </div>

              {/* Document Types */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {lang === 'tr' ? 'Belge Türleri' : lang === 'ru' ? 'Типы документов' : 'Document Types'}
                    </h3>
                    <p className="text-orange-600 text-sm font-medium">
                      {lang === 'tr' ? 'Çevirebileceğimiz Dökümanlar' : lang === 'ru' ? 'Документы для перевода' : 'Documents We Translate'}
                    </p>
                  </div>
                </div>
                <div className="bg-orange-50/50 rounded-2xl p-6">
                  <DocumentTypes lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Professional and warm like the design */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-red-400/10 to-pink-400/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {lang === 'tr' ? 'Projenizi Başlatalım' : lang === 'ru' ? 'Начнём ваш проект' : 'Let\'s Start Your Project'}
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              {lang === 'tr' 
                ? 'Çeviri ihtiyaçlarınız için hemen iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır.'
                : lang === 'ru' 
                ? 'Свяжитесь с нами для ваших переводческих потребностей. Наша экспертная команда готова помочь вам.'
                : 'Contact us for your translation needs. Our expert team is ready to help you.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-amber-500 hover:shadow-xl hover:-translate-y-1 shadow-lg">
                {lang === 'tr' ? 'İletişim' : lang === 'ru' ? 'Связаться' : 'Contact Us'}
              </button>
              <button className="inline-flex items-center justify-center gap-3 border border-amber-300/30 text-amber-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-amber-600/20 hover:shadow-xl backdrop-blur-sm">
                {lang === 'tr' ? 'Portfolio' : lang === 'ru' ? 'Портфолио' : 'View Portfolio'}
              </button>
            </div>
            
            {/* Contact info cards - inspired by the floating cards in the design */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-amber-100 mb-2">
                  {lang === 'tr' ? 'Dil Çiftleri' : lang === 'ru' ? 'Языковые пары' : 'Language Pairs'}
                </h3>
                <p className="text-sm text-gray-300">TR • EN • DE • FR • RU</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-amber-100 mb-2">
                  {lang === 'tr' ? 'Sertifikalı' : lang === 'ru' ? 'Сертифицированный' : 'Certified'}
                </h3>
                <p className="text-sm text-gray-300">ATA • ISO 17100</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-amber-100 mb-2">
                  {lang === 'tr' ? 'Hızlı Teslimat' : lang === 'ru' ? 'Быстрая доставка' : 'Fast Delivery'}
                </h3>
                <p className="text-sm text-gray-300">24-48 {lang === 'tr' ? 'saat' : lang === 'ru' ? 'часа' : 'hours'}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterBar lang={lang} />
    </div>
  );
}
