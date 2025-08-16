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
    <div className="grid gap-4 sm:grid-cols-2">
      {Object.entries(documents).slice(0, 4).map(([key, category]) => {
        const IconComponent = categoryIcons[key] || FileText;
        
        return (
          <div 
            key={key} 
            className="bg-white rounded-xl p-4 border border-stone-100 hover:border-stone-200 transition-all duration-200 hover:shadow-md group"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-stone-200 transition-colors duration-200">
                <IconComponent className="w-4 h-4 text-stone-600" />
              </div>
              <h3 className="font-semibold text-stone-800 text-sm">
                {category.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-2">
              {category.items.slice(0, 3).map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2 text-xs text-stone-600"
                >
                  <div className="w-1 h-1 rounded-full bg-stone-400 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
              {category.items.length > 3 && (
                <li className="text-xs text-stone-500 font-medium">
                  +{category.items.length - 3} {lang === 'tr' ? 'daha' : lang === 'ru' ? 'ещё' : 'more'}
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
