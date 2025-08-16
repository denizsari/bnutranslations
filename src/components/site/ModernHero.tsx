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
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-stone-200/20 to-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
        {/* Subtle curved lines */}
        <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,60 600,80 1200,40 L1200,120 Z" fill="rgba(120, 113, 108, 0.05)"/>
        </svg>
        <svg className="absolute top-0 right-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,0 C900,60 600,40 0,80 L0,0 Z" fill="rgba(168, 162, 158, 0.05)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-stone-200 rounded-full text-sm font-medium text-stone-700 shadow-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {t?.hero?.tagline ?? "IT'S TIME TO LEARN"}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                {t?.hero?.title?.split(' ').slice(0, 3).join(' ')}<br />
                <span className="text-stone-700">
                  {t?.hero?.title?.split(' ').slice(3).join(' ')}
                </span>
                {!t?.hero?.title && (
                  <>
                    Everything You<br />
                    <span className="text-stone-700">Need to Translate</span>
                  </>
                )}
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                {t?.hero?.subtitle ?? "Professional translation services with certified expertise, delivering accurate and culturally adapted content for your global success."}
              </p>
            </div>

            {/* CTA Button - Inspired by business card colors */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-stone-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-stone-900 hover:shadow-xl hover:-translate-y-1 shadow-lg"
              >
                {t?.hero?.cta ?? "LET'S DO IT"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual inspired by the design */}
          <div className="relative lg:h-full min-h-[600px] flex items-center justify-center">
            {/* Main working person illustration area */}
            <div className="relative w-full max-w-lg">
              {/* Main workspace card - Business card inspired */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-stone-200">
                {/* Header with person info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-stone-700 to-stone-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">BT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Meet Your Translator</h3>
                    <p className="text-sm text-stone-600">Certified Translation Expert</p>
                  </div>
                </div>
                
                {/* Translation workspace */}
                <div className="space-y-4">
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-stone-600">Current Project</span>
                      <div className="flex items-center gap-1 text-green-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs font-medium">Active</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-stone-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full w-4/5"></div>
                      </div>
                      <p className="text-xs text-stone-500">Legal Document Translation • 85% Complete</p>
                    </div>
                  </div>
                  
                  {/* Language pairs */}
                  <div className="flex gap-2 justify-center">
                    <div className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium border border-stone-200">EN</div>
                    <ArrowRight className="w-4 h-4 text-stone-400 self-center" />
                    <div className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium border border-stone-200">TR</div>
                  </div>
                </div>
              </div>

              {/* Floating stats cards - More subtle colors */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-stone-200 animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-700 mb-1">500+</div>
                  <div className="text-xs text-stone-600">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-stone-200">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-stone-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Certified</div>
                    <div className="text-xs text-stone-500">ATA Member</div>
                  </div>
                </div>
              </div>

              {/* Small floating language indicators */}
              <div className="absolute top-1/3 -left-4 bg-white rounded-xl shadow-lg p-2 border border-stone-200">
                <div className="flex gap-1">
                  {["🇹🇷", "🇬🇧", "🇩🇪"].map((flag, i) => (
                    <span key={i} className="text-sm">{flag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats section with business card inspired design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-16 border-t border-stone-200">
          {[
            { key: "projects", value: "500+", label: "Completed Projects", icon: FileText },
            { key: "languages", value: "15+", label: "Language Pairs", icon: Globe },
            { key: "satisfaction", value: "99%", label: "Client Satisfaction", icon: Award },
            { key: "experience", value: "8+", label: "Years Experience", icon: Zap }
          ].map(({ key, value, label, icon: Icon }) => (
            <div key={key} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
              <div className="text-sm text-stone-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
