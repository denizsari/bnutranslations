"use client";
export default function StackPapers() {
  const items = ["Contract.pdf","Manual.docx","Thesis.pdf","Marketing.txt"];
  return (
    <div className="relative mx-auto flex h-[420px] w-[320px] items-center justify-center overflow-hidden rounded-2xl border bg-white shadow-xl">
      <div className="relative h-56 w-40">
        {items.map((n, i) => (
          <div key={n} className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-md border bg-white p-2 text-center text-[10px] font-medium text-gray-600 shadow transition hover:-translate-y-[calc(50%+4px)]" style={{ transform: `translate(-50%, -50%) rotate(${(i-1.5)*6}deg)` }}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}


