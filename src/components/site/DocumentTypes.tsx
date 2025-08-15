"use client";
import { useState, useEffect } from "react";
import { FileText, User, GraduationCap, Briefcase, Scale, Home, Heart, ScrollText, CreditCard } from "lucide-react";

interface DocumentCategory {
  title: string;
  items: string[];
}

interface DocumentTypesData {
  ru: Record<string, DocumentCategory>;
  tr: Record<string, DocumentCategory>;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  personal: User,
  education: GraduationCap,
  work: Briefcase,
  legal: Scale,
  property: Home,
  medical: Heart,
  inheritance: ScrollText,
  financial: CreditCard,
};

export default function DocumentTypes({ lang = "tr" }: { lang?: "tr" | "ru" | "en" }) {
  const [documentData, setDocumentData] = useState<DocumentTypesData | null>(null);

  useEffect(() => {
    // JSON dosyasından veri yükle
    fetch('/content/docx-content.json')
      .then(res => res.json())
      .then(data => setDocumentData(data.documentTypes))
      .catch(console.error);
  }, []);

  if (!documentData) return <div>Loading...</div>;

  const currentLang = lang === "ru" ? "ru" : "tr";
  const documents = documentData[currentLang];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(documents).map(([key, category]) => {
        const IconComponent = categoryIcons[key] || FileText;
        
        return (
          <div key={key} className="gradient-border glass-card relative p-5">
            <div className="card-blob opacity-30" />
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{category.title}</h4>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
