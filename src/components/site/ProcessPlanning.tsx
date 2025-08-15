"use client";
import { useEffect, useState } from "react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";
import { 
  Target, 
  PenTool, 
  Cog, 
  TrendingUp, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface Dictionary {
  projectPlanning?: {
    title?: string;
    subtitle?: string;
    phases?: {
      initiation?: {
        title?: string;
        steps?: string[];
      };
      planning?: {
        title?: string;
        steps?: string[];
      };
      execution?: {
        title?: string;
        steps?: string[];
      };
      monitoring?: {
        title?: string;
        steps?: string[];
      };
      closing?: {
        title?: string;
        steps?: string[];
      };
    };
  };
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function ProcessPlanning({ lang = "tr" }: { lang?: Locale }) {
  const [t, setT] = useState<Dictionary | null>(null);

  useEffect(() => {
    getDictionary(lang).then(setT);
  }, [lang]);

  const phases = [
    {
      id: "initiation",
      title: t?.projectPlanning?.phases?.initiation?.title ?? "Project Initiation",
      icon: Target,
      color: "from-amber-500 to-orange-500",
      steps: t?.projectPlanning?.phases?.initiation?.steps ?? [
        "Define project goals",
        "Create a business case",
        "Complete the project charter",
        "Crew up the list of stakeholders"
      ]
    },
    {
      id: "planning", 
      title: t?.projectPlanning?.phases?.planning?.title ?? "Project Planning",
      icon: PenTool,
      color: "from-orange-500 to-red-500",
      steps: t?.projectPlanning?.phases?.planning?.steps ?? [
        "Define scope",
        "Create a project plan",
        "Build budget",
        "Deadline",
        "Define roles and responsibilities"
      ]
    },
    {
      id: "execution",
      title: t?.projectPlanning?.phases?.execution?.title ?? "Project Execution", 
      icon: Cog,
      color: "from-red-500 to-pink-500",
      steps: t?.projectPlanning?.phases?.execution?.steps ?? [
        "Allocate project resources",
        "Manage project team",
        "Build the product or service",
        "Meet often and fix issues as they rise"
      ]
    },
    {
      id: "monitoring",
      title: t?.projectPlanning?.phases?.monitoring?.title ?? "Monitoring and Controlling",
      icon: TrendingUp,
      color: "from-pink-500 to-purple-500", 
      steps: t?.projectPlanning?.phases?.monitoring?.steps ?? [
        "Track effort and cost",
        "Manage project schedule",
        "Ensure adherence to plan",
        "Prevent any chance for disruptions"
      ]
    },
    {
      id: "closing",
      title: t?.projectPlanning?.phases?.closing?.title ?? "Project Closing",
      icon: CheckCircle,
      color: "from-purple-500 to-indigo-500",
      steps: t?.projectPlanning?.phases?.closing?.steps ?? [
        "Handover deliverables",
        "Release project team",
        "Get project results approved",
        "Document project learnings"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements - Warmer tones inspired by the design */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-orange-50/30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t?.projectPlanning?.title ?? "Project Planning"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t?.projectPlanning?.subtitle ?? "A comprehensive approach to managing translation projects from inception to delivery, ensuring quality and timely completion."}
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 to-purple-200" />
          
          {/* Phase Cards */}
          <div className="grid lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={phase.id} className="relative">
                  {/* Phase Number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border-2 border-gray-200 animate-pulse" />
                    </div>
                  </div>

                  {/* Phase Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">{phase.title}</h3>
                    </div>

                    {/* Steps */}
                    <ul className="space-y-3">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="group-hover:text-gray-900 transition-colors">{step}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Arrow for mobile */}
                    {index < phases.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowRight className="w-6 h-6 text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <span className="font-semibold">
              {lang === 'tr' ? 'Projenizi Başlatalım' : lang === 'ru' ? 'Начнём проект сегодня' : 'Start Your Project Today'}
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
