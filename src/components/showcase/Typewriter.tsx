"use client";
import { useEffect, useState } from "react";

const words = ["precision","quality","speed","confidentiality","clarity"];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [pos, setPos] = useState(0);
  const [dir, setDir] = useState<"write" | "erase">("write");

  useEffect(() => {
    const timer = setTimeout(() => {
      const w = words[wi % words.length];
      if (dir === "write") {
        const next = w.slice(0, pos + 1);
        setText(next);
        setPos(pos + 1);
        if (next === w) setDir("erase");
      } else {
        const next = w.slice(0, pos - 1);
        setText(next);
        setPos(pos - 1);
        if (next === "") { setDir("write"); setWi(wi + 1); }
      }
    }, dir === "write" ? 90 : 40);
    return () => clearTimeout(timer);
  }, [pos, dir, wi]);

  return (
    <div className="relative mx-auto flex h-[420px] w-[320px] items-center justify-center overflow-hidden rounded-2xl border bg-white/70 shadow-xl">
      <div className="text-center">
        <div className="text-xs uppercase tracking-widest text-gray-500">bnutranslations</div>
        <div className="mt-2 text-2xl font-extrabold">
          we deliver <span className="text-primary">{text}</span>
          <span className="ml-0.5 inline-block h-6 w-[2px] animate-pulse bg-primary align-middle" />
        </div>
      </div>
    </div>
  );
}


