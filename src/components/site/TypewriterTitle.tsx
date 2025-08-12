"use client";
import { useEffect, useState } from "react";

type Props = {
  base?: string;
  words?: string[];
};

export default function TypewriterTitle({
  base = "Professional Translation",
  words = [
    "Terminology",
    "Timely Delivery",
    "Technical Editing & QA",
    "Trust & Confidentiality",
    "Localization",
  ],
}: Props) {
  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const maxLen = Math.max(...words.map((w) => w.length));
  const [reserveCh, setReserveCh] = useState<number | null>(null);

  // Reserve width only on md and above to avoid mobile overflow
  useEffect(() => {
    const calc = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setReserveCh(maxLen + 1);
      } else {
        setReserveCh(null);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [maxLen]);

  useEffect(() => {
    const current = words[wordIdx % words.length];

    if (phase === "typing") {
      if (typed.length === current.length) {
        setPhase("pausing");
        return;
      }
      const t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 150);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (typed.length === 0) {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 70);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 1400);
      return () => clearTimeout(t);
    }
  }, [typed, wordIdx, phase, words]);

  return (
    <h1
      className="break-words text-4xl font-black leading-tight md:text-6xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {base} 
      <span className="relative inline-block align-middle md:align-baseline" style={reserveCh ? { minWidth: `${reserveCh}ch` } : undefined}>
        <span className="text-primary">{typed}</span>
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary align-middle" />
      </span>
    </h1>
  );
}


