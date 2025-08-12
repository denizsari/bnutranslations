export default function HexPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 800 300" aria-hidden>
      <defs>
        <pattern id="hex" width="40" height="34.64" patternUnits="userSpaceOnUse" patternTransform="translate(0,0)">
          <path d="M10 0 L30 0 L40 17.32 L30 34.64 L10 34.64 L0 17.32 Z" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="800" height="300" fill="url(#hex)" />
    </svg>
  );
}


