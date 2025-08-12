"use client";
type Props = {
  className?: string;
  words?: string[];
};

const DEFAULT_WORDS = [
  "Motion",
  "Essence",
  "Memories",
  "Emotion",
  "Direction",
  "Quality",
  "Precision",
  "Speed",
  "Confidentiality",
];

export default function TextScroller({ className = "", words = DEFAULT_WORDS }: Props) {
  const list = [...words, ...words];
  const blurPattern = [8, 6, 4, 3, 2, 3, 4, 6, 8];

  return (
    <div className={`text-scroller text-scroller-persp text-scroller-oval relative mx-auto h-[420px] w-[320px] overflow-hidden ${className}`}>
      <div className="text-scroller-track absolute inset-0 px-6 py-6">
        {list.map((w, idx) => {
          const b = blurPattern[idx % blurPattern.length];
          const opacity = b >= 6 ? 0.35 : b >= 4 ? 0.55 : b >= 2 ? 0.75 : 0.9;
          return (
            <div
              key={idx}
              className="ts-item select-none font-extrabold tracking-tight"
              style={{ filter: `blur(${b}px)`, opacity, fontFamily: 'var(--font-display)' }}
            >
              {w}
            </div>
          );
        })}
      </div>
    </div>
  );
}


