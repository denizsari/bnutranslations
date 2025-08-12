export default function MorphBlob() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[320px] items-center justify-center overflow-hidden rounded-2xl border bg-white/60 shadow-xl">
      <div className="h-56 w-56 animate-[morph_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_30%_30%,#10B981,transparent_60%),radial-gradient(circle_at_70%_70%,#1E40AF,transparent_60%)]" />
    </div>
  );
}


