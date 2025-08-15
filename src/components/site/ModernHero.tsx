"use client";
import { useEffect, useState } from "react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";
import { ArrowRight, Globe, FileText, Award, Zap } from "lucide-react";
import Link from "next/link";

interface Dictionary {
  hero?: {
    tagline?: string;
    title?: string;
    subtitle?: string;
    cta?: string;
    features?: string[];
  };
  stats?: {
    projects?: string;
    languages?: string;
    satisfaction?: string;
    experience?: string;
  };
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function ModernHero({ lang = "tr" }: { lang?: Locale }) {
  const [t, setT] = useState<Dictionary | null>(null);

  useEffect(() => {
    getDictionary(lang).then(setT);
  }, [lang]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 bg-grid-16" />
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t?.hero?.tagline ?? "Professional Translation Services"}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                {t?.hero?.title?.split(' ').map((word, index) => (
                  <span key={index} className={index === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : ''}>
                    {word}{' '}
                  </span>
                )) ?? (
                  <>
                    Everything You{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      Need
                    </span>{' '}
                    to Translate
                  </>
                )}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {t?.hero?.subtitle ?? "Professional translation services with certified expertise, delivering accurate and culturally adapted content for your global success."}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1"
              >
                {t?.hero?.cta ?? "LET'S DO IT"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="inline-flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
                <Globe className="w-5 h-5" />
                View Portfolio
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {(t?.hero?.features ?? [
                "Certified Translations",
                "24/7 Support",
                "Fast Delivery",
                "Quality Guarantee"
              ]).map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    {index === 0 && <Award className="w-4 h-4 text-white" />}
                    {index === 1 && <Zap className="w-4 h-4 text-white" />}
                    {index === 2 && <ArrowRight className="w-4 h-4 text-white" />}
                    {index === 3 && <FileText className="w-4 h-4 text-white" />}
                  </div>
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-full min-h-[600px] flex items-center justify-center">
            {/* Main Card */}
            <div className="relative">
              <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl p-8 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4" />
                    <div className="h-3 bg-gray-200 rounded-full w-full" />
                    <div className="h-3 bg-gray-200 rounded-full w-5/6" />
                  </div>
                  
                  <div className="flex gap-2">
                    {["🇹🇷", "🇬🇧", "🇩🇪"].map((flag, index) => (
                      <div key={index} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">
                        {flag}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-full" />
                    <div className="text-xs text-gray-500">Translation Progress: 100%</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5★</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-16">
          {[
            { key: "projects", value: "500+", icon: FileText },
            { key: "languages", value: "15+", icon: Globe },
            { key: "satisfaction", value: "99%", icon: Award },
            { key: "experience", value: "8+", icon: Zap }
          ].map(({ key, value, icon: Icon }) => (
            <div key={key} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-sm text-gray-600">
                {t?.stats?.[key as keyof typeof t.stats] ?? key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
