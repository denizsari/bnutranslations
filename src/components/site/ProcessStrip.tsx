import { ClipboardList, Plane, FileCheck, Send } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Brief", desc: "Scope, files and deadline" },
  { icon: Plane, title: "Quote", desc: "Transparent pricing & ETA" },
  { icon: FileCheck, title: "Translate", desc: "Terminology + QA review" },
  { icon: Send, title: "Deliver", desc: "On‑time handover" },
];

export default function ProcessStrip() {
  return (
    <div className="mt-8 rounded-2xl border bg-white p-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs text-gray-600">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


