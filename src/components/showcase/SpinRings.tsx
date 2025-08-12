export default function SpinRings() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[320px] items-center justify-center overflow-hidden rounded-2xl border bg-white/70 shadow-xl">
      <div className="relative grid place-items-center">
        <div className="h-48 w-48 animate-[spin_16s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#10B981_0_25%,transparent_25_100%)]"></div>
        <div className="absolute h-32 w-32 animate-[spin_12s_linear_infinite_reverse] rounded-full bg-[conic-gradient(from_0deg,#1E40AF_0_25%,transparent_25_100%)]"></div>
        <div className="absolute h-20 w-20 animate-[spin_9s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#93C5FD_0_25%,transparent_25_100%)]"></div>
      </div>
    </div>
  );
}


