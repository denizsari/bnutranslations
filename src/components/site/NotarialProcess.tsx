"use client";
import { useState, useEffect } from "react";
import { CheckCircle, FileText, Clock, CheckSquare, Award, Send } from "lucide-react";

interface ProcessStep {
  title: string;
  steps: string[];
}

interface NotarialProcessData {
  ru: ProcessStep;
  tr: ProcessStep;
}

export default function NotarialProcess({ lang = "tr" }: { lang?: "tr" | "ru" | "en" }) {
  const [processData, setProcessData] = useState<NotarialProcessData | null>(null);

  useEffect(() => {
    // JSON dosyasından veri yükle
    fetch('/content/docx-content.json')
      .then(res => res.json())
      .then(data => setProcessData(data.notarialProcess))
      .catch(console.error);
  }, []);

  if (!processData) return <div>Loading...</div>;

  const currentLang = lang === "ru" ? "ru" : "tr";
  const process = processData[currentLang];

  // Her adım için ikon tanımla
  const stepIcons = [FileText, Clock, CheckSquare, Award, Send];

  return (
    <div className="space-y-6">
      {/* Process Steps */}
      <div className="grid gap-4">
        {process.steps.map((step, index) => {
          const Icon = stepIcons[index] || CheckCircle;
          return (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 hover:border-stone-200 transition-colors duration-200"
            >
              {/* Step Number */}
              <div className="w-10 h-10 bg-stone-800 text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-stone-600" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-stone-800 font-medium text-sm leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
