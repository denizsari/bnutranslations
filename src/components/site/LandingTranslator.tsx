"use client";
import Image from "next/image";
import Socials from "@/components/site/Socials";
import Logo from "@/components/site/Logo";
import CVPreviewButton from "@/components/site/CVPreviewButton";
import { Mail, Cog, GraduationCap, FileText } from "lucide-react";
import ServiceItemCard from "@/components/site/ServiceItemCard";
import FooterBar from "@/components/site/FooterBar";
import ProcessStrip from "@/components/site/ProcessStrip";
import { useEffect, useState } from "react";
import { LOCATION } from "@/lib/constants";
import TypewriterTitle from "@/components/site/TypewriterTitle";
// 3D artık arkaplanda, sağ taraftaki kutu kaldırıldı

export default function LandingTranslator() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="blob blue -left-40 top-10 h-[420px] w-[420px]" />
      <div className="blob green -right-40 top-40 h-[420px] w-[420px]" />

      {/* Top bar */}
      <div className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur ${scrolled ? "bg-white/80 border-b border-white/50 shadow-sm" : "bg-white/50"}`}>
        <Logo />
        <nav className="hidden gap-8 text-sm font-semibold text-gray-700 md:flex" style={{fontFamily:'var(--font-display)'}}>
          <a href="#home" className="link-underline hover:text-primary">Home</a>
          <a href="#services" className="link-underline hover:text-primary">Services</a>
          <a href="#credentials" className="link-underline hover:text-primary">Credentials</a>
          <a href="#contact" className="link-underline hover:text-primary">Contact</a>
        </nav>
        <Socials />
      </div>

      {/* Hero */}
      <section id="home" className="hero-grad grid min-h-[70vh] items-center gap-10 px-8 pb-14 pt-4 md:grid-cols-2 md:pb-20 md:pt-10">
        <div>
          <TypewriterTitle />
          <p className="mt-3 max-w-2xl text-gray-700">Professional Translation Services for Technical, Academic, and Commercial Needs. Based in {LOCATION}.</p>
          <p className="mt-1 text-sm font-medium text-gray-500">Accurate. Fast. Confidential.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:translate-y-[-1px] hover:shadow-md">
              <span className="i-contact relative inline-block">
                <span className="absolute -left-3 top-1/2 hidden h-1 w-3 -translate-y-1/2 rounded bg-white/80 group-hover:block" />
              </span>
              <Mail className="h-4 w-4" />
              Contact
            </a>
            <CVPreviewButton />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700">
            {["🇹🇷 Turkish","🇬🇧 English","🇩🇪 German","🇫🇷 French","🇪🇸 Spanish","🇮🇹 Italian","🇳🇱 Dutch","🇸🇦 Arabic","🇷🇺 Russian","🇯🇵 Japanese"].map((l)=> (
              <li key={l} className="rounded-full border px-3 py-1 transition hover:scale-[1.03] hover:border-primary">{l}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block" />
      </section>

      {/* Services */}
      <section id="services" className="px-8 pb-20">
        <h2 className="text-2xl font-semibold">Services</h2>
        <ProcessStrip />
        <div className="mt-6 flex flex-col gap-6">
          <ServiceItemCard
            title="Technical Translation"
            description="Manuals, specifications, software docs."
            points={["Terminology consistency", "QA review", "Layout-preserving output", "Engineering-friendly delivery"]}
            icon={<Cog className="h-5 w-5" />}
          />
          <ServiceItemCard
            title="Academic Translation"
            description="Papers, theses and editing."
            points={["Citation style respect", "Language polishing", "Figures/tables included", "Confidential handling"]}
            icon={<GraduationCap className="h-5 w-5" />}
          />
          <ServiceItemCard
            title="Commercial Translation"
            description="Contracts, marketing and business."
            points={["Tone of voice", "Legal accuracy", "Glossary maintenance", "Fast turnaround"]}
            icon={<FileText className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* Certifications & Education */}
      <section id="credentials" className="px-8 pb-12">
        <h2 className="text-2xl font-semibold">Certifications & Education</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="gradient-border glass-card relative p-6">
            <div className="card-blob" />
            <h3 className="text-base font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>ATA Certified Translator (EN↔TR)</span></li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>SDL/Trados Advanced</span></li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>ISO 17100: Translation Services</span></li>
            </ul>
          </div>
          <div className="gradient-border glass-card relative p-6">
            <div className="card-blob" />
            <h3 className="text-base font-semibold">Education</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>BA in Translation & Interpreting</span></li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>MA in Linguistics (in progress)</span></li>
              <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-primary shadow-[0_0_0_3px_rgba(16,185,129,0.1)]" /> <span>Ongoing: Legal & Technical terminology workshops</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact bölümü kaldırıldı; aşağıya yeni seçenekli sectionlar eklenebilir */}
      <FooterBar />
    </div>
  );
}


