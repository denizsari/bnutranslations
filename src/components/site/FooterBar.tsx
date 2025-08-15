"use client";
import { useEffect, useState } from "react";
import Logo from "@/components/site/Logo";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";

export default function FooterBar({ lang = "tr" }: { lang?: Locale }) {
  const [t, setT] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    getDictionary(lang).then(setT);
  }, [lang]);

  if (!t) {
    // Loading state with default text
    return (
      <footer className="mt-24 bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-8 py-12 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 text-xs text-gray-600">Professional translation services with focus on quality and speed.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-xs text-gray-600">
              <li>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com'}</li>
              <li>Location: {process.env.NEXT_PUBLIC_LOCATION || 'Istanbul, Türkiye'}</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Links</div>
            <ul className="mt-2 space-y-1 text-xs text-gray-600">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#credentials" className="hover:text-primary">Credentials</a></li>
              <li><a href="#home" className="hover:text-primary">Back to top ↑</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 text-xs text-gray-500">
            <div>© {new Date().getFullYear()} bnutranslations — All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="mt-24 bg-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-[1200px] gap-8 px-8 py-12 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-xs text-gray-600">Professional translation services with focus on quality and speed.</p>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li>Email: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@example.com'}</li>
            <li>Location: {process.env.NEXT_PUBLIC_LOCATION || 'Istanbul, Türkiye'}</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Links</div>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#credentials" className="hover:text-primary">Credentials</a></li>
            <li><a href="#home" className="hover:text-primary">Back to top ↑</a></li>
          </ul>
        </div>
      </div>

      {/* Legal row */}
          <div className="border-t">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} bnutranslations — {t.footer.rights}</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">{t.footer.privacy}</a>
            <a href="#" className="hover:text-primary">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


