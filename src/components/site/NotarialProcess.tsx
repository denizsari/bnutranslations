"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

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

  return (
    <div className="gradient-border glass-card relative p-6">
      <div className="card-blob" />
      <h3 className="text-xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>
        {process.title}
      </h3>
      <div className="space-y-4">
        {process.steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
