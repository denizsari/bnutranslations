"use client";
import { ClipboardList, Plane, FileCheck, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";

const stepIcons = [ClipboardList, Plane, FileCheck, Send];
const stepKeys = ['brief', 'quote', 'translate', 'deliver'];

interface Dictionary {
  process: {
    [key: string]: {
      title: string;
      desc: string;
    };
  };
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function ProcessStrip({ lang = "tr" }: { lang?: Locale }) {
  const [t, setT] = useState<Dictionary | null>(null);

  useEffect(() => {
    getDictionary(lang).then(setT);
  }, [lang]);

  if (!t) {
    return (
      <div className="mt-8 rounded-2xl border bg-white p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stepIcons.map((Icon, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Loading...</div>
                <div className="text-xs text-gray-600">...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border bg-white p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stepKeys.map((stepKey, index) => {
          const Icon = stepIcons[index];
          const step = t.process?.[stepKey];
          
          return (
            <div key={stepKey} className="flex items-start gap-3">
              <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">{step?.title || stepKey}</div>
                <div className="text-xs text-gray-600">{step?.desc || '...'}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


