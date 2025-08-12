"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Socials from "@/components/site/Socials";
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="rounded-xl bg-white/60 px-3 py-1 text-lg font-semibold text-primary shadow-sm backdrop-blur">
          Çevirmen
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-gray-700 transition hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Socials className="hidden md:flex" />

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
                <Socials className="mt-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


