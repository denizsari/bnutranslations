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
import { Globe, Award, Zap, FileCheck, FileText, ArrowRight } from "lucide-react";

export default function ModernLayout({ initialLang = "tr" }: { initialLang?: Locale }) {
  const [lang, setLang] = useState<Locale>(initialLang);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Modern Header - Business card inspired colors */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area - styled like the original design */}
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Navigation - Clean and minimal like the design */}
            <nav className="hidden md:flex items-center gap-10">
              <a href="#home" className="text-stone-700 hover:text-stone-900 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Anasayfa' : lang === 'ru' ? 'Главная' : 'HOME'}
              </a>
              <a href="#services" className="text-stone-700 hover:text-stone-900 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Hizmetler' : lang === 'ru' ? 'Услуги' : 'SERVICES'}
              </a>
              <a href="#process" className="text-stone-700 hover:text-stone-900 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'Yetkinlikler' : lang === 'ru' ? 'Сертификации' : 'ABOUT'}
              </a>
              <a href="#contact" className="text-stone-700 hover:text-stone-900 font-medium transition-colors text-lg">
                {lang === 'tr' ? 'İletişim' : lang === 'ru' ? 'Контакты' : 'CONTACT'}
              </a>
            </nav>

            {/* Right side - Language switcher and social icons */}
            <div className="flex items-center gap-6">
              {/* Language Switcher - business card style */}
              <div className="flex items-center gap-1 bg-stone-50 rounded-full p-1 border border-stone-200">
                <button 
                  onClick={() => setLang("tr")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'tr' 
                      ? 'bg-stone-800 text-white shadow-sm' 
                      : 'text-stone-600 hover:text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => setLang("en")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'en' 
                      ? 'bg-stone-800 text-white shadow-sm' 
                      : 'text-stone-600 hover:text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang("ru")}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    lang === 'ru' 
                      ? 'bg-stone-800 text-white shadow-sm' 
                      : 'text-stone-600 hover:text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  RU
                </button>
              </div>
              
              {/* Globe icon for international services */}
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-stone-600" />
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

        {/* Services Section - Modern and spacious design */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-stone-900 rounded-3xl mb-8">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                {lang === 'tr' ? 'Hizmetlerimiz' : lang === 'ru' ? 'Наши услуги' : 'Our Services'}
              </h2>
              <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                {lang === 'tr' 
                  ? 'Profesyonel çeviri ve noter tasdik hizmetleriyle belgelerinizi güvenilir şekilde işleme alıyoruz.'
                  : lang === 'ru' 
                  ? 'Мы профессионально обрабатываем ваши документы с помощью надежных переводческих и нотариальных услуг.'
                  : 'We professionally process your documents with reliable translation and notarization services.'
                }
              </p>
            </div>

            {/* Service Cards */}
            <div className="space-y-32">
              {/* Notarial Process Service */}
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="lg:pr-8">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center shadow-2xl">
                        <FileCheck className="w-12 h-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {lang === 'tr' ? 'Noter Tasdik Süreci' : lang === 'ru' ? 'Процесс нотариального заверения' : 'Notarial Certification Process'}
                        </h3>
                        <p className="text-xl text-slate-600 font-medium">
                          {lang === 'tr' ? 'Resmi Belge İşlemleri' : lang === 'ru' ? 'Официальные документы' : 'Official Document Processing'}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {lang === 'tr' 
                        ? 'Belgelerinizin resmi kurumlar tarafından kabul edilmesi için gerekli olan noter tasdik sürecini en hızlı ve güvenilir şekilde gerçekleştiriyoruz. Uzman ekibimiz her adımda yanınızda.'
                        : lang === 'ru' 
                        ? 'Мы осуществляем процесс нотариального заверения, необходимый для признания ваших документов официальными учреждениями, наиболее быстро и надежно. Наша экспертная команда с вами на каждом шагу.'
                        : 'We carry out the notarization process required for your documents to be accepted by official institutions in the fastest and most reliable way. Our expert team is with you every step of the way.'
                      }
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      {[
                        lang === 'tr' ? 'Hızlı İşlem' : lang === 'ru' ? 'Быстрая обработка' : 'Fast Processing',
                        lang === 'tr' ? 'Güvenli' : lang === 'ru' ? 'Безопасно' : 'Secure',
                        lang === 'tr' ? 'Resmi Onay' : lang === 'ru' ? 'Официальное одобрение' : 'Official Approval'
                      ].map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-slate-700 hover:shadow-xl hover:-translate-y-1">
                      {lang === 'tr' ? 'Detaylar' : lang === 'ru' ? 'Подробности' : 'Learn More'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 shadow-xl border border-slate-200">
                      <NotarialProcess lang={lang} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Types Service */}
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="lg:order-2 lg:pl-8">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl">
                        <FileText className="w-12 h-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {lang === 'tr' ? 'Belge Türleri' : lang === 'ru' ? 'Типы документов' : 'Document Types'}
                        </h3>
                        <p className="text-xl text-blue-600 font-medium">
                          {lang === 'tr' ? 'Çevirebileceğimiz Dökümanlar' : lang === 'ru' ? 'Документы для перевода' : 'Documents We Translate'}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {lang === 'tr' 
                        ? 'Kişisel belgelerden iş dökümanlarına, eğitim sertifikalarından hukuki belgelere kadar geniş bir yelpazede çeviri hizmeti sunuyoruz. Her belge türü için uzmanlaşmış ekibimiz mevcuttur.'
                        : lang === 'ru' 
                        ? 'Мы предоставляем услуги перевода в широком спектре от личных документов до деловых документов, от образовательных сертификатов до юридических документов. У нас есть специализированная команда для каждого типа документов.'
                        : 'We provide translation services in a wide range from personal documents to business documents, from educational certificates to legal documents. We have a specialized team for each document type.'
                      }
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      {[
                        lang === 'tr' ? '8+ Kategori' : lang === 'ru' ? '8+ категорий' : '8+ Categories',
                        lang === 'tr' ? 'Uzman Çeviri' : lang === 'ru' ? 'Экспертный перевод' : 'Expert Translation',
                        lang === 'tr' ? 'Kalite Garantisi' : lang === 'ru' ? 'Гарантия качества' : 'Quality Guarantee'
                      ].map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1">
                      {lang === 'tr' ? 'Tüm Türleri Gör' : lang === 'ru' ? 'Посмотреть все типы' : 'View All Types'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="lg:order-1 relative">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                      <DocumentTypes lang={lang} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Special Requirements CTA - Full Width Section */}
        <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-slate-600/10 to-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-blue-600/10 to-slate-600/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {lang === 'tr' ? 'Özel İhtiyaçlarınız mı Var?' : lang === 'ru' ? 'Есть особые потребности?' : 'Have Special Requirements?'}
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {lang === 'tr' 
                ? 'Listede olmayan belge türleri veya özel çeviri ihtiyaçlarınız için bizimle iletişime geçin.'
                : lang === 'ru' 
                ? 'Свяжитесь с нами для типов документов, не указанных в списке, или для особых переводческих потребностей.'
                : 'Contact us for document types not listed or for special translation needs.'
              }
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-slate-800 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-1">
              {lang === 'tr' ? 'Özel Teklif Al' : lang === 'ru' ? 'Получить специальное предложение' : 'Get Custom Quote'}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </section>

        {/* Contact CTA - Professional and elegant like the business card */}
        <section id="contact" className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700 text-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-stone-600/10 to-amber-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-amber-600/10 to-orange-600/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {lang === 'tr' ? 'Projenizi Başlatalım' : lang === 'ru' ? 'Начнём ваш проект' : 'Let\'s Start Your Project'}
            </h2>
            <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
              {lang === 'tr' 
                ? 'Çeviri ihtiyaçlarınız için hemen iletişime geçin. Uzman ekibimiz size yardımcı olmaya hazır.'
                : lang === 'ru' 
                ? 'Свяжитесь с нами для ваших переводческих потребностей. Наша экспертная команда готова помочь вам.'
                : 'Contact us for your translation needs. Our expert team is ready to help you.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-stone-100 hover:shadow-xl hover:-translate-y-1 shadow-lg">
                {lang === 'tr' ? 'İletişim' : lang === 'ru' ? 'Связаться' : 'Contact Us'}
              </button>
              <button className="inline-flex items-center justify-center gap-3 border border-stone-300/30 text-stone-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:shadow-xl backdrop-blur-sm">
                {lang === 'tr' ? 'Portfolio' : lang === 'ru' ? 'Портфолио' : 'View Portfolio'}
              </button>
            </div>
            
            {/* Contact info cards - business card inspired */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-stone-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-stone-100 mb-2">
                  {lang === 'tr' ? 'Dil Çiftleri' : lang === 'ru' ? 'Языковые пары' : 'Language Pairs'}
                </h3>
                <p className="text-sm text-stone-300">TR • EN • DE • FR • RU</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-stone-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-stone-100 mb-2">
                  {lang === 'tr' ? 'Sertifikalı' : lang === 'ru' ? 'Сертифицированный' : 'Certified'}
                </h3>
                <p className="text-sm text-stone-300">ATA • ISO 17100</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-stone-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-stone-100 mb-2">
                  {lang === 'tr' ? 'Hızlı Teslimat' : lang === 'ru' ? 'Быстрая доставка' : 'Fast Delivery'}
                </h3>
                <p className="text-sm text-stone-300">24-48 {lang === 'tr' ? 'saat' : lang === 'ru' ? 'часа' : 'hours'}</p>
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
