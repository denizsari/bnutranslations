"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Çevirmen
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="secondary">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
              aria-label="WhatsApp ile iletişime geç"
            >
              <Phone className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
          <Button asChild>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="E-posta gönder">
              <Mail className="mr-2 h-4 w-4" /> E-posta
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menüyü aç">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menü</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-gray-800 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2">
                  <Button asChild variant="secondary" className="flex-1">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
                      aria-label="WhatsApp ile iletişime geç"
                    >
                      <Phone className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <a href={`mailto:${CONTACT_EMAIL}`} aria-label="E-posta gönder">
                      <Mail className="mr-2 h-4 w-4" /> E-posta
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


