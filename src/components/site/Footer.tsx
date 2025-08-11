import Link from "next/link";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold">Çevirmen</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Profesyonel çeviri hizmetleri: teknik, akademik, ticari ve edebi.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold">İletişim</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
                  target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Sosyal</h3>
            <div className="mt-2 flex gap-3 text-muted-foreground">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Çevirmen. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}


